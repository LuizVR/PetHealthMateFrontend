
<template>
    <ion-page>
      <ion-content>
        <ion-header>
      <ion-toolbar>
        <!-- <ion-buttons v-slot="start">
          <ion-button @click="goBack">
            <ion-icon name="arrow-back" color="white"></ion-icon>
          </ion-button>
        </ion-buttons> -->
        <ion-title class="normal ion-text-wrap">
          Busca campañas cerca de tu zona
        </ion-title>
      </ion-toolbar>
    </ion-header>

        <ion-button @click="obtenerUbicacion">Obtener Ubicación</ion-button>
  
        <div v-if="ubicacionObtenida" >
            <IonForm class="ubicacion">
        <IonLabel class="InputUbicacion" for="rango">Ingrese el rango en kilómetros:</IonLabel>
        <IonInput type="number" id="rango" v-model="rango" required></IonInput>
        <IonButton @click="filtrarPorRango">Filtrar</IonButton>
      </IonForm>
  
          <ion-title>Campañas dentro del rango de {{ rango }} km:</ion-title>
          <ion-list>
            <ion-item v-for="ubicacion in ubicacionesFiltradas" :key="ubicacion.id">
              Latitud: {{ ubicacion.lat }}, Longitud: {{ ubicacion.lon }}
            </ion-item>
          </ion-list>
        </div>
      </ion-content>
    </ion-page>
  </template>

  <script src="./js/ListaCampaniasScript.js"></script>
  <style scoped src="./css/ListaCampaniaStyle.css"></style>