<template>
  <ion-page>
    <ion-header>
      <ion-toolbar class="ion-text-center">
          <!-- Utiliza ion-buttons para colocar el botón en el lado izquierdo -->
          <ion-buttons>
          <!-- Utiliza una imagen como botón y agrega un evento de clic -->
          <ion-button @click="goToMenuPage">
            <img src="/src/img/icons/arrow.png" alt="Flecha">
          </ion-button>
        </ion-buttons> 
        <ion-title>Registro</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true" class="background">
      <div v-if="mostrarAgregar">
        <div class="contenido">
          <ion-input class="custom" label="Nombre" label-placement="floating" fill="solid"
            placeholder="Ingresar tu Nombre" :clear-input="true" color="custom" type="text" v-model="usuario.nombre"
            required></ion-input>
          <ion-input class="custom" label="Correo" label-placement="floating" fill="solid" placeholder="Ingresar Correo"
            :clear-input="true" color="custom" type="email" v-model="usuario.correo" required></ion-input>
          <ion-input class="custom" label="Contraseña" label-placement="floating" fill="solid"
            placeholder="Ingresa contraseña" color="custom" type="password" v-model="usuario.contrasenia"
            required></ion-input>
          <div class="column">
            <div class="checkbox">
              <ion-checkbox class="acuerdo" v-model="usuario.acuerdo"></ion-checkbox>
            </div>
            <div class="text">
              <p>Estoy de acuerdo con la privacidad y política <br>de esta aplicación</p>
            </div>
          </div>
          <div>
            <ion-button class="registro-button" @click="registrar">Registrar</ion-button>
          </div>
          <div>
            <p class="login-p">¿Ya tienes una cuenta?
              <ion-button @click="iniciarSesion" class="login-button">Iniciar Sesion</ion-button>
            </p>
          </div>
        </div>
      </div>
    </ion-content>
  </ion-page>
</template>
<script src="./js/RegistroScript.js"></script>
<style scoped src="./css/RegistroSyles.css"></style>
