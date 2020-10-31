import React from 'react'
import { Box, Text, Icon } from "@chakra-ui/core";
import { BsImage } from "react-icons/bs";
import { Avatar, AvatarBadge } from "@chakra-ui/core"
import { Flex, Spacer } from "@chakra-ui/core"


import {intentionExemples} from './intentionExemples'
import Favorite from './Favorite'
import HeartLike from './HeartLike'
import EditableText from './EditableText'

const Card = ({elementData}) => { 



    function publishedDate (dateNumberString) {
        const date= new Date(parseInt(dateNumberString, 10))
        return date.toLocaleDateString()+" "+date.toLocaleTimeString() 
    }

    // get the last version
    console.log('elementData=', elementData)
    const lastVersion= elementData.versions[Object.keys(elementData.versions)[Object.keys(elementData.versions).length - 1]]

    return (
        <Box  bg='white' borderRadius='md' maxWidth='30em' borderRadius= '0.5em' overflow='hidden'
        boxShadow='3px 3px 5px 3px #cccccc'
        >
            <Flex align='flex-end'
            height='10em' 
            backgroundImage={`url(assets/${elementData.image})`} backgroundPosition='center' backgroundSize = 'cover'>
                <Flex bg='#FFFFFFBB' borderRadius='999px' width='30px' height='30px' align='center' justify='center' margin='10px'>
                    <Icon as={BsImage} color='brandGray.700'/>
                </Flex>
                <Spacer/>
                <Avatar src='assets/avatar01.png' 
                size='md' borderColor='white' borderWidth= '1px'
                margin='0.5em'/>
            </Flex>
            <Box padding='1em'>
                <EditableText text={lastVersion.value}/>
                <Flex align='center' marginTop='1em'>
                    <Favorite boxSize={6}/>
                    <Box marginRight='10px'/>
                    <HeartLike boxSize={5}/>
                    <Text fontSize='md' fontWeight='bold' color='brandGray.700' marginLeft='0.5em'>
                        {elementData.likes}</Text>
                    <Spacer/>
                    <Box 
                    display= 'flex'
                    flexDirection='column'
                    justifyContent='right'>
                        <Text fontSize='xs' color='brandGray.700'textAlign='right' fontWeight='bold'>
                            Par {lastVersion.userPseudo}</Text>
                        <Text fontSize='xs' color='brandGray.700' textAlign='right'>
                            Publié le {publishedDate(lastVersion.date)}</Text>
                    </Box>
                </Flex>
            </Box>
        </Box>
    )
}

export default Card