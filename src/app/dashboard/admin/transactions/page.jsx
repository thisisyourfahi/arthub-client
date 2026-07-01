import { Tabs } from '@heroui/react';
import React from 'react';
import SubscriptionTableContainer from './SubscriptionTableContainer';
import PurchaseTableContainer from './PurchaseTableContainer';

const AdminTransactionsPage = () => {
    return (
        <div className='space-y-8'>
            <div className='text-[#D8A33D]'>
                <h1 className="text-2xl font-semibold">
                    View Transactions
                </h1>
                <p className="text-[#866c3c] text-sm">
                    Here&apos;s a quick look at all the transactions took place in ArtHub.
                </p>
            </div>

            <Tabs className='w-full'>
                <Tabs.ListContainer>
                    <Tabs.List aria-label='Options'>
                        <Tabs.Tab className='text-[#d8a33d]' id={'subscriptions'}>
                            Subscriptions
                            <Tabs.Indicator />
                        </Tabs.Tab>
                        <Tabs.Tab className='text-[#d8a33d]' id={'purchases'}>
                            Purchases
                            <Tabs.Indicator />
                        </Tabs.Tab>
                    </Tabs.List>
                </Tabs.ListContainer>

                <Tabs.Panel className="pt-4" id="subscriptions">
                    <SubscriptionTableContainer />
                </Tabs.Panel>
                <Tabs.Panel className="pt-4" id="purchases">
                    <PurchaseTableContainer />
                </Tabs.Panel>
            </Tabs>
        </div>
    );
};

export default AdminTransactionsPage;