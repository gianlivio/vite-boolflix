<script>
import axios from "axios";
import { store } from "./store";
import AppHeader from './components/AppHeader.vue';

export default {

  components: { 
    AppHeader,
  },


  data () {
    store,
  }

}

</script>

<template>
  <AppHeader />
</template>

<style lang="scss">
</style>