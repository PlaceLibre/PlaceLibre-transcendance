import React, { Component, useState } from 'react'
import { TalkIcon, SquaresIcon } from './ownIcons'
import { Box, Icon } from "@chakra-ui/core";
import { Grid } from "@chakra-ui/core"
import { ImPlus } from "react-icons/im";
import { Flex, Spacer } from "@chakra-ui/core"


import TitleWithIcon from './TitleWithIcon'
import IconButtonSlider from './IconButtonSlider'
import Card from './Card'




function ChallengeCards ({transcendance, parentKey}) { 
    const [selectedCard, setSelectedCard] = useState('ALL')

    const handleClickSelection = function (e) {
        setSelectedCard(e.currentTarget.getAttribute('cardkey'))
    }

    const handleClickDisplayAll =function (e) {
        setSelectedCard('ALL')
    }

    const list= transcendance.intentions[parentKey].children
    const challenges = {}
    for (var i=0; i < list.length; i++) {
        var challengeKey=list[i]
        challenges[challengeKey]=transcendance.challenges[challengeKey]
    }

    const cardsAll = function () {
        const cards=Object.keys(challenges).map(key =>
            <Card key={key} cardkey={key} elementData={challenges[key]} onClick={handleClickSelection}/>);
        
        return (
            <Grid gridAutoFlow= 'row' templateColumns="repeat(2, 1fr)" gap={4}>
                {cards}
            </Grid>
        )
    }

    const cardSelected = function (){
        return <Card key={selectedCard} elementData={challenges[selectedCard]}/>
    }

    return (
        <Box 
        marginTop='3em' 
        marginBottom='3em'>
            <Flex align='center' height='50px'>
                <TitleWithIcon color='brandGray.700' iconComponent={TalkIcon} title='Challenges'/>
                <Spacer/>
                <IconButtonSlider icon={<Icon as={ImPlus}/>} title='Créer nouveau'/>
                <Box marginRight='10px'/>
                <SquaresIcon fill='brandGray.700' boxSize={8} onClick={handleClickDisplayAll}/>
            </Flex>
            { selectedCard =='ALL' ? cardsAll() : cardSelected()}
        </Box>
        
    )
    
}

export default ChallengeCards