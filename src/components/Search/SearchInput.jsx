import React from 'react'
import { Input } from '@chakra-ui/react'

const SearchInput = ({searchValue, setSearchValue, placeholder, type}) => {
    return (
     <Input maxWidth={"75%"} placeholder={placeholder} type={type} backgroundColor={'whitesmoke'} value={searchValue} onChange={(e) => setSearchValue(e.target.value)} />
    )
}

export default SearchInput
