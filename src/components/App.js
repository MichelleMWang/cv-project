
import './App.css';
import Header from "./Header.js"
import Education from "./Education"
import Experience from "./Experience"

function App() {
  return (
    <div className="App">
      <h1><span id="logo-1">Dream</span><span id="logo-2">CV</span></h1>
      <Header></Header>
      <Education></Education>
      <Experience></Experience>
    </div>

  );
}

export default App;
