import React from "react";
import { useLoaderData, useNavigation } from "react-router-dom";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import LoadingPage from "../LoadingPage";

const Store = () => {
  const navigation = useNavigation();
  if (navigation.state == "loading") {
    return <LoadingPage />;
  }
  const { monthly_data } = useLoaderData();
  return (
    <div className="my-10 shadow-md p-10">
      <div className="grid md:grid-cols-2 grid-cols-1 mt-10 mb-32 justify-center items-center gap-5">
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={monthly_data}>
            <Line
              type="monotone"
              dataKey="total_order"
              stroke="#8884d8"
              strokeWidth={2}
            />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <CartesianGrid />
          </LineChart>
        </ResponsiveContainer>

        <div>
          <h1 className="text-center text-4xl">One year order history </h1>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 sm:grid-reverse justify-center items-center my-10">
        <div className="w-full mx-auto my-5">
          <h1 className="text-center text-4xl">Store review</h1>
        </div>
        
          <ResponsiveContainer width="100%" height={300}>
          <LineChart
            data={monthly_data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis yAxisId="left" />
            <YAxis yAxisId="right" orientation="right" />
            <Tooltip />

            <Line
              yAxisId="left"
              type="monotone"
              dataKey="positive_review"
              stroke="#8884d8"
              activeDot={{ r: 8 }}
            />
            <Line
              yAxisId="right"
              type="monotone"
              dataKey="negative_review"
              stroke="#82ca9d"
            />
          </LineChart>
          </ResponsiveContainer>
        
      </div>
    </div>
  );
};

export default Store;
