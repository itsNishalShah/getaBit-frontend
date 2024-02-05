import { NavBar } from "./components/NavBar"
import { CoverComponent } from "./components/Cover"
import { CenterComponent } from "./components/CenterComponent"
function App() {
  return (
    <>
    <div className="w-[100%] sm:w-full flex flex-col">
      <NavBar />
      <CoverComponent />
      <CenterComponent />
      </div>
    </>
  )
}

export default App
