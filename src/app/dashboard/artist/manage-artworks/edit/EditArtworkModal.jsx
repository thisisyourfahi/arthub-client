"use client";

import { useRef, useState } from "react";
import {
    Button,
    Input,
    Label,
    Modal,
    TextArea,
    TextField,
    NumberField,
    Select,
    ListBox,
    Form,
    Spinner,
    toast,
} from "@heroui/react";
import { Paperclip, Pencil, TrashBin } from "@gravity-ui/icons";
import Image from "next/image";
import { updateArtwork } from "@/lib/actions/artworks";
import { useRouter } from "next/navigation";

const CATEGORIES = [
    { id: "painting", name: "Painting" },
    { id: "sculpture", name: "Sculpture" },
    { id: "digital-art", name: "Digital Art" },
    { id: "photography", name: "Photography" },
    { id: "illustration", name: "Illustration" },
    { id: "printmaking", name: "Printmaking" },
    { id: "mixed-media", name: "Mixed Media" },
    { id: "other", name: "Other" },
];

const EditArtworkModal = ({ art }) => {
    const router = useRouter();
    const fileInputRef = useRef(null);
    const [errors, setErrors] = useState({});
    const [imageUrl, setImageUrl] = useState(art.imageUrl);
    const [isUploading, setIsUploading] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    const handleImageUpload = async (e) => {
        const file = e.target.files[0];
        if (!file) return;

        if (file.size > 5 * 1024 * 1024) {
            setErrors((prev) => ({ ...prev, image: "File size exceeds 5MB limit" }));
            return;
        }

        setIsUploading(true);
        const formData = new FormData();
        formData.append("image", file);

        try {
            const IMGBB_API_KEY = process.env.NEXT_PUBLIC_IMAGE_UPLOAD_API;
            const response = await fetch(`https://api.imgbb.com/1/upload?key=${IMGBB_API_KEY}`, {
                method: "POST",
                body: formData,
            });
            const data = await response.json();

            if (data.success) {
                setImageUrl(data.data.url);
                setErrors((prev) => ({ ...prev, image: null }));
            } else {
                setErrors((prev) => ({ ...prev, image: "Upload failed. Try again." }));
            }
        } catch (err) {
            setErrors((prev) => ({ ...prev, image: "Network error during image upload" }));
        } finally {
            setIsUploading(false);
        }
    };

    const [category, setCategory] = useState(art.category);
    const labelClass = "text-[#D8A33D]";

    const handleRemoveImage = () => {
        setImageUrl(null);
        setErrors((prev) => ({ ...prev, image: null }));
        if (fileInputRef.current) fileInputRef.current.value = "";
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        const formInfo = Object.fromEntries(formData.entries());

        const updatedArtwork = {
            ...formInfo,
            imageUrl: imageUrl || '',
            artistId: art?.artistId,
            status: 'Available'
        }
        console.log(updatedArtwork);
        // handle patching 
        const res = await updateArtwork(art._id, updatedArtwork);
        if (res.acknowledged) {
            toast.success('Artwork has been updated!');
            setIsOpen(false)
            router.refresh();
        } else {
            toast.danger('Something went wrong. Please try again.')
        }

    };

    return (
        <Modal isOpen={isOpen} onOpenChange={setIsOpen}>
            <Button variant="flat">
                <Pencil />
            </Button>

            <Modal.Backdrop>
                <Modal.Container placement="auto">
                    <Modal.Dialog className="sm:max-w-2xl">
                        <Modal.CloseTrigger />

                        <Modal.Header className={labelClass}>
                            <Modal.Heading className={labelClass}>Edit Artwork</Modal.Heading>

                            <p className="text-sm mt-1">
                                Update your artwork information.
                            </p>
                        </Modal.Header>

                        <Modal.Body>
                            <Form
                                id="edit-artwork-form"
                                onSubmit={handleSubmit}
                                className="flex flex-col gap-6"
                            >
                                <TextField
                                    isRequired
                                    name="title"
                                    defaultValue={art.title}
                                >
                                    <Label className={labelClass}>Title</Label>
                                    <Input placeholder="Enter artwork title" />
                                </TextField>

                                <TextField
                                    name="description"
                                    defaultValue={art.description}
                                >
                                    <Label className={labelClass}>Description</Label>
                                    <TextArea placeholder="Describe the artwork" />
                                </TextField>

                                <NumberField
                                    isRequired
                                    name="price"
                                    defaultValue={Number(art.price)}
                                    minValue={0}
                                    formatOptions={{
                                        style: "currency",
                                        currency: "USD",
                                    }}
                                >
                                    <Label className={labelClass}>Price</Label>

                                    <NumberField.Group>
                                        <NumberField.DecrementButton />
                                        <NumberField.Input />
                                        <NumberField.IncrementButton />
                                    </NumberField.Group>
                                </NumberField>

                                <Select
                                    isRequired
                                    name="category"
                                    defaultSelectedKey={art.category}
                                >
                                    <Label className={labelClass}>Category</Label>

                                    <Select.Trigger>
                                        <Select.Value />
                                        <Select.Indicator />
                                    </Select.Trigger>

                                    <Select.Popover>
                                        <ListBox>
                                            {CATEGORIES.map((cat) => (
                                                <ListBox.Item
                                                    key={cat.id}
                                                    id={cat.id}
                                                    textValue={cat.name}
                                                >
                                                    {cat.name}
                                                    <ListBox.ItemIndicator />
                                                </ListBox.Item>
                                            ))}
                                        </ListBox>
                                    </Select.Popover>
                                </Select>

                                {/* Existing image preview */}
                                <div className="flex flex-col gap-1">
                                    <span className={labelClass}>Artwork Image</span>

                                    <input
                                        ref={fileInputRef}
                                        type="file"
                                        accept="image/*"
                                        onChange={handleImageUpload}
                                        className="hidden"
                                    />

                                    {imageUrl ? (
                                        <div className="flex justify-between items-center gap-3 rounded-xl border border-white/6 bg-[#1c1c1e] p-3">
                                            <Image width={64} height={64} src={imageUrl} alt="Artwork preview" className="rounded-md object-cover" />
                                            <Button variant="ghost" size="sm" isIconOnly onPress={handleRemoveImage}>
                                                <TrashBin />
                                            </Button>
                                        </div>
                                    ) : (
                                        <Button
                                            variant="outline"
                                            isPending={isUploading}
                                            onPress={() => fileInputRef.current?.click()}
                                        >
                                            {isUploading ? <Spinner size="sm" /> : <Paperclip />}
                                            {isUploading ? "Uploading..." : "Upload Image"}
                                        </Button>
                                    )}

                                    {errors.image && <p className="text-sm text-danger">{errors.image}</p>}
                                </div>
                            </Form>
                        </Modal.Body>

                        <Modal.Footer>
                            <Button slot="close" variant="secondary">
                                Cancel
                            </Button>

                            <Button
                                type="submit"
                                form="edit-artwork-form"
                                className={labelClass}
                            >
                                Save Changes
                            </Button>
                        </Modal.Footer>
                    </Modal.Dialog>
                </Modal.Container>
            </Modal.Backdrop>
        </Modal>
    );
};

export default EditArtworkModal;