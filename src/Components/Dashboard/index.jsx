import { Stack } from "@chakra-ui/react";

import "../../App.css";
import { Sidebar } from "../Sidebar";
import { Stats } from "../Stats";
export const Dashboard = () => {
  return (
    <Stack
      sx={{
        width: "100%",
        position: "relative",
        bg: "#f6f6f3",
        overflow: "hidden",
        display: "flex",
        flexDirection: "row",
        alignItems: "flex-start",
        justifyContent: "flex-start",
        padding: "16px",
        boxSizing: "borderbox",
        gap: "16px",
        textAlign: "left",
        fontSize: "14px",
        color: "black",
        fontFamily: "Inter",
      }}
    >
      <Sidebar />
      <Stats />
    </Stack>
  );
};
