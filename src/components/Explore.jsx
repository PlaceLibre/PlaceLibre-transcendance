import React, { Component } from 'react'
import { Box, Image, Heading } from "@chakra-ui/core";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/core"


//own
import colors from './colors'
import CausesFilter from './CausesFilter'
import IntentionCards from './IntentionCards'

class Explore extends Component {
    render () {
        return (
            <Box 
                display= 'flex'
                flex-direction='column'
                justifyContent= 'center'
                marginTop='80px'
                marginLeft='150px'
                minHeight = '100vh'>
                    
                    <Tabs  variant='brandVariant' marginTop='20px' >
                        <TabList justifyContent= 'center'>
                            <Tab >EXPLORER</Tab>
                            <Tab>MON ESPACE</Tab>
                            <Tab>CONTRIBUTEURS</Tab>
                        </TabList>

                        <TabPanels >
                            <TabPanel>
                                <CausesFilter/>
                                <IntentionCards/>
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
}

export default Explore