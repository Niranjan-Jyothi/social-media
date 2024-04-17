import React, { useState } from "react";
import { Flex, Text, Grid, GridItem  } from '@chakra-ui/react'
import useDebounce from '../../hooks/useDebounce'
import SearchInput from "../../components/Search/SearchInput";
import SearchResults from "../../components/Search/SearchResults";

const SearchPage = () => {

    const [searchKeyword, setSearchKeyword] = useState('');
    const [searchCount, setsearchCount] = useState('');

    const debouncedSearchValue = useDebounce(searchKeyword, 500)
    const debouncedSearchCount = useDebounce(searchCount, 500)

    return (
        <Flex maxW={"full"} mx={"auto"} direction={"column"} margin={20} alignItems={'center'}>
            <Grid
                templateColumns={{
                    base: "repeat(1, 1fr)",
                    md: "repeat(2, 1fr)",
                }}
                gap={1}
                columnGap={1}>

                <GridItem m='2'>
                    <Text mb='8px'>Drink Name</Text>
                    <SearchInput searchValue={searchKeyword} setSearchValue={setSearchKeyword} placeholder='Enter drink name' type='text' />
                </GridItem>

                <GridItem m='2'> 
                    <Text mb='8px'>Drink count</Text>
                    <SearchInput searchValue={searchCount} setSearchValue={setsearchCount} placeholder='Enter drink count' type='number' />
                </GridItem>
            </Grid>



            <SearchResults searchTerm={debouncedSearchValue} searchResultCount={Number.parseFloat(debouncedSearchCount)} />
        </Flex>

    )
}

export default SearchPage
