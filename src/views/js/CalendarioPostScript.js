import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonItem, IonDatetime, IonButton, IonLabel, IonSelect, IonSelectOption } from '@ionic/vue';
import axios from 'axios';

export default {
  components: {
    IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonItem, IonDatetime, IonButton, IonLabel, IonSelect, IonSelectOption
  },
  data() {
    return {
      form: {
        fecha: '',
        motivo: '',
      },
      petId: null,
    };
  },
  computed: {
    isButtonDisabled() {
      return !this.form.fecha || !this.form.motivo;
    },
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

      const apiUrl = `https://www.PetHealthMateBack.somee.com/api/Date/${this.petId}`;
      axios.post(apiUrl, {
        pet_Id: this.petId,
        fecha: this.form.fecha,
        motivo: this.form.motivo,
      })
        .then(response => {
          console.log('Respuesta del servidor:', response.data);

          // Redirigir a la ruta /calendar después del éxito
          this.$router.push('/calendar');
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
    goToCalendarPage() {
      // Utiliza el enrutador de Vue para navegar a la página /menu
      this.$router.push('/calendar');
    },  
  },
};
