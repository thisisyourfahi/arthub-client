import { Label, SearchField, Select, ListBox } from '@heroui/react';
import React from 'react';

const CATEGORIES = [
    { id: "painting", name: "Painting" },
    { id: "sculpture", name: "Sculpture" },
    { id: "digital-art", name: "Digital Art" },
    { id: "photography", name: "Photography" },
    { id: "illustration", name: "Illustration" },
    { id: "printmaking", name: "Printmaking" },
    { id: "mixed-media", name: "Mixed Media" },
    { id: "other", name: "Other" },
];

const ArtworkFilters = () => {
    return (
        <div>
            <SearchField name="search">
                <Label>Search</Label>
                <SearchField.Group>
                    <SearchField.SearchIcon />
                    <SearchField.Input className="w-70" placeholder="Search by title, keywords..." />
                    <SearchField.ClearButton />
                </SearchField.Group>
            </SearchField>
            
            <Select className="w-[256px]" placeholder="Select one">
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
        </div>
    );
};

export default ArtworkFilters;