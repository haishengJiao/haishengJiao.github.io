import{_ as a,M as t,p,q as e,N as c,Q as n,t as o,a1 as l}from"./framework-c053e3d1.js";const u={},i=n("h2",{id:"文字的交融效果",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#文字的交融效果","aria-hidden":"true"},"#"),o(" 文字的交融效果")],-1),k=l(`<div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>container<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>text<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>君子泰然自若 不会骄傲<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>css01<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>scss<span class="token punctuation">&quot;</span></span> <span class="token attr-name">scoped</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">
<span class="token selector">.container</span> <span class="token punctuation">{</span>
  <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>
  <span class="token property">align-items</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
  <span class="token property">justify-content</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 500px<span class="token punctuation">;</span>
  <span class="token property">text-align</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span> #000<span class="token punctuation">;</span>
  <span class="token property">filter</span><span class="token punctuation">:</span> <span class="token function">contrast</span><span class="token punctuation">(</span>30<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token selector">.text</span> <span class="token punctuation">{</span>
    <span class="token property">color</span><span class="token punctuation">:</span> #fff<span class="token punctuation">;</span>
    <span class="token property">font-size</span><span class="token punctuation">:</span> 2.6rem<span class="token punctuation">;</span>
    <span class="token property">animation</span><span class="token punctuation">:</span> show-up 3s forwards<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token atrule"><span class="token rule">@keyframes</span> show-up</span> <span class="token punctuation">{</span>
  <span class="token selector">from</span> <span class="token punctuation">{</span>
    <span class="token property">letter-spacing</span><span class="token punctuation">:</span> -40px<span class="token punctuation">;</span>
    <span class="token property">filter</span><span class="token punctuation">:</span> <span class="token function">blur</span><span class="token punctuation">(</span>10px<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token selector">to</span> <span class="token punctuation">{</span>
    <span class="token property">letter-spacing</span><span class="token punctuation">:</span> 10px<span class="token punctuation">;</span>
    <span class="token property">filter</span><span class="token punctuation">:</span> <span class="token function">blur</span><span class="token punctuation">(</span>2px<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1);function r(d,v){const s=t("css01");return p(),e("div",null,[i,c(s),k])}const b=a(u,[["render",r],["__file","css01.html.vue"]]);export{b as default};
