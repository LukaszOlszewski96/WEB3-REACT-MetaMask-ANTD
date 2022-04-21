import { FC, useEffect, useState } from "react";
import { MetaMaskContext } from "../../../context/metamask.context";

interface MetaMaskProviderProps {
  children: React.ReactNode;
}

export const MetaMaskProvider: FC<MetaMaskProviderProps> = ({ children }) => {
  const [account, setAccount] = useState<string>("");
  const [contract, setContract] = useState(null);

  const { ethereum } = window;

  const connectMetaMask = async () => {
    try {
      const account = await ethereum.request({
        method: "eth_requestAccounts",
      });
      setAccount(account[0]);
      localStorage.setItem("shouldConnectMetamask", "true");
    } catch (error) {
      console.log(error);
    }
  };

  const getAccountContract = async () => {
    try {
      const account = await ethereum.request({ method: "eth_accounts" });
      setContract(account[0]);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAccountContract();
    if (localStorage.getItem("shouldConnectMetamask") === "true") {
      connectMetaMask();
    }
  }, []);

  return (
    <MetaMaskContext.Provider value={{ account, contract, connectMetaMask }}>
      {children}
    </MetaMaskContext.Provider>
  );
};
