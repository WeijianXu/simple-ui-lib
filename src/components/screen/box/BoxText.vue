<template>
  <div class="box-text" :class="type" :style="bgImg">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'box-text',
  props: {
    bgType: String,
    bgUrl: String,
    bgFormat: {
      type: String,
      default: '.png',
    },
    type: {
      validator(value) {
        // 或是不传，用默认值
        if (!value) {
          return true;
        }
        // 这个值匹配下列字符串中的一个
        return (
          ['default', 'primary', 'secend', 'infoTitle', 'warn'].indexOf(
            value,
          ) !== -1
        );
      },
    },
  },
  computed: {
    bgImg() {
      let bgUrl;
      if (this.bgUrl) {
        // eslint-disable-next-line prefer-destructuring
        bgUrl = this.bgUrl;
      }
      if (this.bgType) {
        bgUrl = `/static/screen/case/${this.bgType}${this.bgFormat}`;
      }
      if (bgUrl) {
        return { backgroundImage: `url(${bgUrl})` };
      }
      return {};
    },
  },
};
</script>

<style lang="scss">
@import "../base";

.box-text {
  color: $color-default;
  font-family: "MF-ShuJian-Regular";
  text-align: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  &.primary {
    color: $color-primairy;
  }
  &.secend {
    color: $color-secend;
  }
  &.infoTitle {
    color: $info-title-color;
  }
  &.warn {
    color: $color-warn;
  }
}
</style>
