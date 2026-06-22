"use client";
import { deleteArtwork } from "@/lib/actions/artworks";
import { TrashBin } from "@gravity-ui/icons";
import { AlertDialog, Button, toast } from "@heroui/react";
import { useRouter } from "next/navigation";

const DeleteArtworkModal = ({ art }) => {
    const router = useRouter();
    const { title, _id } = art;
    const handleDelete = async () => {        
        const res = await deleteArtwork(_id);
        if (res.acknowledged) {
            toast.success('Artwork has been deleted!');
            router.refresh();
        } else {
            toast.danger('Something went wrong. Please try again.')
        }
    }
    return (
        <AlertDialog>
            <Button variant="danger-soft">
                <TrashBin />
            </Button>
            <AlertDialog.Backdrop>
                <AlertDialog.Container>
                    <AlertDialog.Dialog className="sm:max-w-100">
                        <AlertDialog.CloseTrigger />
                        <AlertDialog.Header>
                            <AlertDialog.Icon status="warning" />
                            <AlertDialog.Heading className="text-[#D8A33D]">Delete artwork permanently?</AlertDialog.Heading>
                        </AlertDialog.Header>
                        <AlertDialog.Body>
                            <p className="text-[#8b651e]">
                                This will permanently delete <strong>{title}</strong> and all of its
                                data. This action cannot be undone.
                            </p>
                        </AlertDialog.Body>
                        <AlertDialog.Footer>
                            <Button slot="close" variant="secondary">
                                Cancel
                            </Button>
                            <Button onClick={handleDelete} slot="close" variant="danger">
                                Delete {title}
                            </Button>
                        </AlertDialog.Footer>
                    </AlertDialog.Dialog>
                </AlertDialog.Container>
            </AlertDialog.Backdrop>
        </AlertDialog>
    );
};

export default DeleteArtworkModal;