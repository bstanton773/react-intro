import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import About from './views/About';
import Blog from './views/Blog';
import CreatePost from './views/CreatePost';
import Home from './views/Home';
import PostDetail from './views/PostDetail';
import ProductDetail from './views/ProductDetail';
import Shop from './views/Shop';
import UpdatePost from './views/UpdatePost';

export default class App extends Component {
  constructor(){
    super();

    this.state = {
      name: 'Brian Stanton',
      age: 27,
      racers: [],
      isLoggedIn: false
    }
    // console.log('Component is constructed')
  }

  // componentDidMount(){
  //   // console.log('Component did mount');
  //   fetch('https://ergast.com/api/f1/2020/1/driverStandings.json')
  //     .then(res => res.json())
  //     .then(data => {
  //       this.setState(
  //         {racers: data.MRData.StandingsTable.StandingsLists[0].DriverStandings}
  //       )
  //     })
  // }

  handleSubmit = (e) => {
    e.preventDefault();
    let year = e.target.yearInput.value;
    let round = e.target.roundInput.value;
    fetch(`https://ergast.com/api/f1/${year}/${round}/driverStandings.json`)
      .then(res => res.json())
      .then(data => {
        this.setState(
          {racers: data.MRData.StandingsTable.StandingsLists[0].DriverStandings}
        )
      })
  }


  handleLogin = (e) => {
    e.preventDefault();
    let username = e.target.username.value;
    let password = e.target.password.value;
    fetch('http://localhost:5000/api/tokens', {
      method: 'POST',
      headers: {
        'Authorization': 'Basic ' + btoa(`${username}:${password}`)
      }
    })
    .then(res => res.json())
    .then(data => {
      console.log(data)
      localStorage.setItem('token', data.token)
      this.setState({
        isLoggedIn: true
      })
    })
  }



  render() {
    console.log(this.state)
    return (
      <div>
        <Navbar isLoggedIn={this.state.isLoggedIn} handleLogin={this.handleLogin}/>
        <main className="container">
          <Switch>
            <Route exact path='/'>
              <Home  name={this.state.name} age={this.state.age} updateName={this.updateName} racers={this.state.racers} handleSubmit={this.handleSubmit}/>
            </Route>
            <Route exact path='/about'>
              <About name={this.state.name}/>
            </Route>
            <Route exact path='/blog'>
              <Blog />
            </Route>
            <Route exact path='/blog/:id' render={({ match }) => <PostDetail match={match} />} />
            <Route exact path='/createpost' render={() => <CreatePost />} />
            <Route exact path='/update/:id' render={({ match }) => <UpdatePost match={match} />} />
            <Route exact path='/shop' render={() => <Shop />} />
            <Route exact path='/shop/:id' render={({ match }) => <ProductDetail match={match} />} />
          </Switch>
        </main>
      </div>
    )
  }
}
