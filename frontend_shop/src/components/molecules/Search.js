import ButtonSearch from '../atoms/ButtonSearch';
import { useState } from 'react';
import InputSearch from '../atoms/InputSearch';

function Search() {
    const [searchString, setSearchString] = useState({
        'search': ''
    });
    
    return(
        <>
        <InputSearch inputSearch = {[searchString, setSearchString]}/>
        <ButtonSearch buttonSearch = {searchString.search}/>
        </>
    )
}

export default Search;
