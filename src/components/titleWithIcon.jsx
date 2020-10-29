import React from 'react'
import { Box, Image, Heading } from "@chakra-ui/core";


const titleWithIcon = (Icon, title) => {
    return (
        <Box>
            {Icon}
            <Heading as='h2' size='lg'>{title}</Heading>
        </Box>
    )
}

export default titleWithIcon