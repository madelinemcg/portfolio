import { Routes as BRoutes, Navigate, Route } from "react-router-dom";
import { useMemo } from "react";
import { HomePage } from "../pages/HomePage/HomePage";
import { ExperiencePage } from "../pages/ExperiencePage/ExperiencePage";

export const ROUTES: Record<string, string> = {
  HOME: "/",
  EXPERIENCE: "/experience",
};

export const Pages = () => {
  const redirect = useMemo(() => {
    return <Navigate replace={true} to={ROUTES.HOME} />;
  }, []);

  return (
    <BRoutes>
      <Route path={ROUTES.HOME} element={<HomePage />} />
      <Route path={ROUTES.EXPERIENCE} element={<ExperiencePage />} />
      <Route path="*" element={redirect} />
    </BRoutes>
  );
};
