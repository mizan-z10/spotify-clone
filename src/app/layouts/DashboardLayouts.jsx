import React from "react";
import { Outlet } from "react-router";
import Navbar from "../../features/dashboard/ui/components/Navbar";
import { Group, Panel } from "react-resizable-panels";
import Player from "../../features/player/components/Player";

const DashboardLayouts = () => {
  return (
    <div className="h-screen bg-black text-white">
      <Navbar />
      <div className="h-[80%] ">
        <Group className="gap-2">
          <Panel maxSize={"20%"} minSize={"5%"} className="bg-[#121312] p-5 ">
            LEFT SIDE
          </Panel>
          <Panel className="bg-[#121312] p-5">
            
            <Outlet />
          </Panel>
          <Panel maxSize={"20%"} minSize={"15%"} className="bg-[#121312] p-5">
            RIGHT SIDE
          </Panel>
        </Group>
      </div>
      <Player />
    </div>
  );
};

export default DashboardLayouts;
