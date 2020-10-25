import React, { Component } from 'react'
import { Box, Image } from "@chakra-ui/core";
import colors from './colors'
import './Header.css'


class Header extends Component {
    render () {
        return (
            <Box className='header' bg={colors.brandDark} >
                <Image className='logo' src="assets/logo14.png" alt="logo" />
                
            </Box>
        )
    }
}

export default Header