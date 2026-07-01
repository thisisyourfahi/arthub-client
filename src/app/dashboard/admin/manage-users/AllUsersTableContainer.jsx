import { Table } from '@heroui/react';
import React from 'react';

const AllUsersTableContainer = ({ allUsers }) => {
    return (
        <div>
            <Table aria-label="Artist artworks table" >
                <Table.ScrollContainer>
                    <Table.Content aria-label="Artist artworks table" className="min-w-200">
                        <Table.Header >
                            <Table.Column className={'text-[#d8a33d]'} isRowHeader id="name">
                                Name
                            </Table.Column>
                            <Table.Column className={'text-[#d8a33d]'} id="email">
                                Email
                            </Table.Column>

                            <Table.Column className={'text-[#d8a33d]'} id="role">
                                Role
                            </Table.Column>
                            <Table.Column className={'text-[#d8a33d]'} id="actions">
                                Actions
                            </Table.Column>
                        </Table.Header>

                        <Table.Body>
                            {allUsers?.map((user) => (
                                <Table.Row key={user?._id}>
                                    <Table.Cell>{user?.name}</Table.Cell>
                                    <Table.Cell>{user?.email}</Table.Cell>
                                    <Table.Cell>{user?.role}</Table.Cell>
                                    <Table.Cell className={'flex gap-2'}>
                                        {/* CTA Component will go here later */}
                                        {/* <Link href={`/arts/${artwork._id}`}>
                                            <Button className={'bg-[#D8A33D]'}>
                                                <Eye />
                                            </Button>
                                        </Link>
                                        <EditArtworkModal art={artwork} />
                                        <DeleteArtworkModal art={artwork} /> */}
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

export default AllUsersTableContainer;