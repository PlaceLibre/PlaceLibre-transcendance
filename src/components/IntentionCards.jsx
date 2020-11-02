import React, { Component } from 'react'
import { TalkIcon, SquaresIcon } from './ownIcons'
import { Box, Heading, Text, Icon, IconButton } from "@chakra-ui/core";
import { Grid } from "@chakra-ui/core"
import { BsFillHeartFill, BsPlusCircle, BsImage } from "react-icons/bs";
import { ImPlus, ImPencil } from "react-icons/im";
import { Avatar, AvatarBadge } from "@chakra-ui/core"
import { Flex, Spacer } from "@chakra-ui/core"


import TitleWithIcon from './TitleWithIcon'
import {intentionExemples} from './intentionExemples'
import IconButtonSlider from './IconButtonSlider'
import Card from './Card'
import {spaceExemple} from './spaceExemple'



function IntentionCards () { 

    const cards=Object.keys(spaceExemple.transcendance.intentions).map(key =>
        <Card key={key} elementData={spaceExemple.transcendance.intentions[key]}/>)

    return (
        <Box 
        marginTop='3em' 
        marginBottom='3em'>
            <Flex align='center' height='50px'>
                <TitleWithIcon color='brandGray.700' iconComponent={TalkIcon} title='Intentions'/>
                <Spacer/>
                <IconButtonSlider icon={<Icon as={ImPlus}/>} title='Créer nouveau'/>
                <Box marginRight='10px'/>
                <SquaresIcon fill='brandGray.700' boxSize={8}/>
            </Flex>
            <Grid gridAutoFlow= 'row' templateColumns="repeat(2, 1fr)" gap={4}>
                {cards}
            </Grid>
            
        </Box>
        
    )
    
}

export default IntentionCards

