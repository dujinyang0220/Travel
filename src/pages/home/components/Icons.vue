<template>
  <div class="icons">
    <swiper>
      <swiper-slide v-for="(page, index) of pages" :key="index">
        <div v-for="item in page" :key="item.id" class="icon">
          <div class="icon-img">
            <img class="icon-img-content" :src="item.imgUrl" />
          </div>
          <p class="icon-desc">{{ item.desc }}</p>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>
<script>
export default {
  name: "HomeIcons",
  data() {
    return {
      iconList: [
        {
          id: "0001",
          imgUrl:
            "http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png",
          desc: "景点门票"
        },
        {
          id: "0002",
          imgUrl:
            "http://img1.qunarzz.com/piao/fusion/1803/20/831d62d2e1c7be02.png",
          desc: "名胜古迹"
        },
        {
          id: "0003",
          imgUrl:
            "http://img1.qunarzz.com/piao/fusion/1803/50/26ffa31b56646402.png",
          desc: "海洋世界"
        },
        {
          id: "0004",
          imgUrl:
            "http://img1.qunarzz.com/piao/fusion/1803/e3/67df61427c8e1302.png",
          desc: "如梦晋阳"
        },
        {
          id: "0005",
          imgUrl:
            "http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20197/5d502c0984b223bfeed0aac5ecdc7a99.png",
          desc: "太行山"
        },
        {
          id: "0006",
          imgUrl:
            "http://img1.qunarzz.com/piao/fusion/1803/20/831d62d2e1c7be02.png",
          desc: "平遥古城"
        },
        {
          id: "0007",
          imgUrl:
            "http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20194/2edb034b329b324a566414a4679dd87f.png",
          desc: "滑世界"
        },
        {
          id: "0008",
          imgUrl:
            "http://img1.qunarzz.com/piao/fusion/1803/c1/6f15f887179fa002.png",
          desc: "王家大院"
        },
        {
          id: "0009",
          imgUrl:
            "http://img1.qunarzz.com/piao/fusion/1803/95/8246f27355943202.png",
          desc: "大同方特"
        },
        {
          id: "0010",
          imgUrl:
            "http://img1.qunarzz.com/piao/fusion/1803/20/831d62d2e1c7be02.png",
          desc: "雁门关"
        }
        // ,
        // {
        //   id: "0009",
        //   imgUrl:
        //     "http://img1.qunarzz.com/piao/fusion/1803/20/831d62d2e1c7be02.png",
        //   desc: "雁门关"
        // }
      ]
    };
  },
  computed: {
    pages() {
      const pages = [];
      this.iconList.forEach((item, index) => {
        const page = Math.floor(index / 8);
        if (!pages[page]) {
          pages[page] = [];
        }
        pages[page].push(item);
      });
      return pages;
    }
  }
};
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl';
@import '~styles/mixins.styl';

.icons >>>.swiper-container {
  height: 0;
  padding-bottom: 50%;
  margin-top:.2rem
}

.icon {
  position: relative;
  overflow: hidden;
  float: left;
  width: 25%;
  height: 0;
  padding-bottom: 25%;


  .icon-img {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0.44rem;
    box-sizing: border-box;
    padding: 0.1rem;

    .icon-img-content {
      display: block;
      margin: 1 auto;
      height: 100%;
    }
  }

  .icon-desc {
    position: absolute;
    top: 1;
    left: 1;
    bottom: 0;
    height: 0.64rem;
    margin-left: 0.3rem;
    line-height: 0.64rem;
    color: $darkTextColor;
    text-align: center;
    min-width:0
    ellipsis();
  }
}
</style>
