import React from "react";
import { Outlet } from "react-router-dom";

function GameLayout() {
  return (
    <div className="main container mx-auto p-10 h-full min-h-screen">
        <p>this is game layout</p>
      <Outlet />
    </div>
  );
}

export default GameLayout;
