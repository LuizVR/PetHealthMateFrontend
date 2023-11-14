import { IonPage, IonInput, IonHeader, IonToolbar, IonTitle, IonContent, IonButton, alertController } from '@ionic/vue';
import { defineComponent } from 'vue';
import axios from 'axios';
import  Cookies from "js-cookie";
import { Cookie } from 'tough-cookie';

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
    async iniciarSesion() {
      // Validar el formato del correo electrónico
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!this.email.match(emailRegex)) {
        this.mostrarAlerta("Error", "Por favor, ingrese un correo electrónico válido.");
        return;
      }

      // Validar la longitud de la contraseña
      if (this.password.length < 6 || this.password.length > 20) {
        this.mostrarAlerta("Error", "La contraseña debe tener entre 6 y 20 caracteres.");
        return;
      }

      try {
        const response = await axios.post("https://localhost:44329/api/User/login", {
          correo: this.email,
          contrasenia: this.password,
        });
      
        if (response.status === 200) {
          console.log(response.data)
          Cookies.set("Uuid", response.data.uui)
          // Las credenciales son válidas, redirige a la página de inicio
          this.$router.push('/menu');
        } else {
          // Las credenciales son incorrectas, muestra un mensaje de error
          this.mostrarAlerta("Error", "Correo electrónico o contraseña incorrectos.");
        }
      } catch (error) {
        console.log("Error al iniciar sesión:", error);
        console.log(error); // Imprime el objeto de error completo
        this.mostrarAlerta("Error", "Correo electrónico o contraseña incorrectos.");
      }     
    },
    irARegistro() {
      // Redirigir a la página de registro
      this.$router.push('/registro');
    },
  },
});