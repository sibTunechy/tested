import { BrowserRouter as Router, Route, Switch  } from 'react-router-dom';
import News from "./Pages/news";
import Navbar from "./navbar";
import Audio from "./Pages/audio";
import Video from "./Pages/video";
import Error from "./error";
// import Footer from "./footer";

function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Audio}/>
          
        <Route  path="/news" component={News}/>
          
        <Route path="/video" component={Video}/>
        
        <Route path="*">
          <Error />
        </Route>

      {/* <Footer /> */}
      </Switch>
    </Router>  
    </>
  );
}

export default App;
