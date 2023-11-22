import axios from 'axios';

export default {
  data() {
    return {
      form: {
        fecha: '',   // Debes inicializar estos valores según tu lógica
        motivo: '',
      },
      petId: '',     // Debes asignar el valor del petId según tu lógica
    };
  },
  methods: {
    submitForm() {
      // Objeto que se enviará en la solicitud POST
      const postData = {
        fecha: this.form.fecha,
        motivo: this.form.motivo,
        pet_Id: this.petId,
      };

      // Realizar la solicitud POST utilizando Axios
      axios.post('https://localhost:44329/api/Pet', postData)
        .then(response => {
          // Manejar la respuesta si es necesario
          console.log('Respuesta del servidor:', response.data);
        })
        .catch(error => {
          // Manejar errores en la solicitud POST
          console.error('Error en la solicitud POST:', error);
        });
    },
  },
};