<template>
  <div class="pokemon">
    <img :src='getImgUrl(pokemon.id)' v-bind:alt='pokemon.name' width="100" height="100"/>
    <p>[{{pokemon.id}}] {{pokemon.name}}</p>
  </div>
</template>

<script>
export default {
  name: 'Pokemon',
  props: {
    pokemon: Object
  },
  methods: {
    getImgUrl(id){
      var images = require.context('../assets/', false, /\.png$/)
      return images('./' + id + ".png")
    }
  }
}
</script>

<style>
  @import 'pokemon.css';
</style>
