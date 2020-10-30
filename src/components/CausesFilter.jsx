import React, { Component } from 'react'
import { Box, Image, Heading } from "@chakra-ui/core";
import { Grid, GridItem } from "@chakra-ui/core"
import { Checkbox, CheckboxGroup } from "@chakra-ui/core"
import { Input, InputGroup, InputLeftElement } from "@chakra-ui/core"
import { Icon } from "@chakra-ui/core"
import { BsSearch } from "react-icons/bs";


import { AnchorIcon } from './ownIcons'
import  causesList  from './causesList'
import TitleWithIcon from './TitleWithIcon'




class CausesFilter extends Component {


    render () {
        const causes = Object.assign({},causesList)
        const causesCheckboxes = Object.keys(causes).map(key => 
            <Checkbox key={key} colorScheme='brand' marginRight='20px' size='md'>{causes[key]}</Checkbox>)

        return (
            <Box marginTop='2em'>
                <TitleWithIcon color='brandGray.700' iconComponent={AnchorIcon} title='Selectionnez une ou plusieurs causes'/>
                <Grid gridAutoFlow= 'column' templateRows="repeat(5, auto)" templateColumns="repeat(2, auto)" gap={2} >
                    {causesCheckboxes}
                </Grid>
                <InputGroup marginTop='1em'>
                    <InputLeftElement
                    pointerEvents="none"
                    children={<Icon as={BsSearch} color="brandGray.800" />}
                    />
                    <Input type="text" 
                            bg='white' 
                            borderColor='brandGray.800' 
                            borderRadius= '999px' 
                            focusBorderColor="brand.500"
                            maxWidth='25em'
                            placeholder="Filtrer par mots clés..." />
                </InputGroup>

            </Box>
        )
    }
}

export default CausesFilter