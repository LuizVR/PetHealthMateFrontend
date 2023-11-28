<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <div class="header-content">
          <img src="/src/img/icons/usuario_icon.png" alt="User Profile" @click="goToUserProfile" class="user-icon" />
          <ion-title>Actividades</ion-title>
          <img src="/src/img/icons/cerrar_sesion.png" alt="User Profile" @click="goToExit" class="user-icon" />
        </div>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true" class="background">
      <ion-grid>
        <ion-row v-for="(item, index) in menuItems" :key="index">
          <ion-col size="12">
            <ion-card :color="item.color" button @click="openPage(item.page)">
              <ion-card-content class="ion-text-center">
                <ion-icon :icon="item.icon" size="large"></ion-icon>
                <div>{{ item.title }}</div>
              </ion-card-content>
            </ion-card>
          </ion-col>
        </ion-row>
      </ion-grid>
    </ion-content>
  </ion-page>
</template>

<script src="./js/MenuScript.js"></script>
<style scoped src="./css/MenuStyles.css"></style>
