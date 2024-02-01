import {
  Avatar,
  Card,
  CardBody,
  CardHeader,
  Heading,
  Text,
} from "@chakra-ui/react";

import user from "../../../../Assets/Images/Warish.jpeg";
import React from "react";

export const TopBuyerCard = () => {
  return (
    <Card
      width={"100%"}
      p={"24px"}
      h={"152px"}
      bg={"white"}
      borderRadius={"16px"}
      gap={"8px"}
      variant={"simple"}
    >
      <CardHeader p={0}>
        <Heading fontSize={"20px"} fontWeight={"bold"} color={"#7D7D7D"}>
          Top buyer
        </Heading>
      </CardHeader>
      <CardBody
        p={0}
        flexDirection={"row"}
        gap={"8px"}
        alignItems={"flex-start"}
      >
        <Avatar src={user} size={"sm"} />
        <Text fontWeight={"bold"}>Maggie Johnson</Text>
        <Text fontSize={"14px"} color={"#454545"}>
          Oasis organic inc.
        </Text>
      </CardBody>
    </Card>
  );
};
