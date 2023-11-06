
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonGrid, IonRow, IonCol, IonCard, IonCardContent, IonIcon } from '@ionic/vue';
import { defineComponent } from 'vue';
import { paw, calendar, notifications } from 'ionicons/icons';

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
    const menuItems = [
      { title: 'Mis mascotas', icon: paw, color: 'dark', page: '/pets' },
      { title: 'Calendario de la salud', icon: calendar, color: 'tertiary', page: '/health-calendar' },
      { title: 'Campañas', icon: notifications, color: 'warning', page: '/campaigns' },
    ];

    const openPage = (page) => {
      // Aquí iría la lógica para abrir la página correspondiente.
      console.log(`Opening page: ${page}`);
    };

    return { menuItems, openPage };
  }
});
