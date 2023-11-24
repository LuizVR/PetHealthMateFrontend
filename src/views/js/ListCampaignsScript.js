import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonCard, IonCardHeader, IonCardTitle, IonFab, IonFabButton, IonIcon } from '@ionic/vue';
import { add } from 'ionicons/icons';
import { defineComponent, ref } from 'vue';
import axios from 'axios';

export default defineComponent({
  name: 'ListCampaigns',
  components: {
    IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonCard, IonCardHeader, IonCardTitle, IonFab, IonFabButton, IonIcon
  },
  data() {
    return {
      kilometro:0,
      camps: [],
      ubicacionObtenida: false,
      ubicacionActual: null,

      
      rango: 0,
      ubicacionesFiltradas: [],
      add
    };
  },
  created() {
   this.fetchPets();
   
  },
  mounted() {
    this.fetchPets();
    
  },

  methods: {
   
    
    async fetchPets() {
      try {
        const response = await axios.get('https://localhost:44329/api/Campaign');
        this.camps = response.data;
        this.ubicacionesFiltradas = this.camps;
        //console.log(this.ubicacionesFiltradas);
      } catch (error) {
        console.error('Error fetching pets:', error);
      }
    },
    
    obtenerUbicacion() {
      
      if ('geolocation' in navigator) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const { latitude, longitude } = position.coords;
            this.ubicacionActual = { latitude, longitude };
            this.ubicacionObtenida = true;
          },
          (error) => {
            console.error('Error al obtener la ubicación:', error);
          }
        );
      } else {
        console.error('El navegador no soporta la geolocalización.');
      }
    },
    
    async obtenerUbicacionesEnRango(ubicacionActual, rango) {
      if (rango === 0 || rango === null) {
        
        this.fetchPets();
        console.log('El rango es 0 o null');
        // Realizar otra acción aquí...
      } else {
        if (this.camps.length > 0) {
          const selectedFields = this.camps.map(({ latitud, longitud, foto, titulo, campaign_Id, descripcion }) => ({ lat: latitud, lon: longitud, foto, titulo,campaign_Id, descripcion }));
          const ubicacionesFiltradas = selectedFields.filter((ubicacion) => {
            const distancia = this.calcularDistancia(
              ubicacionActual.latitude,
              ubicacionActual.longitude,
              ubicacion.lat,
              ubicacion.lon
            );
            return distancia <= rango;
          });
          this.ubicacionesFiltradas = ubicacionesFiltradas;
        }
      }
    },
    

    async filtrarPorRango() {
      if (this.ubicacionActual) {

        //console.log("estas en filtrar");


       // console.log(this.kilometro);

        await this.fetchPets(); // Obtener los datos de las campañas
        this.obtenerUbicacionesEnRango(this.ubicacionActual, this.rango); // Llamar a la función de filtrado
      }
    },
    
    calcularDistancia(lat1, lon1, lat2, lon2) {
      // Fórmula haversine para calcular la distancia entre dos puntos en la Tierra
      const radioTierra = 6371; // Radio medio de la Tierra en kilómetros
      const dLat = this.degToRad(lat2 - lat1);
      const dLon = this.degToRad(lon2 - lon1);
      const a =
        Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(this.degToRad(lat1)) *
          Math.cos(this.degToRad(lat2)) *
          Math.sin(dLon / 2) *
          Math.sin(dLon / 2);
      const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
      const distancia = radioTierra * c;

      return distancia;
    },
    degToRad(deg) {
      return deg * (Math.PI / 180);
    },


    goToAddPetPage() {
      this.$router.push('/campaignsPost'); // Reemplaza 'ruta-a-tu-pagina' con la ruta a la que deseas redirigir
    },

    goToPetDetails(campaign_Id) {
      this.$router.push({ name: 'InfoCampaigns', params: { campaign_Id } });
    },
  }
});