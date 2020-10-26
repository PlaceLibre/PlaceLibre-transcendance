import React, { Component, Fragment } from 'react'
import { Box, Image } from "@chakra-ui/core";
import { Icon } from "@chakra-ui/core";
import { Avatar, AvatarBadge } from "@chakra-ui/core";
import {PhoneIcon, AddIcon, WarningIcon} from '@chakra-ui/icons'
import { AdminIcon, HomeIcon } from './ownIcons'

import colors from './colors'



class Header extends Component {
    render () {
        const userName='Alexandra Kisscool'
        const userAvatarPath='assets/avatar01.png'

        return (
                <Box 
                    bg={colors.brandDark} 
                    display= 'flex'
                    direction='row'
                    justifyContent= 'space-between'
                    alignItems= 'center'
                    zIndex={100}
                    position="fixed"
                    top='0px'
                    left='0px'
                    right='0px'
                    boxShadow= '0 0 10px #000000'
                    height='80px'>
                        <Box
                        display= 'flex'
                        direction='row'
                        justifyContent= 'space-between'
                        alignItems= 'center'>
                            <Image
                                className='logo' 
                                src="assets/logo14.png" 
                                alt="logo" 
                                height='50px'/>
                            <Avatar
                                height='40px'
                                width='40px'
                                marginLeft= '10px'
                                name='userName'
                                src={userAvatarPath}
                                borderColor= 'white'
                                borderWidth= '1px'
                                bg={colors.brand}
                                color={colors.brandDark}/>
                            <Box 
                                color='white' 
                                marginLeft='10px'
                                color={colors.brandLight}                                >
                                    <Box fontWeight='50' >Bienvenue!</Box>
                                    <Box fontWeight='600'>{userName}</Box>
                            </Box>
                        </Box>
                        <Box
                            display='flex'
                            direction='row'
                            alignItems= 'center'>
                            <AdminIcon color={colors.brandLight}  boxSize={8} margin='5px'/>
                            <HomeIcon color={colors.brandLight}  boxSize={8} margin='5px'/>
                        </Box>
                </Box>
        )
    }
}

export default Header

