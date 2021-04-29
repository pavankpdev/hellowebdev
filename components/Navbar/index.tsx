import {
  Box,
  Flex,
  IconButton,
  Button,
  Stack,
  useDisclosure,
  Image,
  Collapse,
  StackDivider,
  VStack,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { FaSearch } from "react-icons/fa";

export default function NavBar() {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Box>
      <Flex
        color="white"
        minH={"60px"}
        py={{ base: 4 }}
        px={{ base: 2 }}
        align={"center"}
        justifyContent="space-between"
      >
        <Flex>
          <Flex
            flex={{ base: 1, md: "auto" }}
            ml={{ base: -2 }}
            display={{ base: "flex", md: "none" }}
          >
            <IconButton
              onClick={onToggle}
              icon={
                isOpen ? (
                  <CloseIcon w={3} h={3} />
                ) : (
                  <HamburgerIcon w={5} h={5} />
                )
              }
              variant={"ghost"}
              aria-label={"Toggle Navigation"}
            />
          </Flex>
          <Flex flex={{ base: 1 }} justify={{ base: "center", md: "start" }}>
            <Image
              src={require("../../asset/img/logo.png")}
              alt="Logo"
              width="60px"
            />
          </Flex>
        </Flex>
        <Stack
          flex={{ base: 1, md: 0 }}
          justify={"flex-end"}
          direction={"row"}
          spacing={6}
        >
          <Button
            display={{ base: "none", md: "inline-flex" }}
            leftIcon={<FaSearch />}
            fontWeight={400}
            variant="ghost"
          >
            Search
          </Button>
          <Button
            fontWeight={600}
            display={{ base: "none", md: "inline-flex" }}
            colorScheme="pink.200"
            href={"#"}
            variant="outline"
          >
            Sign In / Sign up
          </Button>
          <Button
            fontWeight={600}
            display={{ base: "none", md: "inline-flex" }}
            color={"white"}
            href={"#"}
            style={{
              background:
                "linear-gradient(100deg, rgba(153,18,224,1) 0%, rgba(215,39,191,1) 50%, rgba(251,124,157,1) 96%)",
            }}
          >
            Add Resource
          </Button>

          <Button
            fontWeight={600}
            display={{ md: "none" }}
            color={"white"}
            href={"#"}
            style={{
              background:
                "linear-gradient(100deg, rgba(153,18,224,1) 0%, rgba(215,39,191,1) 50%, rgba(251,124,157,1) 96%)",
            }}
            size="sm"
          >
            Add Resource
          </Button>
        </Stack>
      </Flex>
      <Collapse in={isOpen} animateOpacity>
        <VStack spacing={4} align="stretch" bg="brandBG" p="5">
          <Box>
            <Button
              leftIcon={<FaSearch />}
              fontWeight={400}
              variant="ghost"
              size="sm"
            >
              Search
            </Button>
          </Box>
          <Box>
            <Button
              fontWeight={600}
              colorScheme="pink"
              href={"#"}
              variant="outline"
              size="sm"
            >
              Sign In / Sign up
            </Button>
          </Box>
        </VStack>
      </Collapse>
    </Box>
  );
}
