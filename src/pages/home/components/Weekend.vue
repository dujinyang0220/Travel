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
      <li class="item border-bottom" v-for="item in list" :key="item.id">
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
  props: {
    list: Array
  }
};
</script>

<style lang="stylus" scoped>
@import '~styles/mixins.styl';
@import '~styles/varibles.styl';

.recommend-title {
  margin-top: 0.3rem;
  display: flex;
  font-size: 0.38rem;
  line-height: 0.44rem;
  background: #fff;

  .recommend-title-img {
    margin-left: 0.1rem;
    margin-right: 0.1rem;
  }

  .recommend-title-content {
    padding-top: 0.1rem;
    color: #000000;
  }
}

.item-img-wrapper {
  margin-top: 0.3rem;
  overflow: hidden;
  height: 0;
  padding-bottom: 37.9%;

  .item-img {
    width: 100%;
  }
}

.item-info {
  padding: 0.1rem;

  .item-title {
    line-height: 0.54rem;
    font-size: 0.32rem;
    ellipsis;
  }

  .item-desc {
    line-height: 0.4rem;
    color: #ccc;
    ellipsis;
  }
}
</style>
