---
layout: default
page: Research
---

<p><h3><b>Work in Progress</b></h3>
Spatially Differentiated Renewable Energy Subsidies: What Is There to Gain?


<h3><b>Publications</b></h3>
{% for item in site.data.publications.papers %}
<a href="{{ item.url }}">{{ item.title }}</a><br>{{ item.authors}}. {{ item.year}}. <b>{{ item.journal }}</b>.<br><br>
{% endfor %}
</p>
