import React, { Component, Fragment } from 'react'
import { Box, Image, Icon } from "@chakra-ui/core";
import { Avatar, AvatarBadge } from "@chakra-ui/core";
import colors from './colors'
import './Header.css'


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
                    boxShadow= '0 0 10px #000000'>
                        <Box
                        display= 'flex'
                        direction='row'
                        justifyContent= 'space-between'
                        alignItems= 'center'>
                            <Image
                                className='logo' 
                                src="assets/logo14.png" 
                                alt="logo" 
                                height='70px'/>
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
                        <Box>
                            <Image 
                                height='50px' 
                                src='assets/noun_admin_975453.png' 
                                alt='home'/>
                            <Image 
                                height='50px' 
                                src='assets/noun_Home_77002.png' 
                                alt='home'/>
                            <Icon name="noun_admin_975453" color={colors.brandLight} size="40px"/>
                            <Icon name="noun_Home_77002" color={colors.brandLight} size="40px"/>
                        </Box>
                </Box>
        )
    }
}

export default Header

