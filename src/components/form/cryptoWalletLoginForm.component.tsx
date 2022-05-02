import { FC, useContext, useEffect, useState } from "react";
import { Link, Navigate } from "react-router-dom";

import { MetaMaskContext } from "../../context/metamask.context";
import { IMetaMaskContext } from "../../types/metamask.types";

export const CryptoWalletLoginForm: FC = () => {
  const { connectMetaMask, contract } = useContext(
    MetaMaskContext
  ) as IMetaMaskContext;

  const [isMetamaskInstall, setIsMetamaskInstall] = useState<boolean>(false);

  const { ethereum } = window;

  // //Check if you have a wallet installed
  const checkWalletInstalled = () => {
    return Boolean(ethereum && ethereum.isMetaMask);
  };

  // //Check if you have a METAMASK wallet installed
  const checkMetamaskInstalled = () => {
    if (checkWalletInstalled()) {
      setIsMetamaskInstall(true);
      console.log("You have installed MetaMask.");
    } else {
      setIsMetamaskInstall(false);
      console.log("You dont have installed MetaMask.");
    }
  };

  useEffect(() => {
    checkMetamaskInstalled();
  }, []);

  if (contract) {
    return <Navigate replace to="/" />;
  }

  return (
    <div className="h-screen w-screen bg-gray-50 flex justify-center items-center">
      {isMetamaskInstall ? (
        <div className="w-[500px] h-[300px] p-10 rounded-lg	 bg-white shadow-md flex flex-col items-center">
          <h1 className="text-center text-3xl font-semibold">Use Metamask</h1>
          <img
            className="w-auto h-28"
            alt="Metamask Logo"
            src="https://miro.medium.com/max/1400/1*gRFH48Pd7u3TpbWnc9__BQ.png"
          />
          <button
            className="bg-gradient-to-r from-blue-500 to-blue-600 py-3 w-[200px] m-auto rounded-lg	text-white"
            onClick={connectMetaMask}
          >
            Metamask
          </button>
        </div>
      ) : (
        <div className="w-[500px] h-[300px] p-10 rounded-lg	 bg-white shadow-md flex flex-col items-center">
          <h1 className="text-center text-3xl font-semibold">
            Install Metamask
          </h1>
          <Link
            className="bg-gradient-to-r from-blue-500 to-blue-600 py-3 w-[200px] text-center m-auto rounded-lg	text-white "
            to="https://metamask.io/download/"
          >
            Install
          </Link>
        </div>
      )}
    </div>
  );
};
