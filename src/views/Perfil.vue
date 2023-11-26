<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
      <!-- Utiliza ion-buttons para colocar el botón en el lado izquierdo -->
      <ion-buttons>
          <!-- Utiliza una imagen como botón y agrega un evento de clic -->
          <ion-button @click="goToMenuPage">
            <img src="/src/img/icons/arrow.png" alt="Flecha" style="width: 30px; height: 30px;">
          </ion-button>
        </ion-buttons>    
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
        <ion-button @click="irAEditar" class="editar-button">Editar</ion-button>
      </div>
    </ion-content>
  </ion-page>
</template>
<script src="./js/Perfil.js"></script>
<style scoped src="./css/PerfilStyles.css"></style>