var React = require('react');
var ReactDOM = require('react-dom');
var PokemonBox = require('./components/PokemonBox.jsx')


window.onload = function(){
  ReactDOM.render(
      <PokemonBox />,
    document.getElementById('app')
  );
}