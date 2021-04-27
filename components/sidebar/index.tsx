import {
  Text,
  Box,
  Center,
  HStack,
  VStack,
  useBoolean,
} from "@chakra-ui/react";
import { FaHome, FaChevronRight } from "react-icons/fa";

// Components
import SideBarRoutes from "./sideBarRoutes";

const SideBar = () => {
  return (
    <>
      <VStack
        spacing="24px"
        display={{ base: "none", md: "block" }}
        bg="brandBG"
        mr="1"
        borderRadius="10"
        p="5"
      >
        <SideBarRoutes />
      </VStack>
    </>
  );
};

export default SideBar;
