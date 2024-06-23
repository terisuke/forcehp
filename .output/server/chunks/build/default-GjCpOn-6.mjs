import { _ as _export_sfc, c as __nuxt_component_0 } from './server.mjs';
import { useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderClass, ssrRenderComponent } from 'vue/server-renderer';
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
  data() {
    return {
      isMenuOpen: false
    };
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_NuxtPage = __nuxt_component_0;
  _push(`<div${ssrRenderAttrs(_attrs)} data-v-8ba7909e><header data-v-8ba7909e><nav data-v-8ba7909e><div class="menu-toggle" data-v-8ba7909e><div class="hamburger" data-v-8ba7909e></div></div><ul class="${ssrRenderClass({ "menu-open": $data.isMenuOpen })}" data-v-8ba7909e><li data-v-8ba7909e><a href="#about" data-v-8ba7909e>\u4F1A\u793E\u7D39\u4ECB</a></li><li data-v-8ba7909e><a href="#services" data-v-8ba7909e>\u4E8B\u696D\u5185\u5BB9</a></li><li data-v-8ba7909e><a href="#access" data-v-8ba7909e>\u30A2\u30AF\u30BB\u30B9</a></li><li data-v-8ba7909e><a href="#company" data-v-8ba7909e>\u4F1A\u793E\u6982\u8981</a></li><li data-v-8ba7909e><a href="#contact" data-v-8ba7909e>\u304A\u554F\u3044\u5408\u308F\u305B</a></li></ul></nav></header><main data-v-8ba7909e>`);
  _push(ssrRenderComponent(_component_NuxtPage, null, null, _parent));
  _push(`</main><footer data-v-8ba7909e><p data-v-8ba7909e>\xA9 2024 \u682A\u5F0F\u4F1A\u793E\u30D5\u30A9\u30FC\u30B9. All rights reserved.</p></footer></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _default = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-8ba7909e"]]);

export { _default as default };
//# sourceMappingURL=default-GjCpOn-6.mjs.map
