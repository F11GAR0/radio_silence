import React from "react";
import s from "./app.module.scss";
import { AppRoutes } from "./appRoutes";

export const App = () => {
  return (
    <div className={`${s.app} `}>
      <AppRoutes />
    </div>
  );
};
