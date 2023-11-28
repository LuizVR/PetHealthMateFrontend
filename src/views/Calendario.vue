
<template>
  <ion-page class="mascotas-view">
    <ion-header>
      <ion-toolbar class="ion-text-center">
        <div class="header-content">
          <img src="/src/img/icons/arrow.png" alt="User Profile" @click="goToMenuPage" class="user-icon" />
          <ion-title>Mis Mascotas</ion-title>
        </div>
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