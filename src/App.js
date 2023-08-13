import "./App.css";
import PreLoader from "./components/preloader/PreLoader";
import Routers from "./routers/Routers";

function App() {
  return (
    <>
      <PreLoader />
      <div className="App">
        <Routers />
      </div>
    </>
  );
}

export default App;
