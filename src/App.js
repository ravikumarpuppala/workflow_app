import './App.css';
import {useState} from 'react';
import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';
import MockData from './components/MockData';


function App() {
  return (
    <div className="wf-body-class">
      <Header userName={MockData.userName} navLinks={MockData.navLinks}/>
      <Body wfData={MockData.wfData} />
      <Footer />
    </div>
  );
}

export default App;
