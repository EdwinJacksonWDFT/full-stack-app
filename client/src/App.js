import React from 'react';
import axios from 'axios';
import './App.css';

class App extends React.Component {
  state = {
    stores: []
  }

  async componentDidMount() {
    const { data: stores } = await axios.get('http://localhost:8080/stores');
    this.setState({
      stores
    })
  }

  render() {

    if (!this.state.stores) {
      return (
        <h1>Loading...</h1>
      )
    }

    return (
      <div className="App">
        <h1>Hello Brainstation</h1>
        {this.state.stores.map(store => (
          <article>
            <h2>{store.name}</h2>
            <p>{store.location}</p>
            <p>{store.manager}</p>
          </article>
        ))}
      </div>
    );
  }
}

export default App;
