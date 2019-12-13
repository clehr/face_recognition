import React, { Component } from 'react';
import Clarifai from 'clarifai';
import './App.css';
import Navigation from './components/Navigation/Navigation';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Logo from './components/Logo/Logo';
import Rank from './components/Rank/Rank';
import Particles from 'react-particles-js';

const app = new Clarifai.App({
  apiKey: 'cf0acb53eddc495ab3c1faada7a68ac2'
});

const particlesOptions = {
  particles: {
    number: {
      value: 70,
      density: {
        enable: true,
        value_area: 800
      }
    }
  }
}

class App extends Component {
  constructor() {
    super();

    this.state = {
      input: ''
    }
  }

  onInputChange = (event) => {
    console.log(event.target.value);
  }

  onSubmit = () => {
    app.models.predict(
      "a403429f2ddf4b49b307e318f00e528b",
      "https://samples.clarifai.com/face-det.jpg"
    )
      .then(
        function (response) {
          console.log(response);
        },
        function (err) {
          console.log(err);
        }
      );
  }

  render() {
    return (
      <div className="App" >
        <Particles className="particles"
          params={particlesOptions} />
        <Navigation />
        <Logo />
        <Rank />
        <ImageLinkForm onInputChange={this.onInputChange} onButtonSubmit={this.onSubmit} />
        {
          /*
            <FaceRecognition/>
          */
        }
      </div>
    );
  }
}

export default App;