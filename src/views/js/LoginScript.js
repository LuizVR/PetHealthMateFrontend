import FondoComponent from '../component/Fondo.vue'; // Importando el componente del fondo
  
export default {
  components: {
    FondoComponent,
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
};