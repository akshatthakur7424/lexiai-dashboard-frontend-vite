import React from "react";
import { Button } from "./ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import {
  Menubar,
  MenubarCheckboxItem,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarSeparator,
  MenubarShortcut,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger,
} from "./ui/menubar";

const LeftSlideBar = () => {
  return (
    <>
      <div
        className={` h-full w-16 hover:w-44  duration-300 ease-in-out pt-14 flex flex-col items-center justify-start `}
        style={{ backgroundColor: "rgba(0, 33, 44, 1)" }}
      >
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline">Create Contract</Button>
          </DialogTrigger>
          <DialogContent className="w-screen">
            {/* First Section */}
            <div className="flex flex-col items-start justify-center gap-4">
              {/* Heading */}
              <div>
                <p className="text-xl font-bold">Contract Details</p>
              </div>

              {/* Cards */}
              <div className="flex items-center justify-center gap-4 rounded-md bg-pink-500 ">
                {/* First Card */}
                <div className="flex flex-col items-start justify-center w-auto px-10 pb-4 bg-green-200 rounded-md">
                  <div>
                    <p className="py-2 text-[12px]">Select Department</p>
                  </div>
                  <div>
                    {" "}
                    <Menubar>
                      <MenubarMenu>
                        <Button className="bg-white border-2 border-slate-500 text-black hover:bg-white h-6">
                          <MenubarTrigger><p className="text-[11px]" >select department</p> </MenubarTrigger>
                        </Button>

                        <MenubarContent>
                          <MenubarItem>
                            New Tab <MenubarShortcut>⌘T</MenubarShortcut>
                          </MenubarItem>
                          <MenubarItem>
                            New Window <MenubarShortcut>⌘N</MenubarShortcut>
                          </MenubarItem>
                          <MenubarItem disabled>
                            New Incognito Window
                          </MenubarItem>
                          <MenubarSeparator />
                          <MenubarSub>
                            <MenubarSubTrigger>Share</MenubarSubTrigger>
                            <MenubarSubContent>
                              <MenubarItem>Email link</MenubarItem>
                              <MenubarItem>Messages</MenubarItem>
                              <MenubarItem>Notes</MenubarItem>
                            </MenubarSubContent>
                          </MenubarSub>
                          <MenubarSeparator />
                          <MenubarItem>
                            Print... <MenubarShortcut>⌘P</MenubarShortcut>
                          </MenubarItem>
                        </MenubarContent>
                      </MenubarMenu>
                    </Menubar>
                  </div>
                </div>

                {/* Second Card */}
                <div className="flex flex-col items-start justify-center w-auto px-10 pb-4 bg-yellow-100 rounded-md">
                <div>
                    <p className="py-2 text-[12px]">Select Department</p>
                  </div>
                  <div>
                    {" "}
                    <Menubar>
                      <MenubarMenu>
                      <Button className="bg-white border-2 border-slate-500 text-black hover:bg-white h-6">
                          <MenubarTrigger><p className="text-[11px]" >select department</p> </MenubarTrigger>
                        </Button>

                        <MenubarContent>
                          <MenubarItem>
                            New Tab <MenubarShortcut>⌘T</MenubarShortcut>
                          </MenubarItem>
                          <MenubarItem>
                            New Window <MenubarShortcut>⌘N</MenubarShortcut>
                          </MenubarItem>
                          <MenubarItem disabled>
                            New Incognito Window
                          </MenubarItem>
                          <MenubarSeparator />
                          <MenubarSub>
                            <MenubarSubTrigger>Share</MenubarSubTrigger>
                            <MenubarSubContent>
                              <MenubarItem>Email link</MenubarItem>
                              <MenubarItem>Messages</MenubarItem>
                              <MenubarItem>Notes</MenubarItem>
                            </MenubarSubContent>
                          </MenubarSub>
                          <MenubarSeparator />
                          <MenubarItem>
                            Print... <MenubarShortcut>⌘P</MenubarShortcut>
                          </MenubarItem>
                        </MenubarContent>
                      </MenubarMenu>
                    </Menubar>
                  </div>
                </div>
              </div>
            </div>

            {/* Second Section */}
            <div className="flex flex-col items-start justify-center">
              <div className="flex items-center justify-between">
                <div>
                  {/* Heading */}
                  <div>
                    <p className="text-xl font-bold">Contract Details</p>
                  </div>
                  {/* Cards */}
                  <div className="flex items-center justify-center p-4 gap-4 rounded-md bg-pink-500 ">
                    {/* First Card */}
                    <div className="flex flex-col items-start justify-center w-auto px-10 pb-4 bg-green-200 rounded-md">
                      <div>
                        <p className="py-4">Select Department</p>
                      </div>
                      <div>
                        {" "}
                        <Menubar>
                          <MenubarMenu>
                            <Button className="bg-white border-2 border-slate-500 text-black hover:bg-white">
                              <MenubarTrigger>
                                select department{" "}
                              </MenubarTrigger>
                            </Button>

                            <MenubarContent>
                              <MenubarItem>
                                New Tab <MenubarShortcut>⌘T</MenubarShortcut>
                              </MenubarItem>
                              <MenubarItem>
                                New Window <MenubarShortcut>⌘N</MenubarShortcut>
                              </MenubarItem>
                              <MenubarItem disabled>
                                New Incognito Window
                              </MenubarItem>
                              <MenubarSeparator />
                              <MenubarSub>
                                <MenubarSubTrigger>Share</MenubarSubTrigger>
                                <MenubarSubContent>
                                  <MenubarItem>Email link</MenubarItem>
                                  <MenubarItem>Messages</MenubarItem>
                                  <MenubarItem>Notes</MenubarItem>
                                </MenubarSubContent>
                              </MenubarSub>
                              <MenubarSeparator />
                              <MenubarItem>
                                Print... <MenubarShortcut>⌘P</MenubarShortcut>
                              </MenubarItem>
                            </MenubarContent>
                          </MenubarMenu>
                        </Menubar>
                      </div>
                    </div>

                    {/* Second Card */}
                    <div className="flex flex-col items-start justify-center w-auto px-10 pb-4 bg-yellow-100 rounded-md">
                      <div>
                        <p className="py-4">Select Department</p>
                      </div>
                      <div>
                        {" "}
                        <Menubar>
                          <MenubarMenu>
                            <Button className="bg-white border-2 border-slate-500 text-black hover:bg-white">
                              <MenubarTrigger>
                                select department{" "}
                              </MenubarTrigger>
                            </Button>

                            <MenubarContent>
                              <MenubarItem>
                                New Tab <MenubarShortcut>⌘T</MenubarShortcut>
                              </MenubarItem>
                              <MenubarItem>
                                New Window <MenubarShortcut>⌘N</MenubarShortcut>
                              </MenubarItem>
                              <MenubarItem disabled>
                                New Incognito Window
                              </MenubarItem>
                              <MenubarSeparator />
                              <MenubarSub>
                                <MenubarSubTrigger>Share</MenubarSubTrigger>
                                <MenubarSubContent>
                                  <MenubarItem>Email link</MenubarItem>
                                  <MenubarItem>Messages</MenubarItem>
                                  <MenubarItem>Notes</MenubarItem>
                                </MenubarSubContent>
                              </MenubarSub>
                              <MenubarSeparator />
                              <MenubarItem>
                                Print... <MenubarShortcut>⌘P</MenubarShortcut>
                              </MenubarItem>
                            </MenubarContent>
                          </MenubarMenu>
                        </Menubar>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  {/* Heading */}
                  <div>
                    <p className="text-xl font-bold">Contract Details</p>
                  </div>
                  {/* Cards */}
                  <div className="flex items-center justify-center p-4 gap-4 rounded-md bg-pink-500 ">
                    {/* First Card */}
                    <div className="flex flex-col items-start justify-center w-auto px-10 pb-4 bg-green-200 rounded-md">
                      <div>
                        <p className="py-4">Select Department</p>
                      </div>
                      <div>
                        {" "}
                        <Menubar>
                          <MenubarMenu>
                            <Button className="bg-white border-2 border-slate-500 text-black hover:bg-white">
                              <MenubarTrigger>
                                select department{" "}
                              </MenubarTrigger>
                            </Button>

                            <MenubarContent>
                              <MenubarItem>
                                New Tab <MenubarShortcut>⌘T</MenubarShortcut>
                              </MenubarItem>
                              <MenubarItem>
                                New Window <MenubarShortcut>⌘N</MenubarShortcut>
                              </MenubarItem>
                              <MenubarItem disabled>
                                New Incognito Window
                              </MenubarItem>
                              <MenubarSeparator />
                              <MenubarSub>
                                <MenubarSubTrigger>Share</MenubarSubTrigger>
                                <MenubarSubContent>
                                  <MenubarItem>Email link</MenubarItem>
                                  <MenubarItem>Messages</MenubarItem>
                                  <MenubarItem>Notes</MenubarItem>
                                </MenubarSubContent>
                              </MenubarSub>
                              <MenubarSeparator />
                              <MenubarItem>
                                Print... <MenubarShortcut>⌘P</MenubarShortcut>
                              </MenubarItem>
                            </MenubarContent>
                          </MenubarMenu>
                        </Menubar>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
              <div className="flex flex-col items-start justify-center">
                 <div>
                  {/* Heading */}
                  <div>
                    <p className="text-xl font-bold">Contract Details</p>
                  </div>
                  {/* Cards */}
                  <div className="flex items-center justify-center p-4 gap-4 rounded-md bg-pink-500 ">
                    {/* First Card */}
                    <div className="flex flex-col items-start justify-center w-auto px-10 pb-4 bg-green-200 rounded-md">
                      <div>
                        <p className="py-4">Select Department</p>
                      </div>
                      <div>
                        {" "}
                        <Menubar>
                          <MenubarMenu>
                            <Button className="bg-white border-2 border-slate-500 text-black hover:bg-white">
                              <MenubarTrigger>
                                select department{" "}
                              </MenubarTrigger>
                            </Button>

                            <MenubarContent>
                              <MenubarItem>
                                New Tab <MenubarShortcut>⌘T</MenubarShortcut>
                              </MenubarItem>
                              <MenubarItem>
                                New Window <MenubarShortcut>⌘N</MenubarShortcut>
                              </MenubarItem>
                              <MenubarItem disabled>
                                New Incognito Window
                              </MenubarItem>
                              <MenubarSeparator />
                              <MenubarSub>
                                <MenubarSubTrigger>Share</MenubarSubTrigger>
                                <MenubarSubContent>
                                  <MenubarItem>Email link</MenubarItem>
                                  <MenubarItem>Messages</MenubarItem>
                                  <MenubarItem>Notes</MenubarItem>
                                </MenubarSubContent>
                              </MenubarSub>
                              <MenubarSeparator />
                              <MenubarItem>
                                Print... <MenubarShortcut>⌘P</MenubarShortcut>
                              </MenubarItem>
                            </MenubarContent>
                          </MenubarMenu>
                        </Menubar>
                      </div>
                    </div>

                    {/* Second Card */}
                    <div className="flex flex-col items-start justify-center w-auto px-10 pb-4 bg-yellow-100 rounded-md">
                      <div>
                        <p className="py-4">Select Department</p>
                      </div>
                      <div>
                        {" "}
                        <Menubar>
                          <MenubarMenu>
                            <Button className="bg-white border-2 border-slate-500 text-black hover:bg-white">
                              <MenubarTrigger>
                                select department{" "}
                              </MenubarTrigger>
                            </Button>

                            <MenubarContent>
                              <MenubarItem>
                                New Tab <MenubarShortcut>⌘T</MenubarShortcut>
                              </MenubarItem>
                              <MenubarItem>
                                New Window <MenubarShortcut>⌘N</MenubarShortcut>
                              </MenubarItem>
                              <MenubarItem disabled>
                                New Incognito Window
                              </MenubarItem>
                              <MenubarSeparator />
                              <MenubarSub>
                                <MenubarSubTrigger>Share</MenubarSubTrigger>
                                <MenubarSubContent>
                                  <MenubarItem>Email link</MenubarItem>
                                  <MenubarItem>Messages</MenubarItem>
                                  <MenubarItem>Notes</MenubarItem>
                                </MenubarSubContent>
                              </MenubarSub>
                              <MenubarSeparator />
                              <MenubarItem>
                                Print... <MenubarShortcut>⌘P</MenubarShortcut>
                              </MenubarItem>
                            </MenubarContent>
                          </MenubarMenu>
                        </Menubar>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-start justify-center">
                {/* Heading */}
                <div>
                    <p className="text-xl font-bold">Contract Details</p>
                  </div>
                   {/* Cards */}
                   <div className="flex items-center justify-center p-4 gap-4 rounded-md bg-pink-500 ">
                    {/* First Card */}
                    <div className="flex flex-col items-start justify-center w-auto px-10 pb-4 bg-green-200 rounded-md">
                      <div>
                        <p className="py-4">Select Department</p>
                      </div>
                      <div>
                        {" "}
                        <Menubar>
                          <MenubarMenu>
                            <Button className="bg-white border-2 border-slate-500 text-black hover:bg-white">
                              <MenubarTrigger>
                                select department{" "}
                              </MenubarTrigger>
                            </Button>

                            <MenubarContent>
                              <MenubarItem>
                                New Tab <MenubarShortcut>⌘T</MenubarShortcut>
                              </MenubarItem>
                              <MenubarItem>
                                New Window <MenubarShortcut>⌘N</MenubarShortcut>
                              </MenubarItem>
                              <MenubarItem disabled>
                                New Incognito Window
                              </MenubarItem>
                              <MenubarSeparator />
                              <MenubarSub>
                                <MenubarSubTrigger>Share</MenubarSubTrigger>
                                <MenubarSubContent>
                                  <MenubarItem>Email link</MenubarItem>
                                  <MenubarItem>Messages</MenubarItem>
                                  <MenubarItem>Notes</MenubarItem>
                                </MenubarSubContent>
                              </MenubarSub>
                              <MenubarSeparator />
                              <MenubarItem>
                                Print... <MenubarShortcut>⌘P</MenubarShortcut>
                              </MenubarItem>
                            </MenubarContent>
                          </MenubarMenu>
                        </Menubar>
                      </div>
                    </div>
                  </div>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </>
  );
};

export default LeftSlideBar;
