<template>
  <div>
    
    <header class="header">
      <div class="navtext-container">
        <div class="navtext">株式会社フォース</div>
      </div>
      <input type="checkbox" class="menu-btn" id="menu-btn">
      <label for="menu-btn" class="menu-icon"><span class="navicon"></span></label>
      <ul class="menu" :class="{ 'menu-open': isMenuOpen }">
        <li><a href="#about">会社紹介</a></li>
        <li><a href="#services">事業内容</a></li>
        <li><a href="#access">アクセス</a></li>
        <li><a href="#company">会社概要</a></li>
        <li><a href="#contact">お問い合わせ</a></li>
      </ul>
    </header>
    <main>
      <NuxtPage />
    </main>
    <footer>
      <p>&copy; 2024 株式会社フォース. All rights reserved.</p>
    </footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isMenuOpen: false,
      isLoading: true
    }
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen
    },
    endLoader() {
      this.isLoading = false;
    }
  },
  mounted() {
    setTimeout(() => {
      this.endLoader();
    }, 4500); // ロード画面を4.5秒後に非表示にする
  }
}
</script>

<style scoped>

</style>