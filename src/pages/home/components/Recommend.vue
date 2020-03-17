<template>
  <div>
    <div class="recommend-title">
      <img
        class="recommend-title-img"
        src="http://img1.qunarzz.com/piao/fusion/1711/89/ebc329f16c55bb02.png"
      />
      <div class="recommend-title-content">猜你喜欢</div>
    </div>
    <ul>
      <li
        class="item border-bottom"
        v-for="item in recommandList"
        :key="item.id"
      >
        <img class="item-img" :src="item.imgUrl" />
        <div class="item-info">
          <p class="item-title">{{ item.title }}</p>
          <p class="item-desc">{{ item.desc }}</p>
          <button class="item-button">查看详情</button>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "HomeRecommend",
  data() {
    return {
      recommandList: [
        {
          id: "0001",
          imgUrl:
            "http://img1.qunarzz.com/sight/p0/1601/4b/4b29483cbcfd860e90.img.jpg_200x200_a7793b0d.jpg",
          title: "太原龙隐温泉",
          desc: "享受冬日的一抹温暖"
        },
        {
          id: "0002",
          imgUrl:
            "http://img1.qunarzz.com/sight/p0/201312/10/6c72647370cf787d352630f3743e20ac.jpg_200x200_177014a4.jpg",
          title: "太原动物园",
          desc: "好评如潮，小伙伴热推景点"
        },
        {
          id: "0003",
          imgUrl:
            "http://img1.qunarzz.com/sight/p0/1601/7d/7d5ba85cdaeee83a90.img.jpg_200x200_233cac4a.jpg",
          title: "台骀山滑世界",
          desc: "帅的人都去过了，你还等什么"
        },
        {
          id: "0004",
          imgUrl:
            "http://img1.qunarzz.com/sight/p0/1708/5d/5d645fe3cf8df526a3.water.jpg_200x200_c83ec0c5.jpg",
          title: "太原食品街",
          desc: "城市美食聚集地"
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
 background:#eee

 .recommend-title-img
  margin-left: .1rem
  margin-right: .1rem

 .recommend-title-content
  padding-top:.1rem



.item
 overflow: hidden
 display :flex
 padding-top:.4rem
 height: 1.9rem
 .item-img
  width:1.7rem
  height:1.7rem
  padding:.1rem
 .item-info
  flex:1
  padding 0.1rem
  min-width:0
  .item-title
   line-height :.54rem
   font-size: 0.32rem
   ellipsis ()
  .item-desc
   line-height:.4rem
   color:#ccc
   ellipsis ()
  .item-button
   line-height :.30rem
   margin-top :.16rem
   background: #ff9300
   padding: 0.1rem
   border-radius:.1rem
   color :#fff
</style>
