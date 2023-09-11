import { Box, Flex, Heading, Image } from "@chakra-ui/react";
import CustomHeading from "../CustomHeading";
function News() {
  return (
    <Box w={"80%"} m={"auto"} pos={"relative"} mb={"20px"}>
      <Heading textAlign={"center"} fontSize={"35"} mb={"20px"}>
        Masai In <CustomHeading underline={true} text={"News"} />
      </Heading>
      <Flex justifyContent={"space-between"}>
        <Box w={"30%"}>
          <Image
            src={
              "https://masai-website-images.s3.ap-south-1.amazonaws.com/PR_Article_Prateek_Shukla_Gen_AI_92324e2d6b.jpeg"
            }
            alt={"image-1"}
            w={"100%"}
            h={"250px"}
            objectFit={"cover"}
            mb={"20px"}
          />
          <Heading color={"#293241"} fontSize={"lg"}>
            Empowering Education Through GenAI
          </Heading>
        </Box>
        <Box w={"30%"}>
          <Image
            src={
              "https://masai-website-images.s3.ap-south-1.amazonaws.com/PR_Thungy_1_420b226e5b.webp"
            }
            alt={"image-1"}
            w={"100%"}
            h={"250px"}
            objectFit={"cover"}
            mb={"20px"}
          />
          <Heading color={"#293241"} fontSize={"lg"}>
            Masai School targets fivefold revenue growth in three years
          </Heading>
        </Box>
        <Box w={"30%"}>
          <Image
            src={
              "https://masai-website-images.s3.ap-south-1.amazonaws.com/PR_Thingy_2_f2c52e6fcf.webp"
            }
            alt={"image-1"}
            w={"100%"}
            h={"250px"}
            objectFit={"cover"}
            mb={"20px"}
          />
          <Heading color={"#293241"} fontSize={"lg"}>
            Beyond Degrees: Embracing Alternative Credentialing and
            Micro-learning in Tech Recruitment
          </Heading>
        </Box>
      </Flex>
    </Box>
  );
}
export default News;
