import "./App.css";
import { useThemeHook } from "./components/ThemeProvider";
import PreLoader from "./components/preloader/PreLoader";
import Routers from "./routers/Routers";

function App() {
  const [theme] = useThemeHook();
  return (
    <>
      {/* <PreLoader /> */}
      <div className={`${theme ? "bg-[#171717]" : " bg-white"} App`}>
        <Routers />
      </div>
    </>
  );
}

export default App;
