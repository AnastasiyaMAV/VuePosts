<template>
  <div class="error"><slot></slot></div>
</template>

<script>
export default {
  name: "my-error",
};
</script>

<style scoped>
.error {
  border: 1px solid black;
  border-radius: 12px;
  min-height: 50px;
  max-width: 300px;
  margin: 25px auto;
  box-shadow: -5px -5px 5px -5px rgba(34, 60, 80, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;

  background: rgb(248, 80, 50);
  background: -moz-linear-gradient(
    left,
    rgba(248, 80, 50, 1) 0%,
    rgba(241, 111, 92, 1) 0%,
    rgba(241, 111, 92, 1) 41%,
    rgba(246, 41, 12, 1) 68%,
    rgba(246, 41, 12, 1) 68%,
    rgba(240, 47, 23, 1) 80%,
    rgba(246, 41, 12, 1) 92%,
    rgba(231, 56, 39, 1) 100%
  );
  background: -webkit-linear-gradient(
    left,
    rgba(248, 80, 50, 1) 0%,
    rgba(241, 111, 92, 1) 0%,
    rgba(241, 111, 92, 1) 41%,
    rgba(246, 41, 12, 1) 68%,
    rgba(246, 41, 12, 1) 68%,
    rgba(240, 47, 23, 1) 80%,
    rgba(246, 41, 12, 1) 92%,
    rgba(231, 56, 39, 1) 100%
  );
  background: linear-gradient(
    to right,
    rgba(248, 80, 50, 1) 0%,
    rgba(241, 111, 92, 1) 0%,
    rgba(241, 111, 92, 1) 41%,
    rgba(246, 41, 12, 1) 68%,
    rgba(246, 41, 12, 1) 68%,
    rgba(240, 47, 23, 1) 80%,
    rgba(246, 41, 12, 1) 92%,
    rgba(231, 56, 39, 1) 100%
  );
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#f85032', endColorstr='#e73827',GradientType=1 );
}
</style>
