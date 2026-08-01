---
title: Redefining my writing workflow
subtitle:
date: "2023-03-25T09:36:59.875Z"
authors:
  - me
draft: false
featured: true
tags:
  - knowledge management
  - pkm
  - academic writing
  - logseq
  - Lyx
categories:
  - writing
  - tools
  - workflow
  - hacks
  - daily improvisation
projects: []
image:
  filename: featured.png
  focal_point: Smart
  preview_only: false

---

One of the things I have started recently is a book-project. For this purpose I have been working on a new writing workflow which combines reference management, reading, highlighting and note-taking, writing and publishing. In this short post I will try to describe the setup and workflow.

**My book-writing workflow in detail**

1. _Sources_: Of course, the basis of all writing is reading :-). To identify prior work and to get an overview about the domain I have collected approximately 80 sources which I have started to read. These sources are mainly journal articles, some are books and book-chapters. I mostly start with GoogleScholar and combine it with some meta-databases like EBSCOHost, but I also appreciate article newsletters from journals (and can recommend the [VUB Paperboy](https://vubpaperboy.de) for our domain). The list of potential sources to identify related work is of course endless and I want to try in the future AI services like [Researchrabbit](https://www.researchrabbit.ai) or [Elicit](https://elicit.org) (which I both got to know through conversations with Yanay Zaguri: Thanks!).
2. _Reference management_: I have switched some years ago from Mendely to [Zotero](https://www.zotero.org) and besides a little outdated interface I really appreciate the reliability and extendability of Zotero. I can recommend for example the extension [BetterBibTex](https://retorque.re/zotero-better-bibtex/). The extension takes for example care for renaming PDF and sorting them into a specific folder. In general, Zotero works great in importing references from the web and it can for example also generate references to books based on ISBN-numbers. You can easily collect a nice list of well-formated references.
3. _Reading and structured notetaking_: [Logseq](https://logseq.com) has really changed the way I read papers and take notes about them. As described in an [earlier post about my PKM](https://kalz.cc/2022/01/02/restarting-my-personal-knowledge-management/) the PDF-reader and annotation environment is perfect for taking structured notes. The nice thing is, that I can directly access papers from Zotero. I can start a paper from my database and open it on the left side of the screen while I have a chapter structure for my book-projekt as an outline on the right side. Whenever I think something fits into this structure I can either mark and shift pieces of text from left to rigth, or I can note down ideas for chapters.
4. _Writing_: My main target format for the book is a well-formatted PDF. Due to this requirement I am using [LyX](https://www.lyx.org) as a visual editor which can produce nicely formatted documents via LaTeX. Again, the interface looks a little outdated, but the functionaliy is really great. LyX can access directly my reference libary from Zotero and has sufficient styling options to produce a nice looking text.
5. _Publishing_: As already mentioned, one important output format is a PDF file. This is the standard format of the editor I am using for writing. At the same time, I would like to produce a web-version of the text. For this purpose I have configured LyX to produce MarkDown files from the same text which I can easily integrate into [my website](https://kalz.cc) which is running on the basis of [Wowchemy](https://wowchemy.com). Via this route I can easily give people access who can provide feedback to the chapters during the writing process.
