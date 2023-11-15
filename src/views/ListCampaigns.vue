<template>
    <ion-page>
      <ion-header>
        <ion-toolbar>
          <ion-title>Mis Mascotas</ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-content>
        <ion-card v-for="camp in camps" :key="camp.campaign_Id"  @click="goToPetDetails(camp.campaign_Id)">
          <ion-card-header>
            <img :src="camp.foto" />
            <ion-card-title>{{ camp.titulo }}</ion-card-title>
          </ion-card-header>
        </ion-card>
        <ion-fab class="floating-button" vertical="bottom" horizontal="end">
          <ion-fab-button @click="goToAddPetPage">
            <ion-icon :icon="add"></ion-icon>
          </ion-fab-button>
        </ion-fab>
      </ion-content>
    </ion-page>
  </template>


<script src="./js/ListCampaignsScript.js"></script>
<style scoped src="./css/ListCampaignsStyle.css"></style>