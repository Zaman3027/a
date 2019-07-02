import React, { Component } from 'react';
import './App.css';
import { Parallax, Background } from 'react-parallax';
import bgImage from "./assets/background.jpg"
import bgImage2 from "./assets/background2.jpg"
class App extends Component {
  render() {
    return (
      <div className="App">
        <Parallax
            blur={{ min: -15, max: 15 }}
            bgImage={bgImage2}
            bgImageAlt="the dog"
            strength={-200}
        >
            Blur transition from min to max
            <div style={{ height: '100vh' }} />
        </Parallax>
      </div>
    );
  }
}

export default App;
