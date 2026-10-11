---
layout: page
permalink: /publications/
title: Publications
description: Peer-reviewed research in wireless networking, mobile systems, and network intelligence.
keywords: Changhan Ge publications, wireless networking research, mobile computing, cellular networks
years: [2026, 2024, 2023, 2022, 2019]
nav: true
nav_order: 1
---
<!-- _pages/publications.md -->
<div class="publications">

{%- for y in page.years %}
  <h2 class="year">{{y}}</h2>
  {% bibliography -f {{ site.scholar.bibliography }} -q @*[year={{y}}]* %}
{% endfor %}

</div>
