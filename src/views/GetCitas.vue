<template>
    <ion-page>
      <ion-header>
        <ion-toolbar>
          <ion-title>Todas las citas</ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-content>
        <ion-card v-for="date in dates" :key="date.fecha">
          <ion-card-header>
            <ion-card-title>{{ date.motivo }}</ion-card-title>
            <p>{{ formatDate(date.fecha) }}</p>
          </ion-card-header>
          <ion-card-content>
          <ion-button color="danger" @click="eliminarCita(date)" class="ion-text-end">
            Eliminar
          </ion-button>
        </ion-card-content>
        </ion-card>
      </ion-content>
    </ion-page>
  </template>
<script src="./js/GetCitasScript.js"></script>

