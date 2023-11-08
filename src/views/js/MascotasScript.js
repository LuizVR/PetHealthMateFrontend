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
      pets: [],
      add
    };
  },
  created() {
    this.fetchPets();
  },
  methods: {
    async fetchPets() {
      try {
        const response = await axios.get('URL'); // Reemplaza 'API_URL' con la URL de tu API
        this.pets = response.data;
      } catch (error) {
        console.error('Error fetching pets:', error);
      }
    },
    goToAddPetPage() {
      this.$router.push('/postMascotas'); // Reemplaza 'ruta-a-tu-pagina' con la ruta a la que deseas redirigir
    }
  }
});