<template>
  <div>
    <DetailBanner :sightName="sightName" :bannerImg="bannerImg" :bannerImgs="bannerImgs"></DetailBanner>
    <DetailHeader></DetailHeader>

    <div class="content">
      <DetailList :list="list"></DetailList>
    </div>
  </div>
</template>

<script>
import DetailBanner from "./components/Banner.vue";
import DetailHeader from "./components/Header.vue";
import DetailList from "./components/List.vue";
import axios from "axios";
export default {
  name: "Detail",
  components: {
    DetailBanner,
    DetailHeader,
    DetailList
  },
  data() {
    return {
      sightName: "",
      bannerImg: "",
      bannerImgs: "",
      list: []
    };
  },
  methods: {
    getDetailInfo() {
      axios
        .get("/static/mock/detail.json", {
          params: {
            id: this.$route.params.id
          }
        })
        .then(this.handleGetDataSucc);
    },
    handleGetDataSucc(res) {
      res = res.data;
      if (res.ret && res.data) {
        const data = res.data;
        console.log(data);
        this.sightName = data.sightName;
        this.bannerImg = data.bannerImg;
        this.bannerImgs = data.gallaryImgs;
        this.list = data.categoryList;
      }
    }
  },
  mounted() {
    this.getDetailInfo();
  }
};
</script>

<style lang="stylus" scoped>
.content {
  height: 50rem;
}
</style>
