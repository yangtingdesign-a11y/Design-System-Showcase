---
name: artisan-ui-custom-mavon-editor-style
description: 当产品或设计师需要设计符合 Artisan UI CustomMavonEditor 富文本/Markdown 编辑器组件风格的编辑区、预览区或内容输入页面时使用。
metadata:
  short-description: Artisan UI 富文本编辑器设计规范
---

# Artisan UI CustomMavonEditor 富文本编辑器样式规范

用于 Markdown 或富文本内容编辑，适合公告、说明、文档、模板内容维护。

## 视觉规则

编辑器：
- 宽度：100%
- 跟随外层容器高度

预览切换：
- 上下外边距：10px

预览容器：
- 边框：`#E6E6E6`
- 圆角：4px
- 内边距：16px
- 最小高度：200px
- 顶部间距：10px

## 设计建议

- 编辑器适合大段内容，不适合短文本输入。
- 预览区域需要和编辑区域有明显边界。
- 内容编辑页面应预留足够垂直空间，避免编辑体验拥挤。
- 如果只需要纯文本，优先使用普通 textarea。

## 走查清单

- 预览区是否有 16px 内边距。
- 编辑与预览是否区分清楚。
- 内容区域是否至少有 200px 高度。
- 是否避免在小弹窗里塞入复杂编辑器。
