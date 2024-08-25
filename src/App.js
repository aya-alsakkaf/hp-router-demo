import "./App.css";
import BookList from "./Components/BookList";
import HouseList from "./Components/HouseList";
import Navbar from "./Components/Navbar";
import "./assets/css/main.css";
function App() {
  return (
    <div>
      <Navbar />
      <div className="mainHeading">
        <h1>Welcome to the Wizarding World of Harry Potter</h1>
      </div>
    </div>
  );
}

export default App;
