import { Link } from "react-router-dom";
import { useContext } from "react";

import { MetaMaskContext } from "../../context/metamask.context";
import { IMetaMaskContext } from "../../types/metamask.types";

import { Layout, Menu } from "antd";
import { ShortenAddress } from "../../utils/shortenAddress";

export const HeaderNavigation: React.FC = () => {
  const { contract, account } = useContext(MetaMaskContext) as IMetaMaskContext;

  const { Header } = Layout;

  return (
    <Header className="w-full h-16 px-12 flex items-center relative">
      <Link
        className="h-full flex text-3xl text-white justify-center items-center"
        to="/"
      >
        <span className=" text-xl text-white leading-none ">Space</span>
      </Link>
      <Menu className=" flex space-x-6 absolute top-5 right-3">
        <Menu.Item className="leading-none flex justify-center items-center text-lg text-white font-medium ">
          <Link to="/dashboard">Dashboard</Link>
        </Menu.Item>
        <Menu.Item className=" py-2 px-4 leading-none flex justify-center items-center rounded-lg bg-[#4948E0] text-lg text-white font-medium cursor-pointer ">
          {account ? (
            <div className="flex space-x-1">
              <p>Logout:</p>
              <p>{ShortenAddress(contract)}</p>
            </div>
          ) : (
            <Link to="/login">Connect Wallet</Link>
          )}
        </Menu.Item>
      </Menu>
    </Header>
  );
};
