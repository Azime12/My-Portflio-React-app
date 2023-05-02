import Navbar from "./Components/Navbar/Navbar";
import './App.css'
import  Intro from './Components/Intro/Intro'
import Services from "./Components/Services/Services";
import Experiance from "./Experiance/Experiance";
import Works from "./Components/Works/Works";
import Porfolio from "./Components/Porfolio/Porfolio";
import Testimonial from "./Components/Tenstimonial/Testimonial";
import Contact from './Components/Contact/Contact'
function App() {
  return (
    <div className="App">
<Navbar/>
<Intro/>
<Services/>
<Experiance/>
<Works/>
<Porfolio/>
<Testimonial/>
<Contact/>
    </div>
  );
}

export default App;
