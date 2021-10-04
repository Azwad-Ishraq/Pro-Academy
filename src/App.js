
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './components/Header/Header';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Courses from './components/Courses/Courses';
import Homecourses from './components/Homecourses/Homecourses';
import Navsection from './components/Navsection/Navsection';
import Routelinks from './components/Routelinks/Routelinks';
import Getstarted from './components/Getstarted/Getstarted';
import GetPro from './components/GetPro/GetPro';
import Jobs from './components/Jobs/Jobs';
import Notfound from './components/Notfound/Notfound';
import Fixcompos from './components/Fixcompos/Fixcompos';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      
      {/* <Courses></Courses> */}
     
        <BrowserRouter>
        
          <Switch>
          
          <Route exact path='/'>
          <Fixcompos></Fixcompos>
          <Homecourses></Homecourses>
          <Footer></Footer>

          </Route>

          <Route exact path='/home'>
          <Fixcompos></Fixcompos>
          <Homecourses></Homecourses>
          <Footer></Footer>
          </Route>

          <Route path='/courses'>
          <Fixcompos></Fixcompos>
            <Courses></Courses>
            <Footer></Footer>
          </Route>

          <Route path='/signup'>
          <Fixcompos></Fixcompos>
            <Getstarted></Getstarted>
            <Footer></Footer>
          </Route>

          <Route path='/pro'>
          <Fixcompos></Fixcompos>
            <GetPro></GetPro>
            <Footer></Footer>
          </Route>


          <Route path='/jobs'>
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
