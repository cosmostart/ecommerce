import { useState } from 'react';

function InputSearch(props) {
    const handleChange = (event) => {
        props?.['inputSearch']?.[1]({
            ...props?.['inputSearch']?.[0],
            [event.target.name]: event.target.value
        })
    };

    return(
        <input type="search" name="search" onChange={handleChange} placeholder="Поиск по категории, названию товара, артиклу" className="form-control rounded-0" style={{width:"30vw"}}></input>
    )
}

export default InputSearch;
