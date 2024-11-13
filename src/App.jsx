import { Component } from "react";
import './App.css'

class App extends Component {
  constructor() {
    super();

    this.state = {
      users: [],
    };
  }
  componentDidMount() {
    fetch(" https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
       .then((data) => {
         this.setState({ users: data });
       });
  }
  render() {
    return (
      <div className="container">
        {this.state.users.map((user) => (
          <div className="subcontainer">
            <p>{user.id}</p>
            <p>{user.name}</p>
            <p>{user.email}</p>
            <p>{user.username}</p>
            <p>{user.email}</p>
          </div>
        ))}
      </div>
    );
  }
}
export default App;
