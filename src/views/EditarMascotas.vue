<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title style="color: black;">Edita tu Mascota</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true" class="background">
      <ion-item color="D2B48C">
        <ion-label position="floating" style="color: black;">Nombre</ion-label>
        <ion-input v-model="form.nombre" :value="form.nombre" style="color: black;"></ion-input>
      </ion-item>
      <ion-item color="D2B48C">
        <ion-label position="floating" style="color: black;">Edad</ion-label>
        <ion-input v-model="form.edad" :value="form.edad" style="color: black;"></ion-input>
      </ion-item>
      <ion-item color="D2B48C">
        <ion-label position="floating" style="color: black;">Peso</ion-label>
        <ion-input v-model="form.peso" :value="form.peso" style="color: black;"></ion-input>
      </ion-item>
      <ion-item color="D2B48C">
        <ion-label position="floating" style="color: black;">Talla</ion-label>
        <ion-select v-model="form.talla" :value="form.talla"  placeholder="Selecciona una talla" style="color: black;"> 
          <ion-select-option value="chico">Chico</ion-select-option>
          <ion-select-option value="mediano">Mediano</ion-select-option>
          <ion-select-option value="grande">Grande</ion-select-option>
        </ion-select>
      </ion-item>
      <ion-item color="D2B48C">
        <ion-label position="floating" style="color: black;">Especie</ion-label>
        <ion-select v-model="form.tipo" :value="form.tipo" placeholder="Selecciona una especie" style="color: black;">
          <ion-select-option value="perro">Perro</ion-select-option>
          <ion-select-option value="gato">Gato</ion-select-option>
        </ion-select>
      </ion-item>
      <ion-item color="D2B48C">
        <ion-label position="floating" style="color: black;">Sexo</ion-label>
        <ion-select v-model="form.sexo" :value="form.sexo"  placeholder="Selecciona uno" style="color: black;">
          <ion-select-option value="macho">Macho</ion-select-option>
          <ion-select-option value="hembra">Hembra</ion-select-option>
        </ion-select>
      </ion-item >
      <ion-item color="D2B48C">
        <ion-label position="floating" style="color: black;">¿Esterilizado?</ion-label>
        <ion-select v-model="form.esterilizado" :value="form.esterilizado"  placeholder="Selecciona uno" style="color: black;">
          <ion-select-option value="Si">Si</ion-select-option>
          <ion-select-option value="No">No</ion-select-option>
        </ion-select>
      </ion-item>

      <ion-item color="D2B48C">
        <ion-label position="stacked" style="color: black;">Agrega una imagen</ion-label>
        <input type="file" @change="handleImageUpload" style="color: black;" />
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
<style scoped src="./css/PostMascotaStyle.css"></style>