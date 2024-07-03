import React from "react";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import RootLayout from "./layout/RootLayout";
import SignIn from "./pages/Sign-up";
import LogIn from "./pages/Log-In";
import HomePage from "./pages/Home-Page";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/">
        <Route index element={<SignIn />} />
        <Route path="login" element={<LogIn />} />
        <Route path="*" element={<NotFound/>}/>
        <Route element={<RootLayout />}>
          <Route path="home" element={<HomePage />} />
          {/* <Route path="about" element={<About/>} /> */}
          {/* <Route path="contact" element={<Contact/>} /> */}
        </Route>
      </Route>
    )
  );

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
