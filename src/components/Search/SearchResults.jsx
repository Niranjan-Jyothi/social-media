import React from 'react'
import { Box, Grid, Skeleton, Image, VStack, Alert, AlertIcon } from "@chakra-ui/react";
import useCocktails from '../../hooks/useCocktails'

const SearchResults = ({ searchTerm, searchResultCount }) => {
  const { isLoading, error, drinks } = useCocktails(searchTerm, searchResultCount);

  if(searchTerm == null || searchTerm.trim() == ''){
    return;
  }

  if(Number.isNaN(searchResultCount) || !Number.isInteger(searchResultCount) || searchResultCount <= 0){
    return (
      <Alert maxWidth={"75%"} mt='5' status='error'>
        <AlertIcon />
        Please enter a valid count of drinks to be returned.
      </Alert>
    )
  }

  if (!isLoading && !!error) {
    return (
      <Alert maxWidth={"75%"} mt='5' status='error'>
        <AlertIcon />
        Uh Oh! You seem to be facing network issues 😴
      </Alert>
    )
  }
  else if (!isLoading && !error && EmptyDrinks(drinks)) {
    return (
      <Alert maxWidth={"75%"} mt='5' status='info'>
        <AlertIcon />
        No results found! Please try another key word.
      </Alert>
    )
  }

  return (
    <Grid
      templateColumns={{
        base: "repeat(2, 1fr)",
        md: "repeat(3, 1fr)",
      }}
      gap={1}
      columnGap={1}
      mt={5}
      alignItems={'center'}
      justifyContent={'center'}>

      {isLoading &&
        [0, 1, 2].map((_, idx) => (
          <VStack key={idx}>
            <Skeleton m='1' maxW='sm'>
              {/* <Box h="300px">contents wrapped</Box> */}
              <Image src="https://www.thecocktaildb.com/images/media/drink/samm5j1513706393.jpg" alt='drink image' width={'100%'} height={'100%'} />
            </Skeleton>
          </VStack>
        ))}

      {!isLoading && !error && ValidDrinks(drinks) && (
        <>
          {drinks.map((drink) => (
            <Box m='1' maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden'>
              <Image src={drink.imageUrl} alt='drink image' width={'100%'} height={'100%'} />

              <Box p='6'>

                <Box
                  mt='1'
                  fontWeight='semibold'
                  as='h4'
                  lineHeight='tight'
                  noOfLines={1}
                >
                  {drink.name}
                </Box>

                <Box>
                  <Box as='span' color='gray.600' fontSize='sm'>
                    Id:
                  </Box>
                  {drink.id}

                </Box>

              </Box>
            </Box>
          ))}
        </>
      )}
    </Grid>

    // <div>
    //   {isLoading && <p>Loading..</p>}
    //   {!isLoading && <p>Done..</p>}
    //   {!isLoading && drinks && drinks.length > 0 && <p>{drinks[0].name}</p>}
    // </div>
  )
}

export default SearchResults

const ValidDrinks = (drinks) => {
  return !!drinks && drinks.length > 0;
}

const EmptyDrinks = (drinks) => {
  return !!drinks && drinks.length == 0;
}