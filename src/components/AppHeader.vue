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
      <input v-model="searchText" placeholder="Cerca un film o una serie TV..." />
      <button @click="search">Cerca</button>
    </header>
  </template>
  
 
  
  <style scoped lang="scss">
  @import '../style/partials/variables';
@import '../style/partials/mixin';

header {
  @include flex-center;
  gap: 10px;
  margin: 20px 0;
}

input {
  padding: 10px;
  border: 1px solid lighten($text-color, 20%);
  border-radius: 4px;
  width: 300px;
}

button {
  @include flex-center;
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
  