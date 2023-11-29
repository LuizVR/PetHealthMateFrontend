<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <!-- Utiliza ion-buttons para colocar el botón en el lado izquierdo -->
        <ion-buttons>
          <!-- Utiliza una imagen como botón y agrega un evento de clic -->
          <ion-button @click="goToMenuPage">
            <img src="/src/img/icons/arrow.png" alt="Flecha">
          </ion-button>
        </ion-buttons> 
        <ion-title>Todas las citas</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content class="custom-background">
      <ion-card v-for="date in dates" :key="date.fecha" class="custom-card">
        <ion-card-header>
          <ion-card-title style="color: black;">{{ date.motivo }}</ion-card-title>
          <p style="color: black;">{{ formatDate(date.fecha) }}</p>
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
<style src="./css/GetCitasStyle.css"></style>

