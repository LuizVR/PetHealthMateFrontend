<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title class="ion-text-center">PET HEALTH MET</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true" class="background">
      <div class="contenido">>
        <ion-input class="custom" label="Correo" label-placement="floating" fill="solid" placeholder="Ingresar Correo"
          :clear-input="true" color="custom" type="email" v-model="email" required>
        </ion-input>
        <ion-input class="custom" label="Contraseña" label-placement="floating" fill="solid"
          placeholder="Ingresa contraseña" color="custom" type="password" v-model="password" required>
        </ion-input>
        <input type="hidden" v-model="fotoPredeterminada">
        <p class="olvidaste">
          ¿Olvidaste la <ion-button @click="recuperarContraseña" class="links-button">Contraseña</ion-button>?
        </p>
        <ion-button @click="iniciarSesion" class="login-button">
          Iniciar sesión
        </ion-button>
        <p class="registrate">
          ¿Aún no tienes cuenta?,<ion-button @click="irARegistro" class="links-button">Registrate</ion-button>
        </p>
      </div>
    </ion-content>
  </ion-page>
</template>

<script src="./js/LoginScript.js"></script>
<style scoped src="./css/LoginStyles.css"></style>
