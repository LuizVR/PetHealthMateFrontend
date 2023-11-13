import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonItem, IonDatetime, IonButton, IonLabel, IonInput } from '@ionic/vue';
import axios from 'axios';

export default {
  components: {
    IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonItem, IonDatetime, IonButton, IonLabel, IonInput
  },
  data() {
    return {
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