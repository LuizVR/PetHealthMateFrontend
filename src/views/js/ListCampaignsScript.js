import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonCard, IonCardHeader, IonCardTitle, IonFab, IonFabButton, IonIcon } from '@ionic/vue';
import { add } from 'ionicons/icons';
import { defineComponent } from 'vue';
import axios from 'axios';

export default defineComponent({
  name: 'ListCampaigns',
  components: {
    IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonCard, IonCardHeader, IonCardTitle, IonFab, IonFabButton, IonIcon
  },
  data() {
    return {
      camps: [],
      add
    };
  },
  created() {
    this.fetchPets();
  },
  methods: {
    async fetchPets() {
      try {
        const response = await axios.get('https://localhost:44329/api/Campaign'); // Reemplaza 'API_URL' con la URL de tu API
        this.camps = response.data;
        console.log("Form Data:", this.camps);
      } catch (error) {
        console.error('Error fetching pets:', error);
      }
    },
    goToAddPetPage() {
      this.$router.push('/campaignsPost'); // Reemplaza 'ruta-a-tu-pagina' con la ruta a la que deseas redirigir
    },

    goToPetDetails(campaign_Id) {
      this.$router.push({ name: 'InfoCampaigns', params: { campaign_Id } });
    },
  }
});