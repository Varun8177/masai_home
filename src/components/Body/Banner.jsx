import { Box, Image } from '@chakra-ui/react'
import React from 'react'

const Banner = () => {
  return (
      <>
        <Box display={["block","block","none"]} mt="90px">
         <Image src={"https://masai-website-images.s3.ap-south-1.amazonaws.com/mobile_3.webp"} w={"100%"}/>
        </Box>
        <Box display={["none","none","block"]} mt="90px">
         <Image src={"https://masai-website-images.s3.ap-south-1.amazonaws.com/desktop_3.webp"}/>
        </Box>
      </>
  )
}

export default Banner