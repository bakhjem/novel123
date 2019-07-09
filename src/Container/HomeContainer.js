import React, { Component } from "react";
import Header from '../Component/Header';
import Home from '../Component/Home';
import TopWeakeNovel from '../Component/TopWeakeNovel';
import Genres from '../Component/Genres';
import Footer from '../Component/Footer';
import { Helmet } from 'react-helmet';
import ReactGA from 'react-ga';



class HomeContainer extends Component {

  initializeReactGA() {
    ReactGA.initialize('UA-142539435-1');
    ReactGA.pageview('/homepage');
  }
  componentDidMount() {
    this.initializeReactGA();
  }
  
  render() {
    return (
      <div>
        <Helmet>
          <title>Read Novel Online</title>
          <meta name="description" content="We are offering free books online read! Read novel updated daily: light novel translations, web novel, chinese novel, japanese novel, korean novel and other novel online." />
          <meta name="theme-color" content="#008f68" />
          <meta name="keywords" content="Novel updates, Free books online, Light Novel, Read light novel, Light novel translations, Free Novels Online" />
        </Helmet>
        <Header />
        <div id="main_body">
          <Home />
          <div className="cotphai">
            <TopWeakeNovel />
            {/* <Genres /> */}
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default HomeContainer;
