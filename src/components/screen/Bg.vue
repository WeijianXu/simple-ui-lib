<template>
  <div class="sc-bg" :style="{backgroundImage: `url(${bgUrl})`}"><slot></slot></div>
</template>

<script>
export default {
  name: 'bg',
  props: {
    bgUrl: String,
  },
};
</script>

<style>

.sc-bg {
  background-color: #0b172d;
  width: 100%;
  height: 100%;
  min-width: 1220px;
  overflow-y: auto;
  overflow-x: hidden;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
