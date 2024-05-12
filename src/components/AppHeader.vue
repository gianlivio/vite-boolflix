<script>
export default {
  name: 'AppHeader',
  data() {
    return {
      searchText: ''
    };
  },
  methods: {
    search() {
      this.$emit('performSearch', this.searchText);
    }
  }
};
</script>

<template>
   <header>
    <h1>BOOLFLIX</h1>
    <div>
      <input v-model="searchText" placeholder="Cerca un film o una serie TV..." />
      <button @click="search">Cerca</button>
    </div>
  </header>
  </template>
  
 
  
  <style scoped lang="scss">
  @import '../style/partials/variables';
  @import '../style/partials/mixin';

header {
  @include flex-center;
  justify-content: space-between;
  padding: 20px;
  background-color: $primary-color;
  color: white;
}

input {
  padding: 10px;
  border: 1px solid lighten($text-color, 20%);
  border-radius: 4px;
  width: 300px;
}

button {
  padding: 10px 20px;
  background-color: $secondary-color;
  border: none;
  border-radius: 4px;
  color: white;
  cursor: pointer;

  &:hover {
    background-color: darken($secondary-color, 10%);
  }
}
  </style>
  