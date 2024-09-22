<template>
  <div>
    <main>
      <section class="hero">
        <div class="hero-background4 service"></div>
        <div class="hero-content">
          <h1>M&A紹介及び代行事業</h1>
          <p>企業の成長戦略をM&Aで支援します</p>
        </div>
      </section>

      <section id="service-overview" class="section">
        <div class="container text-center">
          <h2 class="section-title">サービス概要</h2>
          <p>
            M&Aは、企業の成長戦略において非常に有効な手段です。しかし、手続きが複雑で専門的な知識が必要となるため、多くの企業が躊躇してしまうのも事実です。私たちは、M&Aに関するあらゆるプロセスをサポートし、企業の成長と発展に貢献します。
          </p>
        </div>
      </section>

      <section id="features" class="section">
        <div class="container">
          <h2 class="section-title">特徴</h2>
          <div class="feature-grid">
            <div class="feature-item">
              <i class="fas fa-search"></i>
              <h3>最適なパートナー探索</h3>
              <p>
                お客様のニーズや条件に最適なM&Aパートナーを、国内外のネットワークを活用して探索いたします。
              </p>
            </div>
            <div class="feature-item">
              <i class="fas fa-handshake"></i>
              <h3>交渉・契約のサポート</h3>
              <p>
                M&Aのプロセスにおいて重要な交渉や契約締結を、専門家チームがサポートいたします。
              </p>
            </div>
            <div class="feature-item">
              <i class="fas fa-chart-line"></i>
              <h3>PMI（統合支援）</h3>
              <p>
                M&A後のスムーズな統合を支援し、シナジー効果の最大化を目指します。
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" class="section">
        <div class="container text-center">
          <h2 class="section-title">お問い合わせ</h2>
          <p>
            M&Aに関するご相談やご質問は、お気軽にお問い合わせください。専門スタッフが丁寧に対応いたします。
          </p>
          <NuxtLink to="/#contact" class="btn">お問い合わせフォームへ</NuxtLink>
        </div>
      </section>
      <a class="back" href="#"></a>
    </main>
  </div>
</template>

<script>
export default {
  name: 'M&AConsulting',
}
</script>

<style scoped>
:root {
  --primary-color: #FFFFBA;
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
  color: #FFFFBA;
  margin-bottom: 1rem;
}

.btn {
  display: inline-block;
  background-color: #FFFFBA;
  color: white;
  padding: 0.8rem 1.5rem;
  text-decoration: none;
  border-radius: 5px;
  font-weight: bold;
  transition: background-color 0.3s ease;
}

.btn:hover {
  background-color: darken(#FFFFBA, 10%);
}

header {
  background-color: #FFFFBA;
}
footer {
  background-color: #FFFFBA;
}

@media screen and (max-width: 768px) {
  .feature-grid {
    grid-template-columns: 1fr;
  }
}
</style>

