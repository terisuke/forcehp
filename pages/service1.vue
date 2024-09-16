承知しました。ご指定の修正を反映いたします。テキストとボタンを中央寄せにし、メインカラーを`#FFB3BA`に変更します。以下が修正後のコードです：

<template>
  <div>
    <header>
      <nav>
        <ul>
          <li><NuxtLink to="/">ホーム</NuxtLink></li>
          <li><a href="#service-overview">サービス概要</a></li>
          <li><a href="#features">特徴</a></li>
          <li><a href="#finance-support">融資サポート</a></li>
          <li><a href="#contact">お問い合わせ</a></li>
        </ul>
      </nav>
    </header>

    <main>
      <section class="hero">
        <div class="hero-background service"></div>
        <div class="hero-content">
          <h1>事業資金融資コンサル</h1>
          <h1>開業コンサル</h1>
          <p>あなたの事業の成功をサポートします</p>
        </div>
      </section>

      <section id="service-overview" class="section">
        <div class="container text-center">
          <h2 class="section-title">サービス概要</h2>
          <p>起業を目指す皆様にとって、資金調達や開業の一歩を踏み出すのは大きな決断です。</p>
          <p>しかし、具体的に何をすべきか迷われることも多いでしょう。</p>
          <p>私たちは、事業資金融資に関する相談から、開業に必要な手続きまで包括的なサポートを提供します。</p>
        </div>
      </section>

      <section id="features" class="section">
        <div class="container">
          <h2 class="section-title">特徴</h2>
          <div class="feature-grid">
            <div class="feature-item">
              <i class="fas fa-file-alt"></i>
              <h3>登記書類作成サポート</h3>
              <p>登記に必要な書類の作成を、簡単なヒアリングシートをもとにサポートします。</p>
              <p>定款認証や登記申請は、提携している専門士業が対応しますので安心です。</p>
            </div>
            <div class="feature-item">
              <i class="fas fa-video"></i>
              <h3>オンライン相談対応</h3>
              <p>対面での相談が難しい場合、WEB面談で無料相談を実施しています。</p>
              <p>時間や場所に制限されず、いつでもお気軽にご相談いただけます。</p>
            </div>
            <div class="feature-item">
              <i class="fas fa-handshake"></i>
              <h3>会社設立後も安心のサポート</h3>
              <p>設立後も、決算サポートや融資に関する計画書作成、面談サポートまで、幅広い支援を提供します。</p>
              <p>新規顧客契約をいただいた場合、決算サポート料金を無料でご提供いたします。</p>
            </div>
          </div>
        </div>
      </section>

      <section id="finance-support" class="section">
        <div class="container text-center">
          <h2 class="section-title">融資サポートについて</h2>
          <p>私たちは、日本政策金融公庫との強力な連携により、創業融資に必要な計画書作成から面談までしっかりサポートいたします。</p>
          <p>資金調達の難しさや不安を解消し、スムーズな事業スタートをお手伝いいたします。</p>
        </div>
      </section>

      <section id="contact" class="section">
        <div class="container text-center">
          <h2 class="section-title">お問い合わせ</h2>
          <p>本サービスに関する詳細やご相談は、いつでもお問い合わせください。</p>
          <p>私たちの専門チームが、丁寧に対応いたします。</p>
          <NuxtLink to="/#contact" class="btn">お問い合わせフォームへ</NuxtLink>
        </div>
      </section>
    </main>
  </div>
</template>

<script>
export default {
  name: 'BusinessFinanceConsulting',
}
</script>

<style scoped>
:root {
  --primary-color: #FFB3BA;
}

.text-center {
  text-align: center;
}

.feature-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
}

.feature-item {
  text-align: center;
  padding: 1rem;
  background-color: #f8f8f8;
  border-radius: 8px;
  transition: transform 0.3s ease;
}

.feature-item:hover {
  transform: translateY(-5px);
}

.feature-item i {
  font-size: 2.5rem;
  color: #FFB3BA;
  margin-bottom: 1rem;
}

.btn {
  display: inline-block;
  background-color: #FFB3BA;
  color: white;
  padding: 0.8rem 1.5rem;
  text-decoration: none;
  border-radius: 5px;
  font-weight: bold;
  transition: background-color 0.3s ease;
}

.btn:hover {
  background-color: darken(#FFB3BA, 10%);
}

header {
  background-color: #FFB3BA;
}
footer {
  background-color: #FFB3BA;
}

@media screen and (max-width: 768px) {
  .feature-grid {
    grid-template-columns: 1fr;
  }
}
</style>