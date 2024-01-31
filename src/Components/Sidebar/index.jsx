import {
  Avatar,
  Box,
  HStack,
  Heading,
  Input,
  InputGroup,
  InputLeftElement,
  Tag,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { MdOutlineSearch } from "react-icons/md";
import { Logo } from "./OrangeFarmLogo";
import user from "../../Assets/Images/Warish.jpeg";

import {
  IconBasket,
  IconClipboardData,
  IconDatabaseExport,
  IconLogout,
  IconMessageCircle,
  IconSettings,
  IconUsers,
  IconWorld,
} from "@tabler/icons-react";
import { IconLayoutDashboard } from "@tabler/icons-react";

import "../../App.css";

export const Sidebar = () => {
  return (
    <Box
      display={"flex"}
      minWidth={"280px"}
      maxW={"320px"}
      justifyContent={"flex-start"}
      alignSelf={"stretch"}
      bg={"white"}
      alignItems={"flex-start"}
      borderRadius={"16px"}
      flexDir={"column"}
      px={"24px"}
      py={"16px"}
      gap={"24px"}
      h={"auto"}
    >
      <HStack
        width={"100%"}
        alignItems={"center"}
        justifyContent={"flex-start"}
      >
        {/* <Image src="../../Assets/Images/Ellipse 1.svg" /> */}
        <Logo />
        <Heading fontWeight={"bold"}>OrangeFarm</Heading>
      </HStack>
      <VStack width={"100%"}>
        <InputGroup width={"100%"}>
          <InputLeftElement pointerEvents="none">
            <MdOutlineSearch color="#7D7D7D" />
          </InputLeftElement>
          <Input
            type="search"
            placeholder="Search"
            borderRadius={"24px"}
            px={"12px"}
            py={"16px"}
            color={"#7D7D7D"}
            border={"1px solid #f1f1f1"}
            _focus={{ border: "1px" }}
            focusBorderColor="#f1f1f1"
            fontSize={"14px inter"}
          />
        </InputGroup>
      </VStack>
      <Box
        display={"flex"}
        flexDirection={"column"}
        justifyContent={"space-between"}
        alignItems={"flex-start"}
        width={"100%"}
        h={"100%"}
      >
        <VStack
          width={"100%"}
          h={"100%"}
          alignItems={"flex-start"}
          gap={"24px"}
        >
          <HStack width={"100%"} justifyContent={"flex-start"}>
            <IconLayoutDashboard size={"16px"} color="#7D7D7D" />
            <Text color={"#131313"} fontSize={"16px"}>
              Dashboard
            </Text>
          </HStack>
          <HStack width={"100%"} justifyContent={"flex-start"}>
            <IconUsers size={"16px"} color="#7D7D7D" />
            <Text color={"#131313"} fontSize={"16px"}>
              Customers
            </Text>
          </HStack>
          <HStack width={"100%"} justifyContent={"flex-start"}>
            <IconClipboardData size={"16px"} color="#7D7D7D" />
            <Text color={"#131313"} fontSize={"16px"}>
              All Reports
            </Text>
          </HStack>
          <HStack width={"100%"} justifyContent={"flex-start"}>
            <IconWorld size={"16px"} color="#7D7D7D" />
            <Text color={"#131313"} fontSize={"16px"}>
              Geography
            </Text>
          </HStack>
          <HStack width={"100%"} justifyContent={"flex-start"}>
            <IconMessageCircle size={"16px"} color="#7D7D7D" />
            <Text color={"#131313"} fontSize={"16px"}>
              Conversations
            </Text>
          </HStack>
          <HStack width={"100%"} justifyContent={"flex-start"}>
            <IconBasket size={"16px"} color="#7D7D7D" />
            <Text color={"#131313"} fontSize={"16px"}>
              Deals
            </Text>
          </HStack>
          <HStack width={"100%"} justifyContent={"flex-start"}>
            <IconDatabaseExport size={"16px"} color="#7D7D7D" />
            <Text color={"#131313"} fontSize={"16px"}>
              Export
            </Text>
          </HStack>
        </VStack>
        <VStack width={"100%"} alignItems={"flex-start"} gap={"24px"}>
          <HStack>
            <Avatar src={user} size={"md"} />
            <VStack>
              <Text fontWeight={"bold"}>Mohd Warish</Text>
              <Tag bg={"#FFCD71"} size={"sm"}>
                Admin
              </Tag>
            </VStack>
          </HStack>
          <HStack>
            <IconSettings size={"16px"} color="#7D7D7D" />
            <Text color={"#131313"} fontSize={"16px"}>
              Settings
            </Text>
          </HStack>
          <HStack>
            <IconLogout size={"16px"} color="#B01212" />
            <Text fontWeight={"bold"} color={"#B01212"}>
              Logout
            </Text>
          </HStack>
        </VStack>
      </Box>
    </Box>
  );
};
