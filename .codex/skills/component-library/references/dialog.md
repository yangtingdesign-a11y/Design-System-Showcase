---
name: artisan-ui-dialog-style
description: 当产品或设计师需要设计符合 Artisan UI Dialog 对话框组件风格的弹窗、确认窗口、双栏弹窗、提示弹窗或表单弹窗时使用。实现代码参考 css/app.css 中的 .modal 系列类名、js/lib/custom-select.js 弹窗下拉定位逻辑。
metadata:
  short-description: Artisan UI 弹窗设计规范
---

# Dialog 弹窗样式规范

用于需要用户在当前页面上完成确认、编辑、查看或对比的场景。

## 视觉规则

弹窗圆角：**8px**

### 弹窗头部

```yaml
height: 40px
background: #F1F6FE
padding-left: 20px
padding-right: 15px
title-font-size: 18px
title-color: #000000
title-font-weight: 600
close-icon-size: 16px
close-icon-hover-color: #005CF1
```

### 内容区

```yaml
padding: 10px 30px
overflow-y: auto
overflow-x: hidden
```

内容区域可滚动，横向滚动隐藏。弹窗内下拉面板挂载至 `document.body`，`position: fixed`，`z-index: 1500`（弹窗内最高层级，不可被遮挡）。

### 弹窗表单

```yaml
layout: 左右结构（Label 左列 + 控件右列）
label-width: 120px
label-text-align: right
control-text-align: left
required-mark: 文字前 *（.form-required）
textarea-group: form-group-align-top
```

### 弹窗下拉框

```yaml
panel-width: 与右侧 input/select 控件宽度相同
panel-align: 左边缘与控件左边缘对齐
position: fixed（挂载 document.body）
z-index: 1500
```

实现：以 `.select-control` 的 `getBoundingClientRect()` 设置下拉面板的 `width` / `min-width` / `max-width` 与 `left`，禁止下拉面板宽于或窄于触发控件。

### 底部按钮区

```yaml
padding: 20px 30px 30px
justify-content: center
button-height: 36px
button-border-radius: 4px
button-font-size: 14px
button-padding: 6px 15px
cancel-button:
  background: #FFFFFF
  border: 1px solid #005CF1
  color: #005CF1
```

按钮居中排列。

### 警告提示

```yaml
background: #FFF4E6
text-color: #FE8C00
icon-color: #FE8C00
icon-size: 16px
```

使用 `.modal-alert` + `.modal-alert-icon`。

## 双栏弹窗

双栏区域：
- 内容内边距：10px 20px 0
- 左右各占 50%
- 栏标题高度：40px
- 栏标题背景：`#F4F6F9`
- 栏边框：`#E6EAEE`
- 内容区内边距：12px

## CSS 类名

| 类名 | 用途 |
| ---- | ---- |
| `.modal-overlay` | 遮罩层 |
| `.modal` | 弹窗容器（圆角 8px） |
| `.modal-header` | 头部 40px `#F1F6FE` |
| `.modal-title` | 标题 18px `#000000` 600 |
| `.modal-close` | 关闭按钮 16px，Hover `#005CF1` |
| `.modal-body` | 内容区 `10px 30px`，纵向滚动 |
| `.modal-body .form-group` | 表单行：Label 120px 右对齐 + 控件左对齐 |
| `.modal-body .form-required` | 必填星号，位于 Label 文字前 |
| `.select-menu.is-fixed` | 弹窗下拉面板，宽度与控件一致 |
| `.modal-footer` | 底部按钮区，按钮居中，高 36px，圆角 4px |
| `.modal-alert` | 警告提示条 |

## 设计建议

- 简单确认用小弹窗，复杂编辑优先用中大尺寸弹窗或抽屉。
- 弹窗标题要明确动作或对象。
- 底部主按钮不宜超过一个。
- 双栏弹窗适合对比、转移、左右选择。

## 走查清单

- 弹窗圆角是否为 8px
- 头部是否为 40px 浅蓝背景 `#F1F6FE`
- 标题是否为 18px、`#000000`、字重 600
- 关闭图标是否为 16px，Hover 是否为主色
- 内容区是否为 `10px 30px` 且可纵向滚动
- 表单是否为 Label 右对齐 + 控件左对齐，`*` 是否在文字前
- 下拉面板宽度是否与右侧 input/select 控件相同
- 底部按钮是否居中、高度 36px、圆角 4px
- 取消按钮是否为白底 + 主色边框/文字
- 弹窗内下拉面板是否挂载 body 且 `z-index: 1500`，不可被遮挡
- 警告提示是否为 `#FFF4E6` 背景、`#FE8C00` 文字/图标
