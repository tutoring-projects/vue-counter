<template lang="pug">
  #home
    h1 hello, world!
    button( @click="$store.commit('deincrement', 5)" ) -
    p {{ counter }}
    button( @click="$store.commit('increment', 3)" ) +

    br
    br

    router-link(to="/about") About
</template>

<script>

import { mapState } from 'vuex'

export default {
  // data () {
  //   return {
  //     multiplier: 7
  //   }
  // },

  // computed: {
  //   counter () {
  //     return 15 * this.multiplier
  //   },
  // },

  // mounted () {
  //   setTimeout(() => {
  //     this.multiplier = 14
  //   }, 2000)
  // },

  computed: mapState(["counter"])
}
</script>