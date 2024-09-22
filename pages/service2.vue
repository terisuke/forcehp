<template>
  <div>
    <main>
      <section class="hero">
        <div class="hero-background2 service"></div>
        <div class="hero-content">
          <h1>有料職業紹介事業</h1>
          <h1>人材調達コンサル</h1>
          <p>企業の成長を人材面からサポートします</p>
        </div>
      </section>

      <section id="service-overview" class="section">
        <div class="container text-center">
          <h2 class="section-title">サービス概要</h2>
          <p>
            企業の成長には、優秀な人材の確保が欠かせません。しかし、適切な人材を見つけ出すことや、採用に関わる手続きは非常に手間がかかることがあります。
          </p>
          <p>
            私たちは、有料職業紹介事業の一環として、貴社に最適な人材を迅速かつ効率的に調達するサポートを行います。
          </p>
        </div>
      </section>

      <section id="features" class="section">
        <div class="container">
          <h2 class="section-title">特徴</h2>
          <div class="feature-grid">
            <div class="feature-item">
              <i class="fas fa-user-plus"></i>
              <h3>優秀な人材の紹介</h3>
              <p>
                私たちは、豊富な人材データベースを活用し、貴社のニーズに合った優秀な人材を紹介いたします。必要なスキルや経験を持つ人材をピンポイントで探し出し、迅速にご提案します。
              </p>
            </div>
            <div class="feature-item">
              <i class="fas fa-tasks"></i>
              <h3>採用プロセスのサポート</h3>
              <p>
                人材の紹介だけでなく、採用プロセス全体のサポートを行います。面接の設定や選考のアドバイス、契約書の作成など、採用に関するあらゆる業務をトータルでサポートいたします。
              </p>
            </div>
            <div class="feature-item">
              <i class="fas fa-people-carry"></i>
              <h3>長期的な人材サポート</h3>
              <p>
                単なる紹介にとどまらず、入社後のフォローアップや定着支援も行います。人材が貴社に長期的に貢献できるよう、継続的なサポートを提供します。
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="process" class="section">
        <div class="container text-center">
          <h2 class="section-title">人材調達のプロセス</h2>
          <p>
            私たちは、貴社の業務内容やニーズを詳細にヒアリングし、最適な人材を選定いたします。採用活動のコストや時間を削減し、必要な時に必要な人材を確保するための最善の方法を提案いたします。
          </p>
        </div>
      </section>

      <section id="contact" class="section">
        <div class="container text-center">
          <h2 class="section-title">お問い合わせ</h2>
          <p>
            人材調達に関するご相談や、具体的な求人ニーズがある場合は、ぜひお問い合わせください。私たちが、貴社の採用活動を成功に導きます。
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
  name: 'HumanResourcesConsulting',
}
</script>

<style scoped>
:root {
  --primary-color: #BAFFC9;
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
  color: #BAFFC9;
  margin-bottom: 1rem;
}

.btn {
  display: inline-block;
  background-color: #BAFFC9;
  color: white;
  padding: 0.8rem 1.5rem;
  text-decoration: none;
  border-radius: 5px;
  font-weight: bold;
  transition: background-color 0.3s ease;
}

.btn:hover {
  background-color: darken(#BAFFC9, 10%);
}

header {
  background-color: #BAFFC9;
}
footer {
  background-color: #BAFFC9;
}

@media screen and (max-width: 768px) {
  .feature-grid {
    grid-template-columns: 1fr;
  }
}
</style>
