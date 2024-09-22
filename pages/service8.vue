<template>
  <div>
    <main>
      <section class="hero">
        <div class="hero-background8 service"></div>
        <div class="hero-content">
          <h1>リフォーム事業・物件管理業</h1>
          <p>快適な住環境の維持と資産価値の向上をサポートします</p>
        </div>
      </section>

      <section id="service-overview" class="section">
        <div class="container text-center">
          <h2 class="section-title">サービス概要</h2 >
          <p>
            建物の老朽化や住環境の変化に伴い、リフォームや物件管理のニーズは年々高まっています。私たちは、リフォームや物件管理に関する包括的なサービスを提供し、快適な住環境の維持と資産価値の向上をサポートします。
          </p>
        </div>
      </section>

      <section id="features" class="section">
        <div class="container">
          <h2 class="section-title">特徴</h2 >
          <div class="feature-grid">
            <div class="feature-item">
              <i class="fas fa-hammer"></i>
              <h3>リフォームの提案と施工管理</h3>
              <p>
                お客様のご要望に合わせて、最適なリフォームプランを提案いたします。住居の改修やリノベーション、商業施設の内装工事など、幅広いリフォームに対応しています。施工管理も当社が一貫して行い、スムーズな工事進行をサポートします。
              </p>
            </div>
            <div class="feature-item">
              <i class="fas fa-home"></i>
              <h3>物件の定期点検・管理サポート</h3>
              <p>
                物件の価値を維持するためには、定期的な点検と管理が不可欠です。私たちは、物件の定期点検や修繕、維持管理をサポートし、長期的な資産価値の保全をお手伝いいたします。
              </p>
            </div>
            <div class="feature-item">
              <i class="fas fa-handshake"></i>
              <h3>アフターフォロー体制の充実</h3>
              <p>
                リフォーム工事後や物件管理の途中でも、常にお客様のご要望に応じたサポートを提供いたします。工事後のメンテナンスや追加のリフォーム依頼にも迅速に対応し、長期的な信頼関係を築いていきます。
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="process" class="section">
        <div class="container text-center">
          <h2 class="section-title">リフォームのプロセス</h2 >
          <p>
            お客様の要望やライフスタイルに基づいて、最適なリフォームプランを提案いたします。予算に応じたプランニングから工事の完了まで、すべてのプロセスを当社が責任を持って管理します。
          </p>
        </div>
      </section>

      <section id="contact" class="section">
        <div class="container text-center">
          <h2 class="section-title">お問い合わせ</h2 >
          <p>
            リフォームや物件管理に関するご相談は、ぜひ当社にお任せください。豊富な実績を持つ私たちが、貴社のニーズに合わせた最適なソリューションを提供いたします。
          </p>
          <NuxtLink to="/#contact" class="btn">お問い合わせフォームへ</NuxtLink >
        </div>
      </section>
      <a class="back" href="#"></a>
    </main>
  </div>
</template>

<script>
export default {
  name: 'ReformManagement',
}
</script>

<style scoped>
:root {
  --primary-color: #FFBAF2;
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
  color: #FFBAF2;
  margin-bottom: 1rem;
}

.btn {
  display: inline-block;
  background-color: #FFBAF2;
  color: white;
  padding: 0.8rem 1.5rem;
  text-decoration: none;
  border-radius: 5px;
  font-weight: bold;
  transition: background-color 0.3s ease;
}

.btn:hover {
  background-color: darken(#FFBAF2, 10%);
}

header {
  background-color: #FFBAF2;
}
footer {
  background-color: #FFBAF2;
}

@media screen and (max-width: 768px) {
  .feature-grid {
    grid-template-columns: 1fr;
  }
}
</style >
