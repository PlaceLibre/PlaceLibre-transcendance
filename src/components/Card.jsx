import React from 'react'
import { Box, Text, Icon } from "@chakra-ui/core";
import { BsImage, BsEyeFill } from "react-icons/bs";
import { Avatar, AvatarBadge } from "@chakra-ui/core"
import { Flex, Spacer } from "@chakra-ui/core"

import Favorite from './Favorite'
import HeartLike from './HeartLike'
import EditableText from './EditableText'

const Card = ({elementData, onClick, cardkey}) => { 

    function publishedDate (dateNumberString) {
        const date= new Date(parseInt(dateNumberString, 10))
        return date.toLocaleDateString()+" "+date.toLocaleTimeString() 
    }

    // get the last version

    const lastVersion= elementData.versions[Object.keys(elementData.versions)[Object.keys(elementData.versions).length - 1]]

    const requireImage = fileName => {
        try {
            return require(`/public/assets/${fileName}`)
        }catch (err) {
            return `none`
        }
    }
    
    const imagePath = function (fileName) {
        const image = new Image()
        image.src=`assets/${fileName}`
        if( image.width !==0 ){
            return `assets/${fileName}`
        }
        else{
            return "none"
        }
    }
    

    return (
        <Flex  direction='column'  bg='white'  borderRadius= '0.5em' overflow='hidden'boxShadow='3px 3px 5px 3px #cccccc'
            onClick={onClick}
            cardkey={cardkey}
        >
            <Flex align='flex-end'
            height={imagePath(elementData.image) === 'none'? '4em' : '8em'}
            backgroundColor='brandGray.600'
            backgroundImage={`url(${imagePath(elementData.image)})`} backgroundPosition='center' backgroundSize = 'cover'>
                <Flex bg='#FFFFFFBB' borderRadius='999px' width='30px' height='30px' align='center' justify='center' margin='10px'>
                    <Icon as={BsImage} color='brandGray.700'/>
                </Flex>
                <Spacer/>
                <Avatar src='assets/avatar01.png' 
                size='md' borderColor='white' borderWidth= '1px'
                margin='0.5em'/>
            </Flex>
            <Flex direction='column' height='100%' padding='1em'>
                <EditableText text={lastVersion.value}/>
                <Spacer/>
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
            </Flex>
        </Flex>
    )
}

export default Card