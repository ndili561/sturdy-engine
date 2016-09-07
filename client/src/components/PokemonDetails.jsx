var React= require('react')

var PokemonDetails = React.createClass({

  render: function(){
    if(!this.props.pokemon){return <h4> No Pokemon Selected </h4>}
      return(
        <div>
          <h4> { this.props.pokemon.name } </h4>
        </div>
      )


  }

})

module.exports = PokemonDetails