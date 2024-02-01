import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  CircularProgress,
  CircularProgressLabel,
  Heading,
  Text,
} from "@chakra-ui/react";
import { IconArrowRight } from "@tabler/icons-react";
import React from "react";

export const GoalCards = () => {
  return (
    <Card
      width={"100%"}
      h={"240px"}
      p={"24px"}
      bg={"white"}
      borderRadius={"16px"}
      gap={"8px"}
      variant={"simple"}
      alignItems={"center"}
    >
      <CardHeader p={0}>
        <Heading
          fontSize={"20px"}
          fontWeight={"bold"}
          width={"100%"}
          textAlign={"center"}
        >
          Quarter Goal
        </Heading>
      </CardHeader>
      <CardBody
        p={0}
        flexDirection={"column"}
        gap={"8px"}
        alignItems={"center"}
        justifyContent={"center"}
        display={"flex"}
      >
        <CircularProgress value={"84"} color="#FFCD71" size={"120px"}>
          <CircularProgressLabel>
            <Heading color={"#131313"}>84%</Heading>
          </CircularProgressLabel>
        </CircularProgress>
      </CardBody>
      <CardFooter p={0} flexDir={"row"} alignItems={"center"} gap={"8px"}>
        <Text color={"#734A00"} fontSize={"14px"}>
          All Goals
        </Text>
        <IconArrowRight color="#734A00" size={"14px"} />
      </CardFooter>
    </Card>
  );
};
