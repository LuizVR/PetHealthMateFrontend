import { IonPage, IonInput, IonHeader, IonToolbar, IonTitle, IonContent, IonButton } from '@ionic/vue';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'LoginPage',
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
      email: '',
      password: '',
    };
  },
  methods: {
    iniciarSesion() {
      // Lógica para iniciar sesión y redirigir a Home
      this.$router.push('/home');
    },
    irARegistro() {
      // Redirigir a la página de registro
      this.$router.push('/registro');
    },
  },
});