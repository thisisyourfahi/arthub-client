import { Label, SearchField, Select, ListBox, Button } from '@heroui/react';
import React from 'react';

const CATEGORIES = [
    { id: "painting", name: "Painting" },
    { id: "sculpture", name: "Sculpture" },
    { id: "digital-art", name: "Digital Art" },
    { id: "photography", name: "Photography" },
    { id: "illustration", name: "Illustration" },
    { id: "printmaking", name: "Printmaking" },
    { id: "mixed-media", name: "Mixed Media" },
    { id: "all", name: "All Categories" },
];

const SORT_BY = [
    { id: "newest", name: "Newest" },
    { id: "oldest", name: "Oldest" },
    { id: "low-high", name: "Price: Low to High" },
    { id: "high-low", name: "Price: High to Low" },
    { id: 'default', name: 'Default' },
];

const ArtworkFilters = ({ searchQuery, category, setCategory, setSearchQuery, sort = 'default', setSort }) => {
    const isFiltered = (category !== 'all' || searchQuery !== '' || sort !== 'default');

    const handleClearFilters = () => {
        setCategory('all');
        setSearchQuery('');
        setSort('default');
    }

    return (
        <div className='px-4 md:px-0 space-y-4'>
            <SearchField value={searchQuery} name="search" onChange={(e) => setSearchQuery(e)}>
                <Label>Search</Label>
                <SearchField.Group>
                    <SearchField.SearchIcon />
                    <SearchField.Input className="w-70" placeholder="Search by title, description, or keywords..." />
                    <SearchField.ClearButton />
                </SearchField.Group>
            </SearchField>

            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
                <Select value={category} onChange={(value) => setCategory(value)} className="w-full" placeholder="Select one">
                    <Label>Category</Label>
                    <Select.Trigger>
                        <Select.Value>
                        </Select.Value>
                        <Select.Indicator />
                    </Select.Trigger>
                    <Select.Popover>
                        <ListBox>
                            {CATEGORIES.map((cat) => (
                                <ListBox.Item key={cat.id} id={cat.id} textValue={cat.name}>
                                    {cat.name}
                                    <ListBox.ItemIndicator />
                                </ListBox.Item>
                            ))}
                        </ListBox>
                    </Select.Popover>
                </Select>

                <Select value={sort} onChange={(value) => setSort(value)} className="w-full" placeholder="Select one">
                    <Label>Sort By</Label>
                    <Select.Trigger>
                        <Select.Value>

                        </Select.Value>
                        <Select.Indicator />
                    </Select.Trigger>
                    <Select.Popover>
                        <ListBox>
                            {SORT_BY.map((sort) => (
                                <ListBox.Item key={sort.id} id={sort.id} textValue={sort.name}>
                                    {sort.name}
                                    <ListBox.ItemIndicator />
                                </ListBox.Item>
                            ))}
                        </ListBox>
                    </Select.Popover>
                </Select>

                {isFiltered && (
                    <Button onClick={handleClearFilters}>Clear Filters</Button>
                )}
            </div>
        </div>
    );
};

export default ArtworkFilters;