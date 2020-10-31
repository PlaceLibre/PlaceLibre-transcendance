import React, { Component } from 'react'
import { TalkIcon } from './ownIcons'
import { Box, Heading, Text, Icon, IconButton } from "@chakra-ui/core";
import { Grid } from "@chakra-ui/core"
import { BsFillHeartFill, BsPlusCircle, BsImage } from "react-icons/bs";
import { ImPlus, ImPencil } from "react-icons/im";
import { Avatar, AvatarBadge } from "@chakra-ui/core"
import { Flex, Spacer } from "@chakra-ui/core"


import TitleWithIcon from './TitleWithIcon'
import {intentionExemples} from './intentionExemples'
import Favorite from './Favorite'
import IconButtonSlider from './IconButtonSlider'
import HeartLike from './HeartLike'
import EditableText from './EditableText'



function IntentionCards () { 


        

    function publishedDate (dateNumberString) {
        const date= new Date(parseInt(dateNumberString, 10))
        return date.toLocaleDateString()+" "+date.toLocaleTimeString()
    }

    const cards=Object.keys(intentionExemples).map(key =>
        <Box  key={key} bg='white' borderRadius='md' maxWidth='30em' borderRadius= '0.5em' overflow='hidden'
        boxShadow='3px 3px 5px 3px #cccccc'
        >
            <Flex align='flex-end'
            height='10em' 
            backgroundImage={`url(assets/${intentionExemples[key].image})`} backgroundPosition='center' backgroundSize = 'cover'>
                <Flex bg='#FFFFFFBB' borderRadius='999px' width='30px' height='30px' align='center' justify='center' margin='10px'>
                    <Icon as={BsImage} color='brandGray.700'/>
                </Flex>
                <Spacer/>
                <Avatar src='assets/avatar01.png' 
                size='md' borderColor='white' borderWidth= '1px'
                margin='0.5em'/>
            </Flex>
            <Box padding='1em'>
                <EditableText text={intentionExemples[key].text}/>
                <Flex align='center' marginTop='1em'>
                    <Favorite boxSize={6}/>
                    <Box marginRight='10px'/>
                    <HeartLike boxSize={5}/>
                    <Text fontSize='md' fontWeight='bold' color='brandGray.700' marginLeft='0.5em'>
                        {intentionExemples[key].likes}</Text>
                    <Spacer/>
                    <Box 
                    display= 'flex'
                    flexDirection='column'
                    justifyContent='right'>
                        <Text fontSize='xs' color='brandGray.700'textAlign='right' fontWeight='bold'>
                            Par {intentionExemples[key].author}</Text>
                        <Text fontSize='xs' color='brandGray.700' textAlign='right'>
                            Publié le {publishedDate(intentionExemples[key].published)}</Text>
                    </Box>
                </Flex>
            </Box>
        </Box>)

    return (
        <Box 
        marginTop='3em' 
        marginBottom='3em'>
            <Flex align='center' height='50px'>
                <TitleWithIcon color='brandGray.700' iconComponent={TalkIcon} title='Intentions'/>
                <Spacer/>
                <IconButtonSlider icon={<Icon as={ImPlus}/>} title='Créer nouveau'/>
            </Flex>
            <Grid 
            gridAutoFlow= 'row' 
            templateColumns="repeat(2, 1fr)" gap={4}>
                {cards}
            </Grid>
            
        </Box>
        
    )
    
}

export default IntentionCards

