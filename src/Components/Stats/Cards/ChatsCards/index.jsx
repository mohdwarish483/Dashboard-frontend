import {
  Avatar,
  Card,
  CardBody,
  CardHeader,
  Heading,
  Text,
} from "@chakra-ui/react";

import user1 from "../../../../Assets/Images/Avatar (1).png";
import user2 from "../../../../Assets/Images/Avatar (2).png";
import user3 from "../../../../Assets/Images/Warish.jpeg";
import user4 from "../../../../Assets/Images/Avatar.png";
import React from "react";

export const ChatsCard = () => {
  return (
    <Card
      width={"360px"}
      p={"24px"}
      h={"256px"}
      bg={"white"}
      borderRadius={"16px"}
      gap={"8px"}
      variant={"simple"}
    >
      <CardHeader p={0} gap={"8px"}>
        <Heading fontSize={"20px"} fontWeight={"bold"} color={"#131313"}>
          Chats
        </Heading>
        <Text fontSize={"14px"} color={"#454545"}>
          2 unread messages
        </Text>
      </CardHeader>
      <CardBody
        p={0}
        flexDirection={"row"}
        width={"full"}
        display={"flex"}
        h={"full"}
        alignItems={"center"}
        justifyContent={"flex-start"}
        gap={"8px"}
      >
        <Avatar src={user4} size={"lg"} bg={"#FFF7E8"} p={"10px"} />
        <Avatar src={user2} size={"lg"} bg={"#FFF7E8"} p={"10px"} />
        <Avatar src={user1} size={"md"} alignSelf={"center"} />
        <Avatar src={user3} size={"md"} />
      </CardBody>
    </Card>
  );
};
