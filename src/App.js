import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import SearchForm from './Components/SearchForm';
import GifList from './Components/GifList';

export default class App extends Component {

  constructor() {
    super();
    this.state = {
      gifs: [],
      loading: true
    }
  }

  componentDidMount(){
    this.performSearch();
  }

  performSearch = (query = 'hello') =>{
    //using fetch
    // fetch('http://api.giphy.com/v1/gifs/trending?api_key=dc6zaTOxFJmzC')
    //   .then(response => response.json())
    //   .then(responseData => {
    //     this.setState({
    //       gifs: responseData.data
    //     });
    //   })
    //   .catch(error => {
    //     console.log('Error fetching and parsing data.', error);
    //   });


    //using axios
    //turn the url into a template literal so we can interpolate the query
    axios.get(`http://api.giphy.com/v1/gifs/search?q=${query}&limit=24&api_key=dc6zaTOxFJmzC`)
    //axios returns the response in json, no need for response.json
    .then(response => {
        this.setState({
          //.data for axios .data again for the giphy api data array
          gifs: response.data.data,
          loading: false
        })
    })
    .catch(error => {
      console.log('Error', error);
    });
  }

  render() {
    console.log(this.state.gifs);
    return (
      <div>
        <div className="main-header">
          <div className="inner">
            <h1 className="main-title">gif search</h1>
            <SearchForm onSearch={this.performSearch}/>
          </div>
        </div>
        <div className="main-content">
          {this.state.loading ? <p>Loading</p> : <GifList data={this.state.gifs}/>}
          
        </div>
      </div>
    );
  }
}
