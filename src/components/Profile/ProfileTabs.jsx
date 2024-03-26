import { Box, Flex, Text } from "@chakra-ui/react";
import { BsBookmark, BsGrid3X3, BsSuitHeart } from "react-icons/bs";
import { GrGallery } from "react-icons/gr";

const ProfileTabs = () => {
  return (
    <Flex
      w={"full"}
      justifyContent={{ base: "space-around", md: "center" }}
      gap={{ base: 4, sm: 10 }}
      textTransform={"uppercase"}
      fontWeight={"bold"}
    >
      <Flex
        borderTop={"1px solid black"}
        alignItems={"center"}
        p="3"
        gap={1}
        cursor={"pointer"}
      >
        <Box fontSize={20}>
          <GrGallery />
        </Box>
        <Text fontSize={12} display={{ base: "none", sm: "block" }}>
          Posts
        </Text>
      </Flex>

      <Flex alignItems={"center"} p="3" gap={1} cursor={"pointer"}>
        <Box fontSize={20}>
          <BsBookmark />
        </Box>
        <Text fontSize={12} display={{ base: "none", sm: "block" }}>
          Saved
        </Text>
      </Flex>
    </Flex>
  );
};

export default ProfileTabs;
