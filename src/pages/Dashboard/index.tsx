import MainLayout from "../../components/layouts/main";

const DashboardPage = () => {
  return (
    <MainLayout title="Dashboard">
      <div>
        <h1 className="text-red-500 border">Dashboard</h1>
        <button className="p-3 bg-red-700 ml-3">Logout</button>
      </div>
    </MainLayout>
  );
};

export default DashboardPage;
