import { getArtworkById } from '@/lib/api/artwork';
import { getUsersPurchaseHistory } from '@/lib/api/user';
import { getUserSession } from '@/lib/core/session';
import React from 'react';
import PurchaseHistoryTable from './PurchaseHistoryTable';

const UserPurchaseHistory = async () => {
    const user = await getUserSession();
    const purchaseHistory = await getUsersPurchaseHistory(user?.id);
    console.log(purchaseHistory);
    const purchases = await Promise.all(
        purchaseHistory.map(async (purchase) => {
            const artwork = await getArtworkById(purchase?.artworkId);
            return {
                artworkId: purchase?.artworkId,
                title: artwork?.title,
                amount: purchase?.price,
                date: purchase?.time
            }
        })
    )
    console.log(purchases);
    return (
        <div>
            <div className="mb-8">
                <h2 className="text-3xl font-bold text-[#D8A33D]">
                    Purchase History
                </h2>

                <p className="mt-2 max-w-2xl text-[#866c3c]">
                    View all the artworks you&apos;ve purchased, including the purchase amount,
                    date, and a quick link to revisit each artwork&apos;s details.
                </p>
            </div>
            <PurchaseHistoryTable artworks={purchases} />
        </div>
    );
};

export default UserPurchaseHistory;