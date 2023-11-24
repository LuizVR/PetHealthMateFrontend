<template>
    
    <ion-page>
      <ion-header>
        <ion-toolbar>
          <ion-title>Citas Mascotas</ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-content>
        <ion-card v-for="pet in pets" :key="pet.pet_Id"  @click="goToPetDetails(pet.pet_Id)">
          <ion-card-header>
            <img :src="pet.foto" />
            <ion-card-title>{{ pet.nombre }}</ion-card-title>
          </ion-card-header>
        </ion-card>
      </ion-content>
    </ion-page>
  </template>

<script src="./js/CalendarioScript.js"></script>