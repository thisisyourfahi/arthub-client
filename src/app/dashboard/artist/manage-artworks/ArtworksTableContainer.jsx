import React from "react";
import { Button, Table } from "@heroui/react";
import { Eye, Pencil, TrashBin } from "@gravity-ui/icons";
import Link from "next/link";
import EditArtworkModal from "./edit/EditArtworkModal";
import DeleteArtworkModal from "./delete/DeleteArtworkModal";

const ArtworksTableContainer = async ({ artworks }) => {
    return (
        <Table aria-label="Artist artworks table" >
            <Table.ScrollContainer>
                <Table.Content aria-label="Artist artworks table" className="min-w-200">
                    <Table.Header >
                        <Table.Column className={'text-white'} isRowHeader id="title">
                            Title
                        </Table.Column>
                        <Table.Column className={'text-white'} id="category">
                            Category
                        </Table.Column>

                        <Table.Column className={'text-white'} id="price">
                            Price
                        </Table.Column>

                        <Table.Column className={'text-white'} id="status">
                            Status
                        </Table.Column>

                        <Table.Column className={'text-white'} id="createdAt">
                            Created At
                        </Table.Column>

                        <Table.Column className={'text-white'} id="actions">
                            Actions
                        </Table.Column>
                    </Table.Header>

                    <Table.Body>
                        {artworks?.map((artwork) => (
                            <Table.Row key={artwork._id}>
                                <Table.Cell>{artwork.title}</Table.Cell>
                                <Table.Cell>{artwork.category}</Table.Cell>
                                <Table.Cell>${artwork.price}</Table.Cell>
                                <Table.Cell>{artwork.status}</Table.Cell>
                                <Table.Cell>
                                    {new Date(
                                        artwork.createdAt
                                    ).toLocaleDateString('en-US')}
                                </Table.Cell>

                                <Table.Cell className={'flex gap-2'}>
                                    {/* CTA Component will go here later */}
                                    <Link href={`/arts/${artwork._id}`}>
                                        <Button className={'bg-[#D8A33D]'}>
                                            <Eye />
                                        </Button>
                                    </Link>
                                    <EditArtworkModal art={artwork} />
                                    <DeleteArtworkModal art={artwork}/>
                                </Table.Cell>
                            </Table.Row>
                        ))}
                    </Table.Body>
                </Table.Content>
            </Table.ScrollContainer>
        </Table>
    );
};

export default ArtworksTableContainer;