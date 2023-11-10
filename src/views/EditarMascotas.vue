<template>
    <ion-page>
      <ion-header>
        <ion-toolbar>
          <ion-title>Edita tu Mascota</ion-title>
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
          <ion-select v-model="form.talla" placeholder="Selecciona una talla">
            <ion-select-option value="chico">Chico</ion-select-option>
            <ion-select-option value="mediano">Mediano</ion-select-option>
            <ion-select-option value="grande">Grande</ion-select-option>
          </ion-select>
        </ion-item>
        <ion-item>
          <ion-label position="floating">Especie</ion-label>
          <ion-select v-model="form.especie" placeholder="Selecciona una especie">
          <ion-select-option value="perro">Perro</ion-select-option>
            <ion-select-option value="gato">Gato</ion-select-option>
          </ion-select>
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
  <script src="./js/EditarMascotaScript.js"></script>