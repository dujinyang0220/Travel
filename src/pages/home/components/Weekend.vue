<template>
  <div>
    <div class="recommend-title">
      <img
        class="recommend-title-img"
        src="http://img1.qunarzz.com/piao/fusion/1711/89/ebc329f16c55bb02.png"
      />
      <div class="recommend-title-content">周末去哪儿</div>
    </div>
    <ul>
      <li
        class="item border-bottom"
        v-for="item in recommandList"
        :key="item.id"
      >
        <div class="item-img-wrapper">
          <img class="item-img" :src="item.imgUrl" />
        </div>
        <div class="item-info">
          <p class="item-title">{{ item.title }}</p>
          <p class="item-desc">{{ item.desc }}</p>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "HomeWeekend",
  data() {
    return {
      recommandList: [
        {
          id: "0001",
          imgUrl:
            "http://img1.qunarzz.com/sight/source/1509/82/5ef380ec1fcbf0.jpg_r_640x214_aee99250.jpg",
          title: "晋中打卡",
          desc: "文化底蕴深厚，古老而活跃"
        },
        {
          id: "0002",
          imgUrl:
            "http://img1.qunarzz.com/sight/source/1505/3b/286d0e8a9e73c5.jpg_r_640x214_142234cd.jpg",
          title: "太原必游TOP5",
          desc: "入晋的第一堂课"
        },
        {
          id: "0003",
          imgUrl:
            "http://img1.qunarzz.com/sight/source/1703/7a/522d4649f67319.jpg_r_640x214_2cdafd57.jpg",
          title: "趣游太原展馆",
          desc:
            "生命的美丽在于幻觉，这里的各种展馆实现了艺术与科技完美结合，身临其境去感受，趣味无穷么"
        }
      ]
    };
  }
};
</script>

<style lang="stylus" scoped>
@import '~styles/mixins.styl';
.recommend-title
 display:flex
 margin-top: .8rem
 font-size: .38rem
 line-height :.44rem
 background:#ccc

 .recommend-title-img
  margin-left: .1rem
  margin-right: .1rem

 .recommend-title-content
  padding-top:.1rem




.item-img-wrapper
  overflow: hidden
  height:0
  padding-bottom:33.9%
  .item-img
   width:100%
.item-info
 padding:.1rem
 .item-title
   line-height :.54rem
   font-size: 0.32rem
   ellipsis ()
 .item-desc
   line-height:.4rem
   color:#ccc
   ellipsis ()
</style>
