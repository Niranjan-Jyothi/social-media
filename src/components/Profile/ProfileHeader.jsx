import {
  Avatar,
  AvatarGroup,
  Button,
  Flex,
  Text,
  VStack,
  useDisclosure,
} from "@chakra-ui/react";
import useUserProfileStore from "../../store/userProfileStore";

const ProfileHeader = () => {
  const { userProfile } = useUserProfileStore();

  const visitingOwnProfileAndAuth = true;
  const visitingAnotherProfileAndAuth = false;
  const isFollowing = false;
  const isUpdating = false;

  return (
    <Flex
      gap={{ base: 4, sm: 10 }}
      py={10}
      direction={{ base: "column", md: "row" }}
    >
      <AvatarGroup
        size={{ base: "xl", md: "2xl" }}
        justifySelf={"center"}
        alignSelf={"flex-start"}
        mx={"auto"}
        borderColor={"black"}
      >
        <Avatar src={userProfile.ProfilePic} />
      </AvatarGroup>

      <VStack alignItems={"start"} gap={2} mx={"auto"} flex={1}>
        <Flex
          gap={4}
          direction={{ base: "column", sm: "row" }}
          justifyContent={{ base: "center", md: "flex-start" }}
          alignItems={"center"}
          w={"full"}
        >
          <Flex
            alignItems={"center"}
            gap={{ base: 4, md: 3, sm: 1 }}
            direction={{ base: "column", md: "row" }}
          >
            <Text fontSize={"md"} fontWeight={"bold"}>
              {userProfile.Name}
            </Text>

            <Text fontSize={{ base: "sm", md: "lg" }}>
              @{userProfile.UserName}
            </Text>
          </Flex>

          {visitingAnotherProfileAndAuth && (
            <Flex gap={4} alignItems={"center"} justifyContent={"center"}>
              <Button
                bg={"blue.500"}
                color={"white"}
                _hover={{ bg: "blue.600" }}
                size={{ base: "xs", md: "sm" }}
                //onClick={handleFollowUser}
                isLoading={isUpdating}
              >
                {isFollowing ? "Unfollow" : "Follow"}
              </Button>
            </Flex>
          )}
        </Flex>

        <Flex alignItems={"center"} gap={{ base: 2, sm: 4 }}>
          <Flex direction={{ base: "column", md: "row" }} alignItems={"center"}>
            <Text fontSize={{ base: "xs", md: "sm" }} color={"GrayText"}>
              Posts
            </Text>
            <Text
              fontSize={{ base: "l", md: "sm" }}
              fontWeight={"bold"}
              mr={1}
              ml={{ md: "1" }}
            >
              {userProfile.Posts}
            </Text>
          </Flex>

          <Flex direction={{ base: "column", md: "row" }} alignItems={"center"}>
            <Text fontSize={{ base: "xs", md: "sm" }} color={"GrayText"}>
              Followers
            </Text>
            <Text
              fontSize={{ base: "l", md: "sm" }}
              fontWeight={"bold"}
              mr={1}
              ml={{ md: "1" }}
            >
              {userProfile.Followers}
            </Text>
          </Flex>

          <Flex direction={{ base: "column", md: "row" }} alignItems={"center"}>
            <Text fontSize={{ base: "xs", md: "sm" }} color={"GrayText"}>
              Follows
            </Text>
            <Text
              fontSize={{ base: "l", md: "sm" }}
              fontWeight={"bold"}
              mr={1}
              ml={{ md: "1" }}
            >
              {userProfile.Following}
            </Text>
          </Flex>
        </Flex>

        {/* <Text fontSize={"sm"}>{userProfile.bio}</Text> */}
      </VStack>
      {/* {isOpen && <EditProfile isOpen={isOpen} onClose={onClose} />} */}
    </Flex>
  );
};

export default ProfileHeader;
