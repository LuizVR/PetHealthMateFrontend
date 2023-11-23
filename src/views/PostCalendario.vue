<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Registra tu cita</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding">
      <div class="ion-text-center">
        <!-- Calendario grande -->
        <ion-item>
        <ion-label position="floating">Fecha</ion-label>
        <ion-datetime
        :value="form.fecha"
          display-format="YYYY-MM-DDTHH:mm"
          @ionChange="handleDatetimeSelection($event)"
        ></ion-datetime>
      </ion-item>

        <!-- v-select para motivo -->
        <ion-item>
          <ion-label position="stacked">Motivo</ion-label>
          <ion-select :value="form.motivo" placeholder="Selecciona un motivo" @ionChange="handleFormChange">
    <ion-select-option value="opcion1">Revision general</ion-select-option>
    <ion-select-option value="opcion2">Dia de vacuna</ion-select-option>
    <ion-select-option value="opcion3">Baño</ion-select-option>
  </ion-select>
        </ion-item>

        <!-- Botón Guardar abajo -->
        <ion-button expand="full" @click="submitForm" style="margin-top: 20px;">Guardar</ion-button>
      </div>
    </ion-content>
  </ion-page>
</template>
<script src="./js/CalendarioPostScript.js"></script> 