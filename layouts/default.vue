<template>
  <div>
    <transition name="fade">
      <Loading v-if="isLoading" />
    </transition>
    <div v-show="!isLoading">
      <header :class="{ 'service1-header': $route.name === 'service1', 'service2-header': $route.name === 'service2', 'service3-header': $route.name === 'service3', 'service4-header': $route.name === 'service4', 'service5-header': $route.name === 'service5', 'service6-header': $route.name === 'service6', 'service7-header': $route.name === 'service7', 'service8-header': $route.name === 'service8' }">
        <div class="navtext-container" @click="$router.push('/')" style="cursor: pointer;">
          <div class="navtext">株式会社フォース</div>
        </div>
        <input type="checkbox" class="menu-btn" id="menu-btn" v-model="isMenuOpen">
        <label for="menu-btn" class="menu-icon"><span class="navicon"></span></label>
        <ul class="menu" :class="{ 'menu-open': isMenuOpen }"
          :style="{ backgroundColor: $route.name === 'service1' ? '#FFB3BA' : ($route.name === 'service2' ? '#BAFFC9' : ($route.name === 'service3' ? '#BAE1FF' : ($route.name === 'service4' ? '#FFFFBA' : ($route.name === 'service5' ? '#FFD9BA' : ($route.name === 'service6' ? '#E6BAFF' : ($route.name === 'service7' ? '#BAD3FF' : ($route.name === 'service8' ? '#FFBAF2' : ''))))))) }">
          <li v-if="$route.name === 'index'"><a href="#about" @click="closeMenu">会社紹介</a></li>
          <li v-if="$route.name === 'index'"><a href="#services" @click="closeMenu">事業内容</a></li>
          <li v-if="$route.name === 'index'"><a href="#access" @click="closeMenu">アクセス</a></li>
          <li v-if="$route.name === 'index'"><a href="#company" @click="closeMenu">会社概要</a></li>
          <li v-if="$route.name === 'index'"><a href="#contact" @click="closeMenu">お問い合わせ</a></li>
          <li v-if="$route.name === 'service1'"><a href="#service-overview" @click="closeMenu">サービス概要</a></li>
          <li v-if="$route.name === 'service1'"><a href="#features" @click="closeMenu">特徴</a></li>
          <li v-if="$route.name === 'service1'"><a href="#finance-support" @click="closeMenu">融資サポート</a></li>
          <li v-if="$route.name === 'service1'"><a href="#contact" @click="closeMenu">お問い合わせ</a></li>
          <li v-if="$route.name === 'service2'"><a href="#service-overview" @click="closeMenu">サービス概要</a></li>
          <li v-if="$route.name === 'service2'"><a href="#features" @click="closeMenu">特徴</a></li>
          <li v-if="$route.name === 'service2'"><a href="#process" @click="closeMenu">人材調達のプロセス</a></li>
          <li v-if="$route.name === 'service2'"><a href="#contact" @click="closeMenu">お問い合わせ</a></li>
          <li v-if="$route.name === 'service3'"><a href="#service-overview" @click="closeMenu">サービス概要</a></li>
          <li v-if="$route.name === 'service3'"><a href="#features" @click="closeMenu">特徴</a></li>
          <li v-if="$route.name === 'service3'"><a href="#types" @click="closeMenu">補助金・助成金の種類</a></li>
          <li v-if="$route.name === 'service3'"><a href="#contact" @click="closeMenu">お問い合わせ</a></li>
          <li v-if="$route.name === 'service4'"><a href="#service-overview" @click="closeMenu">サービス概要</a></li>
          <li v-if="$route.name === 'service4'"><a href="#features" @click="closeMenu">特徴</a></li>
          <li v-if="$route.name === 'service4'"><a href="#contact" @click="closeMenu">お問い合わせ</a></li>
          <li v-if="$route.name === 'service5'"><a href="#service-overview" @click="closeMenu">サービス概要</a></li>
          <li v-if="$route.name === 'service5'"><a href="#features" @click="closeMenu">特徴</a></li>
          <li v-if="$route.name === 'service5'"><a href="#process" @click="closeMenu">物件紹介のプロセス</a></li>
          <li v-if="$route.name === 'service5'"><a href="#contact" @click="closeMenu">お問い合わせ</a></li>
          <li v-if="$route.name === 'service6'"><a href="#service-overview" @click="closeMenu">サービス概要</a></li>
          <li v-if="$route.name === 'service6'"><a href="#features" @click="closeMenu">特徴</a></li>
          <li v-if="$route.name === 'service6'"><a href="#contact" @click="closeMenu">お問い合わせ</a></li>
          <li v-if="$route.name === 'service7'"><a href="#service-overview" @click="closeMenu">サービス概要</a></li>
          <li v-if="$route.name === 'service7'"><a href="#features" @click="closeMenu">特徴</a></li>
          <li v-if="$route.name === 'service7'"><a href="#contact" @click="closeMenu">お問い合わせ</a></li>
          <li v-if="$route.name === 'service8'"><a href="#service-overview" @click="closeMenu">サービス概要</a></li>
          <li v-if="$route.name === 'service8'"><a href="#features" @click="closeMenu">特徴</a></li>
          <li v-if="$route.name === 'service8'"><a href="#contact" @click="closeMenu">お問い合わせ</a></li>
        </ul>
      </header>
      <main>
        <NuxtPage />
      </main>
      <footer :class="{ 'service1-footer': $route.name === 'service1', 'service2-footer': $route.name === 'service2', 'service3-footer': $route.name === 'service3', 'service4-footer': $route.name === 'service4', 'service5-footer': $route.name === 'service5', 'service6-footer': $route.name === 'service6', 'service7-footer': $route.name === 'service7', 'service8-footer': $route.name === 'service8' }">
        <p>© 2024 株式会社フォース. All rights reserved.</p>
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
    document.addEventListener('click', this.handleClickOutside);
  },
  beforeDestroy() {
    document.removeEventListener('click', this.handleClickOutside);
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
    closeMenu() {
      this.isMenuOpen = false;
    },
    handleClickOutside(event) {
      const menu = this.$el.querySelector('.menu');
      const menuBtn = this.$el.querySelector('.menu-btn');
      // menuBtnが存在する場合のみ処理を行う
      if (menuBtn) {
        // ハンバーガーメニュー自身をクリックした場合は、メニューを開閉する
        if (menuBtn.contains(event.target)) {
          this.toggleMenu();
        } else if (menu && !menu.contains(event.target)) {
          // ハンバーガーメニュー以外をクリックした場合は、メニューを閉じる
          this.closeMenu();
        }
      }
    },
  }
}
</script>

<style scoped>
/* 以下のスタイルは例です。必要に応じてmain.cssに移動してください。 */
.fade-enter-active,
.fade-leave-active {
  transition: opacity .7s;
}

.fade-enter,
.fade-leave-to /* .fade-leave-active in <2.1.8 */ {
  opacity: 0;
}
.service1-header {
  background-color: #FFB3BA;
}

.service1-footer {
  background-color: #FFB3BA;
}

.service2-header {
  background-color: #BAFFC9;
}

.service2-footer {
  background-color: #BAFFC9;
}

.service3-header {
  background-color: #BAE1FF;
}

.service3-footer {
  background-color: #BAE1FF;
}
.service4-header {
  background-color: #FFFFBA;
}

.service4-footer {
  background-color: #FFFFBA;
}
.service5-header {
  background-color: #FFD9BA;
}

.service5-footer {
  background-color: #FFD9BA;
}
.service6-header {
  background-color: #E6BAFF;
}

.service6-footer {
  background-color: #E6BAFF;
}
.service7-header {
  background-color: #BAD3FF;
}

.service7-footer {
  background-color: #BAD3FF;
}
.service8-header {
  background-color: #FFBAF2;
}

.service8-footer {
  background-color: #FFBAF2;
}
</style>
