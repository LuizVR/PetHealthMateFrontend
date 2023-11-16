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
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!this.email.match(emailRegex)) {
        this.mostrarAlerta("Error", "Por favor, ingrese un correo electrónico válido.");
        return;
      }

      if (this.password.length < 6 || this.password.length > 20) {
        this.mostrarAlerta("Error", "La contraseña debe tener entre 6 y 20 caracteres.");
        return;
      }

      try {
        const response = await axios.post("https://localhost:44329/api/User/login", {
          correo: this.email,
          contrasenia: this.password,
        }, {
          withCredentials: true
        });
      
        if (response.status === 200) {
          this.$router.push('/menu');
        } else {
          this.mostrarAlerta("Error", "Correo electrónico o contraseña incorrectos.");
        }
      } catch (error) {
        console.log("Error al iniciar sesión:", error);
        console.log(error); 
        this.mostrarAlerta("Error", "Error de conexion");
      }     
    },
    irARegistro() {
      this.$router.push('/registro');
    },
  },
});