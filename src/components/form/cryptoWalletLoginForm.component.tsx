import { Button } from "antd";
import { FC, useEffect, useState } from "react";
import { Link, Navigate } from "react-router-dom";

export const CryptoWalletLoginForm: FC = () => {
  const [isMetamaskInstall, setIsMetamaskInstall] = useState<boolean>(false);
  const [isLoading, setLoading] = useState<boolean>(false);
  const [idAccount, setIdAccount] = useState<string>("");

  const { ethereum } = window;

  //Check if you have a wallet installed
  const checkWalletInstalled = () => {
    return Boolean(ethereum && ethereum.isMetaMask);
  };

  //Check if you have a METAMASK wallet installed
  const checkMetamaskInstalled = () => {
    if (checkWalletInstalled()) {
      setIsMetamaskInstall(true);
      console.log("You have installed MetaMask.");
    } else {
      setIsMetamaskInstall(false);
      console.log("You dont have installed MetaMask.");
    }
  };

  //Login with MetaMask
  const loginWithMetamask = async () => {
    setLoading(true);

    if (checkWalletInstalled()) {
      try {
        const account = await ethereum.request({
          method: "eth_requestAccounts",
        });

        localStorage.setItem("account_id", account[0]);
        setIdAccount(account[0]);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    }
  };

  useEffect(() => {
    checkMetamaskInstalled();
  }, []);

  if (isLoading && !idAccount) {
    return (
      <div className="h-screen w-screen bg-gray-50 flex justify-center items-center">
        <div className="w-[500px] h-[300px] p-10 rounded-lg	 bg-white shadow-md flex flex-col justify-center items-center">
          <svg
            role="status"
            className="mr-2 w-[150px] h-[150px] text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
            viewBox="0 0 100 101"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
              fill="currentColor"
            />
            <path
              d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
              fill="currentFill"
            />
          </svg>
        </div>
      </div>
    );
  }
  if (!idAccount && !isLoading)
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
              onClick={loginWithMetamask}
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

  return <Navigate to="/" />;
};
