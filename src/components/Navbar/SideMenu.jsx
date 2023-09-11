import { Box, Button, Drawer, DrawerBody, DrawerContent, DrawerHeader, DrawerOverlay, IconButton, Input, useDisclosure } from '@chakra-ui/react'
import React from 'react'
import {RiMenuLine} from "react-icons/ri"

const SideMenu = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <Box display={["block","block","block","none"]}>
 
      <IconButton type='button'icon={<RiMenuLine color='black' size={"20px"}/>} onClick={onOpen} bg="none" _hover={{bg:"none"}}/>
      <Drawer placement={"top"} onClose={onClose} isOpen={isOpen} >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader borderBottomWidth='1px'>Basic Drawer</DrawerHeader>
          <DrawerBody>
            <p>Some contents...</p>
            <p>Some contents...</p>
            <p>Some contents...</p>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    
    </Box>
  )
}

export default SideMenu