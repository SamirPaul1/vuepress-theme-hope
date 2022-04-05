import { defineSidebarConfig } from "vuepress-theme-hope";

export const enSidebarConfig = defineSidebarConfig({
  "/": [
    "",
    {
      text: "Guide",
      icon: "creative",
      prefix: "guide/",
      children: [
        "",
        "container",
        "code-group",
        "sup-sub",
        "align",
        "footnote",
        "mark",
        "tasklist",
        "md-import",
        "chart",
        "flowchart",
        "mermaid",
        "tex",
        {
          text: "Code Demo",
          icon: "discover",
          prefix: "demo/",
          collapsable: true,
          children: ["", "normal", "vue", "react"],
        },
        {
          text: "Presentation",
          icon: "slides",
          prefix: "presentation/",
          collapsable: true,
          children: ["", "demo", "themes"],
        },
        "others",
      ],
    },
    "config",
    "migration",
    "demo",
  ],

  "/guide/": [
    "",
    "container",
    "code-group",
    "sup-sub",
    "align",
    "footnote",
    "mark",
    "tasklist",
    "md-import",
    "chart",
    "flowchart",
    "mermaid",
    "tex",
    {
      text: "Code Demo",
      icon: "discover",
      prefix: "demo/",
      collapsable: true,
      children: ["", "normal", "vue", "react"],
    },
    {
      text: "Presentation",
      icon: "slides",
      prefix: "presentation/",
      collapsable: true,
      children: ["", "demo", "themes"],
    },
  ],
});

export const zhSidebarConfig = defineSidebarConfig({
  "/zh/": [
    "",
    {
      text: "指南",
      icon: "creative",
      prefix: "guide/",
      children: [
        "",
        "container",
        "code-group",
        "sup-sub",
        "align",
        "footnote",
        "mark",
        "tasklist",
        "md-import",
        "chart",
        "flowchart",
        "mermaid",
        "tex",
        {
          text: "代码演示",
          icon: "discover",
          prefix: "demo/",
          collapsable: true,
          children: ["", "normal", "vue", "react"],
        },
        {
          text: "幻灯片",
          icon: "slides",
          prefix: "presentation/",
          collapsable: true,
          children: ["", "demo", "themes"],
        },
      ],
    },
    "config",
    "migration",
    "demo",
  ],

  "/zh/guide/": [
    "",
    "container",
    "code-group",
    "sup-sub",
    "align",
    "footnote",
    "mark",
    "tasklist",
    "md-import",
    "chart",
    "flowchart",
    "mermaid",
    "tex",
    {
      text: "代码演示",
      icon: "discover",
      prefix: "demo/",
      collapsable: true,
      children: ["", "normal", "vue", "react"],
    },
    {
      text: "幻灯片",
      icon: "slides",
      prefix: "presentation/",
      collapsable: true,
      children: ["", "demo", "themes"],
    },
    "others",
  ],
});
