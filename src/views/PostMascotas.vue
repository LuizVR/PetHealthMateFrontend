<template>
    <ion-page>
      <ion-header>
        <ion-toolbar>
          <ion-title>Mi amigo peludo</ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-content>
        <ion-item>
          <ion-label position="floating">Nombre</ion-label>
          <ion-input v-model="form.nombre"></ion-input>
        </ion-item>
        <ion-item>
          <ion-label position="floating">Edad</ion-label>
          <ion-input v-model="form.edad" type="number"></ion-input>
        </ion-item>
        <ion-item>
          <ion-label position="floating">Peso</ion-label>
          <ion-input v-model="form.peso" type="number"></ion-input>
        </ion-item>
        <ion-item>
          <ion-label position="floating">Talla</ion-label>
          <ion-input v-model="form.talla"></ion-input>
        </ion-item>
        <ion-item>
          <ion-label position="floating">Especie</ion-label>
          <ion-input v-model="form.especie"></ion-input>
        </ion-item>
        <ion-item>
          <ion-label position="floating">Sexo</ion-label>
          <ion-select v-model="form.sexo" placeholder="Selecciona uno">
            <ion-select-option value="macho">Macho</ion-select-option>
            <ion-select-option value="hembra">Hembra</ion-select-option>
          </ion-select>
        </ion-item>
        <ion-item>
          <ion-label>¿Esterilizado?</ion-label>
          <ion-toggle v-model="form.esterilizado"></ion-toggle>
        </ion-item>
        <ion-item>
          <ion-label position="stacked">Agrega una imagen</ion-label>
          <input type="file" @change="handleImageUpload" />
        </ion-item>
        <ion-button @click="submitForm">Guardar</ion-button>
      </ion-content>
    </ion-page>
  </template>
  <script src="./js/PostMascotasScript.js"></script>