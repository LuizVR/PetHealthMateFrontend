<template>
    <ion-page>
      <ion-header>
        <ion-toolbar>
          <ion-title>Mis Mascotas</ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-content>
        <ion-card v-for="pet in pets" :key="pet.id">
          <ion-card-header>
            <img :src="pet.photo" />
            <ion-card-title>{{ pet.name }}</ion-card-title>
          </ion-card-header>
        </ion-card>
        <ion-fab vertical="bottom" horizontal="end">
          <ion-fab-button @click="goToAddPetPage">
            <ion-icon :icon="add"></ion-icon>
          </ion-fab-button>
        </ion-fab>
      </ion-content>
    </ion-page>
  </template>


<script src="./js/MascotasScript.js"></script>
<style scoped src="./css/MascotasStyles.css"></style>