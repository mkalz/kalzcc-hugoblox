---
# Leave the homepage title empty to use the site title
title: ""
summary: ""
date: 2022-10-24
type: landing

sections:
  - block: resume-biography-3
    content:
      username: me
      text: ""
      button:
        text: Give anonymous feedback
        url: "https://www.admonymous.co/mkalz"
      headings:
        about: ""
        education: ""
        interests: ""
    design:
      css_class: modern-hero
      # Use the new Gradient Mesh which automatically adapts to the selected theme colors
      background:
        gradient_mesh:
          enable: false
          spacing:
            padding:
              - "5rem"
              - "0"
              - "5rem"
              - "0"

      # Name heading sizing to accommodate long or short names
      name:
        size: xl # Options: xs, sm, md, lg (default), xl

      # Avatar customization
      avatar:
        size: medium # Options: small (150px), medium (200px, default), large (320px), xl (400px), xxl (500px)
        shape: circle # Options: circle (default), square, rounded
  - block: collection
    id: posts
    content:
      title: Recent Posts
      text: ""
      count: 3
      filters:
        folders:
          - blog
        exclude_featured: false
    design:
      css_class: modern-section
      view: article-grid
      columns: 3
  - block: markdown
    content:
      title: ""
      text: |-
        <div class="peep-break peep-right peep-cyan" aria-hidden="true"><img src="media/peeps/reading.svg" alt="" loading="lazy"></div>
    design:
      columns: "1"
      css_class: modern-research
      spacing:
        padding:
          - "5rem"
          - "0"
          - "5rem"
          - "0"
  # -------------------------------------------------------
  # Featured publications
  # -------------------------------------------------------

  - block: collection
    id: publications

    content:
      title: Featured publications
      text: Selected academic publications and current research outputs.

      count: 3
      sort_by: Date
      sort_ascending: false

      filters:
        folders:
          - publications
        featured_only: true

      archive:
        enable: true
        text: View all publications
        link: /publications/

    design:
      view: article-grid
      columns: 3

      css_class: modern-section modern-featured-publications

      spacing:
        padding:
          - "5rem"
          - "0"
          - "5rem"
          - "0"
  - block: collection
    content:
      title: Recent Publications
      text: ""
      filters:
        folders:
          - publications
        exclude_featured: false
    design:
      css_class: modern-section
      view: citation
  - block: markdown
    content:
      title: ""
      text: |-
        <div class="peep-break peep-left peep-blue" aria-hidden="true"><img src="media/peeps/research.svg" alt="" loading="lazy"></div>
    design:
      columns: "1"
      spacing:
        padding: [0, 0, 0, 0]
    # -------------------------------------------------------
  # Current projects
  # -------------------------------------------------------
  - block: current-projects
    id: projects

    content:
      title: Projects
      text: Research projects, frameworks, tools, and development work.

      count: 6
      sort_by: Date
      sort_ascending: false

      filters:
        folders:
          - projects

      archive:
        enable: true
        text: View all projects
        link: /projects/

    design:
      view: article-grid
      columns: 3

      css_class: modern-section modern-projects

      spacing:
        padding:
          - "5rem"
          - "0"
          - "5rem"
          - "0"
  # -------------------------------------------------------
  # 5a. Upcoming talks and events
  # ------------------------------------------------------- 
  - block: upcoming-events
    id: talks

    content:
      title: Upcoming talks and events
      text: Upcoming keynotes, invited talks, conferences, and workshops.

      count: 3
      sort_by: Date
      sort_ascending: true

      filters:
        folders:
          - events

      archive:
        enable: true
        text: View all talks and events
        link: /events/

    design:
      view: article-grid
      columns: 3

      css_class: modern-section modern-talks modern-talks-upcoming

      spacing:
        padding:
          - "5rem"
          - "0"
          - "3rem"
          - "0"
    # -------------------------------------------------------
  # 5b. Featured talks and events
  # -------------------------------------------------------

  - block: collection
    id: featured-talks

    content:
      title: Featured talks and events
      text: Selected keynotes, invited presentations, and public lectures.

      count: 3
      sort_by: Date
      sort_ascending: false

      filters:
        folders:
          - events
        featured_only: true
        exclude_future: true

      archive:
        enable: true
        text: View all talks and events
        link: /events/

    design:
      view: article-grid
      columns: 3

      css_class: modern-section modern-talks modern-talks-featured

      spacing:
        padding:
          - "3rem"
          - "0"
          - "5rem"
          - "0"
  - block: markdown
    content:
      title: ""
      text: |-
        <div class="peep-break peep-left peep-cyan" aria-hidden="true"><img src="media/peeps/contact.svg" alt="" loading="lazy"></div>
    design:
      columns: "1"
      spacing:
        padding: [0, 0, 0, 0]
  - block: markdown
    id: newsletter
    content:
      title: Stay in touch
      subtitle: ""
      text: |-
        <div class="newsletter-contact-grid" style="display:grid; grid-template-columns:minmax(0,5fr) minmax(0,6fr); gap:3rem; width:min(1400px,calc(100vw - 3rem)); position:relative; left:50%; transform:translateX(-50%); align-items:start;">
        <div class="newsletter-column">
        <h2>Newsletter</h2>
        <p>I publish the newsletter <em>The day’s refrain – musings on digital education</em> every three to four weeks.</p>
        <img src="uploads/logonl.png" alt="Logo for Newsletter" style="display:block; width:100%; max-width:260px; margin:1.5rem auto;">
        <script src="https://cdn.sendfox.com/js/embed.js" data-form="1kpjjj" data-api="https://sendfox.com" async></script>
        </div>
        <div class="contact-column" id="contact">
        <h2>Contact</h2>
        <iframe src="https://formrobin.com/f/3z7pekw" title="Contact form" loading="lazy" style="display:block; width:100%; min-height:780px; border:0; border-radius:0.75rem;"></iframe>
        </div>
        </div>
        <script src="https://sendfox.com/js/form.js"></script>
    design:
      css_class: modern-newsletter
      columns: "1"
      spacing:
        padding:
          - "5rem"
          - "0"
          - "5rem"
          - "0"
  - block: cta-card
    demo: true # Only display this section in the HugoBlox Kit demo site
    content:
      title: 👉 Build your own academic website like this
      text: |-
        This site is generated by HugoBlox Kit - the FREE, Hugo-based open source website builder trusted by 250,000+ academics like you.

        <a class="github-button" href="https://github.com/HugoBlox/kit" data-color-scheme="no-preference: light; light: light; dark: dark;" data-icon="octicon-star" data-size="large" data-show-count="true" aria-label="Star HugoBlox/kit on GitHub">Star</a>

        Easily build anything with blocks - no-code required!

        From landing pages, second brains, and courses to academic resumés, conferences, and tech blogs.
      button:
        text: Get Started
        url: "https://hugoblox.com/templates/"
    design:
      card:
        # Card background color (CSS class)
        css_class: "bg-gradient-to-br from-primary-500 via-primary-600 to-secondary-600 text-white shadow-2xl"
        css_style: ""

---

