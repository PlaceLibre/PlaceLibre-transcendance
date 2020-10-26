import React, { Component } from 'react'
import colors from './colors'
import { Box } from "@chakra-ui/core";



class Sidebar extends Component {
    render () {
        return (
            <Box 
                bg={colors.brandMiddle}
                width= '150px'
                position='fixed'
                left='0px'
                zIndex={10}
                height= '100vh'>
                Hello
                
            </Box>
        )
    }
}

export default Sidebar