import React from 'react'
import UserCard from './Components/UserCard';
import './App.css'


class App extends React.Component {
  constructor() {
    super();
    console.log("cd: App.js: App: constructor-> was ran")
    this.state= {
      userCard: [],
      userFollowing: [],
    }
  }

  componentDidMount() {
    fetch('https://api.github.com/users/ChadDiaz')
    .then((res) => res.json())
    .then((json) => {
      console.log("cd: App.js: App: CDM: userCard json results", json)
      this.setState({
        userCard: json
      })
    })
    fetch('https://api.github.com/users/ChadDiaz/following')
    .then((res) => res.json())
    .then((json) => {
      console.log("cd: App.js: App: CDM: userFollowing results", json)
    })
  }  
  render() {
    return(
      <div className="App">
        <UserCard userCard={this.state.userCard} />
      </div>
    );
  }
}
export default App;