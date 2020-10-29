import React from 'react'
import { Box, Image, Heading } from "@chakra-ui/core";


const TitleWithIcon = ({iconComponent: Icon, title, color}) => {

    return (
        <Box display= 'flex' direction='row' alignItems='center' marginBottom='10px'>
            <Icon fill={color} color={color} boxSize={8} marginRight='0.5em'/>
            <Heading as='h5' size='sm' color={color}>{title}</Heading>
        </Box>
    )
}

export default TitleWithIcon