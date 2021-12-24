import React, { Component } from 'react';

import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchFields: '',
    }
  }

  componentDidMount = () => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json()
    .then(monsters => this.setState({ monsters })));
  }

  searchMonster = (value) => {
    this.setState({
      searchFields: value,
    })
  }

  render() {
    const {
      monsters, searchFields,
    } = this.state;

    const filteredMonsters = monsters.filter(x => x.name.toLowerCase().includes(searchFields.toLowerCase()));

    return (
      <div className="App">
        <h1> Monster Rolodex </h1>
        <SearchBox
          placeholder="Search Monster"
          handelChange={this.searchMonster}
        />
        <CardList data={filteredMonsters} />
      </div>
    );
  }
}

export default App;
