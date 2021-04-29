import { Text, Link, Flex, Stack } from "@chakra-ui/react";
import { FaChevronRight } from "react-icons/fa";
import { HiChevronDoubleRight } from "react-icons/hi";

const SideBarMenuSubItems = () => {
  return (
    <>
      <Link
        href={"#"}
        role={"group"}
        display={"block"}
        rounded={"md"}
        p="2"
        border="none"
        _active={{ border: "none" }}
        _focus={{ boxShadow: "none" }}
        _hover={{ textDecoration: "none" }}
      >
        <Stack direction={"row"} align={"center"}>
          <Text
            transition={"all .3s ease"}
            _groupHover={{ color: "pink.400" }}
            fontWeight={500}
          >
            label
          </Text>
          <Flex
            transition={"all .3s ease"}
            transform={"translateX(-10px)"}
            opacity={0}
            _groupHover={{ opacity: "100%", transform: "translateX(0)" }}
            justify={"flex-end"}
            align={"center"}
            flex={1}
          >
            <HiChevronDoubleRight />
          </Flex>
        </Stack>
      </Link>
    </>
  );
};

export default SideBarMenuSubItems;
