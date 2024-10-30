import AppRouter from "./routes/AppRouter";
import { ToastContainer, Slide } from "react-toastify";

const App = () => {
  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={1500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        // theme={isDark ? "dark" : "light"}
        transition={Slide}
        stacked
      />
      <AppRouter />
    </>
  );
};

export default App;
