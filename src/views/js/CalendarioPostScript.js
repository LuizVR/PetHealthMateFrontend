import axios from 'axios';

export default {
  data() {
    return {
      form: {
        fecha: '',
        motivo: '',
      },
      petId: null,
    };
  },
  mounted() {
    this.petId = this.$route.params.pet_Id;
    console.log('Pet_Id obtenido de la URL:', this.petId);
  },
  methods: {
    submitForm() {
      console.log('Datos que se enviarán:', {
        pet_Id: this.petId,
        fecha: this.form.fecha,
        motivo: this.form.motivo,
      });

      // Verificar si la fecha tiene un valor antes de enviar la solicitud
      if (!this.form.fecha) {
        console.error('Error: La fecha es obligatoria.');
        return;
      }

      // Verificar si el motivo tiene un valor antes de enviar la solicitud
      if (!this.form.motivo) {
        console.error('Error: El motivo es obligatorio.');
        return;
      }

      const apiUrl = `https://localhost:44329/api/Date/${this.petId}`;
      axios.post(apiUrl, {
        pet_Id: this.petId,
        fecha: this.form.fecha,
        motivo: this.form.motivo,
      })
        .then(response => {
          console.log('Respuesta del servidor:', response.data);
        })
        .catch(error => {
          console.error('Error en la solicitud POST:', error);
        });
    },
    handleDatetimeSelection(event) {
      const fechaSeleccionada = event.detail.value;
      console.log('Fecha seleccionada:', fechaSeleccionada);
      this.form.fecha = fechaSeleccionada;
    },
  },
};
