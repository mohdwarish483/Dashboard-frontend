import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Heading,
  Text,
} from "@chakra-ui/react";

import React from "react";

export const TopMonthCard = () => {
  return (
    <Card
      width={"100%"}
      h={"152px"}
      p={"24px"}
      bg={"white"}
      borderRadius={"16px"}
      gap={"8px"}
      variant={"simple"}
    >
      <CardHeader p={0}>
        <Heading fontSize={"20px"} fontWeight={"bold"} color={"#7D7D7D"}>
          Top month
        </Heading>
      </CardHeader>
      <CardBody p={0} flexDirection={"column"} gap={"8px"}>
        <Heading color={"#734a00"} fontSize={"24px"}>
          November
        </Heading>
      </CardBody>
      <CardFooter p={0} flexDir={"row"} alignItems={"center"} gap={"8px"}>
        <Text color={"#ffa500"} fontSize={"20px"}>
          2023
        </Text>
      </CardFooter>
    </Card>
  );
};
