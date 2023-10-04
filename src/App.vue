<script setup>
import { ref } from 'vue'
import axios from 'axios'

const email = ref('')
const password = ref('')
const confirmPassword = ref('')
const feedbackMessage = ref('')

async function handleSubmit() {
  const response = await axios.post('http://localhost:8080/api/users', {
    email: email.value,
    password: password.value
  })
  if (response.data?.message) feedbackMessage.value = response.data?.message
}
</script>

<template>
  <div id="container">
    <h1>Cadastre-se no sistema</h1>

    <form @submit.prevent="handleSubmit">
      <div class="input-field">
        <label for="email">Digite seu e-mail</label>
        <input type="email" id="email" v-model="email" />
      </div>

      <div class="input-field">
        <label for="password">Digite sua senha</label>
        <input type="password" id="password" v-model="password" />
      </div>

      <div class="input-field">
        <label for="confirm-password">Confirme sua senha</label>
        <input type="password" id="confirm-password" v-model="confirmPassword" />
      </div>

      <button type="submit" id="save">Salvar</button>
    </form>

    <div class="alert">
      <p>{{ feedbackMessage }}</p>
    </div>
  </div>
</template>

<style scoped>
*,
button {
  color: #2f2f34;
  font-family: sans-serif;
}

#container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
}

.input-field {
  display: flex;
  flex-direction: column;
  gap: 3px;
}

label {
  font-size: 0.85rem;
}

input {
  border: 2px solid #648381;
  border-radius: 6px;
  padding: 5px;
  outline: none;
}
input:focus {
  border-color: #8acb88;
}

button {
  width: 100%;
  background-color: #e4fde1;
  border: 2px solid #8acb88;
  padding: 5px;
  text-transform: uppercase;
  font-weight: bold;
  border-radius: 5px;
}
</style>
