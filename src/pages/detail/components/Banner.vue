<template>
  <div>
    <div class="banner" @click="handleBannerClick">
      <img
        class="bannerimg"
        src="//img1.qunarzz.com/sight/p0/201404/23/04b92c99462687fa1ba45c1b5ba4ad77.jpg_600x330_bf9c4904.jpg"
      />
      <div class="bannerinfo">
        <div class="banner-tittle">大连圣亚海洋世界(AAAA级景区)</div>
        <div class="banner-number">
          <span class="iconfont">&#xe674;</span> 39
        </div>
      </div>
    </div>
    <CommonGallary :imgs="imgs" v-show="showGallary" @close="handleGallaryClose"></CommonGallary>
  </div>
</template>

<script>
import CommonGallary from "common/gallary/Gallary";
export default {
  name: "DetailBanner",
  data() {
    return {
      showGallary: false,
      imgs: [
        "http://img1.qunarzz.com/sight/p0/1709/76/7691528bc7d7ad3ca3.img.png_350x240_8d02892d.png",
        "http://img1.qunarzz.com/sight/p0/1709/42/426917ba25e5da3ca3.img.png_350x240_2d9a040f.png"
      ]
    };
  },
  methods: {
    handleBannerClick() {
      this.showGallary = true;
    },
    handleGallaryClose() {
      this.showGallary = false;
    }
  },
  components: {
    CommonGallary
  }
};
</script>

<style lang="stylus" scoped>
.banner {
  position: relative;
  overflow: hidden;
  height: 0;
  padding-bottom: 55%;

  .bannerimg {
    width: 100%;
  }

  .bannerinfo {
    display: flex;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    line-height: 1.2rem;
    height: 1.2rem;
    color: #fff;
    background-image: linear-gradient(top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 8));

    .banner-tittle {
      flex: 1;
      color: #eee;
      font-size: 0.35rem;
      padding: 0.25rem;
    }

    .banner-number {
      padding: 0.2rem;
      line-height: 0.12rem;
      height: 0.12rem;
      border-radius: 0.2rem;
      background: rgb(0, 0, 0, 8);
      font-size: 0.295rem;
    }
  }
}
</style>
