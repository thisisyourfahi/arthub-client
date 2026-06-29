import React from "react";
import { Button, Table } from "@heroui/react";
import { Eye } from "@gravity-ui/icons";
import Link from "next/link";

const PurchaseHistoryTable = ({ artworks }) => {
    return (
        <Table aria-label="Purchase history table">
            <Table.ScrollContainer>
                <Table.Content
                    aria-label="Purchase history table"
                    className="min-w-200"
                >
                    <Table.Header>
                        <Table.Column
                            isRowHeader
                            id="title"
                            className="text-white"
                        >
                            Title
                        </Table.Column>

                        <Table.Column
                            id="amount"
                            className="text-white"
                        >
                            Amount
                        </Table.Column>

                        <Table.Column
                            id="purchaseDate"
                            className="text-white"
                        >
                            Purchase Date
                        </Table.Column>

                        <Table.Column
                            id="view"
                            className="text-white"
                        >
                            View
                        </Table.Column>
                    </Table.Header>

                    <Table.Body>
                        {artworks?.map((artwork) => (
                            <Table.Row key={artwork.artworkId}>
                                <Table.Cell>{artwork.title}</Table.Cell>

                                <Table.Cell>${artwork.amount}</Table.Cell>

                                <Table.Cell>
                                    {new Date(artwork.date).toLocaleDateString("en-US")}
                                </Table.Cell>

                                <Table.Cell>
                                    <Link href={`/arts/${artwork.artworkId}`}>
                                        <Button className="bg-[#D8A33D]">
                                            <Eye />
                                        </Button>
                                    </Link>
                                </Table.Cell>
                            </Table.Row>
                        ))}
                    </Table.Body>
                </Table.Content>
            </Table.ScrollContainer>
        </Table>
    );
};

export default PurchaseHistoryTable;