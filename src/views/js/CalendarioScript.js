import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonCard, IonCardHeader, IonCardTitle, IonFab, IonFabButton, IonIcon } from '@ionic/vue';
import { add } from 'ionicons/icons';
import { defineComponent } from 'vue';
import axios from 'axios';
import {Storage} from '@capacitor/storage';

export default defineComponent({
  name: 'PetCard',
  components: {
    IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonCard, IonCardHeader, IonCardTitle, IonFab, IonFabButton, IonIcon
  },
  data() {
    return {
      pets: [],
      add,
      calendarIcon: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M480 128a64 64 0 00-64-64h-16V48.45c0-8.61-6.62-16-15.23-16.43A16 16 0 00368 48v16H144V48.45c0-8.61-6.62-16-15.23-16.43A16 16 0 00112 48v16H96a64 64 0 00-64 64v12a4 4 0 004 4h440a4 4 0 004-4zM32 416a64 64 0 0064 64h320a64 64 0 0064-64V179a3 3 0 00-3-3H35a3 3 0 00-3 3zm344-208a24 24 0 11-24 24 24 24 0 0124-24zm0 80a24 24 0 11-24 24 24 24 0 0124-24zm-80-80a24 24 0 11-24 24 24 24 0 0124-24zm0 80a24 24 0 11-24 24 24 24 0 0124-24zm0 80a24 24 0 11-24 24 24 24 0 0124-24zm-80-80a24 24 0 11-24 24 24 24 0 0124-24zm0 80a24 24 0 11-24 24 24 24 0 0124-24zm0 80a24 24 0 11-24 24 24 24 0 0124-24zm-80-80a24 24 0 11-24 24 24 24 0 0124-24zm0 80a24 24 0 11-24 24 24 24 0 0124-24z'/></svg>",
    };
  },
  created() {
    this.fetchPets();
  },
  methods: {
    async fetchPets() {
      // Recuperar el uid del localStorage
      const uidData = await Storage.get({key: 'uid'});
      const userUuid = uidData.value;

      if (!userUuid) {
        console.error('UID no encontrado');
        return;
      }
  
      try {
        // Incluir el uid en la solicitud a la API
        var uri = "https://localhost:44329/api/Pet/mismascotas/"
        const response = await axios.get(uri+userUuid);
        this.pets = response.data;
      } catch (error) {
        console.error('Error fetching pets:', error);
      }
    },
  
    goToPetDetails(pet_Id) {
      this.$router.push({ name: 'PostCalendario', params: { pet_Id } });
    },
  }
});
