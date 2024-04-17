import { Box, Link, Flex, Image } from "@chakra-ui/react";
import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { FaSearch } from "react-icons/fa";

const Footer = () => {
  return (
    <Box height={"20"} width={"100vw"} bg={"white"} borderTopRadius={"30"}>
      <Flex
        direction={"row"}
        alignItems={"center"}
        justifyContent={"space-evenly"}
        cursor={"pointer"}
      >
        <Link
          display={"flex"}
          to={"/"}
          as={RouterLink}
          alignItems={"center"}
          gap={4}
          borderRadius={6}
          p={2}
          w={{ base: 10, md: "full" }}
          justifyContent={{ base: "center", md: "flex-start" }}
        >
          <Image src="src/assets/HomeIcon.png" />
        </Link>

        <Link
          display={"flex"}
          to={"/search"}
          as={RouterLink}
          alignItems={"center"}
          gap={4}
          borderRadius={6}
          p={2}
          w={{ base: 10, md: "full" }}
          justifyContent={{ base: "center", md: "flex-start" }}
        >
          {/* <Image src="src/assets/Message.png" /> */}
          <FaSearch />
        </Link>

        <Link
          display={"flex"}
          to={"/"}
          as={RouterLink}
          alignItems={"center"}
          gap={4}
          borderRadius={6}
          p={2}
          justifyContent={{ base: "center", md: "flex-start" }}
        >
          <Image src="src/assets/NewPost.png" height={"80%"} width={"80%"} />
        </Link>

        <Link
          display={"flex"}
          to={"/"}
          as={RouterLink}
          alignItems={"center"}
          gap={4}
          //_hover={{ bg: "whiteAlpha.400" }}
          borderRadius={6}
          p={2}
          w={{ base: 10, md: "full" }}
          justifyContent={{ base: "center", md: "flex-start" }}
        >
          <Image src="src/assets/Likes.png" />
        </Link>

        <Link
          display={"flex"}
          to={"/johndoe"} //maybe take from userprofilestore: username
          as={RouterLink}
          alignItems={"center"}
          gap={4}
          //_hover={{ bg: "whiteAlpha.400" }}
          borderRadius={6}
          p={2}
          w={{ base: 10, md: "full" }}
          justifyContent={{ base: "center", md: "flex-start" }}
        >
          <Image src="src/assets/Bio.png" />
        </Link>
      </Flex>
    </Box>
  );
};

export default Footer;
