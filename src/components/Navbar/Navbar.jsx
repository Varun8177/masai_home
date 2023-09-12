import { Box, Button, Flex, Image, Link } from "@chakra-ui/react";
import React from "react";
import SideMenu from "./SideMenu";

const Navbar = () => {
  return (
    <Box position={"fixed"} w={"100%"} bg={"#fff"} top="0%" zIndex={"200"}>
      <Flex
        fontWeight={600}
        fontSize={"14px"}
        letterSpacing={"2px"}
        alignItems={"center"}
        maxW={"1400"}
        m={"auto"}
        justifyContent={"space-between"}
        p={"20px"}
      >
        <Flex>
          <Box>
            <SideMenu />
          </Box>
          <Image
            src="https://masai-website-images.s3.ap-south-1.amazonaws.com/logo.png"
            alt="masai logo"
          />
        </Flex>

        <Flex
          display={["none", "none", "none", "flex"]}
          fontSize={["12px", "12px", "12px", "12px", "14px"]}
        >
          <Link
            _hover={{ backgroundColor: "#fffafb", color: "red" }}
            p={[
              "10px 15px",
              "10px 15px",
              "10px 15px",
              "10px 10px",
              "10px 15px",
            ]}
            borderRadius={"6px"}
            href="#"
          >
            COURSES
          </Link>
          <Link
            href="#"
            _hover={{ backgroundColor: "#fffafb", color: "red" }}
            p={[
              "10px 15px",
              "10px 15px",
              "10px 15px",
              "10px 10px",
              "10px 15px",
            ]}
            borderRadius={"6px"}
          >
            FEES
          </Link>
          <Link
            href="#"
            _hover={{ backgroundColor: "#fffafb", color: "red" }}
            p={[
              "10px 15px",
              "10px 15px",
              "10px 15px",
              "10px 10px",
              "10px 15px",
            ]}
            borderRadius={"6px"}
          >
            EVENTS
          </Link>
          <Link
            href="#"
            _hover={{ backgroundColor: "#fffafb", color: "red" }}
            p={[
              "10px 15px",
              "10px 15px",
              "10px 15px",
              "10px 10px",
              "10px 15px",
            ]}
            borderRadius={"6px"}
          >
            LEARN
          </Link>
          <Link
            href="#"
            _hover={{ backgroundColor: "#fffafb", color: "red" }}
            p={[
              "10px 15px",
              "10px 15px",
              "10px 15px",
              "10px 10px",
              "10px 15px",
            ]}
            borderRadius={"6px"}
          >
            SUCCESS STORIES
          </Link>
          <Link
            href="#"
            _hover={{ backgroundColor: "#fffafb", color: "red" }}
            p={[
              "10px 15px",
              "10px 15px",
              "10px 15px",
              "10px 10px",
              "10px 15px",
            ]}
            borderRadius={"6px"}
          >
            HIRE FROM US
          </Link>
        </Flex>

        <Flex gap={"20px"} display={["none","flex"]}>
          <Button color={"rgb(110, 113, 204)"} bg={"#e5feff"}>
            REFER & EARN
          </Button>
          <Button color={"red"} border={"1px solid red"} bg={"none"}>
            SIGN UP
          </Button>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Navbar;
