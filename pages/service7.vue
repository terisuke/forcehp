<template>
  <div>
    <main>
      <section class="hero">
        <div class="hero-background7 service"></div>
        <div class="hero-content">
          <h1>卸・小売り・輸出輸入物販売</h1>
          <p>グローバルなビジネス環境の中で、事業拡大を支援します</p>
        </div>
      </section>

      <section id="service-overview" class="section">
        <div class="container text-center">
          <h2 class="section-title">サービス概要</h2>
          <p>
            グローバルなビジネス環境の中で、卸売、小売、輸出入に関わるビジネスチャンスは広がり続けています。私たちは、国内外における卸売、小売、輸出入の取引をサポートし、事業拡大に向けた包括的なサービスを提供します。
          </p>
        </div>
      </section>

      <section id="features" class="section">
        <div class="container">
          <h2 class="section-title">特徴</h2>
          <div class="feature-grid">
            <div class="feature-item">
              <i class="fas fa-globe-asia"></i>
              <h3>国内外の市場調査サポート</h3>
              <p>
                新規市場の開拓や、既存市場でのビジネス拡大を目指す企業に対して、国内外の市場調査を実施し、最適な戦略を提案します。市場動向や競合分析をもとに、ビジネスチャンスを最大限に活用できるよう支援します。
              </p>
            </div>
            <div class="feature-item">
              <i class="fas fa-file-import"></i>
              <h3>輸出入に関する手続きの代行</h3>
              <p>
                輸出入には様々な法規制や手続きが伴いますが、私たちは煩雑な手続きを代行し、スムーズな取引を実現します。輸出入に必要な書類作成や、税関手続きのサポートも提供しています。
              </p>
            </div>
            <div class="feature-item">
              <i class="fas fa-truck"></i>
              <h3>物流・在庫管理のサポート</h3>
              <p>
                商品がスムーズに流通し、顧客に届くためには、効率的な物流管理と在庫管理が欠かせません。私たちは、物流や在庫管理の最適化を支援し、ビジネスの効率性を向上させるサポートを行います。
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="international-business" class="section">
        <div class="container text-center">
          <h2 class="section-title">国際ビジネスの支援</h2>
          <p>
            私たちは、国内外に広がるパートナーネットワークを活用し、貴社のビジネス拡大を支援します。輸出入に関するリスク管理やコスト削減のアドバイスも行い、競争力のあるビジネス展開を実現します。
          </p>
        </div>
      </section>

      <section id="contact" class="section">
        <div class="container text-center">
          <h2 class="section-title">お問い合わせ</h2>
          <p>
            卸売、小売、輸出入に関するご相談や、具体的なビジネスサポートが必要な場合は、ぜひお問い合わせください。私たちが、グローバルビジネスの成功をサポートいたします。
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
  name: 'WholesaleRetailImportExport',
}
</script>

<style scoped>
:root {
  --primary-color: #BAD3FF;
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
  color: #BAD3FF;
  margin-bottom: 1rem;
}

.btn {
  display: inline-block;
  background-color: #BAD3FF;
  color: white;
  padding: 0.8rem 1.5rem;
  text-decoration: none;
  border-radius: 5px;
  font-weight: bold;
  transition: background-color 0.3s ease;
}

.btn:hover {
  background-color: darken(#BAD3FF, 10%);
}

header {
  background-color: #BAD3FF;
}
footer {
  background-color: #BAD3FF;
}

@media screen and (max-width: 768px) {
  .feature-grid {
    grid-template-columns: 1fr;
  }
}
</style>
