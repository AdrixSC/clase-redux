import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import mainStore from "./stores/Store";
import incrementarContador from "./actions/Actions";
import {connect} from "react-redux";

window.incrementarContador = incrementarContador;
window.store = mainStore;

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1> {this.props.contador} </h1>
        <button onClick = { () => {this.props.incrementarContador()} }>+</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {contador: state.count}
}

const mapDispatchToProps = dispatch => {
  return {
    incrementarContador: data => {
      dispatch(incrementarContador(data))
    }
  }
}

let componentToExport = connect(mapStateToProps, mapDispatchToProps)(App)

export default componentToExport;
