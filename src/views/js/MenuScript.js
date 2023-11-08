// Archivo: MenuScript.js

import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonGrid, IonRow, IonCol, IonCard, IonCardContent, IonIcon } from '@ionic/vue';
import { defineComponent, ref } from 'vue';
import { useRouter } from 'vue-router';
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
    const router = useRouter();
    const menuItems = ref([
      { title: 'Mis mascotas', icon: paw, color: 'dark', page: '/mascotas' },
      { title: 'Calendario de la salud', icon: calendar, color: 'tertiary', page: '/calendar' },
      { title: 'Campañas', icon: notifications, color: 'warning', page: '/campaigns' },
      // Añade más elementos si los necesitas
    ]);
    
    const openPage = (page) => {
      router.push(page).then(() => {
        router.go();
      }).catch(err => {
        console.error('Error during routing:', err);
      });
    };
    

    return {
      menuItems,
      openPage
    };
  },
});
