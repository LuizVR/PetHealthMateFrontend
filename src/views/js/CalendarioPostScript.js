
export default {
  data() {
    return {
      form: {
        fecha: '',
        motivo: '',
      },
    };
  },
  methods: {
    submitForm() {
      // Lógica para guardar el formulario
      console.log('Formulario:', this.form);
    },
  },
  mounted() {
    console.log('Componente montado');
  },
};
