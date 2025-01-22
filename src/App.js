import './App.css';

import React, { Component } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'


export default class App extends Component {
  pagesize=8


  // apikey = process.env.REACT_APP_NEWS_API
  apikey = 'ce759b748eca47e281645805576d78df'

state={
  progress: 0
}
setProgress  = (progress)=>{
  this.setState({progress: progress})
}

  render() {
    return (
      <div>
        <Router>
          <NavBar/>

          <LoadingBar
        color='#f11946'
        progress={this.state.progress}
      />

          <Routes>
            <Route exact path='/' element={<News setProgress= {this.setProgress} apikey={this.apikey} key='general' pageSize={this.pagesize}  category='general' />}/>
            
            <Route exact path='/business' element={<News setProgress= {this.setProgress} apikey={this.apikey} key='business' pageSize={this.pagesize} category='business' />}/>
            <Route exact path='/entertainment' element={<News setProgress= {this.setProgress} apikey={this.apikey} key='entertainment' pageSize={this.pagesize} category='entertainment' />}/>
            <Route exact path='/health' element={<News setProgress= {this.setProgress} apikey={this.apikey} key='health' pageSize={this.pagesize} category='health' />}/>
            <Route exact path='/science' element={<News setProgress= {this.setProgress} apikey={this.apikey} key='science' pageSize={this.pagesize} category='science' />}/>
            <Route exact path='/sports' element={<News setProgress= {this.setProgress} apikey={this.apikey} key='sports' pageSize={this.pagesize} category='sports' />}/>
            <Route exact path='/technology' element={<News setProgress= {this.setProgress} apikey={this.apikey} key='technology' pageSize={this.pagesize} category='technology' />}/>
          </Routes>
        </Router>
      </div>
    )
  }
}

