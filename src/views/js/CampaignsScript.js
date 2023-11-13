import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonItem, IonDatetime, IonButton, IonLabel, IonInput } from '@ionic/vue';
import axios from 'axios';

export default {
  components: {
    IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonItem, IonDatetime, IonButton, IonLabel, IonInput
  },
  data() {
    return {
      Gps:'',
      c: {
        titulo: '',
        descripcion: '',
        ubicacion: '',
        fecha: '',
        foto: '',
      },
      imageFile: null,
    };
  },
  mounted() {
    // Accede a los parámetros de la ruta
    const lat = this.$route.params.lat;
    const lng = this.$route.params.lng;
    const street = this.$route.params.street;
    const locality = this.$route.params.locality;
    
    console.log('Latitud:', lat);
    console.log('Longitud:', lng);
    this.Gps = `Municipio: ${locality}, Calle: ${street}`;
  },
 
  methods: {
    handleImageUpload(event) {
      const reader = new FileReader();
      reader.onload = (e) => {
        this.c.foto = e.target.result;
      };
      reader.onerror = (error) => {
        console.error('Error al leer el archivo: ', error);
      };
      reader.readAsDataURL(event.target.files[0]);
    },
    handleDatetimeSelection(event) {
      const fechaSeleccionada = event.detail.value;
      console.log('Fecha seleccionada:', fechaSeleccionada);
      this.c.fecha = fechaSeleccionada;
    },
    updateField(field, event) {
      this.c[field] = event.target.value;
    },
    AbrirUbicacion(){
      this.$router.push('/Gps');
    },
    submitForm() {
      const dataToSend = Object.entries(this.c).reduce((acc, [key, value]) => {
        acc[key] = key === 'foto' ? value : String(value);
        return acc;
      }, {});

      console.log('Datos a enviar:', dataToSend);

      axios.post('https://localhost:44329/api/Campaign', dataToSend, {
        headers: {
          'Content-Type': 'application/json'
        }
      })
      .then(response => {
        console.log(response.data);
      })
      .catch(error => {
        console.error(error);
      });
    },
  },
};