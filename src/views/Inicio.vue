<template>
  <ion-page>
    <ion-header>
    </ion-header>

    <ion-content :fullscreen="true" class="background">
      <!-- Elemento HTML img para mostrar la imagen -->

      <!-- Botón de inicio en la parte inferior -->
      <ion-button class="boton-inicio" @click="redirigirALogin">
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
  --background: #FF7F00;
  color: white;
  --border-radius: 20px;
  width: 150px;
  height: 50px;
  position: fixed;
  margin-top: 550px;
  left: 50%;
  transform: translateX(-50%);
  font-family: "Cuerpo";
}

.background {
  --background: url("/src/img/inicio.jpg") center center/cover no-repeat;
  /* Ruta de la imagen de fondo */
}
</style>
  