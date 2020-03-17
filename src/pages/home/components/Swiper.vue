<template>
  <div class="wrapper">
    <swiper :options="swiperOption">
      <swiper-slide :key="item.id" v-for="item of swiperList">
        <img class="swiper-img" :src="item.imgUrl" />
      </swiper-slide>

      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: "HomeSwiper",
  data() {
    return {
      swiperOption: {
        pagination: ".swiper-pagination",
        loop: true
      },
      swiperList: [
        {
          id: "0001",
          imgUrl:
            "http://img1.qunarzz.com/sight/p0/1905/f7/f7a4042302185dd0a3.img.jpg_350x240_bf499050.jpg"
        },
        {
          id: "0002",
          imgUrl:
            "https://imgs.qunarzz.com/p/tts2/1908/50/1cc19b84e8af8602.jpg_750x440_b200afa0.jpg"
        }
      ]
    };
  }
};
</script>
<style lang="stylus" scoped>
.wrapper>>>.swiper-pagination-bullet-active {
  background: #fff;
}

.wrapper {
  overflow: hidden;
  width: 100%;
  height: 0;
  padding-bottom: 35.25%;
  background: #eee;

  .swiper-img {
    width: 100%;
  }
}
</style>
