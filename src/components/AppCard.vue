<script>
export default {
  name: 'AppCard',
  props: {
    info: Object,
  },
  computed: {
    flagClass() {
      const languageCode = this.info.original_language;
      const flagClass = `flag-icon flag-icon-${languageCode}`;
      return this.isValidFlagClass(flagClass) ? flagClass : null;
    },
  },
  methods: {
    getImageUrl(path) {
      return `https://image.tmdb.org/t/p/w342${path}`;
    },
    isValidFlagClass(flagClass) {
      const el = document.createElement('span');
      el.className = flagClass;
      document.body.appendChild(el);
      const exists = window.getComputedStyle(el).backgroundImage !== 'none';
      document.body.removeChild(el);
      return exists;
    },
  },
};
  </script>
  
  <template>
    <div class="card">
    <img :src="getImageUrl(info.poster_path)" alt="Poster" />
    <div class="card-content">
      <h3>{{ info.title || info.name }}</h3>
      <p>{{ info.original_title || info.original_name }}</p>
      <p>
        <span v-if="flagClass" :class="flagClass"></span>
        <span v-else>{{ info.original_language }}</span>
        {{ info.original_language }}
      </p>
      <p>{{ info.vote_average }}</p>
    </div>
  </div>
  </template>
  
  
  
  <style scoped lang="scss">
  @import '../style/partials/variables';
@import '../style/partials/mixin';

.card {
  border: 1px solid $text-color;
  margin: 10px;
  width: 200px;
  background-color: white;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.05);
  }

  img {
    width: 100%;
    height: auto;
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
  }

  .card-content {
    padding: 10px;
  }

  h3 {
    margin: 10px 0;
    font-size: 1.2em;
  }

  p {
    margin: 5px 0;
    color: darken($text-color, 20%);
  }

  .flag-icon {
    margin-right: 5px;
  }
}
  </style>
  