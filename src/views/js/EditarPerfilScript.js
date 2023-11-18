import { IonPage, IonInput, IonHeader, IonToolbar, IonTitle, IonContent, IonButton, alertController } from '@ionic/vue';
import { defineComponent } from 'vue';
import axios from 'axios';
import {Storage} from '@capacitor/storage';

export default defineComponent({
  name: 'EditarPerfilPage',
  components: {
    IonPage,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonInput,
    IonButton,
    alertController,
  },
  data() {
    return {
      userData: {
        nombre: '',
        correo: '',
        foto: null,
      },
    };
  },
  created() {
    this.loadDataFromBackend();
  },
  methods: {
    async loadDataFromBackend() {
      const uidData = await Storage.get({key: 'uid'});
      const userUuid = uidData.value;

      if (!userUuid) {
        console.error('UID no encontrado');
        return;
      }
      var uri = "https://localhost:44329/api/User/details/"
      axios.get(uri+userUuid)
        .then(response => {
          this.userData.nombre = response.data.nombre;
          this.userData.correo = response.data.correo;
          this.userData.contrasenia = response.data.contrasenia;
          this.userData.foto = response.data.foto;
        })
        .catch(error => {
          console.error('Error al cargar datos desde el backend', error);
        });
    },
    handleImageUpload(event) {
      const file = event.target.files[0];
      if (file) {
        // Convierte la imagen a base64
        const reader = new FileReader();
        reader.onload = (e) => {
          this.userData.imagen = e.target.result;
        };
        reader.readAsDataURL(file);
      }
    },
    mostrarAlerta(titulo, mensaje) {
      const alert = alertController.create({
        header: titulo,
        message: mensaje,
        buttons: [
          {
            text: 'OK',
            handler: () => {
              setTimeout(() => {
                window.location.href = '/perfil';
              }, 1);
            }
          }
        ],
        cssClass: 'custom-alert'
      }).then(alert => {
        alert.style.setProperty('--background', '#d2b48c', 'important');
        alert.style.setProperty('font-family', 'Cuerpo', 'important');
        alert.present();
      });
    },
    
    async guardarDatos() {
      const datosParaGuardar = {
        nombre: this.userData.nombre,
        correo: this.userData.correo,
        foto: this.userData.imagen,
      };
      
      const uidData = await Storage.get({key: 'uid'});
      const userUuid = uidData.value;

      if (!userUuid) {
        console.error('UID no encontrado');
        return;
      }
      var uri = "https://localhost:44329/api/User/edit"
      // Realiza la solicitud HTTP con Axios
      axios.put(uri+userUuid, datosParaGuardar)
        .then(response => {
          // Actualiza el estado con los nuevos datos
          this.userData.nombre = response.data.nombre;
          this.userData.correo = response.data.correo;
          this.userData.imagen = response.data.imagen;
    
          // Muestra un mensaje de alerta
          this.mostrarAlerta('¡Actualización exitosa!', 'Tu perfil se ha actualizado.');
        })
        .catch(error => {
          console.error('Error al guardar datos:', error);
          // Muestra una alerta de error
          this.mostrarAlerta('Error', 'Hubo un error al guardar los datos.');
        });
    },    
  },
});
