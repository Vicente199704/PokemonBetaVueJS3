<template>
  <div v-if="!pokemon">
    <h1>Espere porfavor...</h1>
  </div>

  <div v-else>
    <h1>¿Quien es este Pokemon?</h1>
    <!-- Imagen -->
    <PokemonPicture 
    :pokemonId="pokemon.id" 
    :mostrarPokemon="mostrarPokemon" />
    <!-- Se manda al componente de pokemon Picture , los 2 puntos son un v-BIND-->

    <!-- Opciones -->
    <PokemonOptions :pokemons="pokemonArr"
    @seleccion="revisarRespuesta" />

    <div v-if="mostrarRespuesta">
      <h2 class="fade-in">{{mensaje}}</h2>
      <button @click="nuevoJuego">
        Nuevo Juego
      </button>
    </div>
  </div>
</template>

<script>
import PokemonOptions from "../components/PokemonOptions.vue";
import PokemonPicture from "../components/PokemonPicture.vue";
import obtenerPokemonOptions from "../helpers/obtenerPokemonOptions";

export default {
  components: {
    PokemonOptions,
    PokemonPicture,
  },
  data() {
    return {
      pokemonArr: [],
      pokemon: null, 
      mostrarPokemon: false,
      mostrarRespuesta: false,
      mensaje: ''//debo basarme en el arreglo de pokemones
    };
  },
  methods: {
    async mezclaPokemonArray() {
      this.pokemonArr = await obtenerPokemonOptions();

      const rndInt = Math.floor(Math.random() * 4); //expresion que me da entre 0 y 3
      this.pokemon = this.pokemonArr[rndInt];
    },
    revisarRespuesta(pokemonId){
      this.mostrarPokemon = true
      this.mostrarRespuesta = true

      if(pokemonId === this.pokemon.id){
        this.mensaje=`Correcto, ${this.pokemon.name}`
      }else{
        this.mensaje = `Incorrecto, era ${this.pokemon.name}`
      }

    },
    nuevoJuego(){ //Reinicia todo los elementos
      this.mostrarPokemon = false
      this.mostrarRespuesta = false,
      this.pokemonArr = []
      this.pokemon = null
      this.mezclaPokemonArray()
    }
  },
  mounted() {
    this.mezclaPokemonArray();
  },
};
</script>

<style>
</style>