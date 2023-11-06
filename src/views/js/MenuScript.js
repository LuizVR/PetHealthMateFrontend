import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonGrid, IonRow, IonCol, IonCard, IonCardContent, IonIcon } from '@ionic/vue';
import { defineComponent } from 'vue';
import { personCircleOutline } from 'ionicons/icons'; // Importa el ícono correcto

export default defineComponent({
  name: 'MenuPage',
  components: {
    IonPage,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonGrid,
    IonRow,
    IonCol,
    IonCard,
    IonCardContent,
    IonIcon
  },
  setup() {
    // Define tu matriz de elementos de menú y la lógica para abrir una página aquí.

    const goToUserProfile = () => {
      // Aquí colocarías la lógica para navegar al perfil del usuario
      console.log('Ir al perfil del usuario');
    };

    return { 
      // tus variables y métodos retornados
      goToUserProfile,
    };
  }
});