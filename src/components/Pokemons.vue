<template>
  <div class="pokemons">
   <Pokemon v-for="pokemon in pokemons" :key="pokemon.id" :pokemon="pokemon"/>
  </div>
</template>

<script>
import Pokemon from './Pokemon.vue'

export default {
  name: 'Pokemons',
  props: {
    pokemons: Array
  },
  components: {
    Pokemon
  }
}
</script>

<style>
  @import 'pokemons.css';
</style>
