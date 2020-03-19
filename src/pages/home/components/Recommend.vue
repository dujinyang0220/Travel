<template>
  <div>
    <div class="block"></div>
    <div class="recommend-title">
      <img
        class="recommend-title-img"
        src="http://img1.qunarzz.com/piao/fusion/1711/89/ebc329f16c55bb02.png"
      />
      <div class="recommend-title-content">猜你喜欢</div>
    </div>
    <ul>
      <router-link
        tag="li"
        class="item border-bottom"
        v-for="item of list"
        :key="item.id"
        :to="'/detail/' + item.id"
      >
        <img class="item-img" :src="item.imgUrl" />
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
          <button class="item-button">查看详情</button>
        </div>
      </router-link>
    </ul>
  </div>
</template>
<script>
export default {
  name: "HomeRecommend",
  props: {
    list: Array
  }
};
</script>

<style lang="stylus" scoped>
@import '~styles/mixins.styl';
@import '~styles/varibles.styl';

.block {
  margin-top: 1rem;
  line-height: 1rem;
  background: #eee;
}

.recommend-title {
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

.item {
  overflow: hidden;
  display: flex;
  padding-top: 0.4rem;
  height: 1.9rem;

  .item-img {
    width: 1.7rem;
    height: 1.7rem;
    padding: 0.1rem;
  }

  .item-info {
    flex: 1;
    padding: 0.1rem;
    min-width: 0;

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

    .item-button {
      line-height: 0.3rem;
      margin-top: 0.16rem;
      background: #ff9300;
      padding: 0.1rem;
      border-radius: 0.1rem;
      color: #fff;
    }
  }
}
</style>
