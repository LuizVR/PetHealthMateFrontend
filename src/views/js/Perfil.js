import { IonPage, IonInput, IonHeader, IonToolbar, IonTitle, IonContent, IonButton, alertController } from '@ionic/vue';
import { defineComponent } from 'vue';
import axios from 'axios';

export default defineComponent({
  name: 'PerfilPage',
  components: {
    IonPage,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonInput,
    IonButton
  },
  data() {
    return {
      userData: {
        foto: '', // La URL de la imagen desde el backend
        nombre: '',
        correo: '',
        contrasenia: '', // Agregado para evitar errores si no existe en el backend
      },
    };
  },
  created() {
    // Llamar a la función para cargar datos desde el backend cuando se crea la instancia
    this.loadDataFromBackend();
  },
  methods: {
    loadDataFromBackend() {
      // Aquí deberías hacer una llamada a tu backend para obtener los datos
      // Puedes usar axios, fetch, o cualquier otra biblioteca para hacer la solicitud HTTP

      // Ejemplo con axios:
      axios.get('https://localhost:44329/api/User/details', { withCredentials: true })
        .then(response => {
          // Seleccionar solo los campos deseados del objeto response.data
          this.userData.nombre = response.data.nombre;
          this.userData.correo = response.data.correo;
          this.userData.contrasenia = response.data.contrasenia;
          this.userData.foto = response.data.foto;
          console.log(response.data.foto)
        })
        .catch(error => {
          console.error('Error al cargar datos desde el backend', error);
        });
    },
  },
});
