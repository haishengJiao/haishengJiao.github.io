import{_ as a,M as t,p,q as e,N as o,Q as n,t as c,a1 as l}from"./framework-c053e3d1.js";const i={},u=n("h2",{id:"右键菜单组件",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#右键菜单组件","aria-hidden":"true"},"#"),c(" 右键菜单组件")],-1),k=l(`<h3 id="使用封装的组件" tabindex="-1"><a class="header-anchor" href="#使用封装的组件" aria-hidden="true">#</a> 使用封装的组件</h3><div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>vue-container<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ContentMenu</span>
      <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>block-one<span class="token punctuation">&quot;</span></span>
      <span class="token attr-name">:menu</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>menuOne<span class="token punctuation">&quot;</span></span>
      <span class="token attr-name">@select</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>choose1 = $event.label<span class="token punctuation">&quot;</span></span>
    <span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>{{ choose1 }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ContentMenu</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ContentMenu</span>
      <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>block-two<span class="token punctuation">&quot;</span></span>
      <span class="token attr-name">:menu</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>menuTwo<span class="token punctuation">&quot;</span></span>
      <span class="token attr-name">@select</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>choose2 = $event.label<span class="token punctuation">&quot;</span></span>
    <span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>{{ choose2 }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ContentMenu</span>
        <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>block-three<span class="token punctuation">&quot;</span></span>
        <span class="token attr-name">:menu</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>menuThree<span class="token punctuation">&quot;</span></span>
        <span class="token attr-name">@select</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>choose3 = $event.label<span class="token punctuation">&quot;</span></span>
      <span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>{{ choose3 }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ContentMenu</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ContentMenu</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>vue02<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span> reactive<span class="token punctuation">,</span> ref <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>
<span class="token keyword">import</span> ContentMenu <span class="token keyword">from</span> <span class="token string">&#39;./vue/ContentMenu.vue&#39;</span>

<span class="token keyword">const</span> menuOne <span class="token operator">=</span> <span class="token function">reactive</span><span class="token punctuation">(</span><span class="token punctuation">[</span>
  <span class="token punctuation">{</span> <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">&#39;添加&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span> <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">&#39;编辑&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span> <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">&#39;删除&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span> <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">&#39;查看&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span> <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">&#39;复制&#39;</span> <span class="token punctuation">}</span>
<span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> choose1 <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token string">&#39;&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> menuTwo <span class="token operator">=</span> <span class="token function">reactive</span><span class="token punctuation">(</span><span class="token punctuation">[</span>
  <span class="token punctuation">{</span> <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">&#39;员工&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span> <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">&#39;部门&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span> <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">&#39;角色&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span> <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">&#39;权限&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span> <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">&#39;菜单&#39;</span> <span class="token punctuation">}</span>
<span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> choose2 <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token string">&#39;&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> menuThree <span class="token operator">=</span> <span class="token function">reactive</span><span class="token punctuation">(</span><span class="token punctuation">[</span>
  <span class="token punctuation">{</span> <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">&#39;嵌套菜单1&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span> <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">&#39;嵌套菜单2&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span> <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">&#39;嵌套菜单3&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span> <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">&#39;嵌套菜单4&#39;</span> <span class="token punctuation">}</span>
<span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> choose3 <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token string">&#39;&#39;</span><span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>scss<span class="token punctuation">&quot;</span></span> <span class="token attr-name">scoped</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">
<span class="token selector">.vue-container</span> <span class="token punctuation">{</span>
  <span class="token selector">.block-one,
  .block-two</span> <span class="token punctuation">{</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 500px<span class="token punctuation">;</span>
    <span class="token property">height</span><span class="token punctuation">:</span> 500px<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token selector">.block-one,
  .block-two,
  .block-three</span> <span class="token punctuation">{</span>
    <span class="token selector">&amp; &gt; div</span> <span class="token punctuation">{</span>
      <span class="token property">color</span><span class="token punctuation">:</span> #fff<span class="token punctuation">;</span>
      <span class="token property">font-size</span><span class="token punctuation">:</span> 2rem<span class="token punctuation">;</span>
      <span class="token property">text-align</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token selector">.block-one</span> <span class="token punctuation">{</span>
    <span class="token property">background-color</span><span class="token punctuation">:</span> #e65e52<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token selector">.block-two</span> <span class="token punctuation">{</span>
    <span class="token property">position</span><span class="token punctuation">:</span> relative<span class="token punctuation">;</span>
    <span class="token property">margin-top</span><span class="token punctuation">:</span> 20px<span class="token punctuation">;</span>
    <span class="token property">background-color</span><span class="token punctuation">:</span> #f1b445<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token selector">.block-three</span> <span class="token punctuation">{</span>
    <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>
    <span class="token property">bottom</span><span class="token punctuation">:</span> 50px<span class="token punctuation">;</span>
    <span class="token property">left</span><span class="token punctuation">:</span> 50%<span class="token punctuation">;</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 400px<span class="token punctuation">;</span>
    <span class="token property">height</span><span class="token punctuation">:</span> 250px<span class="token punctuation">;</span>
    <span class="token property">background-color</span><span class="token punctuation">:</span> #55bd48<span class="token punctuation">;</span>
    <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translate</span><span class="token punctuation">(</span>-50%<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="封装组件" tabindex="-1"><a class="header-anchor" href="#封装组件" aria-hidden="true">#</a> 封装组件</h3><div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">ref</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ContentMenuRef<span class="token punctuation">&quot;</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>1<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>slot</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>slot</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Teleport</span> <span class="token attr-name">to</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>body<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Transition</span>
        <span class="token attr-name">@beforeEnter</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>handleBeforeEnter<span class="token punctuation">&quot;</span></span>
        <span class="token attr-name">@enter</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>handleEnter<span class="token punctuation">&quot;</span></span>
        <span class="token attr-name">@afterEnter</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>handleAfterEnter<span class="token punctuation">&quot;</span></span>
      <span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span>
          <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>content-menu<span class="token punctuation">&quot;</span></span>
          <span class="token attr-name">v-if</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>showMenu<span class="token punctuation">&quot;</span></span>
          <span class="token attr-name">:style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{
            left: position.posX + &#39;px&#39;,
            top: position.posY + &#39;px&#39;
          }<span class="token punctuation">&quot;</span></span>
        <span class="token punctuation">&gt;</span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">v-size-ob</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>handleSizeChange<span class="token punctuation">&quot;</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>menu-list<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span>
              <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>menu-item<span class="token punctuation">&quot;</span></span>
              <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>handleClick(item)<span class="token punctuation">&quot;</span></span>
              <span class="token attr-name">v-for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>item in menu<span class="token punctuation">&quot;</span></span>
              <span class="token attr-name">:key</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>item.label<span class="token punctuation">&quot;</span></span>
            <span class="token punctuation">&gt;</span></span>
              {{ item.label }}
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Transition</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Teleport</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ContentMenu<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span> computed<span class="token punctuation">,</span> ref <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>
<span class="token keyword">import</span> useContentMenu <span class="token keyword">from</span> <span class="token string">&#39;../hooks/useContentMenu.js&#39;</span>
<span class="token keyword">import</span> useViewport <span class="token keyword">from</span> <span class="token string">&#39;../hooks/useViewport.js&#39;</span>
<span class="token keyword">const</span> props <span class="token operator">=</span> <span class="token function">defineProps</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">menu</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">type</span><span class="token operator">:</span> Array<span class="token punctuation">,</span>
    <span class="token function-variable function">default</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span>
<span class="token keyword">const</span> emit <span class="token operator">=</span> <span class="token function">defineEmits</span><span class="token punctuation">(</span><span class="token string">&#39;select&#39;</span><span class="token punctuation">)</span>

<span class="token keyword">const</span> ContentMenuRef <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> <span class="token punctuation">{</span> x<span class="token punctuation">,</span> y<span class="token punctuation">,</span> showMenu <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">useContentMenu</span><span class="token punctuation">(</span>ContentMenuRef<span class="token punctuation">)</span>
<span class="token keyword">const</span> w <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span> <span class="token comment">// 菜单宽度</span>
<span class="token keyword">const</span> h <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span> <span class="token comment">// 菜单高度</span>
<span class="token keyword">const</span> <span class="token punctuation">{</span> vw<span class="token punctuation">,</span> vh <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">useViewport</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// 视口宽高</span>

<span class="token keyword">const</span> position <span class="token operator">=</span> <span class="token function">computed</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> posX <span class="token operator">=</span> x<span class="token punctuation">.</span>value
  <span class="token keyword">let</span> posY <span class="token operator">=</span> y<span class="token punctuation">.</span>value
  <span class="token comment">// x 坐标</span>
  <span class="token comment">// x 坐标大于了视口宽度减去菜单的宽度表示右边放不下</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>x<span class="token punctuation">.</span>value <span class="token operator">&gt;</span> vw<span class="token punctuation">.</span>value <span class="token operator">-</span> w<span class="token punctuation">.</span>value<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 右边空间不足 鼠标点击的坐标减去弹窗的宽度</span>
    posX <span class="token operator">-=</span> w<span class="token punctuation">.</span>value
  <span class="token punctuation">}</span>
  <span class="token comment">// y 坐标</span>
  <span class="token comment">// y 坐标大于了视口的高度减去弹窗的高度表示是下边放不下</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>y<span class="token punctuation">.</span>value <span class="token operator">&gt;</span> vh<span class="token punctuation">.</span>value <span class="token operator">-</span> h<span class="token punctuation">.</span>value<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 下边空间不足往上移 y 坐标减去视口高度加上弹窗高度</span>
    posY <span class="token operator">-=</span> y<span class="token punctuation">.</span>value <span class="token operator">-</span> vh<span class="token punctuation">.</span>value <span class="token operator">+</span> h<span class="token punctuation">.</span>value
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> <span class="token punctuation">{</span> posX<span class="token punctuation">,</span> posY <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">// 获取菜单快高</span>
<span class="token keyword">const</span> <span class="token function-variable function">handleSizeChange</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> width<span class="token punctuation">,</span> height <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  w<span class="token punctuation">.</span>value <span class="token operator">=</span> width
  h<span class="token punctuation">.</span>value <span class="token operator">=</span> height
<span class="token punctuation">}</span>

<span class="token keyword">const</span> <span class="token function-variable function">handleClick</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">item</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  showMenu<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token boolean">false</span>
  <span class="token function">emit</span><span class="token punctuation">(</span><span class="token string">&#39;select&#39;</span><span class="token punctuation">,</span> item<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">// 元素加入到页面中之前触发</span>
<span class="token keyword">const</span> <span class="token function-variable function">handleBeforeEnter</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">el</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  el<span class="token punctuation">.</span>style<span class="token punctuation">.</span>height <span class="token operator">=</span> <span class="token number">0</span>
<span class="token punctuation">}</span>

<span class="token comment">// 元素加到页面之后的钩子函数</span>
<span class="token keyword">const</span> <span class="token function-variable function">handleEnter</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">el</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  el<span class="token punctuation">.</span>style<span class="token punctuation">.</span>height <span class="token operator">=</span> <span class="token string">&#39;auto&#39;</span>
  <span class="token keyword">const</span> h <span class="token operator">=</span> el<span class="token punctuation">.</span>clientHeight
  el<span class="token punctuation">.</span>style<span class="token punctuation">.</span>height <span class="token operator">=</span> <span class="token number">0</span>
  <span class="token comment">// requestAnimationFrame 下一帧执行</span>
  <span class="token function">requestAnimationFrame</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    el<span class="token punctuation">.</span>style<span class="token punctuation">.</span>height <span class="token operator">=</span> h <span class="token operator">+</span> <span class="token string">&#39;px&#39;</span>
    el<span class="token punctuation">.</span>style<span class="token punctuation">.</span>transition <span class="token operator">=</span> <span class="token string">&#39;.5s&#39;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">// 当进入过渡完成时调用</span>
<span class="token keyword">const</span> <span class="token function-variable function">handleAfterEnter</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">el</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  el<span class="token punctuation">.</span>style<span class="token punctuation">.</span>transition <span class="token operator">=</span> <span class="token string">&#39;none&#39;</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>scss<span class="token punctuation">&quot;</span></span> <span class="token attr-name">scoped</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">
<span class="token selector">.content-menu</span> <span class="token punctuation">{</span>
  <span class="token property">position</span><span class="token punctuation">:</span> fixed<span class="token punctuation">;</span>
  <span class="token property">min-width</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
  <span class="token property">overflow</span><span class="token punctuation">:</span> hidden<span class="token punctuation">;</span>
  <span class="token property">color</span><span class="token punctuation">:</span> #1d1d1f<span class="token punctuation">;</span>
  <span class="token property">font-size</span><span class="token punctuation">:</span> 12px<span class="token punctuation">;</span>
  <span class="token property">line-height</span><span class="token punctuation">:</span> 1.8<span class="token punctuation">;</span>
  <span class="token property">white-space</span><span class="token punctuation">:</span> nowrap<span class="token punctuation">;</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span> #eee<span class="token punctuation">;</span>
  <span class="token property">border-radius</span><span class="token punctuation">:</span> 5px<span class="token punctuation">;</span>
  <span class="token property">box-shadow</span><span class="token punctuation">:</span> 1px 1px 2px <span class="token function">rgb</span><span class="token punctuation">(</span>0 0 0 / 20%<span class="token punctuation">)</span><span class="token punctuation">,</span> 1px 1px 5px <span class="token function">rgb</span><span class="token punctuation">(</span>0 0 0 / 20%<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token selector">.menu-list</span> <span class="token punctuation">{</span>
    <span class="token selector">.menu-item</span> <span class="token punctuation">{</span>
      <span class="token property">text-align</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
      <span class="token property">cursor</span><span class="token punctuation">:</span> pointer<span class="token punctuation">;</span>

      <span class="token selector">&amp;:hover</span> <span class="token punctuation">{</span>
        <span class="token property">color</span><span class="token punctuation">:</span> #fff<span class="token punctuation">;</span>
        <span class="token property">background-color</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--c-brand-light<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="封装通用的方法" tabindex="-1"><a class="header-anchor" href="#封装通用的方法" aria-hidden="true">#</a> 封装通用的方法</h3><h4 id="菜单出现方法" tabindex="-1"><a class="header-anchor" href="#菜单出现方法" aria-hidden="true">#</a> 菜单出现方法</h4><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> onMounted<span class="token punctuation">,</span> onBeforeUnmount<span class="token punctuation">,</span> ref <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">useContentMenu</span><span class="token punctuation">(</span><span class="token parameter">containerRef</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> showMenu <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span>
  <span class="token keyword">const</span> x <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span>
  <span class="token keyword">const</span> y <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span>

  <span class="token comment">// 事件处理函数</span>
  <span class="token keyword">const</span> <span class="token function-variable function">handleContextMenu</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    e<span class="token punctuation">.</span><span class="token function">preventDefault</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    e<span class="token punctuation">.</span><span class="token function">stopPropagation</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    showMenu<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token boolean">true</span>
    x<span class="token punctuation">.</span>value <span class="token operator">=</span> e<span class="token punctuation">.</span>clientX
    y<span class="token punctuation">.</span>value <span class="token operator">=</span> e<span class="token punctuation">.</span>clientY
  <span class="token punctuation">}</span>

  <span class="token keyword">const</span> <span class="token function-variable function">closeMenu</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    showMenu<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token boolean">false</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// 元素挂载后监听元素</span>
  <span class="token function">onMounted</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> div <span class="token operator">=</span> containerRef<span class="token punctuation">.</span>value
    <span class="token comment">// contextmenu 不止能监听到鼠标右键，快捷键也能监听到</span>
    div<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&#39;contextmenu&#39;</span><span class="token punctuation">,</span> handleContextMenu<span class="token punctuation">)</span>
    <span class="token comment">// 如果外层有阻止事件冒泡会有问题，所以在捕获阶段触发</span>
    window<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&#39;click&#39;</span><span class="token punctuation">,</span> closeMenu<span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span>
    <span class="token comment">// 防止出现多个</span>
    window<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&#39;contextmenu&#39;</span><span class="token punctuation">,</span> closeMenu<span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>

  <span class="token function">onBeforeUnmount</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> div <span class="token operator">=</span> containerRef<span class="token punctuation">.</span>value
    div<span class="token punctuation">.</span><span class="token function">removeEventListener</span><span class="token punctuation">(</span><span class="token string">&#39;contextmenu&#39;</span><span class="token punctuation">,</span> handleContextMenu<span class="token punctuation">)</span>
    window<span class="token punctuation">.</span><span class="token function">removeEventListener</span><span class="token punctuation">(</span><span class="token string">&#39;click&#39;</span><span class="token punctuation">,</span> closeMenu<span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span>
    window<span class="token punctuation">.</span><span class="token function">removeEventListener</span><span class="token punctuation">(</span><span class="token string">&#39;contextmenu&#39;</span><span class="token punctuation">,</span> closeMenu<span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>

  <span class="token keyword">return</span> <span class="token punctuation">{</span>
    showMenu<span class="token punctuation">,</span>
    x<span class="token punctuation">,</span>
    y
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="获取视口方法" tabindex="-1"><a class="header-anchor" href="#获取视口方法" aria-hidden="true">#</a> 获取视口方法</h4><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> onMounted<span class="token punctuation">,</span> onUnmounted<span class="token punctuation">,</span> ref <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>

<span class="token comment">// 响应式视口宽度</span>
<span class="token keyword">let</span> vw <span class="token operator">=</span> <span class="token number">0</span>
<span class="token comment">// 响应式视口高度</span>
<span class="token keyword">let</span> vh <span class="token operator">=</span> <span class="token number">0</span>

<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> document <span class="token operator">!==</span> <span class="token string">&#39;undefined&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  vw <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span>document<span class="token punctuation">.</span>documentElement<span class="token punctuation">.</span>clientWidth<span class="token punctuation">)</span>
  vh <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span>document<span class="token punctuation">.</span>documentElement<span class="token punctuation">.</span>clientHeight<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token function-variable function">handleResize</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    vw<span class="token punctuation">.</span>value <span class="token operator">=</span> document<span class="token punctuation">.</span>documentElement<span class="token punctuation">.</span>clientWidth
    vh<span class="token punctuation">.</span>value <span class="token operator">=</span> document<span class="token punctuation">.</span>documentElement<span class="token punctuation">.</span>clientHeight
  <span class="token punctuation">}</span>

  <span class="token function">onMounted</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    window<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&#39;resize&#39;</span><span class="token punctuation">,</span> handleResize<span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>

  <span class="token function">onUnmounted</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    window<span class="token punctuation">.</span><span class="token function">removeEventListener</span><span class="token punctuation">(</span><span class="token string">&#39;resize&#39;</span><span class="token punctuation">,</span> handleResize<span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>

  <span class="token keyword">return</span> <span class="token punctuation">{</span> vw<span class="token punctuation">,</span> vh <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="自定义指令-获取当前元素尺寸" tabindex="-1"><a class="header-anchor" href="#自定义指令-获取当前元素尺寸" aria-hidden="true">#</a> 自定义指令（获取当前元素尺寸）</h4><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 映射</span>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,11);function r(d,v){const s=t("vue02");return p(),e("div",null,[u,o(s),k])}const b=a(i,[["render",r],["__file","vue02.html.vue"]]);export{b as default};
