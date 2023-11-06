<template>
    <ion-page>
      <ion-header>
        <ion-toolbar color="primary">
          <ion-title>Actividades</ion-title>
        </ion-toolbar>
      </ion-header>
  
      <ion-content :fullscreen="true">
        <ion-grid>
          <ion-row>
            <ion-col size="6" v-for="(item, index) in menuItems" :key="index">
              <ion-card :color="item.color" button @click="openPage(item.page)">
                <ion-card-content class="ion-text-center">
                  <ion-icon :icon="item.icon" size="large"></ion-icon>
                  <div>{{ item.title }}</div>
                </ion-card-content>
              </ion-card>
            </ion-col>
          </ion-row>
        </ion-grid>
      </ion-content>
    </ion-page>
  </template>
  
  <script >
  import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonGrid, IonRow, IonCol, IonCard, IonCardContent, IonIcon } from '@ionic/vue';
  import { defineComponent } from 'vue';
  import { paw, football, calendar, notifications } from 'ionicons/icons';
  
  export default defineComponent({
    name: 'MenuPage',
    components: {
      IonPage,
      IonHeader,
      IonToolbar,
      IonTitle,
      IonContent,
      IonGrid,
      IonRow,
      IonCol,
      IonCard,
      IonCardContent,
      IonIcon
    },
    setup() {
      const menuItems = [
        { title: 'Mis mascotas', icon: paw, color: 'dark', page: '/pets' },
        { title: 'Ejercicio', icon: football, color: 'secondary', page: '/exercise' },
        { title: 'Calendario de la salud', icon: calendar, color: 'tertiary', page: '/health-calendar' },
        { title: 'Campañas', icon: notifications, color: 'warning', page: '/campaigns' },
      ];
  
      const openPage = (page) => {
        // Aquí iría la lógica para abrir la página correspondiente.
        console.log(`Opening page: ${page}`);
      };
  
      return { menuItems, openPage };
    }
  });
  </script>
  
  <style scoped>
  ion-card {
    --background: #fff; /* Establece el color de fondo de las tarjetas */
  }
  
  /* Estilos adicionales si son necesarios */
  </style>
  