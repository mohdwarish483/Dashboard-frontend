import { HStack, VStack } from "@chakra-ui/react";
import React from "react";
import { GrowthCard } from "./GrowthCard";
import { TopYearCard } from "./TopYear";
import { TopMonthCard } from "./TopMonth";
import { TopBuyerCard } from "./TopBuyer";

export const Graph = () => {
  return (
    <VStack
      width={"100%"}
      h={"100%"}
      justifyContent={"flex-start"}
      gap={"16px"}
      alignItems={"flex-start"}
    >
      <HStack width={"100%"} justifyContent={"flex-start"} gap={"16px"}>
        <GrowthCard />
      </HStack>
      <HStack width={"100%"} justifyContent={"flex-start"} gap={"16px"}>
        <TopMonthCard />
        <TopYearCard />
        <TopBuyerCard />
      </HStack>
    </VStack>
  );
};
