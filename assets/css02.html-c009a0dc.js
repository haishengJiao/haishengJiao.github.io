import{_ as a,M as t,p,q as e,N as c,Q as n,t as o,a1 as l}from"./framework-c053e3d1.js";const i={},u=n("h2",{id:"网格布局中的动画",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#网格布局中的动画","aria-hidden":"true"},"#"),o(" 网格布局中的动画")],-1),k=l(`<h3 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h3><div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>content<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>container<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>item<span class="token punctuation">&quot;</span></span> <span class="token attr-name">v-for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>item in 9<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:key</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>item<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>css02<span class="token punctuation">&quot;</span></span> <span class="token attr-name">setup</span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>scss<span class="token punctuation">&quot;</span></span> <span class="token attr-name">scoped</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">
<span class="token selector">.content</span> <span class="token punctuation">{</span>
  <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>
  <span class="token property">align-items</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 600px<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 600px<span class="token punctuation">;</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span> #23262d<span class="token punctuation">;</span>

  <span class="token selector">.container</span> <span class="token punctuation">{</span>
    <span class="token property">--c1</span><span class="token punctuation">:</span> 1fr<span class="token punctuation">;</span>
    <span class="token property">--c2</span><span class="token punctuation">:</span> 1fr<span class="token punctuation">;</span>
    <span class="token property">--c3</span><span class="token punctuation">:</span> 1fr<span class="token punctuation">;</span>
    <span class="token property">--r1</span><span class="token punctuation">:</span> 1fr<span class="token punctuation">;</span>
    <span class="token property">--r2</span><span class="token punctuation">:</span> 1fr<span class="token punctuation">;</span>
    <span class="token property">--r3</span><span class="token punctuation">:</span> 1fr<span class="token punctuation">;</span>

    // 网格布局
    <span class="token property">display</span><span class="token punctuation">:</span> grid<span class="token punctuation">;</span>
    <span class="token property">grid-gap</span><span class="token punctuation">:</span> 10px<span class="token punctuation">;</span>
    <span class="token property">grid-template-rows</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--r1<span class="token punctuation">)</span> <span class="token function">var</span><span class="token punctuation">(</span>--r2<span class="token punctuation">)</span> <span class="token function">var</span><span class="token punctuation">(</span>--r3<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">grid-template-columns</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--c1<span class="token punctuation">)</span> <span class="token function">var</span><span class="token punctuation">(</span>--c2<span class="token punctuation">)</span> <span class="token function">var</span><span class="token punctuation">(</span>--c3<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 400px<span class="token punctuation">;</span>
    <span class="token property">height</span><span class="token punctuation">:</span> 400px<span class="token punctuation">;</span>
    <span class="token property">margin</span><span class="token punctuation">:</span> 0 auto<span class="token punctuation">;</span>
    <span class="token property">transition</span><span class="token punctuation">:</span> 0.5s<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  // scss 循环
  <span class="token atrule"><span class="token rule">@for</span> $i from 0 to 9</span> <span class="token punctuation">{</span>
    <span class="token selector">.item:nth-child(#</span><span class="token punctuation">{</span>$i + 1<span class="token punctuation">}</span><span class="token selector">)</span> <span class="token punctuation">{</span>
      // 360 度平均成9份。一份40度
      <span class="token property">background-color</span><span class="token punctuation">:</span> <span class="token function">hsl</span><span class="token punctuation">(</span>$i * 40<span class="token punctuation">,</span> 100%<span class="token punctuation">,</span> 64%<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token property">cursor</span><span class="token punctuation">:</span> pointer<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token selector">// :has 进行约束（移入子元素改变父元素）
    .container:has(.item:nth-child(#</span><span class="token punctuation">{</span>$i + 1<span class="token punctuation">}</span><span class="token selector">):hover)</span> <span class="token punctuation">{</span>
      // 计算列
      $<span class="token property">c</span><span class="token punctuation">:</span> $i % 3 + 1<span class="token punctuation">;</span>

      // 计算行
      <span class="token comment">/* stylelint-disable-next-line scss/no-global-function-names */</span>
      $<span class="token property">r</span><span class="token punctuation">:</span> <span class="token function">floor</span><span class="token punctuation">(</span>$i / 3<span class="token punctuation">)</span> + 1<span class="token punctuation">;</span>

      <span class="token selector">--c#</span><span class="token punctuation">{</span>$c<span class="token punctuation">}</span><span class="token punctuation">:</span> 2fr<span class="token punctuation">;</span>
      <span class="token selector">--r#</span><span class="token punctuation">{</span>$r<span class="token punctuation">}</span><span class="token punctuation">:</span> 2fr<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2);function r(d,v){const s=t("css02");return p(),e("div",null,[u,c(s),k])}const b=a(i,[["render",r],["__file","css02.html.vue"]]);export{b as default};
