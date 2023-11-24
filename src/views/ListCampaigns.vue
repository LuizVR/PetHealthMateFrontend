<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title class="ion-text-center">Busca campañas cerca de tu zona</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content  :fullscreen="true" class="background" >
      <ion-button @click="obtenerUbicacion" class="btnUbi">Obtener Ubicación</ion-button>

      <div v-if="ubicacionObtenida" class="section1">
        <ion-form class="ubicacion">
          <ion-label class="InputUbicacion" for="rango">Ingrese el rango en kilómetros:</ion-label>
          <input type="number" id="rango" v-model="rango" required class="custom" >
          
          <ion-button @click="filtrarPorRango()">Filtrar</ion-button>
        </ion-form>
      </div>
        <div v-if="ubicacionesFiltradas.length > 0" class="cardmain">
          <h2 class="InputUbicacion">Campañas</h2>
          <ion-card v-for="camp in ubicacionesFiltradas" :key="camp.campaign_Id" @click="goToPetDetails(camp.campaign_Id)" class="card">
            <ion-card-header class="cardh">
              <img :src="camp.foto" />
              <ion-card-title class="titulo">{{ camp.titulo }}</ion-card-title>
            </ion-card-header>
            <ion-card-content class="cardhh">
              <p>Descripcion: {{ camp.descripcion }}</p>
              
            </ion-card-content>
          </ion-card>
        </div>
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