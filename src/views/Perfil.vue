<template>
  <ion-page>
    <ion-header>
      <ion-toolbar class="ion-text-center">
        <div class="header-content">
          <img
            src="/src/img/icons/arrow.png"
            alt="User Profile"
            @click="goToMenuPage"
            class="user-icon"
          />
          <ion-title>Registro</ion-title>
        </div>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true" class="background">
      <div class="contenido">
        <img class="imagen" v-if="userData.foto" :src="(userData.foto)">
        <ion-input class="custom" label="Nombre" label-placement="floating" fill="solid" color="custom"
          v-model="userData.nombre" :readonly="true" required>
        </ion-input>
        <ion-input class="custom" label="Correo" label-placement="floating" fill="solid" color="custom"
          v-model="userData.correo" :readonly="true" required>
        </ion-input>
        <ion-button @click="irAEditar" class="editar-button">Editar</ion-button>
      </div>
    </ion-content>
  </ion-page>
</template>
<script src="./js/Perfil.js"></script>
<style scoped src="./css/PerfilStyles.css"></style>