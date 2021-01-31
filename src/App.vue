<template>
  <div id="app">
    <Pokemons :pokemons="[
    {id: '1', name: 'Bulbizarre'},
    {id: '2', name: 'Herbizarre'},
    {id: '3', name: 'Florizarre'},
    {id: '4', name: 'Salamèche'},
    {id: '5', name: 'Reptincel'},
    {id: '6', name: 'Dracaufeu'},
    {id: '7', name: 'Carapuce'},
    {id: '8', name: 'Carabaffe'},
    {id: '9', name: 'Tortank'},
    {id: '10', name: 'Chenipan'},
    {id: '11', name: 'Chrysacier'},
    {id: '12', name: 'Papilusion'},
    ]"/>
  </div>
</template>

<script>
import Pokemons from './components/Pokemons.vue'

export default {
  name: 'App',
  components: {
    Pokemons
  }
}
</script>

<style>
  @import './app.css';
</style>