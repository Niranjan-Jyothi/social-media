import React from "react";
import { Box, Flex, useMediaQuery, useTheme } from "@chakra-ui/react";
import Sidebar from "../../components/Navigation/Sidebar";
import Footer from "../../components/Navigation/Footer";

const renderSideBar = (children) => {
  return (
    <Flex flexDir="row">
      {/* sidebar on the left */}
      <Box w={{ base: "70px", md: "240px" }}>
        <Sidebar />
      </Box>

      {/* the page content on the right */}
      <Box
        flex={1}
        w={{ base: "calc(100% - 70px)", md: "calc(100% - 240px)" }}
        mx={"auto"}
      >
        {children}
      </Box>
    </Flex>
  );
};

const renderFooter = (children) => {
  return (
    <Flex flexDir="column">
      {/* page content on top*/}

      <Box flex={1} w={"full"} mx={"auto"}>
        {children}
      </Box>

      <Box w={"full"} position={"fixed"} bottom={0}>
        <Footer />
      </Box>

      {/* the page content on the right */}
    </Flex>
  );
};

const PageLayout = ({ children }) => {
  const [isLargerThan800] = useMediaQuery("(min-width: 450px)");
  let isMobile = !isLargerThan800;

  return isMobile ? renderFooter(children) : renderSideBar(children);
};

export default PageLayout;
