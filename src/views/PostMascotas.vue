<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title style="color: black;">Registra a un amigo</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true" class="background">
      <ion-item color="D2B48C">
        <ion-label position="floating" style="color: black;">Nombre</ion-label>
        <ion-input v-model="form.nombre" style="color: black;" placeholder="Ingresa nombre"></ion-input>
      </ion-item>
      <ion-item color="D2B48C">
        <ion-label position="floating" style="color: black;">Edad</ion-label>
        <ion-input v-model="form.edad" type="number" style="color: black;" placeholder="Ingresa edad"></ion-input>
      </ion-item>
      <ion-item color="D2B48C">
        <ion-label position="floating" style="color: black;">Peso</ion-label>
        <ion-input v-model="form.peso" type="number" style="color: black;" placeholder="Ingresa peso"></ion-input>
      </ion-item>
      <ion-item color="D2B48C">
        <ion-label position="floating" style="color: black;">Talla</ion-label>
        <ion-select v-model="form.talla" placeholder="Selecciona una talla" style="color: black;">
          <ion-select-option value="chico">Chico</ion-select-option>
          <ion-select-option value="mediano">Mediano</ion-select-option>
          <ion-select-option value="grande">Grande</ion-select-option>
        </ion-select>
      </ion-item>
      <ion-item color="D2B48C">
        <ion-label position="floating" style="color: black;">Especie</ion-label>
        <ion-select v-model="form.tipo" placeholder="Selecciona una especie" style="color: black;">
          <ion-select-option value="perro">Perro</ion-select-option>
          <ion-select-option value="gato">Gato</ion-select-option>
        </ion-select>
      </ion-item>
      <ion-item color="D2B48C">
        <ion-label position="floating" style="color: black;">Sexo</ion-label>
        <ion-select v-model="form.sexo" placeholder="Selecciona uno" style="color: black;">
          <ion-select-option value="macho">Macho</ion-select-option>
          <ion-select-option value="hembra">Hembra</ion-select-option>
        </ion-select>
      </ion-item>
      <ion-item color="D2B48C">
        <ion-label position="floating" style="color: black;">¿Esterilizado?</ion-label>
        <ion-select v-model="form.esterilizado" :value="form.esterilizado"  placeholder="Selecciona uno" style="color: black;">
          <ion-select-option value="Si">Si</ion-select-option>
          <ion-select-option value="No">No</ion-select-option>
        </ion-select>
      </ion-item>
      <ion-item color="D2B48C">
        <ion-label position="stacked" style="color: black;">Agrega una imagen</ion-label>
        <input type="file" @change="handleImageUpload" />
      </ion-item>
      <ion-button @click="submitForm">Guardar</ion-button>
        </ion-content>
  </ion-page>
</template>

  <script src="./js/PostMascotasScript.js"></script>
  <style scoped src="./css/PostMascotaStyle.css"></style>