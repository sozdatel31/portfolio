import React from 'react'
import './App.css';
import Header from "./Header/Header";
import Main from "./Main/Main";
import Skills from "./skills/Skills";
import MyWorks from "./myWorks/MyWorks";
import Contact from "./contact/Contact";
import Footer from "./footer/Footer";

function App() {
    return (
        <div className="App">
            <Header/>
            <Main/>
            <Skills/>
            <MyWorks/>
            <Contact/>
            <Footer/>
        </div>
    );
}

export default App;
