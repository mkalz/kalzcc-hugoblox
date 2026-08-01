---
title: Using Nextcloud as project management system
subtitle:
date: "2024-02-03T09:36:59.875Z"
authors:
  - me
draft: false
featured: true
tags:
  - project management
  - nextcloud
  - teams
  - projects
categories:
  - research
  - management
  - tools
projects: []
image:
  filename: featured.jpg
  focal_point: Smart
  preview_only: false

---

Due to lack of good open source project management systems and deficiencies of federal solutions and lack of a local system, I have explored again [Nextcloud](https://nextcloud.com) as an open source option for project management. While an initial search mostly delivers integrations to Open Project into Nextcloud, I had the goal to model a workflow of a project fully in Nextcloud.

My requirements for project-management besides conformity with national data protection rules are the following:

- A group function to assign users to groups (members of a project). Groups should be visible in other apps.
- A joint file-sharing option with joint editing support. For the editing I want to be able to start documents in the browser for notetaking during meetings and other purposes. Collaborative editing should also work flawlessly.
- An option to maintain joint ToDo lists with deadlines and assignment of tasks to individuals.
- A calendar to maintain an overview of events and deadlines for a project.
- An overview page which integrates all important project information (ideally with joint editing).

The group function is initially a no-brainer since groups can be easily created in the user management and a user can be assigned to different groups. Later in the implementation, a second group-concept called circle comes into the game. The best description of the difference between those concepts is available [here](https://help.nextcloud.com/t/circles-or-groups/59003/10) and it boils down to the fact that groups should be used for permission issues (top down) and circles can be used for self-organized groups. This can become later confusing, when apps (e.g. Deck or Collectives) rely on circles and not groups.

For task management there are mainly two options: the [Tasks app](https://apps.nextcloud.com/apps/tasks) and the [Deck app](https://apps.nextcloud.com/apps/deck). I have not found an option to maintain tasks and taks categories collaboratively in the Tasks app, so I have used the Deck app for this purpose. The additional advantage here is that task are ordered in cards and that different ways to manage tasks are supported (e.g. Kanban). In Deck I can assign a task to one ore more users and assign a deadline to a task. Deck uses tasks behind the scene so that it is not possible to deactivate tasks and use Deck only. This is another source of confusion for setting-up projects in Nextcloud.

As an additional nice feature, tasks with deadlines are also entered in a specified calendar of a group. A calendar can be easily configured per group and it can be filled with important events and tasks from the Deck app. In addition, this calendar can be subscribed from a local calendar app but not as a simple subscription but rather with setting up your own CalDav-Account [as described here](https://help.nextcloud.com/t/macos-caldav-unable-to-verify-account-name-or-password/165920/4). As a nice additional feature, the tasks in this calendar are also included in the reminders app on Mac (and also in my favourite [PopDo app](https://ds9soft.com/popdo/)).

What is now missing is a joint overview page for orientation which can be edited collaboratively. For this purpose, the [app Collectives](https://apps.nextcloud.com/apps/collectives) is very well suited. It is mainly a joint page collection with WYSIWYG-editing and the options to create sub-pages. In theory, this set can be used for the management of small- to medium-scale projects within one organisation.

What makes this scenario a little difficult is the fact that each app assumes a mixed usage of personal knowledge management and group knowledge management. This means that for example a user choses the Deck app, but the has to select the Deck for the group project. This applies to several apps. While it might be a small issue, to be able to constrain some apps within the group would be an advantage.
