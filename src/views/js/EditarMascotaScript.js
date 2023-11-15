import {
  IonModal,
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonFab,
  IonFabButton,
  IonIcon,
  IonInput,
  IonSelectOption,
  IonToggle, 
  IonSelect,
  IonItem
} from "@ionic/vue";
import axios from "axios";
import { trash } from "ionicons/icons";
import { defineComponent } from "vue";
export default defineComponent({
  name: "EditPet",
  components: {
    IonModal,
    IonPage,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonFab,
    IonFabButton,
    IonIcon,
    IonInput,
    IonSelect,
    IonSelectOption,
    IonToggle,
    IonItem
  },
  data() {
    return {
      trashIcon: trash,
      form: {
        nombre: '',
        edad: null,
        peso: null,
        talla: '',
        tipo: '',
        sexo: '',
        esterilizado: false,
        foto: null, // Agregar foto si se actualiza
      },
      petId: null,
      showDeleteModal: false,
    };
  },
  created() {
    this.petId = this.$route.params.pet_Id;
    this.loadPetData();
  },
  methods: {
    async loadPetData() {
      try {
        const response = await axios.get(
          `https://localhost:44329/api/Pet/${this.petId}`
        );
        console.log('Pet Data:', response.data);
        this.form = { ...response.data };
        this.loading = false;
       // this.$forceUpdate(); // Actualizar manualmente la vista
        console.log("Form Data:", this.form);
      } catch (error) {
        console.error("Error fetching pet data:", error);
      }
    },
    async handleImageUpload(event) {
      const file = event.target.files[0];
      const reader = new FileReader();
      reader.onload = (e) => {
        this.form.foto = e.target.result; // Esto será la imagen en base64 como una cadena de texto.
      };
      reader.onerror = (error) => {
        console.error("Error al leer el archivo: ", error);
      };
      reader.readAsDataURL(file);
    },
    async submitForm() {
      try {
        const { foto, ...petData } = this.form; // Separar la foto de los datos de la mascota
        const url = `https://localhost:44329/api/Pet/${this.petId}`;

        console.log("URL de la solicitud:", url);
        console.log("Datos de la mascota:", petData);
        // Añadir el id al objeto petData
        petData.pet_Id = this.petId;

        if (foto) {
          // Agregar la foto al objeto petData si existe
          petData.foto = foto;
        }

        await axios.put(url, petData);
        // Tratar el éxito de la actualización
      } catch (error) {
        console.error("Error updating pet:", error);
      }
    },

    openDeleteModal() {
      this.showDeleteModal = true; // Mostrar el modal de eliminación
    },

    closeDeleteModal() {
      this.showDeleteModal = false; // Cerrar el modal de eliminación
    },

    confirmDelete() {
      axios
        .delete(`https://localhost:44329/api/Pet?id=${this.petId}`)
        .then((response) => {
          console.log("Mascota eliminada exitosamente:", response.data);
          this.closeDeleteModal(); // Cierra el modal después de eliminar la mascota
          // Puedes redirigir a otra página o realizar alguna acción adicional después de la eliminación
        })
        .catch((error) => {
          console.error("Error al eliminar la mascota:", error);
          // Manejar el error de acuerdo a tu lógica de la aplicación
        });
    },
  },
});
