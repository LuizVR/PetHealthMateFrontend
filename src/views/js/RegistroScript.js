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
import axios from 'axios';

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
        foto: "@/img/foto_usuario.png"
      },
      correosRegistrados: [] // Lista para almacenar correos registrados
    };
  },
  async created() {
    // Cargar la lista de correos registrados al iniciar la página
    await this.cargarCorreosRegistrados();
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
    async cargarCorreosRegistrados() {
      try {
        const response = await axios.get("https://localhost:44329/api/User/emails");
        this.correosRegistrados = response.data; // Almacena la lista de correos registrados
      } catch (error) {
        console.error("Error al cargar correos registrados:", error);
      }
    },
    async registrar() {
this.usuario.foto = "ruta/a/tu/imagen.jpg";
      // Validaciones de entrada
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!this.usuario.correo.match(emailRegex)) {
        this.mostrarAlerta("Error", "Por favor, ingrese un correo electrónico válido.");
        return;
      }
      if (this.usuario.contrasenia.length < 6 || this.usuario.contrasenia.length > 20) {
        this.mostrarAlerta("Error", "La contraseña debe tener entre 6 y 20 caracteres.");
        return;
      }
      if (!this.usuario.nombre || !this.usuario.correo || !this.usuario.contrasenia) {
        this.mostrarAlerta("Error", "Por favor, complete todos los campos.");
        return;
      }
      if (!this.usuario.acuerdo) {
        this.mostrarAlerta("Error", "Debe aceptar los términos y condiciones.");
        return;
      }

      // Verificar si el correo ya está registrado
      if (this.correosRegistrados.includes(this.usuario.correo)) {
        this.mostrarAlerta("Error", "El correo electrónico ya está registrado.");
        return;
      }

      try {
        // Realizar la solicitud de registro
        const response = await axios.post("https://localhost:44329/api/User", this.usuario, {
          headers: {
            "Content-Type": "application/json",
          },
        });

        if (response.status === 200) {
          this.mostrarAlerta("Éxito", "Usuario registrado correctamente.");
          this.$router.push("/login");
        } else {
          this.mostrarAlerta("Error", response.data.error);
        }
      } catch (error) {
        console.error("Error al registrar usuario:", error);
        this.mostrarAlerta("Error", "Ocurrió un error al registrar el usuario.");
      }
      this.usuario.nombre = "";
      this.usuario.correo = "";
      this.usuario.contrasenia = "";
      this.usuario.foto = "@/img/foto_usuario.png";
    },
    iniciarSesion() {
      this.$router.push("/login");
    },
  },
});