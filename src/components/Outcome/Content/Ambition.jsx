import { Box, Flex, Heading } from "@chakra-ui/react";
import React from "react";
import CustomContainer from "./Ambition/CustomContainer";

const Ambition = () => {
  const enterpricesData = [
    "https://masai-website-images.s3.ap-south-1.amazonaws.com/moneytap_d5a6c9d532.svg",
    "https://masai-website-images.s3.ap-south-1.amazonaws.com/urbanpiper_2884348a0b.svg",
    "https://masai-website-images.s3.ap-south-1.amazonaws.com/airmeet_93e45faced.svg",
    "https://masai-website-images.s3.ap-south-1.amazonaws.com/paytm_a5c1ce2bc6.svg",
    "https://masai-website-images.s3.ap-south-1.amazonaws.com/whitehat_5a86f1e308.svg",
    "https://masai-website-images.s3.ap-south-1.amazonaws.com/bharatpe_a3a5a3f552.svg",
  ];
  const unicornData = [
    "https://masai-website-images.s3.ap-south-1.amazonaws.com/simplilearn_f8af8de923.svg",
    "https://masai-website-images.s3.ap-south-1.amazonaws.com/pagarbook_2746958f65.svg",
    "https://masai-website-images.s3.ap-south-1.amazonaws.com/smallcase_1740bcc33f.svg",
    "https://masai-website-images.s3.ap-south-1.amazonaws.com/bharatagri_d4794042fe.svg",
    "https://masai-website-images.s3.ap-south-1.amazonaws.com/sharechat_23a9923a34.svg",
    "https://masai-website-images.s3.ap-south-1.amazonaws.com/leapfinance_0d785d05eb.svg",
  ];
  return (
    <Box>
      <Heading
        fontSize={"22px"}
        letterSpacing={"wide"}
        textAlign={"center"}
        mb={"20px"}
      >
        Re-imagine your career potential
      </Heading>
      <Flex
        w={"100%"}
        gap={"10px"}
        justifyContent={"space-between"}
        minH={"50vh"}
        flexWrap={"wrap"}
      >
        <CustomContainer data={enterpricesData} title={"Enterprices"} />
        <CustomContainer data={unicornData} title={"Unicorns"} />
        <Flex
          flexDir={"column"}
          justifyContent={"space-between"}
          w={"28%"}
          minH={"50vh"}
          minW={"250px"}
          flexGrow={1}
        >
          <Flex
            w={"100%"}
            h={"48%"}
            bgColor={"#1a9fbd"}
            rounded={"lg"}
            textAlign={"center"}
            alignItems={"center"}
            justify={"center"}
          >
            <Box p={"1rem"} gap={"10px"}>
              <Heading color={"#FFDB66"}>36 LPA</Heading>
              <Heading color={"white"} fontSize={"20px"}>
                Highest CTC
              </Heading>
            </Box>
          </Flex>
          <Flex
            w={"100%"}
            h={"48%"}
            bgColor={"#1a9fbd"}
            rounded={"lg"}
            textAlign={"center"}
            alignItems={"center"}
            justify={"center"}
          >
            <Box p={"1rem"} gap={"10px"}>
              <Heading color={"#FFDB66"}>36 LPA</Heading>
              <Heading color={"white"} fontSize={"20px"}>
                Highest CTC
              </Heading>
            </Box>
          </Flex>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Ambition;
