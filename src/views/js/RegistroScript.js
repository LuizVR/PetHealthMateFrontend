import {
  IonPage,
  IonInput,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonCheckbox,
  alertController,
} from "@ionic/vue";
import { defineComponent } from "vue";

export default defineComponent({
  name: "RegistroPage",
  components: {
    IonPage,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonInput,
    IonCheckbox,
  },
  data() {
    return {
      mostrarAgregar: true,
      usuario: {
        nombre: "",
        correo: "",
        contrasenia: "",
      },
    };
  },
  methods: {
    // Método para mostrar un alert
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
    registrar() {
      // Verifica si los campos están vacíos
      if (
        !this.usuario.nombre ||
        !this.usuario.correo ||
        !this.usuario.contrasenia
      ) {
        this.mostrarAlerta("Error", "Por favor, complete todos los campos.");
        return;
      }
      // Verifica si la casilla de verificación no está seleccionada
      if (!this.usuario.acuerdo) {
        this.mostrarAlerta("Error", "Debe aceptar los términos y condiciones.");
        return;
      }
      // Lógica para agregar un nuevo registro

      // Redirige a otra página después del registro
      this.$router.push("/login");
    },
    iniciarSesion() {
      // Redirigir a la página de registro
      this.$router.push("/login");
    },
  },
});
