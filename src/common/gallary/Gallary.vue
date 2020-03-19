<template>
  <div class="container" @click="handleGallaryClick">
    <div class="wrapper">
      <swiper :options="swiperOptions">
        <swiper-slide v-for="(item,index) in imgs" :key="index">
          <img class="img-gallary" :src="item" />
        </swiper-slide>
        <swiper-slide>
          <img class="img-gallary" :src="item" />
        </swiper-slide>

        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>
  </div>
</template>

<script>
export default {
  name: "CommonGallary",
  props: {
    imgs: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  data() {
    return {
      swiperOptions: {
        pagination: "swiper-pagination",
        paginationType: "fraction",
        //只要监听到我这个元素或者父级元素改变时 自动刷新
        observer: true,
        observeParents: true
      }
    };
  },
  methods: {
    handleGallaryClick() {
      this.$emit("close");
    }
  }
};
</script>
<style lang="stylus" scoped>
.container >>> .swiper-container {
  overflow: hidden;
}

.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  z-index: 99;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background: #000;

  .wrapper {
    width: 100%;
    height: 0;
    padding-bottom: 100%;

    .img-gallary {
      width: 100%;
    }

    .swiper-pagination {
      color: #fff;
      bottom: -1rem;
    }
  }
}
</style>