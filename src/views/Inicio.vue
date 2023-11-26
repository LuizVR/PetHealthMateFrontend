<template>
    <ion-page>
      <ion-header>
      </ion-header>
  
      <ion-content :fullscreen="true" class="background">
        <!-- Elemento HTML img para mostrar la imagen -->
  
        <!-- Botón de inicio en la parte inferior -->
        <ion-button class="boton-inicio" expand="full" @click="redirigirALogin">
          Inicio
        </ion-button>
      </ion-content>
    </ion-page>
  </template>
  
  <script>
  export default {
    methods: {
      redirigirALogin() {
        // Utiliza el enrutador para redirigir a la ruta /login
        this.$router.push('/login');
      },
    },
  };
  </script>
  
  <style scoped>
  /* Estilo personalizado para el botón */
  .boton-inicio {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 105%;
    color: white; /* Establecer el color del texto a blanco */
  }
  .background {
  --background: url("/src/img/inicio.jpg") 0 0/ 115% 100% no-repeat; /* Ruta de la imagen de fondo */
  
}
  </style>
  