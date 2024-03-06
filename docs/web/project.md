---
sidebar_position: 1
title: Project
---

In terms of **Kotli**, a project is essentially the project you are building.
Whether it includes mobile apps, a website, or backend services, it qualifies as a project.
Even if it only comprises an iOS or Android app, it still falls under the definition of a project.

Upon opening the web portal, you are presented with a `Project Screen`.

![Project Screen](img/project_light.png#gh-light-mode-only)![Project Screen](img/project_dark.png#gh-dark-mode-only)

The `Project Screen` consists of the following elements:

### 1. Name

An input field for entering the project name.
This field is optional and is used solely to identify the created project.
When a project name is provided, its value is utilized as:

- the name of the downloaded archive containing the output project structure;
- the title of the HTTP link associated with this project;

### 2. Actions

Actions that can be performed for the given project.

The primary action is to `Download` the project, and it is enabled only when the project contains at least one layer.
Additional actions are accessible under the `more` option.

### 3. Layers

All created layers for the given project are displayed in this panel as cards with basic information.

Behavior:

- When a new layer is added, it appears at the end of the panel.
- The order of layers can be changed using drag-and-drop.
- When a layer is selected, its card is highlighted.
- If a layer has errors, its card is highlighted differently.
- You can add up to 15 layers in one project to avoid overloading the system.

### 4. Selected Layer

When a layer is selected, the `Project Screen` displays its details.
Here, you can edit the layer's `name` and `namespace`, add or remove features, and delete the layer from the project if necessary.
Depending on the chosen template, the layer displays logical groups for adding features.
These groups form the architecture of the layer.


