import { Link } from "react-router-dom";

import { Layout, Menu } from "antd";
import { useEffect, useState } from "react";

export const HeaderNavigation: React.FC = () => {
  const [idChain, setIdChain] = useState<string>("");

  const { Header } = Layout;
  const { ethereum } = window;

  const getMetamaskId = async () => {
    if (ethereum) {
      try {
        const accounts = await ethereum.request({ method: "eth_accounts" });
        if (accounts.length > 0) {
          const accountId = accounts[0];
          localStorage.setItem("account_id", accountId);
          setIdChain(accountId);
        }
      } catch (error) {
        console.log(error);
      }
    }
  };

  const disconnectWallet = () => {
    if (idChain.length > 0) {
      setIdChain("");
      localStorage.removeItem("account_id");
    }
  };

  useEffect(() => {
    getMetamaskId();
  }, []);

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
          {idChain.length > 0 ? (
            <div onClick={disconnectWallet} className="flex space-x-1">
              <p>Logout:</p>
              <p>{idChain.slice(0, 5) + "..." + idChain.slice(38, 42)}</p>
            </div>
          ) : (
            <Link to="/login">Connect Wallet</Link>
          )}
        </Menu.Item>
      </Menu>
    </Header>
  );
};
