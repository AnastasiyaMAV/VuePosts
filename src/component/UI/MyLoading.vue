<template>
  <div class="loading">
    <div class="spiner"></div>
    <h3>Идёт загрузка...</h3>
  </div>
</template>

<script>
export default {
  name: "my-loading",
};
</script>

<style scoped>
.loading {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
}

.spiner {
  background: blue;
  clip-path: circle(50%);
  height: 5em;
  width: 5em;
  animation: flicker 1s infinite;
}

@keyframes flicker {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
</style>
