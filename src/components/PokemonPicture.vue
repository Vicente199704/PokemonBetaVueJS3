<template>
  <div class="pokemon-container">
    <!-- La imagen imgSrc es retornada desde la propiedad computada imgSrc, la cual se gestiona con las properties recibidas de pokemonPage -->
    <img 
    :src="imgSrc" 
    alt="pokemon" 
    class="hidden-pokemon" />
    <!-- Si el metodo mostrarPokemon es true, entonces lo mostramos, de lo contrario no -->
    <img 
    v-if="mostrarPokemon" 
    :src="imgSrc" 
    alt="pokemon" 
    class="fade-in" />
  </div>
</template>

<script>
export default {
  props: {
    //En props recibimos el pokemonId desde pokemonPage, donde nos enviamos un ID el cual sera utilizado en la img de abajo
    pokemonId: {
      type: Number,
      required: true,
    },
    mostrarPokemon: {
        type: Boolean,
        required: true,
        default: false
    }
  },
  computed: {
    imgSrc() {
      return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${this.pokemonId}.svg`
    },
  },
};
</script>

<style scoped>
/* Estilo aplicado a este componente */

.hidden-pokemon {
  filter: brightness(0);
}

.pokemon-container {
  height: 200px;
}
img {
  height: 200px;
  position: absolute;
  left: 0;
  right: 0;
  margin: 0 auto;
  user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  -webkit-user-drag: none;
  -webkit-user-select: none;
}
</style>
    