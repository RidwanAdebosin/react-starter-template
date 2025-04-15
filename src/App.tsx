import "./App.css";
import { Suspense } from "react";
import { router } from "./router/Router";
import { RouterProvider } from "react-router-dom";

function App() {
  return (
    <Suspense fallback={<div className="text-center mt-20">Loading...</div>}>
      <RouterProvider router={router} />
    </Suspense>
  );
}

export default App;
