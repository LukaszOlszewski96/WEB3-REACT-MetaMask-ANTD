import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CryptoWalletLoginForm } from "../components/form/cryptoWalletLoginForm.component";
import { MainLayout } from "../components/layout/layout";
import { DashboardPage } from "../pages";
import { MainPage } from "../pages/main.page";
import { DappRoute } from "./dappRoute";

export const BaseRoute: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/login" element={<CryptoWalletLoginForm />} />
        <Route element={<DappRoute />}>
          <Route path="/dashboard" element={<DashboardPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
