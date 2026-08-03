---
title: "Talks and events"
summary: "Keynotes, invited talks, conference presentations, workshops, and other events."
type: landing

sections:

  - block: collection
    id: all-events

    content:
      title: Talks and events
      text: Keynotes, invited talks, conference presentations, workshops, and other events.

      # 0 = alle Events anzeigen
      count: 0

      # Zukünftige Termine stehen zuerst, danach vergangene
      sort_by: Date
      sort_ascending: false

      filters:
        # Verhindert, dass content/events/_index.md selbst erscheint
        kinds:
          - page

        folders:
          - events

    design:
      # Genau dieselbe Ansicht wie bei den Posts
      view: article-grid
      columns: 3

      fill_image: true
      show_date: true
      show_read_time: false
      show_read_more: true

      css_class: modern-section modern-talks events-archive

      spacing:
        padding:
          - "5rem"
          - "0"
          - "5rem"
          - "0"
---