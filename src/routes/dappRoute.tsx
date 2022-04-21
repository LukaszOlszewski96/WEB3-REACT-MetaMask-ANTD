import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";

import { MetaMaskContext } from "../context/metamask.context";
import { IMetaMaskContext } from "../types/metamask.types";

export const DappRoute = () => {
  const { account } = useContext(MetaMaskContext) as IMetaMaskContext;

  return !account ? <Navigate to="/" replace /> : <Outlet />;
};
