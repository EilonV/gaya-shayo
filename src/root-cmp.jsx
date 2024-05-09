import { Home } from "./pages/home";
import ReactGA from "react-ga4";

function App() {
  ReactGA.initialize('G-KNYSCDC71F')

  return (
    <Home />
  )
}

export default App;
