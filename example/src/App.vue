<template>
  <header>
    <v-annoying-button :annoy="true" class="submit-button">
      Annoy me
    </v-annoying-button>
  </header>
</template>

<style scoped>
header {
  margin: auto;
  width: 50%;
}

.submit-button {
  margin-top: 1.75rem;
  background-color: hsla(160, 100%, 37%, 1);
  color: #fff;
  letter-spacing: 0.5px;
  padding: 0.85em 2.2em;
  border: none;
  font-size: 1.5rem;
  font-weight: 500;
  border-radius: 4px;
  cursor: pointer;
}

</style>
