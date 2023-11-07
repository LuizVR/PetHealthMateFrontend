<template>
    <FondoComponent>
      <div class="login-container">
        <h1>Iniciar sesión</h1>
        <input type="email" placeholder="Correo electrónico" v-model="email">
        <input type="password" placeholder="Contraseña" v-model="password">
        <button @click="iniciarSesion">Iniciar sesión</button>
        <p>Aún no tienes cuenta, <span class="registrate-link" @click="irARegistro">Regístrate</span> en negro</p>
      </div>
    </FondoComponent>
  </template>
  
  <script src="./js/LoginScript.js"></script>
  