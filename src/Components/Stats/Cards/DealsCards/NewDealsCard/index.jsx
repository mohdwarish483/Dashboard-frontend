import {
  Card,
  CardBody,
  CardHeader,
  HStack,
  Heading,
  Text,
} from "@chakra-ui/react";
import { IconSquareRoundedPlus } from "@tabler/icons-react";
import React from "react";

export const NewDealsCard = () => {
  return (
    <Card
      width={"440px"}
      p={"24px"}
      bg={"white"}
      borderRadius={"16px"}
      gap={"8px"}
      variant={"simple"}
      h={"256px"}
    >
      <CardHeader p={0}>
        <Heading fontSize={"20px"} fontWeight={"bold"} pb={"16px"}>
          New Deals
        </Heading>
      </CardHeader>
      <CardBody
        p={0}
        flexDirection={"column"}
        gap={"8px"}
        display={"flex"}
        alignItems={"flex-start"}
      >
        <HStack justifyContent={"space-between"} width={"100%"} p={"0"}>
          <HStack
            justifyContent={"flex-start"}
            bg={"#FFF7E8"}
            borderRadius={"8px"}
            px={"16px"}
            py={"12px"}
          >
            <IconSquareRoundedPlus color="#FFA500" />
            <Text color={"#131313'"} fontSize={"14px"} fontWeight={"800"}>
              FruitGo
            </Text>
          </HStack>
          <HStack
            justifyContent={"flex-start"}
            bg={"#FFF7E8"}
            borderRadius={"8px"}
            px={"16px"}
            py={"12px"}
          >
            <IconSquareRoundedPlus color="#FFA500" />
            <Text color={"#131313'"} fontSize={"14px"} fontWeight={"800"}>
              Marshall's MKT
            </Text>
          </HStack>
          <HStack
            justifyContent={"flex-start"}
            bg={"#FFF7E8"}
            borderRadius={"8px"}
            px={"16px"}
            py={"12px"}
          >
            <IconSquareRoundedPlus color="#FFA500" />
            <Text color={"#131313'"} fontSize={"14px"} fontWeight={"800"}>
              CCNT
            </Text>
          </HStack>
        </HStack>
        <HStack justifyContent={"space-between"} width={"100%"} p={"0"}>
          <HStack
            justifyContent={"flex-start"}
            bg={"#FFF7E8"}
            borderRadius={"8px"}
            px={"16px"}
            py={"12px"}
            width={"100%"}
          >
            <IconSquareRoundedPlus color="#FFA500" />
            <Text color={"#131313'"} fontSize={"14px"} fontWeight={"800"}>
              Joana Mini-market
            </Text>
          </HStack>
          <HStack
            justifyContent={"flex-start"}
            bg={"#FFF7E8"}
            borderRadius={"8px"}
            px={"16px"}
            py={"12px"}
            width={"100%"}
          >
            <IconSquareRoundedPlus color="#FFA500" />
            <Text color={"#131313'"} fontSize={"14px"} fontWeight={"800"}>
              Little Brazil Vegan
            </Text>
          </HStack>
        </HStack>
        <HStack justifyContent={"space-between"} width={"100%"} p={"0"}>
          <HStack
            justifyContent={"flex-start"}
            bg={"#FFF7E8"}
            borderRadius={"8px"}
            px={"16px"}
            py={"12px"}
          >
            <IconSquareRoundedPlus color="#FFA500" />
            <Text color={"#131313'"} fontSize={"14px"} fontWeight={"800"}>
              Target
            </Text>
          </HStack>
          <HStack
            justifyContent={"flex-start"}
            bg={"#FFF7E8"}
            borderRadius={"8px"}
            px={"16px"}
            py={"12px"}
          >
            <IconSquareRoundedPlus color="#FFA500" />
            <Text color={"#131313'"} fontSize={"14px"} fontWeight={"800"}>
              Organic Place
            </Text>
          </HStack>
          <HStack
            justifyContent={"flex-start"}
            bg={"#FFF7E8"}
            borderRadius={"8px"}
            px={"16px"}
            py={"12px"}
          >
            <IconSquareRoundedPlus color="#FFA500" />
            <Text color={"#131313'"} fontSize={"14px"} fontWeight={"800"}>
              Morello's
            </Text>
          </HStack>
        </HStack>
      </CardBody>
    </Card>
  );
};
