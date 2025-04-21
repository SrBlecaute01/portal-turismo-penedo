//import React from "react";
//import { FaSearch } from "react-icons/fa"; // Import search icon
import styles from "./Searchbar.module.css"; 

export interface SearchBarProps {
  placeholder?: string; // Optional placeholder prop
}

function SearchBar({placeholder = "Pesquisar..."}: SearchBarProps){
  
  return (
    <div className={styles.search_bar}>
        <input type="text" placeholder={placeholder} />
        {/*<FaSearch className="search-icon" />*/}
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15.4116 12.9299C16.4494 11.5841 17.0625 9.92274 17.0625 8.125C17.0625 3.63769 13.2429 0 8.53125 0C3.81957 0 0 3.63769 0 8.125C0 12.6123 3.81957 16.25 8.53125 16.25C10.4194 16.25 12.1643 15.6658 13.5775 14.6769L13.5763 14.6777C13.6151 14.7277 13.6582 14.7755 13.7057 14.8208L18.7594 19.6339C19.272 20.122 20.103 20.122 20.6156 19.6339C21.1281 19.1457 21.1281 18.3543 20.6156 17.8661L15.5618 13.053C15.5143 13.0078 15.4641 12.9667 15.4116 12.9299ZM15.75 8.125C15.75 11.922 12.5181 15 8.53125 15C4.54444 15 1.3125 11.922 1.3125 8.125C1.3125 4.32804 4.54444 1.25 8.53125 1.25C12.5181 1.25 15.75 4.32804 15.75 8.125Z" fill="black" fillOpacity="0.6"/>
        </svg>
    </div>
  );
};

export default SearchBar;


