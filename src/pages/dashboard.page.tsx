import { Layout } from "antd";
import React from "react";

export const DashboardPage: React.FC = () => {
  const { Content } = Layout;

  return (
    <Layout className="h-screen w-screen bg-[#14163C] flex flex-col">
      <Content>
        <div className="flex justify-center items-center">
          <h1 className="text-3xl text-white">Dashboard</h1>
        </div>
      </Content>
    </Layout>
  );
};
