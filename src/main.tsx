import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import "./index.css";
import HomePage from "./pages/HomePage.tsx";
import LoginPage from "./pages/LoginPage.tsx";
import CreateAccountPage from "./pages/CreateAccountPage.tsx";
import MyThreadsPage from "./pages/MyThreadsPage.tsx";
import CreateDiscussionThreadPage from "./pages/CreateDiscussionThreadPage.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="account/create" element={<CreateAccountPage />} />
        <Route path="myThreads" element={<MyThreadsPage />} />
        <Route path="threads">
          <Route path="create" element={<CreateDiscussionThreadPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
