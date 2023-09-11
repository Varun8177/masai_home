import { Box, Button, Flex, Heading, Image, Text } from '@chakra-ui/react'
import React from 'react'

const UserShowCast = () => {
  return (
    <Box bg="#fcfafa">
       <Flex flexDirection={["column","column","column","row"]} 
              maxW={"1300"} m={"auto"}  
              justifyContent={"space-between"} pt={"50px"} pl={"10px"} pr="10px" alignItems={"center"} >

        
        <Box textAlign={["center","center","center","initial"]} w={"60%"} >
           <Heading fontSize={["30","30","30","55"]} fontWeight={700}>Realise Your Potential 
         
             <Box  w={"fit-content"} m={["auto","auto","auto","initial"]}  >With 
              
              <span style={{color:"red",width:"fitContent"}} > Assured Outcomes
               <Image ml={["90","90","90","180"]}  w={["250px","250px","250px","450px"]}   src="https://www.masaischool.com/images/new-homepage/yellow-vector.svg"/>
              </span>
              </Box>   Delivered.</Heading>

            <Text fontSize={["16px","16px","16px","24px"]} m={"20px 0px"}>India’s only outcome-based career institute. <br/>
                Enter the tech workforce industry-ready.</Text>

           <Button colorScheme='red' color={"#fff"}>GET YOUR DREM JOB</Button>

        </Box>

        <Box w={"90%"} textAlign={"center"} display={"none"}>
          <Heading fontSize={"20"} fontWeight={700} >Realise Your Potential With <spna 
             style={{color:"red",border:"1px solid red",position:"relative"}} >Assured Outcomes
                <Image position={"absolute"} w={"264px"} bottom={"-5px"}  src='https://www.masaischool.com/images/new-homepage/yellow-vector.svg'/>
              </spna> Delivered.
           </Heading>

           <Text fontSize={"16px"} m={"20px 0px"}>India’s only outcome-based career institute.
                Enter the tech workforce industry-ready.</Text>

                <Button colorScheme='red' color={"#fff"}>GET YOUR DREM JOB</Button>
        </Box>

        <Box maxW={"410px"} mt={["50px","50px","50px","0"]} >
         <Box transform="scale(1) rotate(-7deg)"  rounded="xl" borderWidth="1px"borderColor="#3470E4">

          <Box overflow="hidden"  borderRadius={"6px 6px 0px 0px"} transform="scale(1) rotate(7deg)" bg="#d6e2fa" h={"500px"}>
           <Image src="https://www.masaischool.com/images/new-homepage/banner-student-image3.webp" alt="Your Image" pos={"relative"} top={"100"} />
          </Box>
        </Box>

         {/* <Box pos={""} opacity={.7} boxShadow={"2xl"} bg={"white"} bottom={"55px"} right={"210px"} p={"10px"} borderRadius={"6px"}>
          
          <img src='https://www.masaischool.com/images/new-homepage/quote-start.svg'/>
               <Text>
                I liked that every thing is taught in a structured manner, 
                 and there is no spoon feeding. That helps us learn by ourself when we do.
                 </Text>
                 <img src='https://www.masaischool.com/images/new-homepage/quote-end.svg'/>
         </Box> */}
         
        </Box>
        
         
       </Flex>
    </Box>
  )
}

export default UserShowCast




