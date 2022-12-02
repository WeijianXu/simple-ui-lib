<template>
  <div class="header-box" :style="{ backgroundImage: `url(${imgUrl})`}">
    <!-- <img :src="imgUrl" alt="center" class="header-box_bg" /> -->
    <div class="header-left">
      <slot name="left"></slot>
    </div>
    <div class="header-center">{{title}}</div>
    <div class="header-right">
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script>
// import headheader from "../imgs/head-header.svg";

export default {
  props: {
    imgUrl: {
      type: [Number, String],
      // default: headheader
      default: '/static/screen/head-title.svg',
    },
    title: String,
  },
};
</script>

<style lang="scss">
.header-box {
  width: 100%;
  height: 111px;
  background: no-repeat;
  background-size: 100% 100%;
  padding: 15px 6%;
  display: flex;
  justify-content: space-between;

  .header-left {
    width: 40%;
  }
  .header-center {
    width: 20%;
  }
  .header-right {
    width: 40%;
  }

  .header-center {
    font-family: MF-ShuJian-Regular;
    font-size: 46px;
    color: #ffffff;
    letter-spacing: 4px;
    text-align: center;
  }
}
</style>
