<template>
  <form>
    <fieldset>
      <h1>Login</h1>

      <input type="text" name="email" placeholder="Your e-mail">
      
      <input type="password" name="password" placeholder="Your password">

      <v-annoying-button :annoy="true" @click.prevent>
        Login
      </v-annoying-button>
    </fieldset>
  </form>
</template>

<style scoped>
form {
  margin: 10vw auto;
  font-family: 'Open Sans', sans-serif;
  font-weight: weight;
  font-style: normal;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
}
fieldset {
  width: 400px;
  max-width: 600px;
  border: none;
  font-weight: normal;
}
input {
  box-sizing: border-box;
  outline: none;
  display: block;
  color: #333333;
  width: 100%;
  padding: 7px;
  border: none;
  border-bottom: 1px solid #ddd;
  margin-bottom: 10px;
  font-family: inherit;
  font-size: 18px;
  height: 45px;
}
textarea {
  height: 200px;
}
button {
  display: block;
  padding: 19px 39px 18px 39px;
  color: #ffffff;
  background: #1abc9c;
  font-size: 18px;
  width: 30%;
  min-width: 150px;
  border: 1px solid #16a085;
  border-width: 1px 1px 3px;
  margin-top: 50px;
  margin-bottom: 10px;
  cursor: pointer;
  outline: none;
}
button :hover  {
  background: #109177;
}
</style>
