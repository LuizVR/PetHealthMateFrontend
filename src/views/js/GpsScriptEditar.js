import { ref, onMounted } from 'vue';
import GooglemapsService from './GpsServiceScript.js';
import { useRouter } from 'vue-router';

export default{
  
setup(){
    const map = ref(null);
    const marker = ref(null);
    const infowindow = ref(null);
    const positionSet = ref(null);
    const position = ref({
      lat: 20.056388888889,
      lng: -99.341944444444,
    });

    const label = {
        titulo: 'Ubicación',
        subtitulo: 'Mi ubicación de envío',
      };
 const router = useRouter(); // Inicializa el router
    onMounted(() => {
        const service = GooglemapsService;
        service.init().then(() => {
          initMap();
        });
      });

      function mylocation() {
        if ('geolocation' in navigator) {
          navigator.geolocation.getCurrentPosition(
            (position) => {
              const { latitude, longitude } = position.coords;
              console.log(`Ubicación obtenida: Latitud ${latitude}, Longitud ${longitude}`);
              
             
              console.log('Coordenadas exactas:', position.coords);
              
              const newPosition = {
                lat: latitude,
                lng: longitude,
              };
              addMarker(newPosition);
              positionSet.value = newPosition;
            },
            (error) => {
              console.error('Error al obtener la ubicación:', error);
            }
          );
        } else {
          console.error('El navegador no soporta la geolocalización.');
        }
      };

      function initMap() {
        const latLng = new google.maps.LatLng(position.value.lat, position.value.lng);
        const mapOptions = {
          center: latLng,
          zoom: 15,
          disableDefaultUI: true,
          clickableIcons: false,
        };
        map.value = new google.maps.Map(map.value, mapOptions);
        marker.value = new google.maps.Marker({
          map: map.value,
          animation: google.maps.Animation.DROP,
          draggable: false,
        });
        clickHandleEvent();
        infowindow.value = new google.maps.InfoWindow();
        addMarker(position.value);
      //  setInfoWindow(marker.value, label.titulo, label.subtitulo);
      };
      function reverseGeocode(lat, lng) {
        return new Promise((resolve, reject) => {
          const geocoder = new google.maps.Geocoder();
          const location = new google.maps.LatLng(lat, lng);
      
          geocoder.geocode({ location: location }, (results, status) => {
            if (status === 'OK' && results[0]) {
              const addressComponents = results[0].address_components;
              let street = '';
              let locality = '';
      
              for (const component of addressComponents) {
                if (component.types.includes('route')) {
                  street = component.long_name; // Obtener el nombre de la calle
                } else if (component.types.includes('locality')) {
                  locality = component.long_name; // Obtener la localidad
                }
              }
      
              console.log('Calle:', street);
              console.log('Localidad:', locality);
      
              resolve({ lat, lng, street, locality });
            } else {
              console.error('Error en la geocodificación inversa:', status);
              reject(status);
            }
          });
        });
      }

      function clickHandleEvent() {
        map.value.addListener('click', (event) => {
          const newPosition = {
            lat: event.latLng.lat(),
            lng: event.latLng.lng(),
          };
          addMarker(newPosition);
        });
      };

      function addMarker(newPosition) {
        const latLng = new google.maps.LatLng(newPosition.lat, newPosition.lng);
        marker.value.setPosition(latLng);
        map.value.panTo(newPosition);
        positionSet.value = newPosition;
      };

      function goBack(){
        window.location.href = '/home';
      };   

      function aceptar() {
        const { lat, lng } = positionSet.value;
      
        reverseGeocode(lat, lng)
          .then((result) => {
            let street = result.street;
            const locality = result.locality;
      
            if (!street) {
              street = `Calle conocida de ${locality}`;
            }
      
            console.log('Calle:', street);
            console.log('Localidad:', locality);
            console.log('Coordenadas:', positionSet.value);
      
            // Envía datos a otra vista y navega a ella
            router.push({
              name: 'CampaignPost',
              params: { lat, lng, street, locality },
            });
          })
          .catch((error) => {
            console.error('Error al obtener la dirección:', error);
          });
      }

      return {
        map,
        marker,
        infowindow,
        positionSet,
        position,
        //label,
        mylocation,
        aceptar,
        goBack,
       
      };
    },
      



      

};
