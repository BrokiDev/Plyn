import SideBar from "../../components/layouts/Sidebar";
import useAuth from "../../middlewares/auth/auth";

const DashboardPage = () => {
  useAuth();



  console.log("Dashboard");
  return (
    <div>
      <SideBar
        title="Dashboard"
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
      >
        <div>
          <h1 className="text-red-500 border">Dashboard</h1>
          <button className="p-3 bg-red-700 ml-3">Logout</button>
        </div>
      </SideBar>
    </div>
  );
};

export default DashboardPage;
