<template>
  <div>
    <main>
      <section class="hero">
        <div class="hero-background5 service"></div>
        <div class="hero-content">
          <h1>不動産売買及び物件紹介事業</h1>
          <p>理想の物件を迅速にご紹介します</p>
        </div>
      </section>

      <section id="service-overview" class="section">
        <div class="container text-center">
          <h2 class="section-title">サービス概要</h2>
          <p>
            不動産の売買は、個人や企業にとって大きな投資です。適切な物件を選び、スムーズに取引を進めるためには、専門的な知識と経験が必要です。私たちは、不動産売買に関する全ての手続きをサポートし、理想の物件を迅速にご紹介します。
          </p>
        </div>
      </section>

      <section id="features" class="section">
        <div class="container">
          <h2 class="section-title">特徴</h2>
          <div class="feature-grid">
            <div class="feature-item">
              <i class="fas fa-home"></i> 
              <h3>物件紹介のカスタマイズ</h3>
              <p>
                私たちは、お客様のニーズに合わせた物件探しを徹底的にサポートします。住宅、オフィス、店舗など、様々な用途に適した物件を迅速に見つけ、ご提案いたします。
              </p>
            </div>
            <div class="feature-item">
              <i class="fas fa-handshake"></i>
              <h3>不動産売買のサポート</h3>
              <p>
                売買契約の締結、ローン手続き、法的手続きなど、不動産取引に関する全てのプロセスをサポートいたします。複雑な手続きをスムーズに進め、安心して取引ができるよう支援します。
              </p>
            </div>
            <div class="feature-item">
              <i class="fas fa-network-wired"></i>
              <h3>信頼できる不動産ネットワーク</h3>
              <p>
                私たちは、地域に密着した信頼できる不動産業者とのネットワークを活用し、最適な物件をご紹介します。市場の動向に基づいた提案を行い、お客様にとって有利な取引を実現します。
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="process" class="section">
        <div class="container text-center">
          <h2 class="section-title">物件紹介のプロセス</h2>
          <p>
            お客様のご要望を詳細にヒアリングし、条件に合った物件を厳選してご提案します。売買のタイミングや取引の詳細に関しても、的確なアドバイスを提供し、最良の選択ができるようサポートいたします。
          </p>
        </div>
      </section>

      <section id="contact" class="section">
        <div class="container text-center">
          <h2 class="section-title">お問い合わせ</h2>
          <p>
            不動産売買に関するご相談や、物件紹介のご希望がございましたら、ぜひお問い合わせください。私たちが、お客様に最適な物件を見つけ、安心して取引ができるよう全力でサポートいたします。
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
  name: 'RealEstate',
}
</script>

<style scoped>
:root {
  --primary-color: #FFD9BA;
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
  color: #FFD9BA;
  margin-bottom: 1rem;
}

.btn {
  display: inline-block;
  background-color: #FFD9BA;
  color: white;
  padding: 0.8rem 1.5rem;
  text-decoration: none;
  border-radius: 5px;
  font-weight: bold;
  transition: background-color 0.3s ease;
}

.btn:hover {
  background-color: darken(#FFD9BA, 10%);
}

header {
  background-color: #FFD9BA;
}
footer {
  background-color: #FFD9BA;
}

@media screen and (max-width: 768px) {
  .feature-grid {
    grid-template-columns: 1fr;
  }
}
</style>
