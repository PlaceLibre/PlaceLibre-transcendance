import React, { Component } from 'react'
import { Box, Image, Heading } from "@chakra-ui/core";
import { Grid, GridItem } from "@chakra-ui/core"
import { Checkbox, CheckboxGroup } from "@chakra-ui/core"

import { AnchorIcon } from './ownIcons'
import  causesList  from './causesList'



class CausesFilter extends Component {


    render () {
        const causes = Object.assign({},causesList)
        const causesCheckboxes = Object.keys(causes).map(key => 
            <Checkbox key={key} colorScheme='brandVariant' marginRight='20px'>{causes[key]}</Checkbox>)

        return (
            <Box >
                <Box display= 'flex' direction='row' alignItems='center' marginBottom='10px'>
                    <AnchorIcon color='brandDark' boxSize={8} marginRight='10px'></AnchorIcon>
                    <Heading as='h2' size='18px' color='brandDark'>Select a cause</Heading>
            </Box>
            <Grid templateColumns="repeat(2, 1fr)" gap={2} paddingLeft='30px'>
                {causesCheckboxes}
            </Grid>

            </Box>
        )
    }
}

export default CausesFilter