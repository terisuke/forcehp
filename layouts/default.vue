<template>
  <div>
    <transition name="fade">
      <Loading v-if="isLoading" />
    </transition>
    <div v-show="!isLoading">
      <header class="header">
        <div class="navtext-container">
          <div class="navtext">株式会社フォース</div>
        </div>
        <input type="checkbox" class="menu-btn" id="menu-btn" v-model="isMenuOpen">
        <label for="menu-btn" class="menu-icon"><span class="navicon"></span></label>
        <ul class="menu" :class="{ 'menu-open': isMenuOpen }">
          <li><a href="#about" @click="closeMenu">会社紹介</a></li>
          <li><a href="#services" @click="closeMenu">事業内容</a></li>
          <li><a href="#access" @click="closeMenu">アクセス</a></li>
          <li><a href="#company" @click="closeMenu">会社概要</a></li>
          <li><a href="#contact" @click="closeMenu">お問い合わせ</a></li>
        </ul>
      </header>
      <main>
        <NuxtPage />
      </main>
      <footer>
        <p>&copy; 2024 株式会社フォース. All rights reserved.</p>
      </footer>
    </div>
  </div>
</template>

<script>
import Loading from '~/components/ui/Loading.vue'

export default {
  components: {
    Loading
  },
  data() {
    return {
      isMenuOpen: false,
      isLoading: true
    }
  },
  mounted() {
    this.$nextTick(() => {
      setTimeout(() => {
        this.isLoading = false
      }, 1650)
    })
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen
    },
    closeMenu() {
      this.isMenuOpen = false
    },
    handleClickOutside(event) {
      const menu = this.$el.querySelector('.menu');
      const menuBtn = this.$el.querySelector('.menu-btn');
      if (!menu.contains(event.target) && !menuBtn.contains(event.target)) {
        this.closeMenu();
      }
    },
  }
}
</script>

<style scoped>
/* 以下のスタイルは例です。必要に応じてmain.cssに移動してください。 */
.fade-enter-active, .fade-leave-active {
  transition: opacity .7s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */ {
  opacity: 0;
}
</style>
