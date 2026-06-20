"use client";

import { useRef, useState } from "react";
import {
    Button,
    Description,
    FieldError,
    Input,
    Label,
    ListBox,
    NumberField,
    Select,
    Spinner,
    TextArea,
    TextField,
} from "@heroui/react";
import { Paperclip, TrashBin } from "@gravity-ui/icons";
import { getUserSession } from "@/lib/core/session";
import Image from "next/image";

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

const labelClass = "text-[#D8A33D]";

const AddArtworkForm = ({ user }) => {
    const fileInputRef = useRef(null);

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState(undefined);
    const [category, setCategory] = useState(null);

    const [imageUrl, setImageUrl] = useState(null);
    const [isUploading, setIsUploading] = useState(false);
    const [errors, setErrors] = useState({});

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

    const handleRemoveImage = () => {
        setImageUrl(null);
        setErrors((prev) => ({ ...prev, image: null }));
        if (fileInputRef.current) fileInputRef.current.value = "";
    };

    const handleReset = () => {
        setTitle("");
        setDescription("");
        setPrice(undefined);
        setCategory(null);
        setImageUrl(null);
        setErrors({});
        if (fileInputRef.current) fileInputRef.current.value = "";
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget)
        const formInfo = Object.fromEntries(formData.entries());
        const newArtworkData = {
            ...formInfo,
            imageUrl: imageUrl,
            artistId: user?.id,
            status: 'Available'
        }
        console.log('with url:', newArtworkData)
    };

    return (
        <form onSubmit={handleSubmit} className="flex w-full max-w-xl mx-auto flex-col gap-6">
            <TextField isRequired name="title" value={title} onChange={setTitle}>
                <Label className={labelClass}>Title</Label>
                <Input placeholder="Enter artwork title" />
            </TextField>

            <TextField name="description" value={description} onChange={setDescription}>
                <Label className={labelClass}>Description</Label>
                <TextArea placeholder="Describe the artwork" />
            </TextField>

            <NumberField
                isRequired
                name="price"
                value={price}
                onChange={setPrice}
                minValue={0}
                formatOptions={{ style: "currency", currency: "USD" }}
            >
                <Label className={labelClass}>Price</Label>
                <NumberField.Group>
                    <NumberField.DecrementButton />
                    <NumberField.Input />
                    <NumberField.IncrementButton />
                </NumberField.Group>
            </NumberField>

            <Select isRequired name="category" placeholder="Select a category" value={category} onChange={setCategory}>
                <Label className={labelClass}>Category</Label>
                <Select.Trigger>
                    <Select.Value />
                    <Select.Indicator />
                </Select.Trigger>
                <Select.Popover>
                    <ListBox>
                        {CATEGORIES.map((cat) => (
                            <ListBox.Item key={cat.id} id={cat.id} textValue={cat.name}>
                                {cat.name}
                                <ListBox.ItemIndicator />
                            </ListBox.Item>
                        ))}
                    </ListBox>
                </Select.Popover>
            </Select>

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
                    <div className="flex items-center gap-3 rounded-xl border border-white/[0.06] bg-[#1c1c1e] p-3">
                        <Image width={64} height={64} src={imageUrl} alt="Artwork preview" className="rounded-md object-cover" />
                        <span className="flex-1 truncate text-sm text-white/60">{imageUrl}</span>
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

            <div className="flex gap-3">
                <Button className={'bg-[#D8A33D]'} type="submit" variant="primary" fullWidth>
                    Upload Artwork
                </Button>
                <Button type="button" variant="outline" fullWidth onPress={handleReset}>
                    Reset
                </Button>
            </div>
        </form>
    );
};

export default AddArtworkForm;