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
        const response = await axios.get('https://localhost:44329/api/Pet', {
          withCredentials: true, // Agrega la configuración de credenciales aquí
        });
        this.pets = response.data;
      } catch (error) {
        console.error('Error fetching pets:', error);
      }
    },
    goToAddPetPage() {
      this.$router.push('/postMascotas');
    },

    goToPetDetails(pet_Id) {
      this.$router.push({ name: 'InfoMascota', params: { pet_Id } });
    },
  }
});
