import React from 'react'
import { Box,  Text } from "@chakra-ui/core";
import { cloneElement, useState } from 'react';




const IconButtonSlider = (props) => {
    const [hovered, setHovered] = useState(false);

    function onMouseOver (e) {
        setHovered(true)
    }

    function onMouseOut (e) {
        setHovered(false)
    }
    const text=hovered ? <Text color='brandDark' paddingRight='5px' paddingLeft='5px' fontWeight='600' fontSize='sm'> {props.title} </Text> : ""
    
    return (
        <Box 
        Box display= 'flex' 
        direction='row' 
        alignItems='center' 
        marginBottom='10px'
        borderWidth='3px'
        borderColor='brandDark'
        borderRadius='999px'
        padding='5px'
        onMouseOver= {onMouseOver}
        onMouseOut = {onMouseOut}
        >
            {text}
            {cloneElement(props.icon, {color:'brandDark', boxSize:'4'})}
        </Box>
    )
}

export default IconButtonSlider