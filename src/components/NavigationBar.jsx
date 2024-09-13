import React from "react";
import { Button } from "./ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

const NavigationBar = () => {
  return (
    <>
      <div
        className="fixed top-0 left-0 right-0 z-50 w-screen h-12 flex items-center justify-between px-4 "
        style={{ backgroundColor: "rgba(0, 33, 44, 1)" }}
      >
        <div>
          <p className="text-white text-xl">LeXi Ai</p>
        </div>
        <div className="flex items-center justify-evenly gap-4">
          <Button className="border-white bg-white h-7 rounded-sm text-black hover:bg-white">
            LeXi IQ
          </Button>
          <Button className="border-white border-[1px] bg-[rgba(0, 33, 44, 1)] h-7 rounded-sm hover:bg-white hover:text-black">
            E Mohar
          </Button>
          <div>
            <Avatar className="h-7 w-7  cursor-pointer" >
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavigationBar;
