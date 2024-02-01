import {
  Card,
  CardBody,
  CardHeader,
  HStack,
  Heading,
  Text,
} from "@chakra-ui/react";
import React from "react";

export const TopStatsCard = () => {
  // Define the data with state codes and corresponding values
  const stateData = [
    { code: "NY", value: 120 },
    { code: "MA", value: 80 },
    { code: "NH", value: 70 },
    { code: "OR", value: 50 },
  ];

  // Find the maximum value to scale the widths
  const maxValue = Math.max(...stateData.map((state) => state.value));

  return (
    <Card
      width={"360px"}
      p={"24px"}
      bg={"white"}
      borderRadius={"16px"}
      gap={"8px"}
      variant={"simple"}
      h={"256px"}
    >
      <CardHeader p={0}>
        <Heading fontSize={"20px"} fontWeight={"bold"} pb={"16px"}>
          Top States
        </Heading>
      </CardHeader>
      <CardBody
        p={0}
        flexDirection={"column"}
        gap={"8px"}
        display={"flex"}
        alignItems={"flex-start"}
      >
        {stateData.map((state) => (
          <HStack
            justifyContent={"space-between"}
            key={state.code}
            width={`${(state.value / maxValue) * 100}%`}
            style={{
              background: `linear-gradient(50deg, #FFCD71 20%, rgba(255, 204.75, 112.62, 0) 100%)`,
            }}
            borderRadius={"8px"}
            px={"16px"}
            py={"8px"}
          >
            <Text color={"#131313'"} fontSize={"14px"} fontWeight={"800"}>
              {state.code}
            </Text>
            <Text color={"#131313'"} fontSize={"14px"} fontWeight={"800"}>
              {state.value}K
            </Text>
          </HStack>
        ))}
      </CardBody>
    </Card>
  );
};
