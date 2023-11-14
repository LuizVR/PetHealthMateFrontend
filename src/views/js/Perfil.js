
import axios from 'axios';
export default {
    data() {
      return {
        userData: {
          foto: '', // La URL de la imagen desde el backend
          nombre: '',
          correo: '',
        },
      };
    },
    mounted() {
      // Llamar a la función para cargar datos desde el backend cuando se monta el componente
      this.loadDataFromBackend();
    },
    methods: {
      loadDataFromBackend() {
        // Aquí deberías hacer una llamada a tu backend para obtener los datos
        // Puedes usar axios, fetch, o cualquier otra biblioteca para hacer la solicitud HTTP
  
        // Ejemplo con axios:
        axios.get('https://localhost:44329/api/User/details')
          .then(response => {
            // Asignar los datos recibidos a la propiedad userData
            this.userData = response.data;
          })
          .catch(error => {
            console.error('Error al cargar datos desde el backend', error);
          });
      },
    },
  };