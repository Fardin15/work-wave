import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./Layouts/Main";
import Error from "./Pages/Error";
import Home from "./Pages/Home";
import AllJobs from "./Pages/AllJobs";
import AppliedJobs from "./Pages/AppliedJobs";
import AddJob from "./Pages/AddJob";
import MyJobs from "./Pages/MyJobs";
import Blogs from "./Pages/Blogs";
import AuthProvider from "./Provider/AuthProvider";
import SignUp from "./Pages/SignUp";
import Login from "./Pages/Login";
import JobDetails from "./Components/JobDetails";
import { Toaster } from "react-hot-toast";
import UpdateJob from "./Pages/UpdateJob";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HelmetProvider } from "react-helmet-async";

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <Error></Error>,
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/all-jobs",
        element: <AllJobs></AllJobs>,
      },
      {
        path: "/applied-jobs",
        element: <AppliedJobs></AppliedJobs>,
      },
      {
        path: "/add-job",
        element: <AddJob></AddJob>,
      },
      {
        path: "/my-jobs",
        element: <MyJobs></MyJobs>,
      },
      {
        path: "/update/:id",
        element: <UpdateJob></UpdateJob>,
        loader: ({ params }) =>
          fetch(`${import.meta.env.VITE_API_URL}/job/${params.id}`),
      },
      {
        path: "/blogs",
        element: <Blogs></Blogs>,
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/job/:id",
        element: <JobDetails></JobDetails>,
        loader: ({ params }) =>
          fetch(`${import.meta.env.VITE_API_URL}/job/${params.id}`),
      },
    ],
  },
]);

const queryClient = new QueryClient();
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <HelmetProvider>
        <QueryClientProvider client={queryClient}>
          <RouterProvider router={router} />
        </QueryClientProvider>
      </HelmetProvider>
    </AuthProvider>
    <Toaster />
  </React.StrictMode>
);
