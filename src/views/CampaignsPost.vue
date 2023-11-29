<template>
  <ion-page>
    <ion-header>
      <ion-toolbar class="ion-text-center">
        <div class="header-content">
          <img src="/src/img/icons/arrow.png" alt="User Profile" @click="goToMenuPage" class="user-icon" />
          <ion-title>Agregar Campaña</ion-title>
        </div>
      </ion-toolbar>
    </ion-header>
    <ion-content class="background">
      <ion-item color="#">
        <ion-label position="floating" style="color: black">Titulo</ion-label>
        <ion-input
          :value="c.titulo"
          @input="updateField('titulo', $event)"
          style="color: black"
        ></ion-input>
      </ion-item>
      <ion-item color="#">
        <ion-label position="floating" style="color: black"
          >Descripcion</ion-label
        >
        <ion-input
          :value="c.descripcion"
          @input="updateField('descripcion', $event)"
          style="color: black"
        ></ion-input>
      </ion-item>

      <ion-item class="ubicacion" color="#">
        <ion-label position="floating" style="color: black"
          >Ubicacion</ion-label
        >
        <ion-input
          v-model="Gps"
          :value="c.ubicacion"
          @input="updateField('ubicacion', $event)"
          style="color: black"
        ></ion-input>
        <ion-button @click="AbrirUbicacion" class="btnGps">GPS</ion-button>
      </ion-item>
      <br />
      <br />
      <ion-item color="#">
        <ion-datetime
          v-model="c.fecha"
          display-format="YYYY-MM-DDTHH:mm"
          @ionChange="handleDatetimeSelection($event)"
        ></ion-datetime>
      </ion-item>

      <ion-item color="#">
        <ion-label position="stacked" style="color: black"
          >Agrega una imagen</ion-label
        >
        <input type="file" @change="handleImageUpload" style="color: black" />
      </ion-item>
      <ion-button @click="submitForm" :disabled="!camposCompletos" class="btn-guardar">Guardar</ion-button>
    </ion-content>
  </ion-page>
</template>

<script src="./js/CampaignsPostScript.js"></script>
<style scoped src="./css/CampaingsPostStyle.css"></style>
