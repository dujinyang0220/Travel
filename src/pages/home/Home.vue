<template>
  <div>
    <HomeHeader></HomeHeader>
    <HomeSwiper></HomeSwiper>
  </div>
</template>
<script>
import HomeHeader from "./components/Header";
import HomeSwiper from "./components/Swiper";
export default {
  name: "Home",
  //注册子组件到Home上
  components: {
    HomeHeader,
    HomeSwiper
  }
};
</script>

<style></style>
