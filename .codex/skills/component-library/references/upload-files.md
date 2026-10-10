---
name: artisan-ui-upload-files-style
description: 当产品或设计师需要设计符合 Artisan UI Upload 文件上传组件风格的上传按钮、文件列表、删除操作或只读附件展示时使用。实现代码参考 js/lib/file-upload.js 与 css/app.css 中的 .upload-control 系列类名。
metadata:
  short-description: Artisan UI 文件上传设计规范
---

# Upload 文件上传控件

用于上传单个或多个文件，支持显示上传状态和删除操作。

## 容器规范

```yaml
height: auto
padding: 16px
background: #FFFFFF
border-radius: 8px
```

只读附件列表（详情页展示）可去掉容器 padding 与背景，使用 `.upload-control.is-readonly` 或 `.attachment-list-readonly`。

## 上传按钮

```yaml
type: Primary Button
height: 36px
font-size: 14px
color: #FFFFFF
background: #005CF1
border-radius: 8px
text: 点击上传
```

Hover：

```yaml
background: #004ED1
```

## 上传说明文字

**默认不显示说明文字。** 仅在业务明确要求时通过 `hint` 参数传入。

若展示说明文字：

```yaml
font-size: 12px
color: #999999
margin-top: 8px
```

禁止默认写死「只能上传 jpg/png 文件，且不超过500kb」等固定文案。

## 文件列表

单个文件项：

```yaml
font-size: 14px
color: #333333
icon: file
layout: 文件图标 + 文件名 + 操作区
```

操作区（`.upload-file-actions`）：

```yaml
margin-left: 200px   # 与文件名文字间距固定 200px
```

删除按钮：

```yaml
text: ✕
color: #999999
hover: #F04438
cursor: pointer
```

**禁止**在成功上传的文件项上显示绿色对勾。

失败状态：

```yaml
status-icon: ✕
color: #F04438
```

已上传文件（只读）：

- 显示文件名，可点击打开
- 不显示删除按钮
- 不显示成功对勾

不可上传状态：

```yaml
color: #999999
cursor: not-allowed
```

## AI 生成约束

必须：

- 上传按钮使用主色 Primary Button，高度 36px
- 文件名文字 14px `#333333`
- 删除按钮与文件名间距 200px
- 文件列表可删除（编辑态）
- 不可上传时文字 `#999999` 并禁止点击

禁止：

- 上传按钮使用非主色
- 上传控件高度大于 36px
- 成功文件显示绿色对勾
- 默认展示「只能上传 jpg/png 文件，且不超过500kb」
- 删除按钮不可点击（编辑态）

## 走查清单

- 是否只有「点击上传」按钮，无多余默认说明文案
- 删除按钮是否在文件名右侧 200px 处
- 成功文件是否未显示绿色对勾
- 只读附件是否可点击文件名、无删除按钮
- 上传失败是否有红色 ✕ 状态
