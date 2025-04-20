import{_ as a,c as e,o as n,ae as t}from"./chunks/framework.Dh1jimFm.js";const q=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"authorization.md","filePath":"authorization.md"}'),o={name:"authorization.md"};function p(i,s,c,u,r,l){return n(),e("div",null,s[0]||(s[0]=[t(`<h3 id="get-access-token" tabindex="-1">Get Access Token <a class="header-anchor" href="#get-access-token" aria-label="Permalink to &quot;Get Access Token&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>    Endpoint: ~/get-token</span></span>
<span class="line"><span>    Method: Post</span></span>
<span class="line"><span>    Header Params: Content-Type: application/json</span></span>
<span class="line"><span>    Body Params:   username: &quot;agent@example.com&quot;</span></span>
<span class="line"><span>                password: &quot;123456&quot;</span></span></code></pre></div><p>Sample Response</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>{</span></span>
<span class="line"><span>    &quot;success&quot;: true,</span></span>
<span class="line"><span>    &quot;data&quot;: {</span></span>
<span class="line"><span>        &quot;tokenType&quot;: &quot;Bearer&quot;,</span></span>
<span class="line"><span>        &quot;accessToken&quot;: &quot;eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9hcGkuc2FzdG90aWNrZXRzLmxvY2FsXC9hcGlcL2IyYlwvdjFcL2dldC10b2tlbiIsImlhdCI6MTY3NjI4OTk1OSwibmJmIjoxNjc2Mjg5OTU5LCJqdGkiOiJvT0dlblZXUUJoa0Y3eE1qIiwic3ViIjo5LCJwcnYiOiJmMjdkYmYzNzkwZTdiMWZjYThkZmI2Yzg4ZWY5NWFmOTA0NmE4OGZjIn0.lgO6vxG6d0LuAODLVnxO4e6ZBppVo9NbosId0tEZKlA&quot;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>Note: &quot;accessToken&quot; must be set in the Authorization Header of every API Request.</p><p>Sample Error Response</p><p>Case: Invalid parameters</p><pre><code>    {
        &quot;success&quot;: false,
        &quot;data&quot;: {
            &quot;error&quot;: &quot;Username/Password Missing.&quot;
        }
    }
</code></pre><p>Case: User status inactive</p><pre><code>    {
        &quot;success&quot;: false,
        &quot;data&quot;: {
            &quot;error&quot;: &quot;User status is inactive. Access-Token not granted.&quot;
        }
    }
</code></pre><p>Case: Invalid username/password</p><pre><code>    {
        &quot;success&quot;: false,
        &quot;data&quot;: {
            &quot;error&quot;: &quot;Invalid Username/Password. Access-Token not granted.&quot;
        }
    }
</code></pre>`,12)]))}const m=a(o,[["render",p]]);export{q as __pageData,m as default};
