<script>
  import AppCard from './AppCard.vue';
  
  export default {
    name: 'AppMain',
    props: {
      movies: Array,
      series: Array,
    },
    components: {
      AppCard,
    },
  };
  </script>
  
  <template>
    <main>
      <div v-if="movies.length === 0 && series.length === 0">
        Nessun risultato trovato.
      </div>
      <div v-else>
        <div v-for="movie in movies" :key="movie.id">
          <AppCard :info="movie" />
        </div>
        <div v-for="serie in series" :key="serie.id">
          <AppCard :info="serie" />
        </div>
      </div>
    </main>
  </template>
  
  
  
  <style scoped lang="scss">
  @import '../style/partials/variables';
@import '../style/partials/mixin';

main {
  @include flex-center;
  flex-direction: column;
  align-items: center;
}
  </style>
  