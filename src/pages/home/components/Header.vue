<template>
  <div class="header">
    <div class="header-left">
      <span class="iconfont back-icon">&#xe6db;</span>
    </div>
    <div class="header-input">
      <span class="iconfont">&#xe6e1;</span>
      输入城市/景点/游玩项目
    </div>
    <router-link to="/city">
      <div class="header-right">
        {{ this.city }}
        <span class="iconfont arrow-icon">&#xe69b;</span>
      </div>
    </router-link>
  </div>
</template>
<script>
export default {
  name: "HomeHeader",
  props: {
    city: String
  }
};
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl'
.header
   display:flex
   height:$headerHight
   line-height :$headerHight
   color:#fff
   background:$bgColor
   .header-left
    width :.64rem
    float:left
    .back-icon
      text-align :right
      font-size :0.7rem
   .header-input
    flex:1
    height :.64rem
    line-height :.64rem
    margin-top:.12rem
    margin-left :.2rem
    background: #fff
    border-radius:.1rem
    color: #ccc
    padding-left :0.2rem
   .header-right
    width: 1.24rem
    color:#fff
    float:right
    text-align :center
    font-size :0.35rem
    .arrow-icon
     font-size :0.4rem
</style>
