<template>
    <div class="card">
      <h3>{{ info.title || info.name }}</h3>
      <p>{{ info.original_title || info.original_name }}</p>
      <p>{{ info.original_language }}</p>
      <p>{{ info.vote_average }}</p>
    </div>
  </template>
  
  <script>
  export default {
    name: 'AppCard',
    props: {
      info: Object,
    },
  };
  </script>
  
  <style scoped lang="scss">
  @import '../style/partials/variables';
@import '../style/partials/mixin';

.card {
  border: 1px solid $text-color;
  padding: 20px;
  margin: 10px;
  width: 200px;
  background-color: white;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.05);
  }
}

h3 {
  margin: 0 0 10px;
  font-size: 1.2em;
}

p {
  margin: 5px 0;
  color: darken($text-color, 20%);
}
  </style>
  