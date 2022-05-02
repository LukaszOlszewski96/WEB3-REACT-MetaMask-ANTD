import { FC, useEffect, useState } from "react";
import { MetaMaskContext } from "../../../context/metamask.context";

interface MetaMaskProviderProps {
  children: React.ReactNode;
}

export const MetaMaskProvider: FC<MetaMaskProviderProps> = ({ children }) => {
  const [contract, setContract] = useState<string>();

  const { ethereum } = window;

  //Connect with metamask account and get wallet contract
  const connectMetaMask = async () => {
    try {
      const account = await ethereum.request({
        method: "eth_requestAccounts",
      });
      setContract(account[0]);
      localStorage.setItem("shouldConnectMetamask", "true");
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (localStorage.getItem("shouldConnectMetamask") === "true") {
      connectMetaMask();
    }
  }, []);

  return (
    <MetaMaskContext.Provider value={{ contract, connectMetaMask }}>
      {children}
    </MetaMaskContext.Provider>
  );
};
