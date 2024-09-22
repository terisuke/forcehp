<template>
  <div>
    <main>
      <section class="hero">
        <div class="hero-background3 service"></div>
        <div class="hero-content">
          <h1>補助金・助成金申請</h1>
          <h1>サポートコンサル</h1>
          <p>事業の成長を資金面からサポートします</p>
        </div>
      </section>

      <section id="service-overview" class="section">
        <div class="container text-center">
          <h2 class="section-title">サービス概要</h2>
          <p>
            中小企業や個人事業主の皆様にとって、事業の発展に向けた補助金や助成金は大きな助けとなります。しかし、申請手続きや要件の理解には専門的な知識が必要で、戸惑う方も多いのではないでしょうか。私たちは、補助金・助成金の申請プロセスを全面的にサポートし、貴社の事業成功を後押しします。
          </p>
        </div>
      </section>

      <section id="features" class="section">
        <div class="container">
          <h2 class="section-title">特徴</h2>
          <div class="feature-grid">
            <div class="feature-item">
              <i class="fas fa-file-alt"></i> 
              <h3>申請書類作成サポート</h3>
              <p>
                補助金や助成金申請に必要な書類の作成を、豊富な経験を持つ専門家がサポートいたします。書類作成から提出まで、スムーズな手続きが行えるように全力で支援します。
              </p>
            </div>
            <div class="feature-item">
              <i class="fas fa-search-dollar"></i>
              <h3>最新の助成金情報提供</h3>
              <p>
                助成金・補助金制度は定期的に更新されます。私たちは、最新の情報を常に収集し、貴社にとって最適なプランを提案いたします。ご自身で調べる手間を省き、最良の選択をお手伝いします。
              </p>
            </div>
            <div class="feature-item">
              <i class="fas fa-check-circle"></i>
              <h3>申請後のフォローアップ</h3>
              <p>
                申請が完了した後も、受給までのフォローアップを行います。申請後の手続きや審査状況に関するご質問にも対応し、スムーズに資金を受け取ることができるようお手伝いいたします。
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="types" class="section">
        <div class="container text-center">
          <h2 class="section-title">補助金・助成金の種類</h2>
          <p>
            私たちは、様々な業種や事業形態に対応した補助金や助成金を提案いたします。例えば、経営革新計画に基づく助成金や、地域産業振興に関する補助金など、貴社に最適な支援制度を見つけ出します。
          </p>
        </div>
      </section>

      <section id="contact" class="section">
        <div class="container text-center">
          <h2 class="section-title">お問い合わせ</h2>
          <p>
            補助金や助成金の申請に関してのご質問や詳細なご相談は、ぜひお問い合わせください。専門スタッフが迅速かつ丁寧に対応いたします。
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
  --primary-color: #BAE1FF;
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
  color: #BAE1FF;
  margin-bottom: 1rem;
}

.btn {
  display: inline-block;
  background-color: #BAE1FF;
  color: white;
  padding: 0.8rem 1.5rem;
  text-decoration: none;
  border-radius: 5px;
  font-weight: bold;
  transition: background-color 0.3s ease;
}

.btn:hover {
  background-color: darken(#BAE1FF, 10%);
}

header {
  background-color: #BAE1FF;
}
footer {
  background-color: #BAE1FF;
}

@media screen and (max-width: 768px) {
  .feature-grid {
    grid-template-columns: 1fr;
  }
}
</style>

