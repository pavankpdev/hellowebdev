import { Container, Flex, Text, Box } from "@chakra-ui/react";

// Components
import NavbarComp from "../components/Navbar";
import SideBar from "../components/sidebar";

// Styles

const PageLayout = ({ children }) => {
  return (
    <>
      <Container maxW="container.xl">
        <NavbarComp />
      </Container>
      <Flex color="white" mt="4">
        <Box
          flex={{ base: "none", lg: ".3" }}
          ml="3"
          borderRadius="10"
          height="100vh"
          overflowY="scroll"
          css={{
            "&::-webkit-scrollbar": {
              display: "none",
            },
          }}
        >
          <SideBar />
        </Box>
        <Box
          flex="1"
          bg="brandBG"
          ml="3"
          mr="3"
          borderRadius="10"
          p="5"
          height="100vh"
          overflowY="scroll"
          css={{
            "&::-webkit-scrollbar": {
              display: "none",
            },
          }}
        >
          {children}
        </Box>
      </Flex>
    </>
  );
};

export default PageLayout;
