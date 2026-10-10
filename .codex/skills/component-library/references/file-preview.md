---
name: artisan-ui-file-preview-style
description: 当产品或设计师需要设计符合 Artisan UI FilePreview 文件预览组件风格的 Word、Excel、PDF 在线预览区域或文档查看页面时使用。
metadata:
  short-description: Artisan UI 文件预览设计规范
---

# Artisan UI FilePreview 文件预览样式规范

用于在线预览 Word、Excel、PDF 等文件。

## 视觉规则

预览区域：
- 宽度由业务传入，常用为 100%
- 高度由业务传入，需在设计稿中明确
- 预览内容填满容器

支持类型：
- Word 文档
- Excel 表格
- PDF 文件

## 设计建议

- 预览区域必须有明确高度，避免页面加载后塌陷。
- 如果放在弹窗中，要预留足够宽高。
- 文件加载中、加载失败、格式不支持都需要状态设计。
- 预览区周围不要放过多无关操作，避免干扰阅读。

## 走查清单

- 预览容器宽高是否明确。
- 不同文件类型是否有一致的入口。
- 加载失败是否有提示。
- 弹窗预览是否不会过小。
