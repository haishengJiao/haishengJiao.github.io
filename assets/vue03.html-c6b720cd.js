import{_ as a,M as t,p,q as e,N as o,Q as n,t as c,a1 as i}from"./framework-c053e3d1.js";const l={},u=n("h2",{id:"监听元素尺寸的变化",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#监听元素尺寸的变化","aria-hidden":"true"},"#"),c(" 监听元素尺寸的变化")],-1),k=i(`<h3 id="使用组件" tabindex="-1"><a class="header-anchor" href="#使用组件" aria-hidden="true">#</a> 使用组件</h3><div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>vue03<span class="token punctuation">&quot;</span></span> <span class="token attr-name"><span class="token namespace">v-size-ob:</span>border-box</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>handleSizeChange<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>{{ width }}px<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>{{ height }}px<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>vue03<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span> ref <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>

<span class="token keyword">const</span> width <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> height <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span>

<span class="token keyword">const</span> <span class="token function-variable function">handleSizeChange</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">size</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  width<span class="token punctuation">.</span>value <span class="token operator">=</span> size<span class="token punctuation">.</span>width
  height<span class="token punctuation">.</span>value <span class="token operator">=</span> size<span class="token punctuation">.</span>height
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>scss<span class="token punctuation">&quot;</span></span> <span class="token attr-name">scoped</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">
<span class="token selector">.vue03</span> <span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 500px<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 500px<span class="token punctuation">;</span>
  <span class="token property">overflow</span><span class="token punctuation">:</span> auto<span class="token punctuation">;</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span> #0f2f54<span class="token punctuation">;</span>
  <span class="token property">resize</span><span class="token punctuation">:</span> both<span class="token punctuation">;</span>

  <span class="token selector">&amp; &gt; div</span> <span class="token punctuation">{</span>
    <span class="token property">color</span><span class="token punctuation">:</span> #fff<span class="token punctuation">;</span>
    <span class="token property">font-size</span><span class="token punctuation">:</span> 2rem<span class="token punctuation">;</span>
    <span class="token property">text-align</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="自定义指令-获取当前元素尺寸" tabindex="-1"><a class="header-anchor" href="#自定义指令-获取当前元素尺寸" aria-hidden="true">#</a> 自定义指令（获取当前元素尺寸）</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 映射</span>
<span class="token keyword">const</span> map <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Map</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">let</span> ob <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token comment">// 判断当前环境是有 window</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> window <span class="token operator">!==</span> <span class="token string">&#39;undefined&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 创建观察者</span>
  ob <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ResizeObserver</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">entries</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token comment">// 只要元素发生了变化，都会引发在这个回调函数的执行</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">const</span> entry <span class="token keyword">of</span> entries<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> binding <span class="token operator">=</span> map<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>entry<span class="token punctuation">.</span>target<span class="token punctuation">)</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>binding <span class="token operator">&amp;&amp;</span> binding<span class="token punctuation">.</span>value<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 根据参数决定使用哪种盒模型（默认 border-box）</span>
        <span class="token keyword">const</span> box <span class="token operator">=</span>
          binding<span class="token punctuation">.</span>arg <span class="token operator">!==</span> <span class="token string">&#39;border-box&#39;</span>
            <span class="token operator">?</span> entry<span class="token punctuation">.</span>contentBoxSize<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span>
            <span class="token operator">:</span> entry<span class="token punctuation">.</span>borderBoxSize<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span>
        binding<span class="token punctuation">.</span><span class="token function">value</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
          <span class="token literal-property property">width</span><span class="token operator">:</span> box<span class="token punctuation">.</span>inlineSize<span class="token punctuation">,</span>
          <span class="token literal-property property">height</span><span class="token operator">:</span> box<span class="token punctuation">.</span>blockSize
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token function">mounted</span><span class="token punctuation">(</span><span class="token parameter">el<span class="token punctuation">,</span> binding</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 元素挂载后监听元素尺寸变化</span>
    <span class="token comment">// 观察某些元素</span>
    ob<span class="token punctuation">.</span><span class="token function">observe</span><span class="token punctuation">(</span>el<span class="token punctuation">)</span>
    <span class="token comment">// 外边拿不到数据、设置映射</span>
    map<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>el<span class="token punctuation">,</span> binding<span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">unmounted</span><span class="token punctuation">(</span><span class="token parameter">el</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 元素移除的时候取消监听</span>
    ob<span class="token punctuation">.</span><span class="token function">unobserve</span><span class="token punctuation">(</span>el<span class="token punctuation">)</span>
    <span class="token comment">// 全局map可能造成内存泄漏，在元素移除删除</span>
    map<span class="token punctuation">.</span><span class="token function">delete</span><span class="token punctuation">(</span>el<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="全局挂载自定义指令" tabindex="-1"><a class="header-anchor" href="#全局挂载自定义指令" aria-hidden="true">#</a> 全局挂载自定义指令</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> defineClientConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@vuepress/client&#39;</span>
<span class="token comment">// 自定义指令</span>
<span class="token keyword">import</span> sizeDirect <span class="token keyword">from</span> <span class="token string">&#39;./components/directives/sizeDirect&#39;</span>
<span class="token comment">// 导入组件库</span>
<span class="token keyword">import</span> ElementPlus <span class="token keyword">from</span> <span class="token string">&#39;element-plus&#39;</span>
<span class="token keyword">import</span> <span class="token string">&#39;element-plus/dist/index.css&#39;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineClientConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token function">enhance</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> app <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// app 是由 createApp 创建的 Vue 应用实例</span>
    <span class="token comment">// directive 全局挂载自定义指令</span>
    app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>ElementPlus<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">directive</span><span class="token punctuation">(</span><span class="token string">&#39;size-ob&#39;</span><span class="token punctuation">,</span> sizeDirect<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6);function r(d,v){const s=t("vue03");return p(),e("div",null,[u,o(s),k])}const b=a(l,[["render",r],["__file","vue03.html.vue"]]);export{b as default};
