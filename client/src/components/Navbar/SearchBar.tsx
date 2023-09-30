import React from 'react';
import './SearchBar.css';  // Importing the CSS for styling

interface Props {
    searchTerm: string;
    onSearchChange: (term: string) => void;  // Added a callback for handling search term change
}

const SearchBar: React.FC<Props> = ({ searchTerm, onSearchChange }) => {
    return (
        <div className="search-bar">
            <input
                type="text"
                value={searchTerm}
                onChange={(e) => onSearchChange(e.target.value)}
                placeholder="Search..."
                className="search-input"
            />
        </div>
    );
};

export default SearchBar;
