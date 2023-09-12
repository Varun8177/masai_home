import React from "react";
import { Box, Button, Flex, Heading, Image, Show } from "@chakra-ui/react";
import CustomHeading from "../CustomHeading";
import Container from "./Container";
import TextBox from "./container/TextBox";
const Curriculum = () => {
  const Details = [
    {
      image:
        "https://res.cloudinary.com/megamart/image/upload/v1694518203/laptop_qjvp4t.svg",
      heading: "100% Live Distance Learning",
      text: "India’s Only Live Tech-Learning Course With Tier 1 Instructors. Get Real-Time Feedback, Interactive Sessions & A Personalised Learning Experience.",
    },
    {
      image:
        "https://res.cloudinary.com/megamart/image/upload/v1694518282/star_alskp9.svg",
      heading: "Generative AI Integrated Program",
      text: "Harness & Implement The Power Of AI In Coding & Data Analytics. What’s More? Use Custom AI Tools To Enhance Placement Preparation.",
    },
    {
      image:
        "https://res.cloudinary.com/megamart/image/upload/v1694518414/bulb_w2frwp.svg",
      heading: "Industry Ready Curriculum",
      text: "Our Curriculum Is Regularly Updated Through Industry Feedback. In-Demand Specialisations Are Added To Aid Our Students Launch Sustainable Careers.",
    },
    {
      image:
        "https://res.cloudinary.com/megamart/image/upload/v1694518414/check_kjeohr.svg",
      heading: "Focus On Learning Agility",
      text: "We Prioritise Flexible Thinking & Continuous Skill Development. Stay Nimble In An Ever-Changing World By Embracing Adaptability, Curiosity & Rapid Learning.",
    },
    {
      image:
        "https://res.cloudinary.com/megamart/image/upload/v1694518414/certificate_gnxqc3.svg",
      heading: "Industry Ready In Just 25 - 35 Weeks",
      text: "Curriculum At Masai Is Designed To Be Intensive & Extensive. With Our Unique Pedagogy Learn Right In Less Time. All We Ask Is Your Dedication!",
    },
  ];
  return (
    <Box w={"80%"} m={"auto"} pos={"relative"} py={"10px"}>
      <Heading textAlign={"center"} fontSize={"35"} mb={"20px"}>
        Best-In-Class <CustomHeading underline={true} text={"Curriculum"} /> &{" "}
        <CustomHeading underline={true} text={"Pedagogy"} />
      </Heading>
      <Show above="lg">
        <Flex
          h={"70vh"}
          overflowY={"auto"}
          flexWrap={"wrap"}
          className="scroll-container"
        >
          <Container />
          <Flex
            w={"fit-content"}
            alignItems={"center"}
            justifyContent={"center"}
            flexGrow={1}
            h={"70vh"}
            pos={"absolute"}
            right={0}
          >
            <Image
              src="https://www.masaischool.com/images/new-homepage/curriculum-style/course-image1.webp"
              objectFit={"contain"}
              rounded={"50px"}
              h={"auto"}
              w={"auto"}
            />
          </Flex>
        </Flex>
      </Show>
      <Show below="lg">
        <Box>
          {Details.map((item, i) => (
            <Box
              key={i}
              m={"auto"}
              border={"1px solid #cfd0ee"}
              rounded={"lg"}
              p={"1rem"}
              my={"20px"}
              textAlign={"center"}
            >
              <Image src={item.image} w={"50px"} m={"auto"} />
              <TextBox text={item.text} heading={item.heading} mobile={true} />
            </Box>
          ))}
        </Box>
      </Show>
      <Button
        textAlign="center"
        margin="auto"
        display="block"
        bgColor={"#ed0331"}
        color={"white"}
        _hover={{ bgColor: "#cc032a" }}
        fontWeight={400}
        px={"10"}
        h={"50px"}
        fontSize={"xl"}
        mt={"20px"}
      >
        GET YOUR DREAM JOB
      </Button>
    </Box>
  );
};

export default Curriculum;
