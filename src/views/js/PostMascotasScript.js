import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonItem, IonLabel, IonInput, IonButton, IonSelect, IonSelectOption, IonToggle } from '@ionic/vue';
import axios from 'axios';
import { Storage } from '@capacitor/storage';

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
        tipo: '',
        sexo: '',
        esterilizado: false,
        
      },
      imageFile: null,
      showModal: false,
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
    async submitForm() {
      try {
        // Recuperar el UID del localStorage
        const uidData = await Storage.get({ key: 'uid' });
        const userUuid = uidData.value;
        if (!userUuid) {
          console.error('UID no encontrado');
          return;
        }

       // Ajustar la URL de la solicitud POST
       const apiUrl = `https://localhost:44329/api/Pet/${userUuid}`;
       // Convierte todos los valores del formulario a strings
       const dataToSend = Object.entries(this.form).reduce((acc, [key, value]) => {
         // Convierte todo a string, excepto la imagen que ya está en base64
         acc[key] = key === 'foto' ? value : String(value);
         return acc;
       }, {});
       // Realiza la solicitud POST a la API con el UID en la URL
       const response = await axios.post(apiUrl, dataToSend, {
         headers: {
           'Content-Type': 'application/json'
         }
       });


        // Maneja la respuesta aquí
        console.log(response.data);
      } catch (error) {
        // Maneja el error aquí
        console.error('Error al enviar el formulario:', error);
      }
    }
  }
};
