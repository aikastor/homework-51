import React, {Component, Fragment} from 'react';
import Header from "./Components/Header/Header";
import './App.css';

import Navbar from "./Components/Header/Navbar/Navbar";
import Content from "./Components/Content/Content";
import Footer from "./Components/Footer/Footer";


class App extends Component {
  render() {
    return(
        <Fragment>
            <nav className='col-1'>
                <Navbar/>
            </nav>
          <div className='col-2'>
              <Header/>
              <Content/>
              <Footer/>
          </div>
        </Fragment>
    )};
}


export default App;
