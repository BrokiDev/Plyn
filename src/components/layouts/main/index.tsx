import React from "react";
import SideBar from "../Sidebar";
import useAuth from "../../../middlewares/auth/auth";

interface MainLayoutProps  {
    children?: React.ReactNode;
    title: string;
}

const MainLayout = ({title,children}:MainLayoutProps) => {
  useAuth();

  const user = useAuth();
  return (
    <>
      <SideBar
        title={title}
        items={[
          {
            name: "Dashboard",
            path: "/dashboard",
            icon: "home",
          },
          {
            name: "Profile",
            path: "/dashboard/profile",
            icon: "user",
          },
          {
            name: "Settings",
            path: "/dashboard/settings",
            icon: "cog",
          },
        ]}
        name={`${user.data?.data?.fName[0]}${user.data?.data?.lName[0]}`}
      >
        {children}
      </SideBar>
    </>
  );
};

export default MainLayout;
