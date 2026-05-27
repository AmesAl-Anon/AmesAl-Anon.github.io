---
layout: meeting.njk
title: Ames Iowa Al-Anon Meeting Schedule

mytags: 
    -   name: Monday
        order: 1
    -   name: Beginner
        order: 2
    -   name: Tuesday
        order: 3
    -   name: Wednesday
        order: 4
    -   name: Thursday
        order: 5
    -   name: Adult-Child
        order: 6
    -   name: Saturday
        order: 7
    -   name: 'Ames Iowa'
        order: 20

featuredImage: /_images/AmesIowaAl-AnonMeetings-textIntoImages-com.png

date: Last Modified  # page.date resolves to last modified date, otherwise to created date if date: left out

description: 'Ames Iowa Al-Anon weekly meeting schedule'
details: ""

eleventyExcludeFromCollections: true
pagination:
  data: collections.sortedPosts
  size: 6
  addAllPagesToCollections: true
---

{# Ed H. added this code 5/8/2026 to create and All Ames Al-Anon meetings page on the fly
using the details frontmatter variable from each file. The details are written in markdown so there
is a filter in eleventy.js file called markdownify that renders the details first!!

Also, To find the URL of the resulting file for a paginated item in Eleventy, it can be found in
page.url and in the for loop below it will be in pageitem.page.url. So Monday will go to the URL /Monday/
Thursday to /Thursday/ etc.  

I get the error alot that input data should be a string. This happens when I add another md file or another file and I
don't have the frontmatter to not include it in the collection. For example: Ed H added notes.md and did not have any
frontmatter. then added frontmatter eleventyExcludeFromCollections: true and the error went away when doing
npm run quiet    Ed H 5/12/2026 #}

{% for pageitem in pagination.items %}

    <h3><a href ="{{pageitem.page.url}}">{{ pageitem.data.title }}</a></h3>
    <p>{{ pageitem.data.details | markdownify | safe }}</p>
{% endfor %}

### [How can Al-Anon Help Me?](https://al-anon.org/newcomers/)

