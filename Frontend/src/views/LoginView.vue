<template>
  <div class="bg-login">
    <img class="logo" src="@/assets/logodark.png" alt="" />
    <div class="container cont-login" v-if="registro">
      <div class="row justify-content-center">
        <div class="col-sm-6 col-md-3 d-flex flex-column align-items-center">
          <form @submit.prevent="log">
            <div class="form-floating mb-4 mt-4">
              <input
                v-model="username"
                type="text"
                class="form-control input-form"
                id="username"
                placeholder="Ingresar usuario"
              />
              <label for="username" class="text-black">Ingresar usuario</label>
            </div>
            <p class="fade-in" v-if="error">
              Usuario no encontrado. Intente nuevamente
            </p>
            <div class="form-floating mb-3">
              <input
                v-model="password"
                type="password"
                class="form-control input-form"
                id="password"
                placeholder="Ingresar contraseña"
              />
              <label for="password" class="text-black"
                >Ingresar contraseña</label
              >
            </div>
            <div class="text-center">
              <button type="submit" class="btn btn-black btn-effect">
                Iniciar Sesión
              </button>
            </div>
            <hr />
            <p style="text-align: center">
              No tienes cuenta?
              <button
                class="click-a"
                @click="
                  (registro = false),
                    (error = false),
                    (username = ''),
                    (password = '')
                "
              >
                Registrate
              </button>
            </p>
          </form>
        </div>
      </div>
      <br />
    </div>
    <div class="container cont-login" v-if="!registro">
      <div class="row justify-content-center">
        <div class="col-sm-6 col-md-3 d-flex flex-column align-items-center">
          <form @submit.prevent="reg">
            <div class="form-floating mb-4 mt-4">
              <input
                v-model="username"
                type="text"
                class="form-control input-form"
                id="username"
                placeholder="Ingresar usuario"
                pattern="[A-Za-z0-9]+"
                minlength="3"
                maxlength="20"
                oninput="this.value = this.value.replace(/[^a-zA-Z0-9]/g,'');"
                required
              />
              <label for="username" class="text-black">Ingresar usuario</label>
            </div>
            <div class="form-floating mb-3">
              <input
                v-model="password"
                type="password"
                class="form-control input-form"
                id="password"
                placeholder="Ingresar contraseña"
                minlength="6"
                required
              />
              <label for="password" class="text-black">Ingresar contraseña</label>
            </div>
            <p v-if="error">Contraseña no coincide</p>
            <div class="form-floating mb-3">
              <input
                v-model="password2"
                type="password"
                class="form-control input-form"
                id="password"
                placeholder="Ingresar contraseña"
                minlength="6"
                required
              />
              <label for="password" class="text-black">Confirmar contraseña</label>
            </div>
            <div class="text-center">
              <button type="submit" class="btn btn-black btn-effect">Registrate</button>
            </div>
            <hr />
            <p style="text-align: center">
              No tienes cuenta?
              <button
                class="click-a"
                @click="
                  (registro = true),
                  (username = ''),
                  (password = ''),
                  (password2 = ''),
                  (error = false)
                "
              >
                Registrate
              </button>
            </p>
          </form>
          
        </div>
      </div>
      <br />
    </div>
  </div>
</template>

<script lang="ts">
import router from "@/router";
import { Options, Vue } from "vue-class-component";
import { login, register } from "@/services";

@Options({
  components: {
    // aquí puedes declarar componentes que necesites
  },
})
export default class LoginView extends Vue {
  username = "";
  password = "";
  password2 = "";
  error = false;
  registro = true;

  async reg() {
    try {
      if (this.password === this.password2) {
        await register(this.username, this.password);
        console.log("registro con exito");
        router.push("/home");
      } else {
        this.error = true;
      }
    } catch (error) {
      // Manejar errores de registro
    }
  }
  async log() {
    try {
      await login(this.username, this.password);
      console.log("login con exito");
      router.push("/home");
    } catch (error) {
      console.log("error login" + error);
    }
  }
}
</script>
