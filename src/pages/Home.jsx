import React from "react";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "../components/ui/resizable";
// import LeftSlideBar from "../component/LeftSlideBar";
import PieChartComponent from "../components/PieChartComponent";
import CalendarComponent from "../components/CalendarComponent";
import BarChartComponent from "../components/BarChartComponent";
import TableComponent from "../components/TableComponent";
import LexiVault from "../components/LexiVault";

const Home = () => {
  return (
    <>
      <div className=" w-full h-full pt-12  flex items-center justify-center">
        <ResizablePanelGroup direction="horizontal" className="w-screen h-auto">
          {/* <ResizablePanel defaultSize={6}>
            <LeftSlideBar />
          </ResizablePanel> */}
          <ResizableHandle />
          <ResizablePanel defaultSize={40}>
            <ResizablePanelGroup direction="vertical">
              <ResizablePanel defaultSize={75}>
                <div className="flex items-center justify-center w-full h-full" ><PieChartComponent/></div>
              </ResizablePanel>
              <ResizableHandle />
              <ResizablePanel defaultSize={75}>
              <div className="flex items-center justify-center" ><CalendarComponent/></div>
              </ResizablePanel>
            </ResizablePanelGroup>
          </ResizablePanel>
          <ResizableHandle />
          <ResizablePanel defaultSize={50}>
            <ResizablePanelGroup direction="vertical">
              <ResizablePanel defaultSize={75}>
              <div className="flex items-center justify-center" ><BarChartComponent/></div>
              </ResizablePanel>
              <ResizableHandle />
              <ResizablePanel defaultSize={75}>
              <div className="flex items-center justify-center overflow-y-scroll h-full" ><TableComponent/></div>
              </ResizablePanel>
            </ResizablePanelGroup>
          </ResizablePanel>
          <ResizableHandle />
          <ResizablePanel defaultSize={50}>
          <LexiVault/>         
          </ResizablePanel>
        </ResizablePanelGroup>
      </div>
    </>
  );
};

export default Home;