import React from 'react';
import { Table } from '@heroui/react';
import DeleteArtworkModal from '../../artist/manage-artworks/delete/DeleteArtworkModal';

const AllArtworksTableContainer = ({ allArtworks }) => {
    return (
        <div>
            <Table aria-label="Artist artworks table" >
                <Table.ScrollContainer>
                    <Table.Content aria-label="Artist artworks table" className="min-w-200">
                        <Table.Header >
                            <Table.Column className={'text-[#d8a33d]'} isRowHeader id="title">
                                Title
                            </Table.Column>
                            <Table.Column className={'text-[#d8a33d]'} id="artist">
                                Artist Name
                            </Table.Column>
                            <Table.Column className={'text-[#d8a33d]'} id="price">
                                Price
                            </Table.Column>
                            <Table.Column className={'text-[#d8a33d]'} id="actions">
                                Actions
                            </Table.Column>
                        </Table.Header>

                        <Table.Body>
                            {allArtworks?.map((art) => (
                                <Table.Row key={art?._id}>
                                    <Table.Cell>{art?.title}</Table.Cell>
                                    <Table.Cell>{art?.artist?.name}</Table.Cell>
                                    <Table.Cell>${art?.price}</Table.Cell>
                                    <Table.Cell className={'flex gap-2'}>
                                        <DeleteArtworkModal art={art} />
                                    </Table.Cell>
                                </Table.Row>
                            ))}
                        </Table.Body>
                    </Table.Content>
                </Table.ScrollContainer>
            </Table>
        </div>
    );
};

export default AllArtworksTableContainer;