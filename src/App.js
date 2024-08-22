import "./App.css";
import Navbar from "./Components/Navbar";
function App() {
  return (
    <div>
      <Navbar />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          height: "50vh",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <h1>Welcome to the Wizarding World of Harry Potter</h1>
      </div>
    </div>
  );
}

export default App;
