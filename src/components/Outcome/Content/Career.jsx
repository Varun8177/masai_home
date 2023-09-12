import { Box, Flex, Heading, Image } from "@chakra-ui/react";
import React from "react";
import ReactPlayer from "react-player";

const Career = () => {
  const details = [
    {
      highlight: "₹6.9 LPA",
      text: "Average CTC",
    },
    {
      highlight: "3500+",
      text: "Careers Launched",
    },
    {
      highlight: "4000+",
      text: "Hiring Partners",
    },
  ];
  const partnerData = [
    "https://masai-website-images.s3.ap-south-1.amazonaws.com/moneytap_d5a6c9d532.svg",
    "https://masai-website-images.s3.ap-south-1.amazonaws.com/urbanpiper_2884348a0b.svg",
    "https://masai-website-images.s3.ap-south-1.amazonaws.com/airmeet_93e45faced.svg",
    "https://masai-website-images.s3.ap-south-1.amazonaws.com/paytm_a5c1ce2bc6.svg",
    "https://masai-website-images.s3.ap-south-1.amazonaws.com/whitehat_5a86f1e308.svg",
    "https://masai-website-images.s3.ap-south-1.amazonaws.com/bharatpe_a3a5a3f552.svg",
    "https://masai-website-images.s3.ap-south-1.amazonaws.com/swiggy_bc1b88842e.svg",
  ];
  return (
    <Box>
      <Heading
        fontSize={"22px"}
        letterSpacing={"wide"}
        textAlign={"center"}
        mb={"20px"}
      >
        Launch a sustainable career
      </Heading>

      <Flex
        justifyContent={"space-between"}
        gap={"10px"}
        flexDir={{ base: "column", lg: "row" }}
      >
        <Box
          w={{ base: "100%", lg: "45%" }}
          rounded={"lg"}
          overflow={"hidden"}
          flexGrow={1}
        >
          <iframe
            width="100%"
            height="324"
            src="https://www.youtube.com/embed/0867JeIfyLY"
            title="Cab Driver became Software Engineer – Meet Ashish Raj from Munger, Bihar"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </Box>
        <Box
          w={{ base: "100%", lg: "35%" }}
          display={{ base: "flex", lg: "block" }}
          justifyContent={"space-between"}
          flexWrap={"wrap"}
        >
          {details.map((item, i) => (
            <Box key={i} w={"100%"} mb={"20px"}>
              <Box
                bgColor={"#1a9fbd"}
                display={"flex"}
                p={"1rem"}
                rounded={"lg"}
                gap={"10px"}
              >
                <Heading color={"#FFDB66"} w={{ lg: "60%" }}>
                  {item.highlight}
                </Heading>
                <Heading color={"white"} fontSize={"20px"} w={"35%"}>
                  {item.text.split(" ")[0]}
                  <br />
                  {item.text.split(" ")[1]}
                </Heading>
              </Box>
            </Box>
          ))}
        </Box>
      </Flex>
      <Flex justifyContent={"space-between"} mt={"10px"} flexWrap={"wrap"}>
        {partnerData.map((item, i) => (
          <Flex key={`partner-${i}`} align="center" justify="center" p={"5px"}>
            <Flex
              boxShadow={"0px 0px 13px #B6BEFC"}
              rounded={"20px"}
              overflow={"hidden"}
              w={"100px"}
              alignItems={"center"}
            >
              <Image src={item} w={"100px"} m={"auto"} />
            </Flex>
          </Flex>
        ))}
      </Flex>
    </Box>
  );
};

export default Career;
