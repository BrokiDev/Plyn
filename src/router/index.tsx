import { Outlet, Route, Routes } from "react-router-dom";
import { Suspense, lazy } from "react";
import Loader from "../components/loader";
import NotFound from "../pages/404-Page";

const Router = () => {
  const HomePage = lazy(() => import("../pages/Home/Home"));
  const LoginPage = lazy(() => import("../pages/auth/Login/index"));
  const RegisterPage = lazy(() => import("../pages/auth/Register/index"));
  const ForgotPasswordPage = lazy(
    () => import("../pages/auth/Forgot_Password/index")
  );
  const DashboardPage = lazy(() => import("../pages/Dashboard/index"));
  return (
    <Routes>
      <Route path="*" element={<NotFound />} />

      <Route
        path="/"
        element={
          <Suspense fallback={<Loader />}>
            <HomePage />
          </Suspense>
        }
      />

      <Route
        path="/auth"
        element={
          <Suspense fallback={<Loader />}>
            <Outlet />
          </Suspense>
        }
      >
        <Route
          path="sign-in"
          element={
            <Suspense fallback={<Loader />}>
              <LoginPage />
            </Suspense>
          }
        />
        <Route
          path="sign-up"
          element={
            <Suspense fallback={<Loader />}>
              <RegisterPage />
            </Suspense>
          }
        />
        <Route
          path="forgot-password"
          element={
            <Suspense fallback={<Loader />}>
              <ForgotPasswordPage />
            </Suspense>
          }
        />
      </Route>

      <Route
        path="/dashboard"
        element={
          <Suspense fallback={<Loader />}>
            <DashboardPage />
          </Suspense>
        }
      />
    </Routes>
  );
};

export default Router;
