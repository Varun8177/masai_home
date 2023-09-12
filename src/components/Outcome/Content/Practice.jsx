import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";
import Container from "./Practice/Container";

const Practice = () => {
  const SoftwareData = [
    {
      text: "Practical Coding",
      highlight: "1200+ hr.",
    },
    {
      highlight: "450+ hr.",
      text: "DSA, MAth & Logic",
    },
    {
      highlight: "100+ hr.",
      text: "Soft Skill Development",
    },
    {
      highlight: "100+",
      text: "Projects & Hackathons",
    },
  ];
  const AnalyticsData = [
    {
      text: "Analytical Skill Training",
      highlight: "1200+ hr.",
    },
    {
      highlight: "450+ hr.",
      text: "Soft Skill Development",
    },
    {
      highlight: "100+ hr.",
      text: "Business Skill Development",
    },
    {
      highlight: "100+",
      text: "Live Technical Marathons",
    },
  ];
  return (
    <Box>
      <Heading
        fontSize={"22px"}
        letterSpacing={"wide"}
        textAlign={"center"}
        mb={"20px"}
      >
        Don't Just Learn Theory, Practice To Learns
      </Heading>
      <Flex
        minH={"50vh"}
        justifyContent={"space-between"}
        gap={"10px"}
        flexWrap={"wrap"}
      >
        <Container
          data={SoftwareData}
          title={"Software Development"}
          Logo={
            "https://www.masaischool.com/images/new-homepage/outcome/course-icon1.png"
          }
        />
        <Container
          data={AnalyticsData}
          title={"Data Analytics"}
          Logo={
            "https://www.masaischool.com/images/new-homepage/outcome/course-icon.png"
          }
        />
      </Flex>
    </Box>
  );
};

export default Practice;
