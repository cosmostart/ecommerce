import { useEffect, useState } from 'react';
import HomeTemplate from '../templates/HomeTemplate';

function Home() {
    const baseUrl = 'http://127.0.0.1:8000/api/';
    const [products, setProducts]=useState([]);

    useEffect(() => {
        fetchData(baseUrl + 'products/?fetch_limit=8');
    }, []);

    function fetchData(baseurl) {
        fetch(baseurl)
        .then((response)=>response.json())
        .then((data)=>setProducts(data.results));
    }

    const [categories, setCategories]=useState([]);
    useEffect(() => {
        fetchData1(baseUrl + 'categories/?fetch_limit=8');
    }, []);

    function fetchData1(baseurl) {
        fetch(baseurl)
        .then((response)=>response.json())
        .then((data)=>setCategories(data.results));
    }
    
    return (
        <HomeTemplate homeTemplate = {[categories, products]}/>
    )
}

export default Home;
