
<template>
  <ion-page class="mascotas-view">
    <ion-header>
      <ion-toolbar>
        <!-- Utiliza ion-buttons para colocar el botón en el lado izquierdo -->
        <ion-buttons>
          <!-- Utiliza una imagen como botón y agrega un evento de clic -->
          <ion-button @click="goToMenuPage">
            <img src="/src/img/icons/arrow.png" alt="Flecha">
          </ion-button>
        </ion-buttons> 
        <ion-title>Mis Mascotas</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true" class="background">
      <ion-card v-for="pet in pets" :key="pet.pet_Id"  @click="goToPetDetails(pet.pet_Id)">
        <ion-card-header>
          <img :src="pet.foto" />
          <ion-card-title>{{ pet.nombre }}</ion-card-title>
        </ion-card-header>
      </ion-card>
      <ion-fab class="floating-button" vertical="bottom" horizontal="end">
          <ion-fab-button @click="goToCalendar">
            <ion-icon :icon="calendarIcon"></ion-icon>
          </ion-fab-button>
        </ion-fab>
    </ion-content>
  </ion-page>
</template>


<script src="./js/CalendarioScript.js"></script>
<style scoped src="./css/MascotasStyles.css"></style>