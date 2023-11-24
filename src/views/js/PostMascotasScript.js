import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonItem, IonLabel, IonInput, IonButton, IonSelect, IonSelectOption, IonToggle } from '@ionic/vue';
import axios from 'axios';
import { ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { Storage } from '@capacitor/storage';

export default {
  components: {
    IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonItem, IonLabel, IonInput, IonButton, IonSelect, IonSelectOption, IonToggle
  },
  setup() {
    const route = useRoute();
    const router = useRouter();

    const form = ref({
      nombre: '',
      edad: null,
      peso: null,
      talla: '',
      tipo: '',
      sexo: '',
      esterilizado: false,
    });

    const imageFile = ref(null);

    const handleImageUpload = (event) => {
      const reader = new FileReader();
      reader.onload = (e) => {
        form.value.foto = e.target.result;
      };
      reader.onerror = (error) => {
        console.error('Error al leer el archivo: ', error);
      };
      reader.readAsDataURL(event.target.files[0]);
    };

    const submitForm = async () => {
      try {
        const uidData = await Storage.get({ key: 'uid' });
        const userUuid = uidData.value;
        if (!userUuid) {
          console.error('UID no encontrado');
          return;
        }

        const apiUrl = `https://localhost:44329/api/Pet/${userUuid}`;
        const dataToSend = Object.entries(form.value).reduce((acc, [key, value]) => {
          acc[key] = key === 'foto' ? value : String(value);
          return acc;
        }, {});

        const response = await axios.post(apiUrl, dataToSend, {
          headers: {
            'Content-Type': 'application/json'
          }
        });

        // Maneja la respuesta aquí
        console.log(response.data);

        // Redirige al usuario a la ruta /mascotas después del registro exitoso
        router.push('/mascotas');
      } catch (error) {
        console.error('Error al enviar el formulario:', error);
      }
    };

    return {
      form,
      imageFile,
      handleImageUpload,
      submitForm
    };
  }
};
