import { IonPage, IonInput, IonHeader, IonToolbar, IonTitle, IonContent, IonButton} from '@ionic/vue';
import { defineComponent } from 'vue';
import axios from 'axios';
import {Storage} from '@capacitor/storage';

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
        foto: '',
        nombre: '',
        correo: '',
        contrasenia: '',
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
    irAEditar() {
      this.$router.push('/perfil/editar');
    },
  },
});
