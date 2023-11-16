import { ref } from 'vue';
import { IonPage, IonContent, IonButton,  IonLabel, IonInput, IonTitle, IonList, IonItem } from '@ionic/vue';


export default {
    components: { IonPage, IonContent, IonButton,  IonLabel, IonInput, IonTitle, IonList, IonItem },
  
    data() {
      return {
        ubicacionObtenida: false,
        ubicacionActual: null,
        rango: 0,
        ubicacionesFiltradas: [],
      };
    },
    methods: {
      obtenerUbicacion() {
        // Verificamos si el navegador soporta la geolocalización
        if ('geolocation' in navigator) {
          // Solicitamos los permisos de ubicación
          navigator.geolocation.getCurrentPosition(
            // Éxito
            (position) => {
              const { latitude, longitude } = position.coords;
              console.log(`Ubicación obtenida: Latitud ${latitude}, Longitud ${longitude}`);
              this.ubicacionActual = position.coords;
              this.ubicacionObtenida = true;
            },
            // Error
            (error) => {
              console.error('Error al obtener la ubicación:', error);
            }
          );
        } else {
          console.error('El navegador no soporta la geolocalización.');
        }
      },
      filtrarPorRango() {
        console.log("Entraste al metodo");
        if (this.ubicacionActual) {
          // Filtrar las ubicaciones dentro del rango
          this.ubicacionesFiltradas = this.obtenerUbicacionesEnRango(
            this.ubicacionActual,
            this.rango
          );
        }
      },
      obtenerUbicacionesEnRango(ubicacionActual, rango) {
        // Coordenadas simuladas de la base de datos
        const ubicaciones = [
          { id: 1, lat: 20.0490397297103, lon: -99.3384402202707 },
          { id: 2, lat: 19.92411635153069, lon: -99.34439130832288 },
          { id: 3, lat: 19.998159893271033, lon: -99.34957232397723 },
          { id: 4, lat: 20.02209097542486, lon: -99.3452108314825 },
          { id: 5, lat: 20.02209097542486, lon: -99.3452108314825 },
        ];
  
        // Filtrar las ubicaciones dentro del rango
        const ubicacionesFiltradas = ubicaciones.filter((ubicacion) => {
          const distancia = this.calcularDistancia(
            ubicacionActual.latitude,
            ubicacionActual.longitude,
            ubicacion.lat,
            ubicacion.lon
          );
  
          // Comprobar si la distancia es menor o igual al rango especificado
          if (distancia <= rango) {
            console.log(`Ubicación ${ubicacion.id} está a ${distancia.toFixed(2)} km`);
            return true;
          }
  
          return false;
        });
  
        return ubicacionesFiltradas;
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
    },
  };