---
sidebar_position: 2
title: How to use
---

**Kotli** can be utilized in various ways:

## Web Portal
[Browser-based solution](https://kotli.xyz/project) allows users to build the desired project architecture and download the resulting source codes.
It is extremely user-friendly and does not require deep technical expertise.

:::note[&nbsp;]
The web portal can be used with a curated list of templates that have passed compatibility tests between components and meet the required standards.
All these templates are publicly available on GitHub and are regularly updated with quality improvements, new features, and the latest trends.
:::

:::tip[&nbsp;]
The web portal does not implement any specific logic for each `Kotli Template`.
Instead, it relies solely on the metadata extracted from them.
This means that technically, it is possible to use any template distributed as a Java artifact.
:::

## Engine
Kotlin library that facilitates the generation of output structures based on existing templates and the creation of new ones using the provided framework.

:::info[&nbsp;]
There are no limitations on using any template with this way. The only requirement is that you need to write some code to do it 💀.
:::
