import React, { Component } from 'react'
import { Box, Image, Heading } from "@chakra-ui/core";
import { Grid, GridItem } from "@chakra-ui/core"
import { Checkbox, CheckboxGroup } from "@chakra-ui/core"
import { Input, InputGroup, InputLeftElement } from "@chakra-ui/core"
import { Icon } from "@chakra-ui/core"
import { BsSearch } from "react-icons/bs";


import { AnchorIcon } from './ownIcons'
import  causesList  from './causesList'



class CausesFilter extends Component {


    render () {
        const causes = Object.assign({},causesList)
        const causesCheckboxes = Object.keys(causes).map(key => 
            <Checkbox key={key} colorScheme='brandVariant' marginRight='20px' size='md'>{causes[key]}</Checkbox>)

        return (
            <Box marginTop='2em'>
                <Box display= 'flex' direction='row' alignItems='center' marginBottom='10px'>
                    <AnchorIcon color='brandDark' boxSize={8} marginRight='10px'></AnchorIcon>
                    <Heading as='h5' size='sm' color='brandDark'>Select a cause</Heading>
                </Box>
                <Grid gridAutoFlow= 'column' templateRows="repeat(5, auto)" templateColumns="repeat(2, auto)" gap={2} >
                    {causesCheckboxes}
                </Grid>
                <InputGroup marginTop='1em'>
                    <InputLeftElement
                    pointerEvents="none"
                    children={<Icon as={BsSearch} color="brandBlack" />}
                    />
                    <Input type="text" 
                            bg='white' 
                            borderColor='brandBlack' 
                            borderRadius= '999px' 
                            focusBorderColor="brand"
                            maxWidth='25em'
                            placeholder="Filtrer par mots clés..." />
                </InputGroup>

            </Box>
        )
    }
}

export default CausesFilter