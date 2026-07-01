import { getAllSubscriptions } from '@/lib/api/subscriptions';
import { Table } from '@heroui/react';
import React from 'react';

const SubscriptionTableContainer = async () => {
    const subs = await getAllSubscriptions();
    return (
        <div>
            <Table aria-label="Admin view subscription table" >
                <Table.ScrollContainer>
                    <Table.Content aria-label="Admin view subscription table" className="min-w-200">
                        <Table.Header >
                            <Table.Column className={'text-[#d8a33d]'} isRowHeader id="transactions">
                                Transaction ID
                            </Table.Column>
                            <Table.Column className={'text-[#d8a33d]'} id="susbcriber">
                                Subscriber
                            </Table.Column>
                            <Table.Column className={'text-[#d8a33d]'} id="plan">
                                Plan
                            </Table.Column>
                            <Table.Column className={'text-[#d8a33d]'} id="purchaseDate">
                                Purchased At
                            </Table.Column>
                        </Table.Header>

                        <Table.Body>
                            {subs?.map((sub) => (
                                <Table.Row key={sub?._id}>
                                    <Table.Cell>{sub?._id}</Table.Cell>
                                    <Table.Cell>{sub?.email}</Table.Cell>
                                    <Table.Cell>{sub?.planId}</Table.Cell>
                                    <Table.Cell className={'flex gap-2'}>
                                        {new Date(sub?.createdAt).toLocaleDateString('en-US')}
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

export default SubscriptionTableContainer;