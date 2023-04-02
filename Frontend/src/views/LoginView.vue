<template>
    <div>
      <br /><br /><br /><br />
      <form @submit.prevent="login">
        <div>
          <label for="username">Nombre de usuario</label>
          <input type="text" id="username" v-model="username" />
        </div>
        <div>
          <label for="password">Contraseña</label>
          <input type="password" id="password" v-model="password" />
        </div>
        <button type="submit">Iniciar sesión</button>
      </form>
    </div>
    <div>
      <br /><br /><br /><br />
      <form @submit.prevent="register">
        <h1>registro</h1>
        <div>
          <label for="username">Nombre de usuario</label>
          <input type="text" id="username" v-model="username" />
        </div>
        <div>
          <label for="password">Contraseña</label>
          <input type="password" id="password" v-model="password" />
        </div>
        <button type="submit">Iniciar sesión</button>
      </form>
    </div>
  </template>
  
  <script lang="ts">
  import router from "@/router";
import { register } from "register-service-worker";
  import { Options, Vue } from "vue-class-component";
  import { Router } from "vue-router";
  
  @Options({
    components: {
      // aquí puedes declarar componentes que necesites
    },
  })
  export default class LoginView extends Vue {
    username = ''
    password = ''
  
    async login() {
      const url = 'http://localhost:8000/login';  
      const credentials = {
        username: this.username,
        password: this.password
      };
  
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(credentials)
      });
  
      if (!response.ok) {
        const error = await response.json();
        console.error('Error en la llamada a la API:', error);
        throw new Error(error.detail);
    }
  
      const data = await response.json();
      const token = data.token;
      console.log("Token:", token);
      router.push('/home')
      
  
      
    }


    async register() {
      const url = 'http://localhost:8000/users/';  
      const credentials = {
        username: this.username,
        password: this.password
      };
  
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(credentials)
      });
  
      if (!response.ok) {
        const error = await response.json();
        console.error('Error en la llamada a la API:', error);
        throw new Error(error.detail);
    }
  
    }
  }
  </script>
  