import axios from 'axios';

export default {
  data() {
    return {
      petId: null,
      dates: [],
    };
  },
  mounted() {
    // Obtener el petId de la URL
    this.petId = this.$route.params.pet_Id;

    // Llamar a la API para obtener los datos
    this.getData();
  },
  methods: {
    async getData() {
      try {
        const response = await axios.get(`https://localhost:44329/api/Date/byPetId/${this.petId}`);
        this.dates = response.data;
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    },
    formatDate(dateString) {
      const options = { year: 'numeric', month: 'long', day: 'numeric' };
      return new Date(dateString).toLocaleDateString('es-ES', options);
    },
    async eliminarCita(date) {
      try {
        // Hacer la llamada a la API para eliminar la cita
        await axios.delete(`https://localhost:44329/api/Date?id=${date.date_Id}`);
        
        // Eliminar la cita localmente
        this.dates = this.dates.filter(item => item.date_Id !== date.date_Id);
        
        console.log('Cita eliminada:', date);

        // Redirigir a la ruta /detalleCita después del éxito
        this.$router.push('/detalleCita');
      } catch (error) {
        console.error('Error deleting data:', error);
      }
    },
  },
};