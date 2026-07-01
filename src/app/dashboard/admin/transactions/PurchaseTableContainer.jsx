import { getArtworkById } from '@/lib/api/artwork';
import { getAllPurchases } from '@/lib/api/purchases';
import { getUserById } from '@/lib/api/user';
import { Table } from '@heroui/react';
import React from 'react';

const PurchaseTableContainer = async () => {
    const purchases = await getAllPurchases();
    console.log(purchases);
    const purchasesInfo = await Promise.all(
        purchases.map(async (purchase) => {
            const artwork = await getArtworkById(purchase?.artworkId)
            const buyer = await getUserById(purchase?.buyerId);
            return {
                ...purchase, 
                art: artwork?.title,
                buyer: buyer?.name
            }
        })
    )
    console.log(purchasesInfo);
    return (
        <div>
            <Table aria-label="Admin view purchases table" >
                <Table.ScrollContainer>
                    <Table.Content aria-label="Admin view purchases table" className="min-w-200">
                        <Table.Header >
                            <Table.Column className={'text-[#d8a33d]'} isRowHeader id="transaction">
                                Transaction ID
                            </Table.Column>
                            <Table.Column className={'text-[#d8a33d]'} id="artwork">
                                Artwork
                            </Table.Column>
                            <Table.Column className={'text-[#d8a33d]'} id="buyer">
                                Buyer
                            </Table.Column>
                            <Table.Column className={'text-[#d8a33d]'} id="price">
                                Price
                            </Table.Column>
                            <Table.Column className={'text-[#d8a33d]'} id="purchaseDate">
                                Purchased At
                            </Table.Column>
                        </Table.Header>

                        <Table.Body>
                            {purchasesInfo?.map((purchase) => (
                                <Table.Row key={purchase?._id}>
                                    <Table.Cell>{purchase?._id}</Table.Cell>
                                    <Table.Cell>{purchase?.art}</Table.Cell>
                                    <Table.Cell>{purchase?.buyer}</Table.Cell>
                                    <Table.Cell>${purchase?.price}</Table.Cell>
                                    <Table.Cell className={'flex gap-2'}>
                                        {new Date(purchase?.time).toLocaleDateString('en-US')}
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

export default PurchaseTableContainer;