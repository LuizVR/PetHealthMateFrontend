<template>
    <ion-page>
      <ion-header>
        <ion-toolbar color="primary">
          <ion-title>Actividades</ion-title>
        </ion-toolbar>
      </ion-header>
  
      <ion-content :fullscreen="true">
        <ion-grid>
          <ion-row>
            <ion-col size="6" v-for="(item, index) in menuItems" :key="index">
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
  <script src="js/MenuScript.js"></script>
  <style src="css/MenuStyles.css" scoped></style>