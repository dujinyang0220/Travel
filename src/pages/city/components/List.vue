<template>
  <div class="list" ref="wrapper">
    <div class="area">
      <div class="title border-topbotton">当前城市</div>
      <div class="button-list">
        <div class="button-wrapper">
          <div class="button">北京</div>
        </div>
      </div>
    </div>
    <div class="area">
      <div class="title border-topbotton">热门城市</div>
      <div class="button-list">
        <div class="button-wrapper" v-for="item of hot" :key="item.id">
          <div class="button">{{ item.name }}</div>
        </div>
      </div>
    </div>
    <div class="area" v-for="(item, key) of cities" :key="key">
      <div class="title border-topbotton">{{ key }}</div>
      <div class="item-list">
        <div
          class="item border-bottom"
          v-for="inneritem of item"
          :key="inneritem.id"
        >
          {{ inneritem.name }}
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Bscroll from "better-scroll";
export default {
  name: "CityList",
  props: {
    hot: Array,
    cities: Object
  },
  mounted() {
    this.scroll = new Bscroll(this.$refs.wrapper);
  }
};
</script>
<style lang="stylus" scoped>
@import '~styles/varibles.styl';
.list
 overflow: hidden
 position: relative
 top:0rem
 left:0
 right:0
 bottom:0
.border-topbotton
 &:before
  border-color: #cccccc
 &:after
  border-color: #cccccc
.border-.border-bottom
 &:before
  border-color: #cccccc
.title
 line-height: .54rem
 background:#eee
 padding-left :.2rem
 color: #666
 font-size:.26rem
.button-list
 overflow: hidden
 padding: .1rem .6rem .1rem .1rem
 .button-wrapper
  float: left
  width: 33.33%
  .button
   margin: .1rem
   height: .50rem
   padding-top: .2rem
   text-align:center
   border: .02rem solid #ccc
   border-radius: .06rem
.item-list
 .item
  line-height:.76rem
  color:#666
  padding-left 0.2rem
</style>
