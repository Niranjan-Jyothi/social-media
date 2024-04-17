import React, { useEffect, useState } from 'react'
import axios from 'axios';

const cocktailApi = axios.create({
    baseURL: "https://localhost:7299/api/Cocktail"
})

const useCocktails = (searchTerm, searchResultCount) => {
    const [isLoading, setIsLoading] = useState(true);
    const [drinks, setDrinks] = useState([]);
    const [error, setError] = useState('');

    useEffect(() => {
        const getDrinks = async () => {
            setIsLoading(true);
            if(searchTerm == null || searchTerm.trim() == '' || Number.isNaN(searchResultCount) || !Number.isInteger(searchResultCount) || searchResultCount <= 0){ //avoiding empty API call
                setError(null);
                setDrinks([]);
                setIsLoading(false);
                return;
            }

            try {
                const response = await cocktailApi.request({
                    params: {
                        searchKeyword: searchTerm,
                        count: searchResultCount,
                    }
                })

                setError(null);
                setDrinks(response.data);
            } catch (error) {
                setError(error);
                setDrinks(null);
            }

            setIsLoading(false);
        }

        getDrinks();
    }, [searchTerm, searchResultCount]);

    return {isLoading, error, drinks};
}

export default useCocktails