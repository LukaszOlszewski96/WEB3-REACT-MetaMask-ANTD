import { useEffect, useState } from "react";
import { Navigate, Outlet } from "react-router-dom";

export const DappRoute = () => {
  const [isLogged, setIsLogged] = useState<string>("");

  const authMetamask = async () => {
    const { ethereum } = window;

    if (ethereum) {
      try {
        const accounts = await ethereum.request({ method: "eth_accounts" });

        if (accounts.length > 0) {
          const accountId = accounts[0];
          setIsLogged(accountId);
          // localStorage.setItem("account_id", accountId);
        }
      } catch (error) {
        console.log(error);
      }
    }
  };

  useEffect(() => {
    authMetamask();
  }, [isLogged]);

  return localStorage.getItem("account_id")?.toLocaleLowerCase !==
    isLogged.toLocaleLowerCase ? (
    <Navigate to="/" replace />
  ) : (
    <Outlet />
  );
};
