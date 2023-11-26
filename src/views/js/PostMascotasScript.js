import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonItem, IonLabel, IonInput, IonButton, IonSelect, IonSelectOption, IonAlert } from '@ionic/vue';
import axios from 'axios';
import { ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { Storage } from '@capacitor/storage';

export default {
  components: {
    IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonItem, IonLabel, IonInput, IonButton, IonSelect, IonSelectOption, IonAlert
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
    const showAlert = ref(false);
    const alertMessage = ref('');

    const goToPetPage = () => {
      // Utiliza el enrutador de Vue para navegar a la página /menu
      router.push('/mascotas');
    };

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

    const validateInput = () => {
      // Validar que la entrada no tenga más de dos dígitos
      if (form.value.edad !== null && form.value.edad.toString().length > 2) {
        form.value.edad = parseInt(form.value.edad.toString().slice(0, 2));
      }

      if (form.value.peso !== null && form.value.peso.toString().length > 2) {
        form.value.peso = parseInt(form.value.peso.toString().slice(0, 2));
      }
    };

    const submitForm = async () => {
      try {
        // Validación de campos vacíos
        if (
          !form.value.nombre ||
          form.value.edad === null ||
          form.value.peso === null ||
          !form.value.talla ||
          !form.value.tipo ||
          !form.value.sexo ||
          form.value.esterilizado === null
        ) {
          alertMessage.value = 'Por favor, completa todos los campos.';
          showAlert.value = true;
          return;
        }

        const uidData = await Storage.get({ key: 'uid' });
        const userUuid = uidData.value;
        if (!userUuid) {
          alertMessage.value = 'UID no encontrado';
          showAlert.value = true;
          return;
        }

        const apiUrl = `https://www.PetHealthMateBack.somee.com/api/Pet/${userUuid}`;
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

        // Muestra una alerta de éxito
        alertMessage.value = 'Registro exitoso';
        showAlert.value = true;

        // Redirige al usuario a la ruta /mascotas después del registro exitoso
        router.push('/mascotas');
      } catch (error) {
        console.error('Error al enviar el formulario:', error);
        // Muestra una alerta de error
        alertMessage.value = 'Error al enviar el formulario';
        showAlert.value = true;
      }
    };
    return {
      form,
      imageFile,
      handleImageUpload,
      submitForm,
      showAlert,
      alertMessage,
      validateInput,
      goToPetPage
    };
  }
};