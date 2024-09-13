import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import NavigationBar from "./components/NavigationBar";
import MainScreen from "./components/MainScreen";

function App() {

  return (
    <>
    <BrowserRouter>
      <NavigationBar />
      <MainScreen>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </MainScreen>
    </BrowserRouter>
  </>
  )
}

export default App
