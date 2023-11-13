<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Agrega Campaña</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <ion-item>
        <ion-label position="floating">Titulo</ion-label>
        <ion-input :value="c.titulo" @input="updateField('titulo', $event)"></ion-input>
      </ion-item>
      <ion-item>
        <ion-label position="floating">Descripcion</ion-label>
        <ion-input :value="c.descripcion" @input="updateField('descripcion', $event)"></ion-input>
      </ion-item>
      <ion-item>
        <ion-label position="floating">Ubicacion</ion-label>
        <ion-input :value="c.ubicacion" @input="updateField('ubicacion', $event)"></ion-input>
      </ion-item>

      <ion-item>
        <ion-label position="floating">Fecha</ion-label>
        <ion-datetime
          v-model="c.fecha"
          display-format="YYYY-MM-DDTHH:mm"
          @ionChange="handleDatetimeSelection($event)"
        ></ion-datetime>
      </ion-item>

      <ion-item>
        <ion-label position="stacked">Agrega una imagen</ion-label>
        <input type="file" @change="handleImageUpload" />
      </ion-item>
      <ion-button @click="submitForm">Guardar</ion-button>
    </ion-content>
  </ion-page>
</template>

<script src="./js/CampaignsPostScript.js"></script>