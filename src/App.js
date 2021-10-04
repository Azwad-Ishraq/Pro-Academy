
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Courses from './components/Courses/Courses';
import Homecourses from './components/Homecourses/Homecourses';
import Getstarted from './components/Getstarted/Getstarted';
import GetPro from './components/GetPro/GetPro';
import Jobs from './components/Jobs/Jobs';
import Notfound from './components/Notfound/Notfound';
import Fixcompos from './components/Fixcompos/Fixcompos';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">



      <BrowserRouter>

        <Switch>

          <Route exact path='/'>
            {/* The Fixcompos contains header routlinks and navbar */}
            <Fixcompos></Fixcompos>
            <Homecourses></Homecourses>

            <Footer></Footer>

          </Route>

          <Route path='/home'>
            {/* The Fixcompos contains header routlinks and navbar */}
            <Fixcompos></Fixcompos>
            <Homecourses></Homecourses>
            <Footer></Footer>
          </Route>

          <Route path='/courses'>
            {/* The Fixcompos contains header routlinks and navbar */}
            <Fixcompos></Fixcompos>
            <Courses></Courses>
            <Footer></Footer>
          </Route>

          <Route path='/signup'>
            {/* The Fixcompos contains header routlinks and navbar */}
            <Fixcompos></Fixcompos>
            <Getstarted></Getstarted>
            <Footer></Footer>
          </Route>

          <Route path='/pro'>
            {/* The Fixcompos contains header routlinks and navbar */}
            <Fixcompos></Fixcompos>
            <GetPro></GetPro>
            <Footer></Footer>
          </Route>


          <Route path='/jobs'>
            {/* The Fixcompos contains header routlinks and navbar */}
            <Fixcompos></Fixcompos>
            <Jobs></Jobs>
            <Footer></Footer>
          </Route>

          <Route path='*'>
            <Notfound></Notfound>
          </Route>
        </Switch>

      </BrowserRouter>

    </div>
  );
}

export default App;
