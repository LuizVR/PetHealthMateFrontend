<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Busca campañas cerca de tu zona</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content>
      <ion-button @click="obtenerUbicacion">Obtener Ubicación</ion-button>

      <div v-if="ubicacionObtenida">
        <ion-form class="ubicacion">
          <ion-label class="InputUbicacion" for="rango">Ingrese el rango en kilómetros:</ion-label>
          <input type="number" id="rango" v-model="rango" required>
          <ion-button @click="filtrarPorRango()">Filtrar</ion-button>
        </ion-form>

        <div v-if="ubicacionesFiltradas.length > 0">
          <h2>Campañas filtradas:</h2>
          <ion-card v-for="camp in ubicacionesFiltradas" :key="camp.campaign_Id" @click="goToPetDetails(camp.campaign_Id)">
            <ion-card-header>
              <img :src="camp.foto" />
              <ion-card-title>{{ camp.titulo }}</ion-card-title>
            </ion-card-header>
            <ion-card-content>
              <p>Descripcion: {{ camp.descripcion }}</p>
              
            </ion-card-content>
          </ion-card>
        </div>
        <ion-fab class="floating-button" vertical="bottom" horizontal="end">
        <ion-fab-button @click="goToAddPetPage">
          <ion-icon :icon="add"></ion-icon>
        </ion-fab-button>
      </ion-fab>
      </div>
    </ion-content>
  </ion-page>
</template>


<script src="./js/ListCampaignsScript.js"></script>
<style scoped src="./css/ListCampaignsStyle.css"></style>