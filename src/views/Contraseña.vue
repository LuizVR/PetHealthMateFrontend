<template>
    <ion-page>
        <ion-header>
            <ion-toolbar>
                <ion-title class="ion-text-center">Restablecer Contraseña</ion-title>
            </ion-toolbar>
        </ion-header>

        <ion-content :fullscreen="true" class="background">
            <div class="contenido">>
                <p>Por favor, ingresa la dirección de correo electrónico asociada a tu cuenta para iniciar el
                    proceso de restablecimiento de contraseña.</p>
                <p>¡Gracias por tu colaboración!</p>
                <ion-input class="custom" label="Correo" label-placement="floating" fill="solid"
                    placeholder="Ingresar Correo" :clear-input="true" color="custom" type="email" v-model="email" required>
                </ion-input>
                <ion-button @click="restablecer" class="login-button">
                    Enviar
                </ion-button>
            </div>
        </ion-content>
    </ion-page>
</template>
<script src="./js/Contraseña.js"></script>
<style scoped src="./css/Contraseña.css"></style>
  