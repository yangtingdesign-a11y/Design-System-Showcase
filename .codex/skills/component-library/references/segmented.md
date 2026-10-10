---
name: artisan-ui-segmented-style
description: 当产品或设计师需要设计符合 Artisan UI Segmented 分段控制器组件风格的二选一、多选项模式切换或轻量视图切换时使用。
metadata:
  short-description: Artisan UI 分段控制器设计规范
---

# Artisan UI Segmented 分段控制器样式规范

用于少量互斥选项切换，适合视图模式、统计口径、状态类型切换。

## 尺寸规则

支持三种尺寸：
- Medium：120px × 40px
- Small：108px × 36px
- Mini：90px × 30px

默认样式：
- 背景：白色
- 边框：`#DCDCDC`
- 文字：`#666666`
- 字号：14px
- 首项圆角：4px 0 0 4px
- 末项圆角：0 4px 4px 0

选中态：
- 背景：主色 `#005CF1`
- 边框：主色
- 文字：白色

禁用态：
- 背景：`#F7F7F7`
- 边框：`#DCDCDC`
- 文字：`#999999`

## 设计建议

- 选项数量建议 2 到 4 个。
- 不适合承载长文案或复杂筛选。
- 同组分段宽度应一致。
- 选中态需要清晰，不只靠边框变化。

## 走查清单

- 尺寸是否使用 medium/small/mini 之一。
- 首尾圆角是否正确。
- 选中项是否使用主色底。
- 禁用态是否明显不可操作。
