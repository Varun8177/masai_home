import { Box, Button, Heading, Image } from "@chakra-ui/react";
import React from "react";
import CustomHeading from "../CustomHeading";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Community = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          infinite: true,
          speed: 500,
          slidesToShow: 5,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 1000,
        settings: {
          infinite: true,
          speed: 500,
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          infinite: true,
          speed: 500,
          slidesToShow: 1,
          slidesToScroll: 3,
        },
      },
    ],
  };

  const Photos = [
    "https://www.masaischool.com/images/new-homepage/community/community5.webp",
    "https://www.masaischool.com/images/new-homepage/community/community1.webp",
    "https://www.masaischool.com/images/new-homepage/community/community2.webp",
    "https://www.masaischool.com/images/new-homepage/community/community3.webp",
    "https://www.masaischool.com/images/new-homepage/community/community4.webp",
    "https://www.masaischool.com/images/new-homepage/community/community6.webp",
    "https://www.masaischool.com/images/new-homepage/community/community7.webp",
    "https://www.masaischool.com/images/new-homepage/community/community8.webp",
    "https://www.masaischool.com/images/new-homepage/community/community9.webp",
    "https://www.masaischool.com/images/new-homepage/community/community10.webp",
    "https://www.masaischool.com/images/new-homepage/community/community11.webp",
    "https://www.masaischool.com/images/new-homepage/community/community12.webp",
  ];
  return (
    <Box w={"100%"} bgColor={"#f9f9f9"} pos={"relative"}>
      <Box
        minH={"50vh"}
        my={"20px"}
        py={"10px"}
        w={{ base: "90%", lg: "96%" }}
        m={"auto"}
      >
        <Heading textAlign={"center"} fontSize={"35"} mt={"20px"}>
          Be A Part Of Our Thriving{" "}
        </Heading>
        <Heading textAlign={"center"} fontSize={"35"} mb={"40px"}>
          <CustomHeading underline={true} text={"Tech Community"} />
        </Heading>
        <Slider {...settings}>
          {Photos.map((item, i) => (
            <Image
              key={i}
              src={item}
              alt="community img"
              w={"350px"}
              h={"250px"}
              objectFit={"contain"}
            />
          ))}
        </Slider>

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
        >
          JOIN OUR COMMUNITY
        </Button>
      </Box>
    </Box>
  );
};

export default Community;
