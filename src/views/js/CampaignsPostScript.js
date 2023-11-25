import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonItem, IonDatetime, IonButton, IonLabel, IonInput } from '@ionic/vue';
import axios from 'axios';

export default {
  components: {
    IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonItem, IonDatetime, IonButton, IonLabel, IonInput
  },
  data() {
    return {
      Gps: '',
      camposCompletos: false,
      c: {
        titulo: '',
        descripcion: '',
        ubicacion: '',
        latitud: '',
        longitud: '',
        fecha: '',
        foto: '',
      },
      imageFile: null,
    };
  },
  mounted() {
    const street = this.$route.params.street;
    const locality = this.$route.params.locality;

    if (locality !== undefined && street !== undefined) {
      this.Gps = `${locality}, ${street}`;
      this.c.ubicacion = locality + " - " + street;
    } else {
      this.Gps = '';
    }
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
      this.camposCompletos = Object.values(this.c).every(value => value !== '');
    },
    AbrirUbicacion() {
      this.$router.push('/Gps');
    },
    submitForm() {
      const lat = this.$route.params.lat;
      const lng = this.$route.params.lng;

      this.c.latitud = lat;
      this.c.longitud = lng;

      const dataToSend = Object.entries(this.c).reduce((acc, [key, value]) => {
        acc[key] = key === 'foto' ? value : String(value);
        return acc;
      }, {});

      console.log('Datos a enviar:', dataToSend);

      axios.post('https://www.PetHealthMateBack.somee.com/api/Campaign', dataToSend, {
        headers: {
          'Content-Type': 'application/json'
        }
      })
        .then(response => {
          console.log(response.data);

          // Redirigir a la ruta /listCampania después del éxito
          this.$router.push('/listCampania');
        })
        .catch(error => {
          console.error(error);
        });
    },
  },
};
