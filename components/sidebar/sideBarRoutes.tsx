import {
  Text,
  Box,
  Center,
  HStack,
  VStack,
  useBoolean,
} from "@chakra-ui/react";
import { FaHome, FaChevronRight, FaChevronDown } from "react-icons/fa";

const SideBarRoutes = () => {
  const [showContents, setShowContents] = useBoolean();

  return (
    <>
      <HStack justify="space-between">
        <HStack>
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
              <FaHome />
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
            Home
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
      {showContents && <Box>fsfsf</Box>}
    </>
  );
};

export default SideBarRoutes;
