import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Heading,
  Text,
} from "@chakra-ui/react";

import React from "react";

export const TopYearCard = () => {
  return (
    <Card
      width={"100%"}
      p={"24px"}
      bg={"white"}
      h={"152px"}
      borderRadius={"16px"}
      gap={"8px"}
      variant={"simple"}
    >
      <CardHeader p={0}>
        <Heading fontSize={"20px"} fontWeight={"bold"} color={"#7D7D7D"}>
          Top year
        </Heading>
      </CardHeader>
      <CardBody p={0} flexDirection={"column"} gap={"8px"}>
        <Heading color={"#734a00"} fontSize={"24px"}>
          2023
        </Heading>
      </CardBody>
      <CardFooter p={0} flexDir={"row"} alignItems={"center"} gap={"8px"}>
        <Text color={"#454545"} fontSize={"14px"}>
          maximum profit 50%
        </Text>
      </CardFooter>
    </Card>
  );
};
