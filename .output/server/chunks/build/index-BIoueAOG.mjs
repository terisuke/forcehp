import { ref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrRenderStyle, ssrRenderClass, ssrInterpolate } from 'vue/server-renderer';
import { _ as _export_sfc } from './server.mjs';
import '../runtime.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'devalue';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import 'swiper';
import 'vue-awesome-swiper';

const _sfc_main = {
  setup() {
    const hero = ref(null);
    const about = ref(null);
    const currentSlide = ref(0);
    const heroImages = ref([]);
    const services = [
      { name: "\u4F01\u696D\u30B3\u30F3\u30B5\u30EB\u30BF\u30F3\u30C8\u696D", icon: "fas fa-briefcase" },
      { name: "\u878D\u8CC7\u8ABF\u67FB\u7D39\u4ECB\u30B3\u30F3\u30B5\u30EB", icon: "fas fa-search-dollar" },
      { name: "\u88DC\u52A9\u91D1\u30FB\u52A9\u6210\u91D1\u30B5\u30DD\u30FC\u30C8\u30B3\u30F3\u30B5\u30EB", icon: "fas fa-hand-holding-usd" },
      { name: "\u5EFA\u8A2D\u696D\u30FB\u30EA\u30D5\u30A9\u30FC\u30E0\u696D", icon: "fas fa-hard-hat" },
      { name: "\u30B5\u9AD8\u4F4F\u30FB\u8001\u4EBA\u30DB\u30FC\u30E0\u8A2D\u5099\u7BA1\u7406\u30FB\u55B6\u7E55\u5DE5\u4E8B\u306E\u7BA1\u7406\u30FB\u904B\u55B6", icon: "fas fa-home" },
      { name: "\u5EFA\u7269\u8A2D\u5099\u7BA1\u7406", icon: "fas fa-building" },
      { name: "LED\u7167\u660E\u30FB\u96FB\u5B50\u5668\u5177\u30FB\u5EFA\u7BC9\u8CC7\u6750\u306E\u5378\u5C0F\u58F2", icon: "fas fa-lightbulb" },
      { name: "\u6D77\u5916\u5546\u54C1\u8F38\u5165\u52A0\u5DE5\u8CA9\u58F2\u53CA\u3073\u56FD\u5185\u88FD\u54C1\u8F38\u51FA\u696D\u4EE3\u7406\u5E97", icon: "fas fa-globe" }
    ];
    const serviceColors = [
      "#FFB3BA",
      "#BAFFC9",
      "#BAE1FF",
      "#FFFFBA",
      "#FFD9BA",
      "#E6BAFF",
      "#BAD3FF",
      "#FFBAF2"
    ];
    return {
      hero,
      about,
      heroImages,
      currentSlide,
      services,
      serviceColors
    };
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)} data-v-19538406><div class="hero" data-v-19538406><div class="hero-slideshow" data-v-19538406><!--[-->`);
  ssrRenderList($setup.heroImages, (image, index2) => {
    _push(`<div class="hero-slide" style="${ssrRenderStyle({ backgroundImage: `url(${image})` })}" data-v-19538406></div>`);
  });
  _push(`<!--]--></div><div class="hero-content" data-v-19538406><h1 data-v-19538406>\u65B0\u305F\u306A\u30B9\u30C6\u30C3\u30D7\u3078\u4F34\u8D70\u3059\u308B</h1><p data-v-19538406>\u682A\u5F0F\u4F1A\u793E\u30D5\u30A9\u30FC\u30B9</p></div></div><div class="content" data-v-19538406><section id="about" class="section" data-v-19538406><div class="container" data-v-19538406><h2 class="section-title" data-v-19538406>\u4F1A\u793E\u7D39\u4ECB</h2><p data-v-19538406>\u682A\u5F0F\u4F1A\u793E\u30D5\u30A9\u30FC\u30B9\u306F\u3001\u65E5\u672C\u306E\u4E2D\u5C0F\u4F01\u696D\u3084\u958B\u696D\u3092\u76EE\u6307\u3057\u3066\u3044\u308B\u4E8B\u696D\u4E3B\u306E\u30B5\u30DD\u30FC\u30C8\u3068\u3001\u9AD8\u9F62\u8005\u30FB\u969C\u788D\u8005\u30FB\u5B50\u80B2\u3066\u652F\u63F4\u30FB\u5916\u56FD\u56FD\u7C4D\u8005\u306A\u3069\u5F31\u8005\u306B\u5BFE\u3059\u308B\u4F4F\u5C45\u305D\u306E\u4ED6\u4F4F\u307E\u3044\u306B\u95A2\u3057\u3066\u306E\u63F4\u52A9\u30FB\u30B5\u30DD\u30FC\u30C8\u652F\u63F4\u3092\u884C\u3046\u4F1A\u793E\u3067\u3059\u3002</p></div></section><section id="services" class="section" data-v-19538406><div class="container" data-v-19538406><h2 class="section-title" data-v-19538406>\u4E8B\u696D\u5185\u5BB9</h2><div class="service-grid" data-v-19538406><!--[-->`);
  ssrRenderList($setup.services, (service, index2) => {
    _push(`<div class="service-item" style="${ssrRenderStyle({ backgroundColor: $setup.serviceColors[index2] })}" data-v-19538406><i class="${ssrRenderClass(service.icon)}" data-v-19538406></i><p data-v-19538406>${ssrInterpolate(service.name)}</p></div>`);
  });
  _push(`<!--]--></div></div></section><section id="access" class="section" data-v-19538406><div class="container" data-v-19538406><h2 class="section-title" data-v-19538406>\u30A2\u30AF\u30BB\u30B9</h2><p data-v-19538406>\u672C\u793E: \u798F\u5CA1\u770C\u798F\u5CA1\u5E02\u4E2D\u592E\u533A\u8D64\u57421-14-22\u30BB\u30F3\u30C1\u30E5\u30EA\u30FC\u8D64\u5742\u9580\u30D3\u30EB8\u968E</p><p data-v-19538406>\u652F\u5E97: \u798F\u5CA1\u770C\u798F\u5CA1\u5E02\u4E2D\u592E\u533A\u6E21\u8FBA\u901A2-1-19\u30B7\u30FC\u30DC\u30FC\u30C8\u6E21\u8FBA\u901A203\u53F7</p><div class="map-wrap" data-v-19538406><div class="map" data-v-19538406><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3323.6029636061335!2d130.3864394763216!3d33.58965654201345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x35419229b417ea63%3A0x34e7fb566bc0273e!2z44CSODEwLTAwNDIg56aP5bKh55yM56aP5bKh5biC5Lit5aSu5Yy66LWk5Z2C77yR5LiB55uu77yR77yU4oiS77yS77ySIOOCu-ODs-ODgeODpeODquODvOi1pOWdgumWgOODk-ODqw!5e0!3m2!1sja!2sjp!4v1719143668249!5m2!1sja!2sjp" width="600" height="450" style="${ssrRenderStyle({ "border": "0" })}" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" data-v-19538406></iframe></div></div></div></section><section id="company" class="section" data-v-19538406><div class="container" data-v-19538406><h2 class="section-title" data-v-19538406>\u4F1A\u793E\u6982\u8981</h2><table data-v-19538406><tr data-v-19538406><th data-v-19538406>\u4F1A\u793E\u540D</th><td data-v-19538406>\u682A\u5F0F\u4F1A\u793E\u30D5\u30A9\u30FC\u30B9</td></tr><tr data-v-19538406><th data-v-19538406>\u8A2D\u7ACB</th><td data-v-19538406>2020\u5E742\u67086\u65E5</td></tr><tr data-v-19538406><th data-v-19538406>\u8CC7\u672C\u91D1</th><td data-v-19538406>500\u4E07\u5186</td></tr><tr data-v-19538406><th data-v-19538406>\u4EE3\u8868\u8005</th><td data-v-19538406>\u4EE3\u8868\u53D6\u7DE0\u5F79 \u5E84\u5C4B \u662D</td></tr><tr data-v-19538406><th data-v-19538406>\u5F93\u696D\u54E1\u6570</th><td data-v-19538406>3\u540D (\u30D1\u30FC\u30C82\u540D\u542B\u3080\u30012023\u5E7411\u670810\u65E5\u73FE\u5728)</td></tr></table></div></section><section id="contact" class="section" data-v-19538406><div class="container" data-v-19538406><h2 class="section-title" data-v-19538406>\u304A\u554F\u3044\u5408\u308F\u305B</h2><form data-v-19538406><div data-v-19538406><label for="name" data-v-19538406>\u304A\u540D\u524D</label><input type="text" id="name" required data-v-19538406></div><div data-v-19538406><label for="email" data-v-19538406>\u30E1\u30FC\u30EB\u30A2\u30C9\u30EC\u30B9</label><input type="email" id="email" required data-v-19538406></div><div data-v-19538406><label for="message" data-v-19538406>\u30E1\u30C3\u30BB\u30FC\u30B8</label><textarea id="message" required data-v-19538406></textarea></div><button type="submit" class="btn" data-v-19538406>\u9001\u4FE1</button></form></div></section></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-19538406"]]);

export { index as default };
//# sourceMappingURL=index-BIoueAOG.mjs.map
