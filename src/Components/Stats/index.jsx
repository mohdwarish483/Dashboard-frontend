import { HStack, VStack } from "@chakra-ui/react";
import React from "react";
import { RevenueCard } from "./Cards/RevenueCards";
import { LostDealsCards } from "./Cards/DealsCards";
import { GoalCards } from "./Cards/GoalCards";
import { CustomersCard } from "./Cards/CustomersCards";
import { Graph } from "./Graph";
import { ChatsCard } from "./Cards/ChatsCards";
import { TopStatsCard } from "./Cards/TopStatsCard";
import { NewDealsCard } from "./Cards/DealsCards/NewDealsCard";

export const Stats = () => {
  return (
    <VStack
      width={"100%"}
      h={"100%"}
      justifyContent={"flex-start"}
      gap={"16px"}
      alignItems={"flex-start"}
    >
      <HStack width={"100%"} justifyContent={"flex-start"} gap={"16px"}>
        <RevenueCard /> <LostDealsCards />
        <GoalCards />
      </HStack>
      <HStack width={"100%"} justifyContent={"flex-start"} gap={"16px"}>
        <CustomersCard />
        <Graph />
      </HStack>
      <HStack width={"100%"} justifyContent={"flex-start"} gap={"16px"}>
        <ChatsCard />
        <TopStatsCard />
        <NewDealsCard />
      </HStack>
    </VStack>
  );
};
