<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title class="ion-text-center">Perfil</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true" class="background">
      <div class="contenido">
        <img v-if="userData.foto" :src="(userData.foto)">
        <ion-input class="custom" label="Nombre" label-placement="floating" fill="solid" color="custom"
          v-model="userData.nombre" :readonly="true" required>
        </ion-input>
        <ion-input class="custom" label="Correo" label-placement="floating" fill="solid" color="custom"
          v-model="userData.correo" :readonly="true" required>
        </ion-input>
        <ion-input class="custom" label="Contraseña" label-placement="floating" fill="solid" color="custom"
          v-model="userData.contrasenia" type="password" :readonly="true" required>
        </ion-input>
      </div>
    </ion-content>
  </ion-page>
</template>
<script src="./js/Perfil.js"></script>
<style scoped src="./css/PerfilStyles.css"></style>