import React from "react";
import LeftSlideBar from "./LeftSlideBar";

const MainScreen = ({ children }) => {
  return (
    <>
      <div className="h-svh w-svw flex items-center justify-start bg-white">
        <div className="h-full" ><LeftSlideBar/></div>
        <div className="w-svw h-svh" >{children}</div>
      </div>
    </>
  );
};

export default MainScreen;
