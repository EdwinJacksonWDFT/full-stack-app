import React from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

import StoreList from './store-list';
import AddStoreForm from './add-store-form';

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

  handleSubmit = async event => {
    event.preventDefault();

    const postConfig = {
      name: event.target.name.value,
      location: event.target.location.value,
      manager: event.target.manager.value,
      openDate: event.target.openDate.value,
    }

    const newStore = await axios
      .post('http://localhost:8080/stores', postConfig)

    this.setState({
      stores: [...this.state.stores, newStore]
    });
  }

  render() {

    if (!this.state.stores) {
      return (
        <h1>Loading...</h1>
      )
    }

    return (
      <Router>
        <Switch>
          <Route 
            exact
            path="/" 
            render={props => <StoreList stores={this.state.stores} />} />
          <Route
            path="/add"
            render={props => <AddStoreForm submit={this.handleSubmit} />} />
        </Switch>
      </Router>
    );
  }
}

export default App;
