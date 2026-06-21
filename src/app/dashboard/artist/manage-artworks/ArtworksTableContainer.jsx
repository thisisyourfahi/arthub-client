import React from "react";
import { Table } from "@heroui/react";

const ArtworksTableContainer = async ({ artworks }) => {
    return (
        <Table aria-label={undefined}>
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
                                    ).toLocaleDateString()}
                                </Table.Cell>

                                <Table.Cell>
                                    {/* CTA Component will go here later */}
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