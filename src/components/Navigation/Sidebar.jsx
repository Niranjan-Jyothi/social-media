import React from "react";
import { Box, Text, Flex, Link, Image } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import { IoHeart } from "react-icons/io5";

const Sidebar = () => {
  return (
    <Box
      height={"100vh"}
      borderRight={"1px solid"}
      borderColor={"whiteAlpha.300"}
      py={8}
      position={"sticky"}
      top={0}
      left={0}
      px={{ base: 2, md: 4 }}
      backgroundColor={"whiteAlpha.300"}
    >
      <Flex direction={"column"} gap={5} cursor={"pointer"}>
        <Flex>
          <Link
            display={"flex"}
            to={"/"}
            as={RouterLink}
            alignItems={"center"}
            gap={4}
            borderRadius={6}
            p={2}
            w={12}
            justifyContent={{ base: "center", md: "flex-start" }}
          >
            <Image maxWidth={"5"} src="src/assets/HomeIcon.png" />
            <Text display={{ base: "none", md: "block" }}>Home</Text>
          </Link>
        </Flex>

        <Flex>
          <Link
            display={"flex"}
            to={"/search"}
            as={RouterLink}
            alignItems={"center"}
            gap={4}
            borderRadius={6}
            p={2}
            w={12}
            justifyContent={{ base: "center", md: "flex-start" }}
          >
            <Image maxWidth={"5"} src="src/assets/Message.png" />
            {/* <FaSearch /> */}
            <Text display={{ base: "none", md: "block" }}>Search</Text>
          </Link>
        </Flex>

        <Flex>
          <Link
            display={"flex"}
            to={"/"}
            as={RouterLink}
            alignItems={"center"}
            gap={4}
            //_hover={{ bg: "whiteAlpha.400" }}
            borderRadius={6}
            p={2}
            w={12}
            justifyContent={{ base: "center", md: "flex-start" }}
          >
            <Image maxWidth={"5"} src="src/assets/Likes.png" />
            {/* <IoHeart size={'25'}/> */}
            <Text display={{ base: "none", md: "block" }}>Likes</Text>
          </Link>
        </Flex>

        <Flex>
          <Link
            display={"flex"}
            to={"/johndoe"} //maybe take from userprofilestore: username
            as={RouterLink}
            alignItems={"center"}
            gap={4}
            //_hover={{ bg: "whiteAlpha.400" }}
            borderRadius={6}
            p={2}
            w={12}
            justifyContent={{ base: "center", md: "flex-start" }}
          >
            <Image maxWidth={"5"} src="src/assets/Bio.png" />
            <Text display={{ base: "none", md: "block" }}>Profile</Text>
          </Link>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Sidebar;
