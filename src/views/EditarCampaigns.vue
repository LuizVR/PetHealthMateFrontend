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
        <ion-title>Agregar Campaña</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content class="background">
      <ion-item color="#">
        <ion-label position="floating" style="color: black">Titulo</ion-label>
        <ion-input v-model="form.titulo" :value="form.titulo" style="color: black"></ion-input>
      </ion-item>
      <ion-item color="#">
        <ion-label position="floating" style="color: black">Descripcion</ion-label>
        <ion-input
          :value="form.descripcion"
          @input="updateField('descripcion', $event)" style="color: black"
        ></ion-input>
      </ion-item>

      <ion-item class="ubicacion" color="#">
        <ion-label position="floating" style="color: black">Ubicacion</ion-label>
        <ion-input
          v-model="Gps"
          :value="form.ubicacion"
          @input="updateField('ubicacion', $event)" style="color: black"
        ></ion-input>
        <ion-button @click="AbrirUbicacion" class="btnGps">GPS</ion-button>
      </ion-item>
      <ion-item color="#">
        <ion-datetime
          v-model="form.fecha"
          display-format="YYYY-MM-DDTHH:mm"
          @ionChange="handleDatetimeSelection($event)"
        ></ion-datetime>
      </ion-item>
      <br>
      <br>
      <ion-item color="#">
        <ion-label position="stacked" style="color: black">Agrega una imagen</ion-label>
        <input type="file" @change="handleImageUpload" style="color: black" />
      </ion-item>
      <ion-button @click="submitForm">Guardar</ion-button>
    </ion-content>
    <!-- Botón flotante para eliminar -->
    <ion-fab vertical="bottom" horizontal="end">
      <ion-fab-button color="danger" @click="openDeleteModal">
        <ion-icon :icon="trashIcon"></ion-icon>
      </ion-fab-button>
    </ion-fab>
    <!-- Modal de eliminación -->
    <ion-modal :is-open="showDeleteModal" @did-dismiss="closeDeleteModal">
      <ion-content>
        <ion-card>
          <ion-card-header>
            <ion-card-title>¿Estás seguro que deseas eliminar?</ion-card-title>
          </ion-card-header>
          <ion-card-content>
            <ion-button @click="confirmDelete">Eliminar</ion-button>
            <ion-button @click="closeDeleteModal">Cancelar</ion-button>
          </ion-card-content>
        </ion-card>
      </ion-content>
    </ion-modal>
  </ion-page>
</template>

<script src="./js/EditarCampaignsScript.js"></script>
<style src="./css/CampaingsPostStyle.css"></style>
