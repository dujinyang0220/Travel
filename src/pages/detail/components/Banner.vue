<template>
  <div>
    <div class="banner" @click="handleBannerClick">
      <img class="bannerimg" :src="bannerImg" />
      <div class="bannerinfo">
        <div class="banner-tittle">{{this.sightName}}</div>
        <div class="banner-number">
          <span class="iconfont">&#xe674;</span>
          {{this.bannerImgs.length}}
        </div>
      </div>
    </div>
    <CommonGallary :imgs="bannerImgs" v-show="showGallary" @close="handleGallaryClose"></CommonGallary>
  </div>
</template>

<script>
import CommonGallary from "common/gallary/Gallary";
export default {
  name: "DetailBanner",
  props: {
    sightName: String,
    bannerImg: String,
    bannerImgs: String
  },
  data() {
    return {
      showGallary: false
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
