import React, { Component } from 'react'
import { TalkIcon } from './ownIcons'
import { Box, Heading, Text, Icon } from "@chakra-ui/core";
import { Grid } from "@chakra-ui/core"
import { BsFillHeartFill, BsPlusCircle } from "react-icons/bs";
import { ImPlus } from "react-icons/im";

import { Avatar, AvatarBadge } from "@chakra-ui/core"


import TitleWithIcon from './TitleWithIcon'
import {intentionExemples} from './intentionExemples'
import Favorite from './Favorite'
import IconButtonSlider from './IconButtonSlider'
import HeartLike from './HeartLike'



class IntentionCards extends Component { 

    
        
    render () {
        const publishedDate = dateNumberString => {
            const date= new Date(parseInt(dateNumberString, 10))
            return date.toLocaleDateString()+" "+date.toLocaleTimeString()
        }

        const cards=Object.keys(intentionExemples).map(key =>
            <Box 
            key={key}
            bg='white' 
            borderRadius='md' 
            maxWidth='30em'
            borderRadius= '0.5em'
            overflow='hidden'
            boxShadow='3px 3px 5px 3px #cccccc'
            >
                <Box 
                height='10em' 
                backgroundImage={`url(assets/${intentionExemples[key].image})`} 
                backgroundPosition='center' 
                backgroundSize = 'cover'
                display= 'flex'
                direction='row'
                justifyContent= 'flex-end'
                alignItems= 'flex-end'>
                    <Avatar 
                    src='assets/avatar01.png' 
                    size='md' 
                    borderColor='white' 
                    borderWidth= '1px'
                    margin='0.5em'
                    />
                </Box>
                <Box padding='1em'>
                    <Text >{intentionExemples[key].text}</Text>
                    <Box 
                    display= 'flex'
                    direction='row'
                    justifyContent= 'space-between'
                    alignItems= 'center'
                    marginTop='1em'>
                        <Box display= 'flex'
                        direction='row'
                        justifyContent= 'space-between'
                        alignItems= 'center'>
                            <Favorite boxSize={6}/>
                            <Box marginRight='10px'/>
                            <HeartLike boxSize={5}/>
                            <Text fontSize='md' fontWeight='bold' color='brandDark' marginLeft='0.5em'>{intentionExemples[key].likes}</Text>
                        </Box>
                        <Box 
                        display= 'flex'
                        flexDirection='column'
                        justifyContent='right'>
                            <Text fontSize='xs' color='brandDark'textAlign='right' fontWeight='bold'>Par {intentionExemples[key].author}</Text>
                            <Text fontSize='xs' color='brandDark' textAlign='right'>Publié le {publishedDate(intentionExemples[key].published)}</Text>
                        </Box>
                    </Box>
                </Box>
            </Box>)

        return (
            <Box 
            marginTop='3em' 
            marginBottom='3em'>
                <Box 
                display= 'flex'
                direction='row'
                justifyContent= 'space-between'
                alignItems= 'center'
                height='50px'>
                    <TitleWithIcon color='brandDark' iconComponent={TalkIcon} title='Intentions'/>
                    <IconButtonSlider icon={<Icon as={ImPlus} />} title='Créer nouveau'/>
                </Box>
                <Grid 
                gridAutoFlow= 'row' 
                templateColumns="repeat(2, 1fr)" gap={4}>
                    {cards}
                </Grid>
                
            </Box>
            
        )
    }
}

export default IntentionCards