import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonItem, IonLabel, IonInput, IonButton, IonSelect, IonSelectOption, IonToggle } from '@ionic/vue';
import axios from 'axios';

export default {
  components: {
    IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonItem, IonLabel, IonInput, IonButton, IonSelect, IonSelectOption, IonToggle
  },
  data() {
    return {
      form: {
        nombre: '',
        edad: null,
        peso: null,
        talla: '',
        especie: '',
        sexo: '',
        esterilizado: false,
      },
      imageFile: null,
    };
  },
  methods: {
    handleImageUpload(event) {
      const reader = new FileReader();
      reader.onload = (e) => {
        this.form.foto = e.target.result; // Esto será la imagen en base64 como una cadena de texto.
      };
      reader.onerror = (error) => {
        console.error('Error al leer el archivo: ', error);
      };
      reader.readAsDataURL(event.target.files[0]);
    },
    submitForm() {
      // Convierte todos los valores del formulario a strings
      const dataToSend = Object.entries(this.form).reduce((acc, [key, value]) => {
        // Convierte todo a string, excepto la imagen que ya está en base64
        acc[key] = key === 'foto' ? value : String(value);
        return acc;
      }, {});
  
      axios.post('https://localhost:44329/api/Pet', dataToSend, {
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
  }
};