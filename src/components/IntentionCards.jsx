import React, { Component, useState } from 'react'
import { TalkIcon, SquaresIcon } from './ownIcons'
import { Box, Icon, IconButton, ButtonGroup } from "@chakra-ui/core";
import { Grid } from "@chakra-ui/core"
import { ImPlus } from "react-icons/im";
import { Flex, Spacer } from "@chakra-ui/core"
import { Input, Stack } from "@chakra-ui/core"
import {CheckIcon, CloseIcon, EditIcon} from '@chakra-ui/icons'
import { BsImage, BsEyeFill } from "react-icons/bs";
import { Avatar, AvatarBadge } from "@chakra-ui/core"




import TitleWithIcon from './TitleWithIcon'
import IconButtonSlider from './IconButtonSlider'
import Card from './Card'
import ChallengeCards from './ChallengeCards'




function IntentionCards ({transcendance}) { 
    const [selectedCard, setSelectedCard] = useState('ALL')
    const [creatingCard, setCreatingCard ] = useState(false)
    const [imageName, setImageName ] = useState('vegetables.jpg')
    const [intentionValue, setIntentionValue] = useState('')

    const intentions = transcendance.intentions

    const handleClickSelection = function (e) {
        setSelectedCard(e.currentTarget.getAttribute('cardkey'))
    }

    const handleClickDisplayAll =function (e) {
        setSelectedCard('ALL')
    }

    const cardsAll = function () {
        console.log(intentions)

        const cards=Object.keys(intentions).map(key =>
            <Card key={key} cardkey={key} elementData={intentions[key]} onClick={handleClickSelection}/>);
        
        return (
            <Grid gridAutoFlow= 'row' templateColumns="repeat(2, 1fr)" gap={4}>
                {cards}
            </Grid>
        )
    }

    const cardSelected = function (){
        return <Card key={selectedCard} elementData={intentions[selectedCard]}/>
    }

    const onCancel =function () {
        setCreatingCard(false)
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

    const handleChangeImagename = function (e) {
        setImageName(e.target.value)
    }

    const handleChangeIntentionValue = function (e) {
        setIntentionValue(e.target.value)
    }

    const onSubmitNewIntention = function (e) {
        const newIntention = {
                archived: false,
                image: imageName,
                parents: [ 'cause_5' ],
                children: [ ],
                likes: '0',
                versions:{
                    0: {
                        value: intentionValue,
                        date: Date.now(),
                        userPseudo: 'timcoucou',
                        userEmail: 'timothee.couchoud@placelibre.org',
                        userKey: '38398242538923932824',
                    },
                },
        }
        transcendance.intentions[`intention_${Date.now()}`]=newIntention
        console.log("transcendance=",transcendance)
        setCreatingCard(false)

    }

    const creatingForm = function () {
        return (
            <Flex direction='column'  bg='white'  borderRadius= '0.5em' overflow='hidden'
                boxShadow='3px 3px 5px 3px #cccccc'
                padding='1em' marginBottom='2em'>

                <Flex align='flex-end'
                    marginBottom='1em'
                    height={imagePath(imageName) === 'none'? '4em' : '8em'}
                    backgroundColor='brandGray.600'
                    backgroundImage={`url(${imagePath(imageName)})`} backgroundPosition='center' backgroundSize = 'cover'>
                        <Flex bg='#FFFFFFBB' borderRadius='999px' width='30px' height='30px' align='center' justify='center' margin='10px'>
                            <Icon as={BsImage} color='brandGray.700'/>
                        </Flex>
                        <Spacer/>
                        <Avatar src='assets/avatar01.png' 
                        size='md' borderColor='white' borderWidth= '1px'
                        margin='0.5em'/>
                </Flex>

                <Stack spacing={3}>
                    <Input value={intentionValue} onChange={handleChangeIntentionValue} as='textArea' minHeight='5em' maxHeight='5em' maxLength='300' focusBorderColor="brand.500" placeholder="Votre intention" />
                    <Input value={imageName} onChange={handleChangeImagename} placeholder="le nom de votre image ex: image.jpg" focusBorderColor="brand.500" />
                    <ButtonGroup justifyContent="center" size="sm">
                        <IconButton icon={<CheckIcon />} onClick={onSubmitNewIntention} color='brandGray.700' boxSize={4} bg='transparent'/>
                        <IconButton icon={<CloseIcon />} onClick={onCancel} color='brandGray.700' boxSize={4} bg='transparent'/>
                    </ButtonGroup>
                </Stack>
            </Flex>
        )
    }

    const handleClickCreateNew = function (e) {
        console.log("creatingCard in handleClickCreateNew=", creatingCard)
        setCreatingCard(true)
    }


    return (
        <Box 
        marginTop='3em' 
        marginBottom='3em'>
            <Flex align='center' height='50px'>
                <TitleWithIcon color='brandGray.700' iconComponent={TalkIcon} title='Intentions'/>
                <Spacer/>
                <IconButtonSlider icon={<Icon as={ImPlus}/>} title='Créer nouveau' onClick={handleClickCreateNew}/>
                <Box marginRight='10px'/>
                <SquaresIcon fill={selectedCard=='ALL'?'brandGray.700':'brandGray.400'} boxSize={8} onClick={handleClickDisplayAll}/>
            </Flex>
            { creatingCard == true ? creatingForm() : ''}
            { selectedCard =='ALL' ? cardsAll() : cardSelected()}
            { selectedCard !== 'ALL' ? <ChallengeCards transcendance = {transcendance} parentKey={selectedCard}/> : ''}
        </Box>
        
    )
    
}

export default IntentionCards

