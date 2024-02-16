---
title: Features overview
sidebar_position: 1
---

:::info

这篇文章是关于 Safari 版的 AdGuard，用于保护用户的 Safari 浏览器。 如果需要保护整个设备，请前往[下载 AdGuard 应用程序](https://agrd.io/download-kb-adblock)

:::

Safari 版 AdGuard 的设计符合 Apple 公司对广告拦截浏览器扩展的限制，是 Safari 上最受欢迎的广告拦截器。 虽然 Safari 版 AdGuard 无法与我们的桌面广告拦截应用程序相比，但扩展是免费的，可以保护用户免受广告、跟踪器、网络钓鱼和恶意网站的侵害。

## 常规 {#general}

![General tab](https://cdn.adtidy.org/public/Adguard/Blog/AG_for_Safari_in-depth_review/General.png)

第一个选项卡是「常规」屏幕，用户可以设置通知、更新间隔和系统启动时启动 AdGuard 等基本事项。 用户还可以选择在菜单栏中显示 AdGuard 图标。 用户还可以启动「[内容拦截器](#contentblockers)」来拦截广告、跟踪器和其他骚扰等。

## 过滤器 {#filters}

![Filters tab](https://cdn.adtidy.org/public/Adguard/Blog/AG_for_Safari_in-depth_review/Filters.png)

过滤器是用特殊语法编写的规则列表。 根据这些规则，内容拦截器可以过滤网络流量：拦截广告或对恶意网站的请求。

过滤器分为八个主题类别： *广告拦截、隐私、社交小工具、烦扰、安全、特定语言过滤器、自定义和其他过滤器*。

了解更多有关[AdGuard 过滤器](/general/ad-filtering/adguard-filters)或[一般广告过滤](/general/ad-filtering/how-ad-blocking-works)的信息。

在「过滤器」选项卡中，用户可以启用整个主题类别或单独的过滤器。 「过滤器」选项卡中的设置更改会影响「内容拦截器」部分（在「常规 」选项卡中）。

## 内容拦截器 {#contentblockers}

![Content blockers tab](https://cdn.adtidy.org/public/Adguard/Blog/AG_for_Safari_in-depth_review/Contentblockers.png)

A content blocker is a thematic cluster of filters. 与隐私相关的过滤器包含在内容拦截器中，其相应名称为「*AdGuard 隐私*」。

设计内容拦截器有两个原因：结构过滤器和符合 Apple 公司的限制。

[2019 年](https://adguard.com/en/blog/adguard-safari-1-5.html)，Apple 对 Safari 的广告拦截器设置限制，只允许它们同时使用 5 万个过滤规则。 由于这个数量不足以让一个广告拦截器提供良好的过滤质量（仅 AdGuard 基础过滤器就有 30,000 个过滤规则），我们将 AdGuard Safari 版分成六个内容拦截器，每个拦截器包含多达 50,000 个规则。

[In 2022](https://adguard.com/en/blog/adguard-for-safari-1-11.html), Apple increased the filtering rule limit for each content blocker to 150,000 rules applied simultaneously. Regarding AdGuard for Safari, up to 900,000 rules can be enabled for all six content blockers.

Whereas the limit has been increased, the structure of content blockers has remained the same.

In the Content blockers tab, you can see which content blockers are enabled, how many rules each of them is using, and which filters are functioning.

:::tip

You can manage enabled filters in the Filters tab. In the Content blockers section, you can only see the list of already enabled filters.

:::

### AdGuard General {#adguard_general}

*AdGuard General* is a content blocker that combines the most essential filters for blocking ads. We recommend keeping the AdGuard Base Filter always enabled.

### AdGuard Privacy {#adguard_privacy}

This content blocker is the main tool against counters and other web analytics tools. The *AdGuard Tracking Protection filter* is enabled by default.

### AdGuard Social {#adguard_social}

*AdGuard Social* contains filters against social media buttons, widgets, scripts, and icons. Other annoyance filters can also be found in this section: filters against pop-ups, mobile app banners, cookie notices, and more. To enable them, find *Social Widgets* in the Filters tab.

### AdGuard Security {#adguard_security}

This content blocker unites several security-related filters. *Malware Domains Blocklist* blocks domains that are notorious for spreading malware and spyware. *Spam404* protects you from Internet fraudsters. *NoCoin Filter List* disrupts browser-based cryptominers, such as Coinhive.

### AdGuard Other {#adguard_other}

*AdGuard Other* contains filters with various functions. For example, it has a filter that unblocks search ads and self-promo ads. In some cases, it helps find exactly what you are looking for, because these kinds of ads are more relevant and less intrusive than others.

:::note Disclaimer

We don’t have any ‘acceptable ads’ paid by advertisers. Instead, we provide users with an option to see [search ads and websites' self-promotion](/general/ad-filtering/search-ads).

:::

### AdGuard Custom {#adguard_custom}

![Custom tab](https://cdn.adtidy.org/public/Adguard/Blog/AG_for_Safari_in-depth_review/AGCustom.png)

If you need more filters, you can add them to *AdGuard Custom*. To add a custom filter, enter a URL or a local file path in the relevant field. You can find new filters at [filterlists.com](https://filterlists.com/).

## User rules {#userrules}

User rules can be used to customize ad blocking. They can be added manually, imported, or created automatically when you block an element on the page. To add your own filering rules, use a [special syntax](/general/ad-filtering/create-own-filters).

## 关于 {#about}

![About tab](https://cdn.adtidy.org/public/Adguard/Blog/AG_for_Safari_in-depth_review/About.png)

In the About tab, you can see info about the current version of your product and links to legal documents. There is also a link to our repository on GitHub. You can monitor the product development, create feature requests and report bugs there.

:::note Reminder

AdGuard for Safari can be downloaded for free [from the App Store](https://apps.apple.com/app/adguard-for-safari/id1440147259). A detailed setup instruction is available in the [Knowledge base](../installation).

:::
