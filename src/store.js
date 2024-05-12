export default {
    state: {
      searchText: '',
      movies: [],
      series: []
    },
    setSearchText(text) {
      this.state.searchText = text;
    },
    setMovies(movies) {
      this.state.movies = movies;
    },
    setSeries(series) {
      this.state.series = series;
    }
  };
  