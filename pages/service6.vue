<template>
  <div>
    <main>
      <section class="hero">
        <div class="hero-background6 service"></div>
        <div class="hero-content">
          <h1>福祉・医療関係コンサル</h1>
          <p>福祉・医療機関の経営を支援します</p>
        </div>
      </section>

      <section id="service-overview" class="section">
        <div class="container text-center">
          <h2 class="section-title">サービス概要</h2>
          <p>
            高齢化社会や医療ニーズの高まりに伴い、福祉・医療分野における経営や運営の課題はますます重要になっています。私たちは、福祉施設や医療機関に特化したコンサルティングサービスを提供し、経営の効率化やサービスの向上を支援します。
          </p>
        </div>
      </section>

      <section id="features" class="section">
        <div class="container">
          <h2 class="section-title">特徴</h2>
          <div class="feature-grid">
            <div class="feature-item">
              <i class="fas fa-chart-line"></i>
              <h3>経営改善サポート</h3>
              <p>
                福祉施設や医療機関の経営課題に対して、具体的な改善策を提案いたします。収益の最大化やコストの削減、業務効率化のためのアドバイスを行い、長期的な経営安定をサポートします。
              </p>
            </div>
            <div class="feature-item">
              <i class="fas fa-users"></i>
              <h3>人材育成・採用支援</h3>
              <p>
                福祉・医療業界では、優秀な人材の確保が事業の成長に直結します。私たちは、業界に特化した人材育成プログラムの提供や、採用活動の支援を通じて、現場のニーズに応えます。
              </p>
            </div>
            <div class="feature-item">
              <i class="fas fa-hand-holding-usd"></i>
              <h3>補助金・助成金申請サポート</h3>
              <p>
                福祉・医療施設向けの補助金や助成金制度を活用し、施設運営に必要な資金を確保するためのサポートを行います。申請手続きの代行や、最適な補助金の提案を通じて、経営負担を軽減します。
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="problem-solving" class="section">
        <div class="container text-center">
          <h2 class="section-title">福祉・医療関係の課題解決</h2>
          <p>
            私たちは、福祉や医療に関わる法規制や制度に精通しており、業界特有の課題に対応するための専門的なコンサルティングを提供します。地域のニーズに応じた施設運営や、新しいサービスの導入に向けた戦略的なサポートを行います。
          </p>
        </div>
      </section>

      <section id="contact" class="section">
        <div class="container text-center">
          <h2 class="section-title">お問い合わせ</h2>
          <p>
            福祉・医療関係の経営に関するご相談や、具体的なサポートをご希望の場合は、ぜひお問い合わせください。私たちが、貴社の事業を成功に導くためのサポートをいたします。
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
  name: 'WelfareAndMedicalConsulting',
}
</script>

<style scoped>
:root {
  --primary-color: #E6BAFF;
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
  color: #E6BAFF;
  margin-bottom: 1rem;
}

.btn {
  display: inline-block;
  background-color: #E6BAFF;
  color: white;
  padding: 0.8rem 1.5rem;
  text-decoration: none;
  border-radius: 5px;
  font-weight: bold;
  transition: background-color 0.3s ease;
}

.btn:hover {
  background-color: darken(#E6BAFF, 10%);
}

header {
  background-color: #E6BAFF;
}
footer {
  background-color: #E6BAFF;
}

@media screen and (max-width: 768px) {
  .feature-grid {
    grid-template-columns: 1fr;
  }
}
</style>
