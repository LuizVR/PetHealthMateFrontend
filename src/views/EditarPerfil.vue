<template>
    <ion-page>
        <ion-header>
            <ion-toolbar>
                <ion-buttons slot="start">
                    <ion-back-button defaultHref="/"></ion-back-button>
                </ion-buttons>
                <ion-title class="ion-text-center">Editar Perfil</ion-title>
            </ion-toolbar>
        </ion-header>
        <ion-content :fullscreen="true" class="background">
            <div class="contenido">
                <img v-if="userData.imagen" style="color: black;" :src="userData.imagen" alt="Imagen de perfil" />
                <ion-input class="carga-imagen" type="file" @change="handleImageUpload" accept="image/*" />
                <ion-input class="custom" label="Nombre" label-placement="floating" fill="solid" color="custom"
                    v-model="userData.nombre" required>
                </ion-input>
                <ion-input class="custom" label="Correo" label-placement="floating" fill="solid" color="custom"
                    v-model="userData.correo" required>
                </ion-input>
                <ion-button class="editar-button" @click="guardarDatos">Guardar</ion-button>
            </div>
        </ion-content>
    </ion-page>
</template>
<script src="./js/EditarPerfilScript.js"></script>
<style scoped src="./css/PerfilStyles.css"></style>
