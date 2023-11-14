<template>
    <ion-page>
    <ion-header>
      <ion-toolbar>
        <!-- <ion-buttons v-slot="start">
          <ion-button @click="goBack">
            <ion-icon name="arrow-back" color="white"></ion-icon>
          </ion-button>
        </ion-buttons> -->
        <ion-title class="normal ion-text-wrap">
          Donde se localiza tu campaña?
        </ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content>
      <div ref="map" class="map"></div>

      <ion-chip class="aceptar" @click="aceptar">
        <ion-label class="normal">Aceptar</ion-label>
        <ion-icon name="checkmark"></ion-icon>
      </ion-chip>

      <ion-chip class="miubicacion" @click="mylocation">
        <ion-label class="normal">Mi ubicación actual</ion-label>
        <ion-icon name="locate"></ion-icon>
      </ion-chip>
    </ion-content>
  </ion-page>
</template>
 <script src="./js/GpsScript.js"></script> 

 <style scoped src="./css/GpsStyles.css">
 
 </style>