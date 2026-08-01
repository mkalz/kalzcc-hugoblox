---
title: Backup strategy for Knowledge-workers under MacOS
subtitle:
date: "2022-08-28T09:36:59.875Z"
authors:
  - me
draft: false
featured: true
tags:
  - knowledge worker
  - hacks
  - backups
categories:
  - lifehacks
  - tools
  - GTD
  - hacks
  - daily improvisation
projects: []
image:
  filename: featured.png
  focal_point: Smart
  preview_only: false

---

If your productice work is 100% happening in digital environments the secure and reliable backup of data becomes a necessity and data-loss can have serious implications for all kind of processes. In this posting I will briefly describe my approach for the backup of data under the MacOS operating system. Actually, the easy backup and transfer of settings and data is one of the major benefits of working with Mac OS. My backup-strategy has three components.

**1.) Hourly backup of core files**

Already some years ago I started to store core files and folders in an incremental backup approach each hour. While I used to do this on a local Synology-NAS with BitTorrentSync/Resilio Sync I have nowadays switched to a complete cloud-based approach. For this purpose I use the software [Arq (7)](https://www.arqbackup.com) in combination with cloudhosting included in a O365 subscription. Arq supports end-to-end encryptions and you can restore files states back in time. After defining the files and folders which should be included in your backup, you do no thave to interfere with the application anymore. Sometimes a re-authentication with the cloud-provider of your choice is required. The Arq symbols signals its activity and by that I can be sure that no progress is lost no matter what will happen. Hourly is not meant literally since I am not online and working all the time. But as soon as I have internet access the adaptes files will be stored.

**2.) Weekly full backup**

To complement this backup strategy of core files and folders I am aining at having at least one full backup with the help of the built-in [TimeMachine backups](https://support.apple.com/en-sa/HT201250). For this purpose I connect an external SSD device (Samsung T5 1 TB) via USC-C directly to my machine. This ensures a fast and smooth production of the latest image. At work I have a SSD directly connected to my external monitor so I event do not have to think about connecting the backup device and I have another image I can rely on.

**3.) Monthly image for restorability**

Last but not least I would like to have another image avilable as a last resort if all of the solutions above will fail and I can restore a fairly recent working state in an acceptable amount of time. For this purpose I am using [Carbon Copy Cloner](https://bombich.com) with another external harddrive.

By this strategy, the worst that can happen is that my full backup of applications and settings is around 4 weeks old, but at the same time I have the most recent work backed-up as described in Nr. 1.) so the combination of restoring with TimeMachine or Carbon Coyp Cloner and the current files will lead to an accepable restored working state in a short amount of time.
