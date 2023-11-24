<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Registra tu cita</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content class="custom-background">
      <div class="ion-text-center">
        <!-- Calendario grande -->
        <ion-item color="#">
        <ion-datetime
        :value="form.fecha"
          display-format="YYYY-MM-DDTHH:mm"
          @ionChange="handleDatetimeSelection($event)"
        ></ion-datetime>
      </ion-item>

        <!-- v-select para motivo -->
        <ion-item color="#">
          <ion-label position="stacked" style="color: black;">Motivo</ion-label>
          <ion-select v-model="form.motivo" placeholder="Selecciona un motivo" @ionChange="handleFormChange" style="color: black;">
    <ion-select-option value="Revision general">Revision general</ion-select-option>
    <ion-select-option value="Dia de vacuna">Dia de vacuna</ion-select-option>
    <ion-select-option value="Baño">Baño</ion-select-option>
  </ion-select>
        </ion-item>

        <!-- Botón Guardar abajo -->
        <ion-button expand="full" @click="submitForm" :disabled="isButtonDisabled" style="margin-top: 20px;">Guardar</ion-button>
      </div>
    </ion-content>
  </ion-page>
</template>
<script src="./js/CalendarioPostScript.js"></script> 