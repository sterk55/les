<template>
    <div class="puzzle-container">
      <h1>Rompecabezas Deslizante 3x3</h1>
      <p>Tiempo: {{ tiempo }} segundos</p>
      <div class="grid">
        <div 
          v-for="(tile, index) in tiles" 
          :key="index" 
          :class="['tile', { empty: tile === null } ]"
          @click="moverPieza(index)"
          :style="getTileStyle(tile)"
        ></div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted, watch } from 'vue';
  
  const tiles = ref([]);
  const tiempo = ref(0);
  let intervalo;
  const imageUrl = 'https://i.etsystatic.com/41318554/r/il/23257c/4821988340/il_570xN.4821988340_ipew.jpg'; // Imagen genérica
  
  const iniciarJuego = () => {
    tiles.value = [...Array(9).keys()];
    tiles.value[8] = null; // Última pieza vacía
    tiles.value = mezclarPiezas(tiles.value);
    tiempo.value = 0;
    intervalo = setInterval(() => tiempo.value++, 1000);
  };
  
  const mezclarPiezas = (array) => {
    let shuffled;
    do {
      shuffled = [...array].sort(() => Math.random() - 0.5);
    } while (!esSolucionable(shuffled));
    return shuffled;
  };
  
  const esSolucionable = (arr) => {
    let inversions = 0;
    const filteredArr = arr.filter((tile) => tile !== null);
    for (let i = 0; i < filteredArr.length - 1; i++) {
      for (let j = i + 1; j < filteredArr.length; j++) {
        if (filteredArr[i] > filteredArr[j]) inversions++;
      }
    }
    return inversions % 2 === 0;
  };
  
  const moverPieza = (index) => {
    const emptyIndex = tiles.value.indexOf(null);
    const columnas = 3;
  
    const filaActual = Math.floor(index / columnas);
    const colActual = index % columnas;
    const filaVacia = Math.floor(emptyIndex / columnas);
    const colVacia = emptyIndex % columnas;
  
    if ((filaActual === filaVacia && Math.abs(colActual - colVacia) === 1) ||
        (colActual === colVacia && Math.abs(filaActual - filaVacia) === 1)) {
      [tiles.value[index], tiles.value[emptyIndex]] = [tiles.value[emptyIndex], tiles.value[index]];
    }
  };
  
  const verificarGanador = () => {
    if (tiles.value.slice(0, -1).every((val, index) => val === index)) {
      clearInterval(intervalo);
      alert(`¡Felicidades! Terminaste en ${tiempo.value} segundos.`);
    }
  };
  
  const getTileStyle = (tile) => {
    if (tile === null) return { background: 'lightgray' };
    const size = 100;
    return {
      backgroundImage: `url(${imageUrl})`,
      backgroundSize: '300px 300px',
      backgroundPosition: `${-(tile % 3) * size}px ${-Math.floor(tile / 3) * size}px`,
      backgroundColor: 'transparent',
      border: '1px solid black'
    };
  };
  
  watch(tiles, verificarGanador);
  onMounted(iniciarJuego);
  </script>
  
  <style scoped>
  .puzzle-container {
    text-align: center;
    margin-top: 20px;
  }
  .grid {
    display: grid;
    grid-template-columns: repeat(3, 100px);
    grid-template-rows: repeat(3, 100px);
    gap: 2px;
    margin: 20px auto;
    width: 302px;
    height: 302px;
    background: lightgray;
    border: 2px solid black;
  }
  .tile {
    width: 100px;
    height: 100px;
    cursor: pointer;
    background-repeat: no-repeat;
    background-size: 300px 300px;
  }
  .empty {
    background: lightgray;
    cursor: default;
  }
  </style>
  