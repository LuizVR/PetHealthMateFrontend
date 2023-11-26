import { IonPage, IonInput, IonHeader, IonToolbar, IonTitle, IonContent, IonButton, alertController } from '@ionic/vue';
import { defineComponent } from 'vue';
import axios from 'axios';

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
      email: ''
    };
  },
  methods: {
    async restablecer() {
      try {
        // Verifica si el campo de correo electrónico está vacío
        if (!this.email) {
          this.mostrarAlerta('Error', 'Se requiere un correo electrónico.');
          return;
        }

        const passwordResetDto = {
          Email: this.email
        };

        const response = await axios.post('https://www.PetHealthMateBack.somee.com/api/User/reset-password', passwordResetDto);

        // Muestra un mensaje de éxito si la solicitud es exitosa
        this.mostrarAlerta('Éxito', response.data);
        this.email = "";
        // Redirige al usuario a la página de inicio
        this.$router.push('/');
      } catch (error) {
        // Muestra un mensaje de error si la solicitud falla
        this.mostrarAlerta('Error', `Error al enviar el correo de restablecimiento de contraseña: ${error.response.data}`);
      }
    },
    mostrarAlerta(titulo, mensaje) {
      const alert = alertController.create({
        header: titulo,
        message: mensaje,
        buttons: ["OK"],
      }).then(alert => {
        alert.style.setProperty('--background', '#d2b48c', 'important');
        alert.style.setProperty('font-family', 'Cuerpo', 'important');
        alert.present();
      });
    },
    goToMenuPage() {
      // Utiliza el enrutador de Vue para navegar a la página /menu
      this.$router.push('/login');
    },
  }
});