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
  IonItem,
  IonImg,
  IonAlert
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
    IonItem,
    IonImg,
    IonAlert
  },
  data() {
    return {
      trashIcon: trash,
      form: {
        nombre: "",
        edad: null,
        peso: null,
        talla: "",
        tipo: "",
        sexo: "",
        esterilizado: false,
        foto: null // Agregar foto si se actualiza
      },
      petId: null,
      showDeleteModal: false,
      showAlert: false, // Agregamos un estado para controlar la alerta
      isSubmitting: false // Nuevo estado para bloquear el botón durante la validación
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
        console.log("Pet Data:", response.data);
        this.form = { ...response.data };
        this.loading = false;
        console.log("Form Data:", this.form);
      } catch (error) {
        console.error("Error fetching pet data:", error);
      }
    },
    async handleImageUpload(event) {
      const file = event.target.files[0];
      const reader = new FileReader();
      reader.onload = (e) => {
        this.form.foto = e.target.result;
      };
      reader.onerror = (error) => {
        console.error("Error al leer el archivo: ", error);
      };
      reader.readAsDataURL(file);
    },
    async submitForm() {
      // Validar que ningún campo esté vacío
      if (
        !this.form.nombre ||
        this.form.edad === null ||
        this.form.peso === null ||
        !this.form.talla ||
        !this.form.tipo ||
        !this.form.sexo
      ) {
        this.showAlert = true;
        return;
      }

      // Deshabilitar el botón durante la validación y la actualización
      this.isSubmitting = true;

      try {
        await this.updatePet();
      } finally {
        // Habilitar el botón después de la validación y la actualización
        this.isSubmitting = false;
      }
    },
    async updatePet() {
      try {
        const { foto, ...petData } = this.form;
        const url = `https://localhost:44329/api/Pet/${this.petId}`;

        console.log("URL de la solicitud:", url);
        console.log("Datos de la mascota:", petData);
        petData.pet_Id = this.petId;

        if (foto) {
          petData.foto = foto;
        }

        await axios.put(url, petData);
        this.$router.push("/mascotas");
      } catch (error) {
        console.error("Error updating pet:", error);
      }
    },
    openDeleteModal() {
      this.showDeleteModal = true;
    },
    closeDeleteModal() {
      this.showDeleteModal = false;
    },
    confirmDelete() {
      axios
        .delete(`https://localhost:44329/api/Pet?id=${this.petId}`)
        .then((response) => {
          console.log("Mascota eliminada exitosamente:", response.data);
          this.closeDeleteModal();
          this.$router.push("/mascotas");
        })
        .catch((error) => {
          console.error("Error al eliminar la mascota:", error);
        });
    }
  }
});
