<template>
    <ion-page>
      <ion-header>
        <ion-toolbar>
          <ion-title>Mascotas</ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-content>
        <ion-card v-for="pet in pets" :key="pet.pet_Id"  @click="goToPetDetails(pet.pet_Id)">
          <ion-card-header>
            <img :src="pet.foto" />
            <ion-card-title>{{ pet.nombre }}</ion-card-title>
          </ion-card-header>
        </ion-card>
        <ion-fab class="floating-button" vertical="bottom" horizontal="end">
          <ion-fab-button @click="goToAddPetPage">
            <ion-icon :icon="calendarIcon"></ion-icon>
          </ion-fab-button>
        </ion-fab>
      </ion-content>
    </ion-page>
  </template>

<script src="./js/CalendarioScript.js"></script>