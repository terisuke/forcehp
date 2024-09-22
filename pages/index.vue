<template>
  <div>
    <div class="hero" ref="hero">
      <div class="hero-slideshow">
        <div class="hero-slide" v-for="(image, index) in heroImages" :key="index" :style="{ backgroundImage: `url(${image})` }"></div>
      </div>
      <div class="hero-content">
        <h1>新たなステップへ伴走する</h1>
        <p>株式会社フォース</p>
      </div>
    </div>

    <div class="content" ref="content">
      <section id="about" class="section" ref="about">
        <div class="container">
          <h2 class="section-title">会社紹介</h2>
          <p>株式会社フォースは、日本の中小企業や開業を目指している事業主のサポートと、高齢者・障碍者・子育て支援・外国国籍者など弱者に対する住居その他住まいに関しての援助・サポート支援を行う会社です。</p>
        </div>
      </section>

      <section id="services" class="section">
        <div class="container">
          <h2 class="section-title">事業内容</h2>
          <div class="service-grid">
            <div class="service-item" v-for="(service, index) in services" :key="index" :style="{ backgroundColor: serviceColors[index] }">
              <NuxtLink v-if="index === 0" to="/service1" class="service-link">
                <i :class="service.icon"></i>
                <p>{{ service.name }}</p>
              </NuxtLink>
              <NuxtLink v-else-if="index === 1" to="/service2" class="service-link">
                <i :class="service.icon"></i>
                <p>{{ service.name }}</p>
              </NuxtLink>
              <NuxtLink v-else-if="index === 2" to="/service3" class="service-link">
                <i :class="service.icon"></i>
                <p>{{ service.name }}</p>
              </NuxtLink>
              <NuxtLink v-else-if="index === 3" to="/service4" class="service-link">
                <i :class="service.icon"></i>
                <p>{{ service.name }}</p>
              </NuxtLink>
              <NuxtLink v-else-if="index === 4" to="/service5" class="service-link">
                <i :class="service.icon"></i>
                <p>{{ service.name }}</p>
              </NuxtLink>
              <NuxtLink v-else-if="index === 5" to="/service6" class="service-link">
                <i :class="service.icon"></i>
                <p>{{ service.name }}</p>
              </NuxtLink>
              <NuxtLink v-else-if="index === 6" to="/service7" class="service-link">
                <i :class="service.icon"></i>
                <p>{{ service.name }}</p>
              </NuxtLink>
              <NuxtLink v-else-if="index === 7" to="/service8" class="service-link">
                <i :class="service.icon"></i>
                <p>{{ service.name }}</p>
              </NuxtLink>
              <template v-else>
                <i :class="service.icon"></i>
                <p>{{ service.name }}</p>
              </template>
            </div>
          </div>
        </div>
      </section>

      <section id="access" class="section">
        <div class="container">
          <h2 class="section-title">アクセス</h2>
          <p class="access">本社: 福岡県福岡市中央区赤坂1-14-22</p>
          <p class="access">支店: 福岡県福岡市中央区港2-1-19</p>
          <div class="map-wrap">
            <div class="map">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3323.6029636061335!2d130.3864394763216!3d33.58965654201345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x35419229b417ea63%3A0x34e7fb566bc0273e!2z44CSODEwLTAwNDIg56aP5bKh55yM56aP5bKh5biC5Lit5aSu5Yy66LWk5Z2C77yR5LiB55uu77yR77yU4oiS77yS77ySIOOCu-ODs-ODgeODpeODquODvOi1pOWdgumWgOODk-ODqw!5e0!3m2!1sja!2sjp!4v1719143668249!5m2!1sja!2sjp" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
          </div>
        </div>
      </section>

      <section id="company" class="section">
        <div class="container">
          <h2 class="section-title">会社概要</h2>
          <table>
            <tbody>
              <tr>
                <th>会社名</th>
                <td>株式会社フォース</td>
              </tr>
              <tr>
                <th>設立</th>
                <td>2020年2月6日</td>
              </tr>
              <tr>
                <th>資本金</th>
                <td>500万円</td>
              </tr>
              <tr>
                <th>代表者</th>
                <td>代表取締役 香川 昭</td>
              </tr>
              <tr>
                <th>従業員数</th>
                <td>15名 (パート2名含む、2024年9月17日現在)</td>
              </tr>
              <tr>
                <th>電話番号</th>
                <td><a href="tel:092-600-6023">092-600-6023</a></td>
              </tr>
              <tr>
                <th>FAX番号</th>
                <td>050-3730-1032</td>
              </tr>
              <tr>
                <th>メール</th>
                <td><a href="mailto:force.kk0808@gmail.com">force.kk0808@gmail.com</a></td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section id="contact" class="section">
        <div class="container">
          <h2 class="section-title">お問い合わせ</h2>
          <form action="https://ssgform.com/s/HXoGA4ws23Ea" method="post">
            <div class="Form">
              <!-- Honeypotフィールド -->
              <div style="display:none;">
                <input type="text" name="honeypot" ref="honeypot" tabindex="-1" autocomplete="off">
              </div>
              <div class="Form-Item">
                <p class="Form-Item-Label">
                会社名
                </p>
                <input type="text" class="Form-Item-Input"  placeholder="例）株式会社令和">
              </div>
              <div class="Form-Item">
                <p class="Form-Item-Label"><span class="Form-Item-Label-Required">必須</span>氏名</p>
                <input type="text" class="Form-Item-Input" required="required"  placeholder="例）山田太郎">
              </div>
              <div class="Form-Item">
                <p class="Form-Item-Label">電話番号</p>
                <input type="text" class="Form-Item-Input" placeholder="例）000-0000-0000">
              </div>
              <div class="Form-Item">
                <p class="Form-Item-Label"><span class="Form-Item-Label-Required">必須</span>メールアドレス</p>
                <input type="email" class="Form-Item-Input" required="required"  placeholder="例）example@gmail.com">
              </div>
              <div class="Form-Item">
                <p class="Form-Item-Label isMsg"><span class="Form-Item-Label-Required">必須</span>お問い合わせ内容</p>
                <textarea class="Form-Item-Textarea" required="required" ></textarea>
              </div>
              <input type="submit" class="Form-Btn" value="送信する">
            </div>
          </form>
        </div>
      </section>
      <a class="back" href="#"></a>
    </div>
  </div>
</template>

<script>
import { onMounted, ref, nextTick } from 'vue'

export default {
  setup() {
    const hero = ref(null)
    const about = ref(null)
    const currentSlide = ref(0)
    const heroImages = ref([])
    const isMenuOpen = ref(false)
    const isLoading = ref(true)
    const honeypot = ref(null)

    const services = [
      { name: '事業資金融資コンサル・開業コンサル', icon: 'fas fa-home' },
      { name: '有料職業紹介事業・人材調達コンサル', icon: 'fas fa-hand-holding-usd' },
      { name: '補助金・助成金申請サポートコンサル', icon: 'fas fa-briefcase' },
      { name: 'M&A紹介及び代行事業', icon: 'fas fa-search-dollar' },
      { name: '不動産売買及び物件紹介事業', icon: 'fas fa-building' },
      { name: '福祉・医療関係コンサル', icon: 'fas fa-hospital' },
      { name: '卸・小売り・輸出輸入物販売', icon: 'fas fa-globe' },
      { name: 'リフォーム事業・物件管理業', icon: 'fas fa-hard-hat' },
    ]

    const serviceColors = [
      '#FFB3BA', '#BAFFC9', '#BAE1FF', '#FFFFBA',
      '#FFD9BA', '#E6BAFF', '#BAD3FF', '#FFBAF2'
    ]

    const preloadImages = async (images) => {
      const promises = images.map((src) => {
        return new Promise((resolve) => {
          const img = new Image()
          img.src = src
          img.onload = resolve
        })
      })
      return Promise.all(promises)
    }

    onMounted(async () => {
      heroImages.value = [
        (await import('~/assets/img/hero.png')).default,
        (await import('~/assets/img/hero2.png')).default,
        (await import('~/assets/img/hero3.png')).default
      ]

      await preloadImages(heroImages.value)

      // hero 要素がマウントされた後にスライドショーを開始
      nextTick(() => {
        const startSlideshow = () => {
          setInterval(() => {
            currentSlide.value = (currentSlide.value + 1) % heroImages.value.length
            const slides = hero.value.querySelectorAll('.hero-slide')
            slides.forEach((slide, index) => {
              slide.style.opacity = index === currentSlide.value ? 1 : 0
            })
          }, 3000)
        }

        startSlideshow()
      })

      // Honeypotフィールドのチェックロジックを追加
      const form = document.querySelector('form')
      form.addEventListener('submit', (event) => {
        if (honeypot.value !== '') {
          // スパムの可能性がある場合、フォームを送信しない
          event.preventDefault()
        }
      })
      
      // ローディング画面の非表示
      setTimeout(() => {
        isLoading.value = false
      }, 700)
    })

    const closeMenu = () => {
      isMenuOpen.value = false
    }

    return {
      hero,
      about,
      heroImages,
      currentSlide,
      services,
      serviceColors,
      isMenuOpen,
      isLoading,
      honeypot,
      closeMenu
    }
  }
}
</script>

<style scoped>
.service-link {
  display: block;
  text-decoration: none;
  color: inherit;
}
</style>