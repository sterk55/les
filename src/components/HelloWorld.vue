<template>
  <div class="container" v-if="step === 1">
    <h1>Bienvenido al programa</h1>
    <p>Ingresa tu primer nombre:</p>
    <input v-model="nombre" type="text" placeholder="Escribe tu nombre" />
    <button @click="validarNombre">Enviar</button>
    <p v-if="error" class="error">{{ mensajeError }}</p>
  </div>

  <div class="container" v-if="step === 2">
    <p>Ingresa tu segundo nombre:</p>
    <input v-model="segundoNombre" type="text" placeholder="Escribe tu segundo nombre" />
    <button @click="validarSegundoNombre">Enviar</button>
    <p v-if="error" class="error">{{ mensajeError }}</p>
  </div>

  <div class="container" v-if="step === 3">
    <p>Ingresa tu primer apellido:</p>
    <input v-model="primerApellido" type="text" placeholder="Escribe tu primer apellido" />
    <button @click="validarPrimerApellido">Enviar</button>
    <p v-if="error" class="error">{{ mensajeError }}</p>
  </div>

  <div class="container" v-if="step === 4">
    <p>Ingresa tu segundo apellido:</p>
    <input v-model="segundoApellido" type="text" placeholder="Escribe tu segundo apellido" />
    <button @click="validarSegundoApellido">Enviar</button>
    <p v-if="error" class="error">{{ mensajeError }}</p>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const nombre = ref('');
const segundoNombre = ref('');
const primerApellido = ref('');
const segundoApellido = ref('');
const error = ref(false);
const mensajeError = ref('');
const step = ref(1);

const validarNombre = () => {
  if (nombre.value !== 'Leslie') {
    error.value = true;
    mensajeError.value = nombre.value.toLowerCase() === 'leslie' ? 'La primera letra debe ser mayúscula' : 'Error: Ingresa correctamente el nombre "Leslie"';
  } else {
    error.value = false;
    step.value = 2;
  }
};

const validarSegundoNombre = () => {
  if (segundoNombre.value !== 'Melany') {
    error.value = true;
    mensajeError.value = segundoNombre.value.toLowerCase() === 'melany' ? 'La primera letra debe ser mayúscula' : 'Error: Ingresa correctamente el nombre "Melany"';
  } else {
    error.value = false;
    step.value = 3;
  }
};

const validarPrimerApellido = () => {
  if (primerApellido.value !== 'Fernandez') {
    error.value = true;
    mensajeError.value = primerApellido.value.toLowerCase() === 'fernandez' ? 'La primera letra debe ser mayúscula' : 'Error: Ingresa correctamente el apellido "Fernandez"';
  } else {
    error.value = false;
    step.value = 4;
  }
};

const validarSegundoApellido = () => {
  if (segundoApellido.value !== 'Gallo') {
    error.value = true;
    mensajeError.value = segundoApellido.value.toLowerCase() === 'gallo' ? 'La primera letra debe ser mayúscula' : 'Error: Ingresa correctamente el apellido "Gallo"';
  } else {
    error.value = false;
    alert('Registro completado con éxito!');
  }
};
</script>

<style scoped>
.container {
  text-align: center;
  margin-top: 50px;
}
input {
  padding: 8px;
  margin: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
}
button {
  padding: 8px 15px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
button:hover {
  background-color: #0056b3;
}
.error {
  color: red;
  font-weight: bold;
}
</style>