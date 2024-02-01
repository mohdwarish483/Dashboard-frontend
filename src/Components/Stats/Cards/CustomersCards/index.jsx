import {
  Avatar,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Divider,
  HStack,
  Heading,
  Text,
  VStack,
} from "@chakra-ui/react";
import {
  IconArrowRight,
  IconDotsVertical,
  IconEdit,
  IconMessageCircle,
  IconStar,
} from "@tabler/icons-react";
import React from "react";
import user1 from "../../../../Assets/Images/Avatar (1).png";
import user2 from "../../../../Assets/Images/Avatar (2).png";
import user3 from "../../../../Assets/Images/Avatar (3).png";
import user4 from "../../../../Assets/Images/Warish.jpeg";

export const CustomersCard = () => {
  return (
    <Card
      width={"100%"}
      p={"0px"}
      bg={"white"}
      borderRadius={"16px"}
      variant={"simple"}
      h={"464px"}
    >
      <CardHeader pt={"24px"} px={"24px"}>
        <Heading fontSize={"20px"} fontWeight={"bold"}>
          Customers
        </Heading>
      </CardHeader>
      <CardBody p={"8px"} flexDirection={"column"} gap={"8px"}>
        <HStack
          width={"100%"}
          justifyContent={"space-between"}
          _hover={{ bg: "#FFF7E8" }}
          borderRadius={"16px"}
          p={"16px"}
          cursor={"pointer"}
        >
          <HStack gap={"12px"}>
            <Avatar src={user1} size={"sm"} />
            <VStack
              justifyContent={"center"}
              gap={"0"}
              alignItems={"flex-start"}
            >
              <Text fontWeight={"bold"}>Chris Friedkly</Text>
              <Text>Supermarket Villanova</Text>
            </VStack>
          </HStack>
          <HStack gap={"8px"} justifyContent={"space-between"}>
            <IconMessageCircle color="#734A00" size={"14px"} />
            <IconStar color="#734A00" size={"14px"} />
            <IconEdit color="#734A00" size={"14px"} />
            <Divider
              h={"16px"}
              orientation="vertical"
              color="#734A00"
              border={"1px solid gray"}
            />
            <IconDotsVertical color="#734A00" size={"14px"} />
          </HStack>
        </HStack>
        <HStack
          width={"100%"}
          justifyContent={"space-between"}
          _hover={{ bg: "#FFF7E8" }}
          borderRadius={"16px"}
          p={"16px"}
          cursor={"pointer"}
        >
          <HStack gap={"12px"}>
            <Avatar src={user2} size={"sm"} />
            <VStack
              justifyContent={"center"}
              gap={"0"}
              alignItems={"flex-start"}
            >
              <Text fontWeight={"bold"}>Chris Friedkly</Text>
              <Text>Wallmart</Text>
            </VStack>
          </HStack>
          <HStack gap={"8px"} justifyContent={"space-between"}>
            <IconMessageCircle color="#734A00" size={"14px"} />
            <IconStar color="#734A00" size={"14px"} />
            <IconEdit color="#734A00" size={"14px"} />
            <Divider
              h={"16px"}
              orientation="vertical"
              color="#734A00"
              border={"1px solid gray"}
            />
            <IconDotsVertical color="#734A00" size={"14px"} />
          </HStack>
        </HStack>
        <HStack
          width={"100%"}
          justifyContent={"space-between"}
          _hover={{ bg: "#FFF7E8" }}
          borderRadius={"16px"}
          p={"16px"}
          cursor={"pointer"}
        >
          <HStack gap={"12px"}>
            <Avatar src={user3} size={"sm"} />
            <VStack
              justifyContent={"center"}
              gap={"0"}
              alignItems={"flex-start"}
            >
              <Text fontWeight={"bold"}>Maggie Jhonson</Text>
              <Text>New york finest fruits</Text>
            </VStack>
          </HStack>
          <HStack gap={"8px"} justifyContent={"space-between"}>
            <IconMessageCircle color="#734A00" size={"14px"} />
            <IconStar color="#734A00" size={"14px"} />
            <IconEdit color="#734A00" size={"14px"} />
            <Divider
              h={"16px"}
              orientation="vertical"
              color="#734A00"
              border={"1px solid gray"}
            />
            <IconDotsVertical color="#734A00" size={"14px"} />
          </HStack>
        </HStack>
        <HStack
          width={"100%"}
          justifyContent={"space-between"}
          _hover={{ bg: "#FFF7E8" }}
          borderRadius={"16px"}
          p={"16px"}
          cursor={"pointer"}
        >
          <HStack gap={"12px"}>
            <Avatar src={user4} size={"sm"} />
            <VStack
              justifyContent={"center"}
              gap={"0"}
              alignItems={"flex-start"}
            >
              <Text fontWeight={"bold"}>Gael Harry</Text>
              <Text>Singapore new valley</Text>
            </VStack>
          </HStack>
          <HStack gap={"8px"} justifyContent={"space-between"}>
            <IconMessageCircle color="#734A00" size={"14px"} />
            <IconStar color="#734A00" size={"14px"} />
            <IconEdit color="#734A00" size={"14px"} />
            <Divider
              h={"16px"}
              orientation="vertical"
              color="#734A00"
              border={"1px solid gray"}
            />
            <IconDotsVertical color="#734A00" size={"14px"} />
          </HStack>
        </HStack>
      </CardBody>
      <CardFooter
        px={"24px"}
        pb={"24px"}
        flexDir={"row"}
        alignItems={"center"}
        gap={"8px"}
      >
        <Text color={"#734A00"} fontSize={"14px"}>
          All customers
        </Text>
        <IconArrowRight color="#734A00" size={"14px"} />
      </CardFooter>
    </Card>
  );
};
