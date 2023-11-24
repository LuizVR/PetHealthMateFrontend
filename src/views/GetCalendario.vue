<template>
    <ion-page>
      <ion-header>
        <ion-toolbar>
          <ion-title>Mis Citas</ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-content>
        <ion-card v-for="date in dates" :key="date.date_Id"  @click="goToPetDetails(date.date_Id)">
          <ion-card-header>
            <ion-card-title>{{ pet.motivo }}</ion-card-title>
            <ion-card-title>{{ pet.fecha }}</ion-card-title>
          </ion-card-header>
        </ion-card>
      </ion-content>
    </ion-page>
  </template>
<script src="./js/MascotasScript.js"></script>