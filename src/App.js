import React, { Component } from 'react';
import './App.css';
import Table from './Table';
import Form from './Form';

class App extends Component {
  state = {
    data: [
      {
        name: 'Charlie',
        job: 'Janitor',
      },
      {
        name: 'Mac',
        job: 'Bouncer',
      },
      {
        name: 'Dee',
        job: 'Aspring actress',
      },
      {
        name: 'Dennis',
        job: 'Bartender',
      },
    ],
  }

  removeCharacter = index => {
    const {data} = this.state;

    this.setState({
      data: data.filter((data, i) => {
        return i !== index;
      })
    });
  }

  handleSubmit = character => {
    this.setState({ data: [...this.state.data, character] })
  }

  render () {
    const { data } = this.state;

    return (
      <div className="App container">
        <Table data={data} removeCharacter = { this.removeCharacter  } />
        <Form handleSubmit={this.handleSubmit} />
      </div>
    );
  }
  
}

export default App;
