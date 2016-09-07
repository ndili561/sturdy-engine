var React = require('react');
var PokemonSelect = require('./PokemonSelect')
var PokemonDetails = require('./PokemonDetails')
var _ = require('lodash')

var PokemonBox = React.createClass({

  getInitialState:function(){
    return { result:[]}
  },

  componentDidMount:function(){
    var url = "http://pokeapi.co/api/v2/pokemon/?limit=151";
    var request = new XMLHttpRequest();
    request.open("GET", url);
    request.onload = function(){
      if(request.status === 200){
        var data = JSON.parse(request.responseText);
        this.setState({result: data.results});

        
      }
    }.bind(this)
    request.send(null);
  },

  setFocusPokemon:function(pokemon){
    this.setState({focusPokemon: pokemon});
  },

  setUrl: function(pokemon){
    console.log(pokemon)
    this.setState({setUrl: pokemon})
  },

  pokemons:function(){
    var pokemons = this.state.result.map(function(poke){
      return poke.name;
    });
    pokemons.unshift("All");
    return _.uniq(pokemons);
  },


  render: function(){
    return(
      <div>
      <h2>Pokemon List</h2>
      <PokemonSelect items={this.pokemons()}
      selectPokemonName={this.setFocusPokemon}
      > </PokemonSelect>
      <PokemonDetails pokemon={this.state.setUrl}></PokemonDetails>
      </div>
      )
  }

})

module.exports = PokemonBox