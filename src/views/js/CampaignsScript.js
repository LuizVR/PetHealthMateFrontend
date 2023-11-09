import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonItem, IonDatetime, IonButton } from '@ionic/vue';
import axios from 'axios';

export default {
  components: {
    IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonItem, IonDatetime, IonButton
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
        this.c.foto = e.target.result; // Esto será la imagen en base64 como una cadena de texto.
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
    submitForm() {
      console.log('Fecha seleccionada en formato deseado:', this.c.fecha);
      // Convierte todos los valores del formulario a strings
      const dataToSend = Object.entries(this.c).reduce((acc, [key, value]) => {
        // Convierte todo a string, excepto la imagen que ya está en base64
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
        // Maneja la respuesta aquí
        console.log(response.data);
      })
      .catch(error => {
        // Maneja el error aquí
        console.error(error);
      });
    }
  },
};
