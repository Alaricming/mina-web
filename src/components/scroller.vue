<template>
  <div class="scroller" ref="scroller">
    <slot></slot>
  </div>
</template>
<script>
import BScroll from 'better-scroll'

export default {
  props: {
    probeType: {
      type: Number,
      default: 3
    },
    click: {
      type: Boolean,
      default: true
    },
    direction: {
      type: String,
      default: 'vertical'
    },
    listenScroll: {
      type: Boolean,
      default: false
    },
    /**
       * 列表的数据
       */
    data: {
      type: Array,
      default: null
    },
    /**
       * 是否派发滚动到底部的事件，用于上拉加载
       */
    pullup: {
      type: Boolean,
      default: false
    },
    /**
       * 是否派发顶部下拉的事件，用于下拉刷新
       */
    pulldown: {
      type: Boolean,
      default: false
    },
    /**
       * 是否派发列表滚动开始的事件
       */
    beforeScroll: {
      type: Boolean,
      default: false
    },
    /**
       * 当数据更新后，刷新scroll的延时。
       */
    refreshDelay: {
      type: Number,
      default: 200
    }
  },
  data() {
    return {}
  },
  created() {},
  mounted() {
    setTimeout(() => {
      this._initScroll()
    }, 2000)
  },
  methods: {
    _initScroll() {
      if (!this.$refs.scroller) {
        console.log('no scroll')
        return
      }
      let options = {
        probeType: this.probeType,
        click: this.click,
        scrollY: this.freeScroll || this.direction === 'vertical',
        scrollX: this.freeScroll || this.direction === 'horizontal',
        scrollbar: this.scrollbar,
        pullDownRefresh: this.pullDownRefresh,
        pullUpLoad: this.pullUpLoad,
        startY: this.startY,
        freeScroll: this.freeScroll
      }
      this.scroll = new BScroll(this.$refs.scroller, options)
      console.log(this.scroll)
      if (this.listenScroll) {
        this.scroll.on('scroll', pos => {
          this.$emit('scroll', pos)
        })
      }
      // 是否派发滚动到底部事件，用于上拉加载
      if (this.pullup) {
        this.scroll.on('scrollEnd', () => {
          // 滚动到底部
          if (this.scroll.y <= this.scroll.maxScrollY + 50) {
            this.$emit('scrollToEnd')
          }
        })
      }

      // 是否派发顶部下拉事件，用于下拉刷新
      if (this.pulldown) {
        this.scroll.on('touchend', pos => {
          // 下拉动作
          if (pos.y > 50) {
            this.$emit('pulldown')
          }
        })
      }
      // 是否派发列表滚动开始的事件
      if (this.beforeScroll) {
        this.scroll.on('beforeScrollStart', () => {
          this.$emit('beforeScroll')
        })
      }
    },
    disable() {
      // 代理better-scroll的disable方法
      this.scroll && this.scroll.disable()
    },
    enable() {
      // 代理better-scroll的enable方法
      this.scroll && this.scroll.enable()
    },
    refresh() {
      // 代理better-scroll的refresh方法
      this.scroll && this.scroll.refresh()
    },
    scrollTo() {
      // 代理better-scroll的scrollTo方法
      this.scroll && this.scroll.scrollTo.apply(this.scroll, arguments)
    },
    scrollToElement() {
      // 代理better-scroll的scrollToElement方法
      this.scroll && this.scroll.scrollToElement.apply(this.scroll, arguments)
    }
  },
  watch: {
    data() {
      setTimeout(() => {
        this.refresh()
      }, this.refreshDelay)
    }
  }
}
</script>
<style lang="scss" scoped>
.scroller {
  height: 100%;
  overflow: hidden;
}
</style>
