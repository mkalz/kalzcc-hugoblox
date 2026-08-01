---
title: Implications of the new Twitter Academic Research product track
subtitle: How to use Twitter for research
date: "2021-04-02T09:36:59.875Z"
authors:
  - me
draft: false
featured: true
tags:
  - twitter
  - services
  - rstats
categories:
  - research
  - tools
  - twitter
projects: []
image:
  filename: featured.png
  focal_point: Smart
  preview_only: false

---

Twitter has recently announced that it will make the so called "full archive search" available for academic research. Until this change, it was either very costly (by paying for the enterprise version) or it took very long to build an archive of tweets (for example via the very good [TAGS tool](https://tags.hawksey.info)). With the new product for researchers and the advanced version of the Twitter-API (v2) it is possible to collect tweets from the whole archive even until the first day of existence of Twitter. This changes the potential to use Twitter also for retrospective research completely. Since the setup is not that easy I will lead you through the steps required for starting your own research with the help of Twitter.

**Step-by-step instruction towards your corpus of tweets**

1. To get started you need first of all an account with Twitter. Since you are planning to use Twitter in your resarch I expect that you will be already using Twitter and have an account. If you have a normal account you need to apply for a developer-account with the same credentials.
2. To get a developer account, you need to [follow the application form over here](https://developer.twitter.com/en/apply-for-access). It is important to understand the policy that Twitter sets for its developer account and it is especially useful to understand the concept of a "use case" in their policy. A use case can be understood as a group of activities which could be repeated for a different purpose. Collecting data from the full archive search would be for example a use case. Embedding Twitter feeds into a website would be a different use-case. The purpose is to keep the number of use-cases as small as possible.
3. After having received a confirmation of the accepted developer account, you can apply for the academic [research track on this page](https://developer.twitter.com/en/solutions/academic-research). In the application form you will be requested to provide links that prove that you are a researcher and you will need to specify some details about the purpose of your research with Twitter. An additional requirement is that your research should have a non-commercial purpose. After sending this form, you will receive in 24h a confirmation message that you will have access to the research track and via this an unbelievable amount of 10 Mio tweets which you can collect <u>per month</u>!
4. You will see the academic research product in your developer portal dashboard after acceptance. As a next step, you need to configure an app under the research track. Configuring an app provides you access to a number of keys and secret tokens. Your are not playing the Legend of Zelda here, but the these codes ensure that only authenticated users have access to the Twitter-API. The most important information here if the so called "bearer token" which you should copy to a textfile after you have configured your app. Ideally you make an additonal screenshot from it for your archive. Now your are ready to start collecting tweets. The only question is how you do this.
5. The answer to your question is: R and nothing else. I am really fascinated by the creativity and cross-disciplinary broadness that the R-project has developed over time. I know that for many the learning curve is high compared to statistical software suites, but R gives you so much power for handling all kinds of data that is has opened also new research options for me. There are many existing packages for R to collect tweets, but none of them were at the time of the opening of the academic research track prepare to use the new API. Christoper Barrie and Justin Chuntingho have invested some brains to give you the easies approach to collect large number of tweets in the research track.
6. The R-package [academictwitteR](https://github.com/cjbarrie/academictwitteR) allows you to collect tweets in three lines of code. First of all you should install the package via their Github repository:

```R
devtools::install_github("cjbarrie/academictwitteR")

```

As a second step, you need to put your bearer-token in a variable.

```R
bearer_token <- "" # Insert bearer token
```

As a third step your query will be defined.

```
get_hashtag_tweets("#twitterlehrerzimmer OR #twitterlehrerimmer OR #twlz", "2013-12-01T00:00:00Z", "2014-12-31T00:00:00Z", bearer_token, data_path = "TWLZ21/data14/", file = "TWLZ21/twlz14.rds")
```

I have collected in this example all tweets that have been sent for three hashtags and I have defined the timespan for the collection between December 2013 and December 2014. Last but not least you provide a folder name and a file name which should be used to store the output.

**Some words on computational capacity**

Since I have collected a larger number of tweets (around 700 000) and I have used a setup with a low amount of memory (1 GB), it was important to collect tweets in batches and then merge the data in a second step. I have during the process analyzed the performance of the computer and I have seen that I was running into memory limits. If you see this, you need to either choose a more powerful setup or make your timespans smaller to reduce the number of tweets per collection step. In the second featured post in this newsletter I will introduce a very flexible infrastructure for this kind of activities.
