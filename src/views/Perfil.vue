<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title class="ion-text-center">Registro</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true" class="background">
      <div class="contenido">
        <img :src="userData.foto" alt="Imagen de prueba" />
        <ion-input class="custom" label="Nombre" label-placement="floating" fill="solid" color="custom"
          v-model="userData.nombre" required>
        </ion-input>
        <ion-input class="custom" label="Nombre" label-placement="floating" fill="solid" color="custom"
          v-model="userData.nombre" required>
        </ion-input>
      </div>
    </ion-content>
  </ion-page>
</template>
<script src="./js/Perfil.js"></script>
<style scoped src="./css/PerfilStyles.css"></style>