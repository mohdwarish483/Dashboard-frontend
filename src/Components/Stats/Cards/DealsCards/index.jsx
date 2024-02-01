import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  HStack,
  Heading,
  Text,
} from "@chakra-ui/react";
import { IconArrowRight, IconArrowUpRight } from "@tabler/icons-react";
import React from "react";

export const LostDealsCards = () => {
  return (
    <Card
      width={"100%"}
      p={"24px"}
      h={"240px"}
      bg={"white"}
      borderRadius={"16px"}
      gap={"8px"}
      variant={"simple"}
    >
      <CardHeader p={0}>
        <Heading fontSize={"20px"} fontWeight={"bold"}>
          Lost Deals
        </Heading>
      </CardHeader>
      <CardBody
        p={0}
        flexDirection={"column"}
        gap={"8px"}
        justifyContent={"center"}
        display={"flex"}
      >
        <HStack
          alignItems={"center"}
          gap={"8px"}
          px={0}
          justifyContent={"flex-start"}
        >
          <Heading color={"#131313"}>4%</Heading>
          <IconArrowUpRight color="#25CD25" size={"20px"} />
        </HStack>
        <Text color={"#454545"} fontSize={"14px"}>
          You closed 96 out of 100 deals
        </Text>
      </CardBody>
      <CardFooter p={0} flexDir={"row"} alignItems={"center"} gap={"8px"}>
        <Text color={"#734A00"} fontSize={"14px"}>
          All Deals
        </Text>
        <IconArrowRight color="#734A00" size={"14px"} />
      </CardFooter>
    </Card>
  );
};
