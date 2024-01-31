import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { Card, CardBody, CardHeader, Heading } from "@chakra-ui/react";

export const GrowthCard = () => {
  const [graphData, setGraphData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_SERVER}/api/graph-data`
      );

      setGraphData(response.data);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const formatGrowth = (value) => {
    if (value >= 1000) {
      return `${value / 1000}k`;
    }
    return value;
  };

  return (
    <Card variant="simple" width={"100%"} px={"24px"}>
      <CardHeader>
        <Heading>Growth</Heading>
      </CardHeader>
      <CardBody color={"black"}>
        {loading && <p>Loading...</p>}
        {error && <p>Error: {error}</p>}
        {graphData.length > 0 && (
          <ResponsiveContainer width="100%" height={300}>
            <AreaChart
              data={graphData}
              margin={{
                top: 5,
                right: 20,
                left: 20,
                bottom: 5,
              }}
            >
              <defs>
                <linearGradient id="growthGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#25CD25" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#25CD25" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="year" />
              <YAxis tickFormatter={(value) => formatGrowth(value)} />
              <Tooltip
                formatter={(value, name) => [formatGrowth(value), "Growth"]}
              />
              <Area
                type="monotone"
                dataKey="average"
                stroke="#25CD25"
                fill="url(#growthGradient)"
                dot={{ stroke: "#25CD25", fill: "#25CD25", r: 2 }}
                activeDot={{ stroke: "#25CD25", fill: "#25CD25", r: 2 }}
              />
            </AreaChart>
          </ResponsiveContainer>
        )}
      </CardBody>
    </Card>
  );
};
