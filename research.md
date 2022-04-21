---
layout: default
page: Research
---

<p><h3><b>Working Papers</b></h3>
<a href="papers/Kokoza_JMP_October2016.pdf">Spatially Differentiated Renewable Energy Subsidies: What Is There to Gain?</a><br>Job Market Paper<br>


<h3><b>Publications</b></h3>
{% for item in site.data.publications.papers %}
<a href="{{ item.url }}">{{ item.title }}</a><br>{{ item.authors}}. {{ item.year}}. <b>{{ item.journal }}</b>.<br><br>
{% endfor %}
</p>
