---
sidebar: auto
meta:
 - name: keywords
   description: api typescript node.js documentation mapReturnedResponse function
---
# mapReturnedResponse <Badge text="Function" type="function"/>
<!-- Summary -->
<section class="symbol-info"><table class="is-full-width"><tbody><tr><th>Module</th><td><div class="lang-typescript"><span class="token keyword">import</span> { mapReturnedResponse }&nbsp;<span class="token keyword">from</span>&nbsp;<span class="token string">"@tsed/common"</span></div></td></tr><tr><th>Source</th><td><a href="https://github.com/Romakita/ts-express-decorators/blob/v4.30.2/src//common/mvc/utils/mapReturnedResponse.ts#L0-L0">/common/mvc/utils/mapReturnedResponse.ts</a></td></tr></tbody></table></section>

<!-- Overview -->
## Overview


<pre><code class="typescript-lang ">function <span class="token function">mapReturnedResponse</span><span class="token punctuation">(</span>options<span class="token punctuation">:</span> <span class="token keyword">any</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword">any</span> <span class="token punctuation">{</span>
  return <span class="token punctuation">{</span>
    description<span class="token punctuation">:</span> options.description<span class="token punctuation">,</span>
    type<span class="token punctuation">:</span> options.type || options.use<span class="token punctuation">,</span>
    collectionType<span class="token punctuation">:</span> options.collectionType || options.collection<span class="token punctuation">,</span>
    headers<span class="token punctuation">:</span> options.headers
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre>