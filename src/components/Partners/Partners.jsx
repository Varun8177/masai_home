import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Box, Flex, Heading, Image } from "@chakra-ui/react";
import CustomHeading from "../CustomHeading";

const Partners = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 1000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          dots: false,
          infinite: true,
          slidesToShow: 6,
          slidesToScroll: 1,
          autoplay: true,
          speed: 2000,
          autoplaySpeed: 1000,
          cssEase: "linear",
        },
      },
      {
        breakpoint: 1000,
        settings: {
          dots: false,
          infinite: true,
          slidesToShow: 4,
          slidesToScroll: 1,
          autoplay: true,
          speed: 2000,
          autoplaySpeed: 1000,
          cssEase: "linear",
        },
      },
      {
        breakpoint: 480,
        settings: {
          dots: false,
          infinite: true,
          slidesToShow: 2,
          slidesToScroll: 1,
          autoplay: true,
          speed: 2000,
          autoplaySpeed: 1000,
          cssEase: "linear",
        },
      },
    ],
  };
  const partnerData = [
    "https://masai-website-images.s3.ap-south-1.amazonaws.com/moneytap_d5a6c9d532.svg",
    "https://masai-website-images.s3.ap-south-1.amazonaws.com/urbanpiper_2884348a0b.svg",
    "https://masai-website-images.s3.ap-south-1.amazonaws.com/airmeet_93e45faced.svg",
    "https://masai-website-images.s3.ap-south-1.amazonaws.com/paytm_a5c1ce2bc6.svg",
    "https://masai-website-images.s3.ap-south-1.amazonaws.com/whitehat_5a86f1e308.svg",
    "https://masai-website-images.s3.ap-south-1.amazonaws.com/bharatpe_a3a5a3f552.svg",
    "https://masai-website-images.s3.ap-south-1.amazonaws.com/swiggy_bc1b88842e.svg",
    "https://masai-website-images.s3.ap-south-1.amazonaws.com/salesken_baefe048ac.svg",
    "https://masai-website-images.s3.ap-south-1.amazonaws.com/vyapar_3f3770ebb5.svg",
    "https://masai-website-images.s3.ap-south-1.amazonaws.com/capgemini_31a863e94f.svg",
    "https://masai-website-images.s3.ap-south-1.amazonaws.com/simplilearn_f8af8de923.svg",
    "https://masai-website-images.s3.ap-south-1.amazonaws.com/pagarbook_2746958f65.svg",
    "https://masai-website-images.s3.ap-south-1.amazonaws.com/smallcase_1740bcc33f.svg",
    "https://masai-website-images.s3.ap-south-1.amazonaws.com/bharatagri_d4794042fe.svg",
    "https://masai-website-images.s3.ap-south-1.amazonaws.com/sharechat_23a9923a34.svg",
    "https://masai-website-images.s3.ap-south-1.amazonaws.com/leapfinance_0d785d05eb.svg",
    "https://masai-website-images.s3.ap-south-1.amazonaws.com/ola_15b5ee2b82.svg",
    "https://masai-website-images.s3.ap-south-1.amazonaws.com/ibm_795b5429ee.svg",
    "https://masai-website-images.s3.ap-south-1.amazonaws.com/byjus_e7b97a9c80.svg",
    "https://masai-website-images.s3.ap-south-1.amazonaws.com/ajio_a16cd7a85b.svg",
    "https://masai-website-images.s3.ap-south-1.amazonaws.com/globallogic_c30eb641f7.svg",
    "https://masai-website-images.s3.ap-south-1.amazonaws.com/eatfit_9dc276a187.svg",
    "",
  ];
  return (
    <Box py={"20px"} w={{ base: "90%", lg: "95%" }} m={"auto"} my={"20px"}>
      <Heading textAlign={"center"} fontSize={"35"} minH={"20vh"}>
        Meet Our <CustomHeading underline={true} text={"4000+"} /> Hiring
        Partners
      </Heading>
      <Box mt={"-20px"}>
        <Slider {...settings}>
          {partnerData.map((item, i) => (
            <Flex
              key={`partner-${i}`}
              align="center"
              justify="center"
              p={"5px"}
            >
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
        </Slider>
      </Box>
    </Box>
  );
};

export default Partners;
