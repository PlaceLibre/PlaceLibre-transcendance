import React, { Component } from 'react'
import { Box, Image, Heading } from "@chakra-ui/core";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/core"


//own
import colors from './colors'

class Explore extends Component {
    render () {
        return (
            <Box 
                display= 'flex'
                flex-direction='column'
                justifyContent= 'center'
                marginTop='80px'
                marginLeft='150px'>
                    
                    <Tabs  variant='brandVariant' marginTop='20px'>
                        <TabList >
                            <Tab >Explorer</Tab>
                            <Tab>Mon espace</Tab>
                            <Tab>Contributeurs</Tab>
                        </TabList>

                        <TabPanels >
                            <TabPanel>
                            <Heading>Ceci est un titre</Heading>
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