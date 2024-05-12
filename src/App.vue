<script>
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';
import axios from 'axios';  // Importiamo Axios
import store from './store';  // Importiamo lo store

export default {
  name: 'App',
  components: {
    AppHeader,
    AppMain,
  },
  data() {
    return {
      movies: store.state.movies,  // Inizializziamo le liste di film e serie con lo stato dello store
      series: store.state.series,
    };
  },
  methods: {
    async performSearch(searchText) {
      const apiKey = '5a4fa331ae50827b6a5c9447bdf2d5c8';  // La tua API key
      store.setSearchText(searchText);  // Impostiamo il testo della ricerca nello store

      try {
        // Richiesta per i film
        const movieResponse = await axios.get(`https://api.themoviedb.org/3/search/movie`, {
          params: {
            api_key: apiKey,
            query: searchText,
            language: 'it-IT',
          },
        });
        store.setMovies(movieResponse.data.results);  // Impostiamo la lista dei film nello store

        // Richiesta per le serie TV
        const seriesResponse = await axios.get(`https://api.themoviedb.org/3/search/tv`, {
          params: {
            api_key: apiKey,
            query: searchText,
            language: 'it-IT',
          },
        });
        store.setSeries(seriesResponse.data.results);  // Impostiamo la lista delle serie nello store
      } catch (error) {
        console.error("Errore durante la ricerca:", error);  // Gestione degli errori
      }
    }
  },
  watch: {
    'store.state.movies': function(newMovies) {
      this.movies = newMovies;  // Aggiorniamo la lista dei film quando cambia nello store
    },
    'store.state.series': function(newSeries) {
      this.series = newSeries;  // Aggiorniamo la lista delle serie quando cambia nello store
    }
  }
};
</script>



<template>
  <div id="app">
    <AppHeader @performSearch="performSearch" />  <!-- Colleghiamo il metodo performSearch all'evento performSearch -->
    <AppMain :movies="movies" :series="series" />  <!-- Passiamo le liste di film e serie come proprietà -->
  </div>
</template>



<style lang="scss">
#app {
  text-align: center;
}
</style>
