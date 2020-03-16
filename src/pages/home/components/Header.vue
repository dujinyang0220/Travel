<template>
  <div class="header">
    <div class="header-left">
      <span class="iconfont back-icon">&#xe6db;</span>
    </div>
    <div class="header-input">
      <span class="iconfont">&#xe6e1;</span>
      输入城市/景点/游玩项目
    </div>
    <div class="header-right">
      城市<span class="iconfont arrow-icon">&#xe69b;</span>
    </div>
  </div>
</template>
<script>
export default {
  name: "HomeHeader"
};
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl'
.header
   display:flex
   height: .86rem
   line-height :0.86rem
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
    float:right
    text-align :center
    font-size :0.35rem
    .arrow-icon
     font-size :0.4rem
</style>
