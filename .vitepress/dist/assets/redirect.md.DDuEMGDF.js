import{_ as t,c as o,o as s,ae as a}from"./chunks/framework.Dh1jimFm.js";const d=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"redirect.md","filePath":"redirect.md"}'),r={name:"redirect.md"};function n(c,e,p,l,u,i){return s(),o("div",null,e[0]||(e[0]=[a(`<ol><li><p>Generate a JSON based on these params as</p><pre><code> {
 &quot;access_token&quot;: &quot;&lt;accessToken from previous step&gt;&quot;,
 &quot;phone_number&quot;: 9800000000,
 &quot;wallet_balance&quot;: 30000,
 &quot;success_url&quot;: &quot;https://example.sastotickets.com/success&quot;,
 &quot;failure_url&quot;: &quot;https://example.sastotickets.com/failure&quot;
 }
</code></pre></li><li><p>Convert it to base64 and append to our web solution e.g.</p><pre><code> https://&lt;b2c_url&gt;/?data=&lt;encoded base64 value&gt;
</code></pre><p>Note: <strong>b2c_url</strong> will be provided by Sasto Tickets Team</p></li><li><p>Open this URL in the App</p></li></ol>`,1)]))}const m=t(r,[["render",n]]);export{d as __pageData,m as default};
