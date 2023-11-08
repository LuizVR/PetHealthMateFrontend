<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title class="ion-text-center">PET HEALTH MET</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content class="ion-padding">
      <div class="background">

        <ion-input class="custom" label="Correo" label-placement="floating" fill="solid"
         placeholder="Ingresar Correo" :clear-input="true" color="custom" type="email" v-model="email">
        </ion-input>

        <ion-input class="custom" label="Contraseña" label-placement="floating" fill="solid"
         placeholder="Ingresa contraseña" color="custom" type="password" v-model="password">
        </ion-input>
        <p class="olvidaste">
          ¿Olvidaste la 
          <ion-router-link @click="irARestablecer" class="pintar"
            >contraseña?</ion-router-link>
        </p>

        <ion-button @click="iniciarSesion" class="login-button">
          Iniciar sesión
        </ion-button>

        <p class="registrate">
          ¿Aún no tienes cuenta?,
          <ion-router-link @click="irARegistro" class="pintar">Regístrate</ion-router-link>
        </p>
      </div>
    </ion-content>
  </ion-page>
</template>

<script src="./js/LoginScript.js"></script>
<style scoped src="./css/LoginStyles.css"></style>
