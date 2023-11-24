// MascotasScript.js

import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonCard, IonCardHeader, IonCardTitle, IonFab, IonFabButton, IonIcon } from '@ionic/vue';
import { add } from 'ionicons/icons';
import { defineComponent } from 'vue';
import axios from 'axios';

export default defineComponent({
  name: 'PetCard',
  components: {
    IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonCard, IonCardHeader, IonCardTitle, IonFab, IonFabButton, IonIcon
  },
  data() {
    return {
      dates: [], // Cambié el nombre de la propiedad a "dates" para reflejar mejor la estructura de los datos
      add
    };
  },
  created() {
    this.fetchDates();
  },
  methods: {
    async fetchDates() {
      try {
        // Realizar la solicitud GET a la URL del servicio
        const uri = "https://localhost:44329/api/Date";
        const response = await axios.get(uri);

        // Verificar si la respuesta es un arreglo y no está vacío
        if (Array.isArray(response.data) && response.data.length > 0) {
          // Mapear los datos para adaptarlos a la estructura que esperas en tu componente
          this.dates = response.data.map(date => ({
            date_Id: date.fecha, // Utilizo "fecha" como identificador, ajusta esto según tus necesidades
            pet: {
              fecha: date.fecha,
              motivo: date.motivo
            }
          }));
        } else {
          console.warn('La respuesta de la API no tiene el formato esperado.');
        }
      } catch (error) {
        console.error('Error fetching dates:', error);
      }
    },
    goToPetDetails(dateId) {
      // Implementa la lógica para navegar a los detalles de la mascota según el dateId
      console.log('Navegar a los detalles de la mascota con dateId:', dateId);
    },
  }
});
