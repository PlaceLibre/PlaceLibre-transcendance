import React, { Component } from 'react'
import { Box } from "@chakra-ui/core";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/core"


//own
import CausesFilter from './CausesFilter'
import IntentionCards from './IntentionCards'
import {spaceExemple} from './spaceExemple'


function Explore () {
    const transcendance= spaceExemple.transcendance

    return (
        <Box 
            display= 'flex'
            flex-direction='column'
            justifyContent= 'center'
            marginTop='80px'
            marginLeft='150px'
            minHeight = '100vh'>
                
                <Tabs  variant='brandVariant' marginTop='20px' width='800px'>
                    <TabList justifyContent= 'center'>
                        <Tab >EXPLORER</Tab>
                        <Tab>MON ESPACE</Tab>
                        <Tab>CONTRIBUTEURS</Tab>
                    </TabList>

                    <TabPanels >
                        <TabPanel>
                            <CausesFilter/>
                            <IntentionCards transcendance = {transcendance}/>
                        </TabPanel>
                        <TabPanel>
                        <p>two!</p>
                        </TabPanel>
                        <TabPanel>
                        <p>three!</p>
                        </TabPanel>
                    </TabPanels>
                        </Tabs>
            </Box>
    )

}

export default Explore