import {
  Text,
  Box,
  Center,
  HStack,
  Collapse,
  useBoolean,
  Link,
  Flex,
  Stack,
} from "@chakra-ui/react";
import { FaBookReader, FaChevronRight, FaChevronDown } from "react-icons/fa";

import SubItems from "./subItems";

const SideBarRoutes = () => {
  const [showContents, setShowContents] = useBoolean();

  return (
    <>
      <HStack justify="space-between">
        <HStack spacing="15px">
          <Box
            style={{
              background:
                "linear-gradient(100deg, rgba(153,18,224,1) 0%, rgba(215,39,191,1) 50%, rgba(251,124,157,1) 96%)",
            }}
            p="2"
            borderRadius="6"
            cursor="pointer"
            onClick={setShowContents.toggle}
          >
            <Center>
              <FaBookReader />
            </Center>
          </Box>
          <Text
            onClick={setShowContents.toggle}
            cursor="pointer"
            color="gray.300"
            _hover={{
              color: "white",
            }}
          >
            Free Learning
          </Text>
        </HStack>
        {showContents ? (
          <FaChevronDown
            onClick={setShowContents.toggle}
            cursor="pointer"
            color="gray.300"
          />
        ) : (
          <FaChevronRight
            onClick={setShowContents.toggle}
            cursor="pointer"
            color="gray.300"
          />
        )}
      </HStack>
      <Collapse animateOpacity in={showContents}>
        <SubItems />
        <SubItems />
        <SubItems />
        <SubItems />
        <SubItems />
      </Collapse>
    </>
  );
};

export default SideBarRoutes;
