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
          <ion-input v-model="form.titulo" :value="form.titulo"></ion-input>
        </ion-item>
        <ion-item>
          <ion-label position="floating">Descripcion</ion-label>
          <ion-input :value="form.descripcion" @input="updateField('descripcion', $event)"></ion-input>
        </ion-item>
        
  
        <ion-item class="ubicacion" >
         
          <ion-label position="floating">Ubicacion</ion-label>
          <ion-input v-model="Gps"  :value="form.ubicacion" @input="updateField('ubicacion', $event)"></ion-input>
          <ion-button @click="AbrirUbicacion" class="btnGps">GPS</ion-button>
        
         
        </ion-item>
        <ion-item>
          <ion-label position="floating">Fecha</ion-label>
          <ion-datetime
            v-model="form.fecha" 
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
  <style scoped src="./css/CampaingsPostStyle.css"></style>