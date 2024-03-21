import { Route, Routes } from "react-router-dom";
import { Suspense, lazy } from "react";
import Loader from "../components/loader";
import NotFound from "../pages/404-Page";

const Router = () => {
  const HomePage = lazy(() => import("../pages/Home/Home"));
  const LoginPage = lazy(() => import("../pages/Login/index"));
  return (
    <Routes>

    <Route path="*" element={<NotFound/>}/>

      <Route
        path="/"
        element={
          <Suspense
            fallback={<Loader/>} 
          >
            <HomePage />
          </Suspense>
        }
      />

      <Route
        path="/login"
        element={
          <Suspense fallback={<Loader/>}>
            <LoginPage />
          </Suspense>
        }
      />
      <Route
        path="/register"
        element={
          <Suspense fallback={<Loader/>}>
            
          </Suspense>
        }
      />

      
    </Routes>
  );
};

export default Router;
