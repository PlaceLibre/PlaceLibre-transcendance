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
    const text=hovered ? <Text color='brandGray.700' paddingRight='5px' paddingLeft='5px' fontWeight='600' fontSize='sm'> {props.title} </Text> : ""
    
    return (
        <Box 
        display= 'flex' 
        flexDirection='row' 
        alignItems='center' 
        borderWidth='3px'
        borderColor='brandGray.700'
        borderRadius='999px'
        padding='5px'
        //backgroundColor='white' 
        //boxShadow='3px 3px 5px 3px #cccccc'
        onMouseOver= {onMouseOver}
        onMouseOut = {onMouseOut}
        >
            {text}
            {cloneElement(props.icon, {color:'brandGray.700', boxSize:'4'})}
        </Box>
    )
}

export default IconButtonSlider
