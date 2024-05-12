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
      <h2>Film</h2>
      <div class="grid">
        <div v-for="movie in movies" :key="movie.id">
          <AppCard :info="movie" />
        </div>
      </div>
      <h2>Serie TV</h2>
      <div class="grid">
        <div v-for="serie in series" :key="serie.id">
          <AppCard :info="serie" />
        </div>
      </div>
    </div>
  </main>
  </template>
  
  
  
  <style scoped lang="scss">
 @import '../style/partials/variables';
@import '../style/partials/mixin';

main {
  padding: 20px;
}

.grid {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}
  </style>
  