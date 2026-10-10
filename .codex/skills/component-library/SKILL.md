---
name: artisan-component-library
description: 企业级 Artisan UI 组件库入口。当用户设计或实现后台页面、组件库页面、表格列表、查询筛选、弹窗、导航、表单组合、图表、上传、详情展示或组件走查时使用。使用时必须同时遵循 artisan-design，并按组件类型读取 references 中的具体规范；不要一次性加载所有组件规范。
metadata:
  short-description: Artisan UI 组件库入口与组件规范索引
---

# Artisan Component Library

这是 Artisan UI 组件库的总入口，负责把任务路由到具体组件规范、页面模式和业务组合规范。

## 必须关联

- 基础设计语言：[artisan-design](../Artisan-Design-Skill/SKILL.md)
- 页面模式与业务组合组件：[page-patterns-and-composition](page-patterns/page-patterns-and-composition.md)

所有组件设计、页面实现、Figma 还原和代码生成，都必须先遵循 `artisan-design` 的色彩、字体、间距、圆角、阴影、信息密度和企业级 SaaS 气质。

## 使用方式

1. 先判断用户要做的是页面、组件、走查还是设计还原。
2. 始终遵循 `artisan-design`。
3. 如涉及整页搭建、业务组合组件或页面结构，读取 `page-patterns/page-patterns-and-composition.md`。
4. 只读取当前任务相关的组件 reference，不要一次性加载全部组件规范。
5. 输出前按相关组件的走查清单自检。

## 目录职责

- `references/`：单个组件规范，如 Table、Dialog、Select、ChartLine。
- `page-patterns/`：页面模式、业务组合组件和页面结构组件，如查询 + 表格、左树右表、Search Area、Page Header。

## 组件路由

### 页面模式与业务组合

- 查询 + 表格、指标卡 + 图表、左树右表、列表 + 详情抽屉：读 [page-patterns-and-composition](page-patterns/page-patterns-and-composition.md)
- Search Area、Table Toolbar、Filter Area 等业务组合组件：读 [page-patterns-and-composition](page-patterns/page-patterns-and-composition.md)
- Card、Page Container、Section、Page Header、Bottom Action Bar 等页面结构组件：读 [page-patterns-and-composition](page-patterns/page-patterns-and-composition.md)

### 数据展示

- 表格、分页、操作列、空态、异常态、可编辑行：读 [table](references/table.md)
- Tag 标签、状态标签、语义色板、流程状态、风险/成功/中性标签：读 [tag](references/tag.md)
- 描述列表、详情字段、只读信息、摘要信息区：读 [descriptions](references/descriptions.md)
- 长文本截断、多行省略、悬浮查看全文：读 [ellipsis-tooltip](references/ellipsis-tooltip.md)
- Word、Excel、PDF 在线预览和文档查看：读 [file-preview](references/file-preview.md)

### 查询与筛选

- 普通查询区、列表查询条件、展开收起、查询重置：读 [search-form](references/search-form.md)
- 即时筛选、条件标签、筛选行、更多筛选弹层：读 [search-form-live](references/search-form-live.md)

### 表单与输入

- 单行输入、搜索输入、禁用输入：读 [input](references/input.md)
- 普通下拉选择、带图标选项、脱敏选择：读 [select](references/select.md)
- 大量选项搜索、远程选择、下拉加载：读 [select-search](references/select-search.md)
- 多选搜索、已选项标签、添加和删除入口：读 [select-multiple-search](references/select-multiple-search.md)
- 动态表单、配置表单、分组表单、只读表单：读 [dynamic-form](references/dynamic-form.md)
- 开始结束日期、时间范围、并列日期输入：读 [date-picker-group](references/date-picker-group.md)
- 启用停用、二元状态切换：读 [switch](references/switch.md)
- 树状勾选、层级选择、分组选项：读 [checkbox-tree](references/checkbox-tree.md)

### 导航与页面结构

- 页头、页面标题、多级标签页、返回入口：读 [header](references/header.md)
- 轻量页头、返回栏、标题栏、二级标签栏：读 [header-agile](references/header-agile.md)
- 小节标题、区块标题、表单分组标题：读 [sub-header](references/sub-header.md)
- 面包屑、页面路径、首页图标：读 [breadcrumb](references/breadcrumb.md)
- 侧边导航、折叠菜单、多级菜单：读 [nav-menu](references/nav-menu.md)
- 页内导航、长页面锚点、详情页目录：读 [nav-anchor](references/nav-anchor.md)
- 存量旧版锚点导航走查：读 [nav-anchor-old](references/nav-anchor-old.md)
- 标签页、层级切换、下拉态：读 [tabs](references/tabs.md)
- 分段控制器、轻量视图切换：读 [segmented](references/segmented.md)

### 弹层与内容容器

- 弹窗、确认窗口、双栏弹窗、提示弹窗、表单弹窗：读 [dialog](references/dialog.md)
- 折叠面板、可收起内容区、配置区块：读 [collapse-panel](references/collapse-panel.md)

### 图表

- 图表容器、加载态、空态承载区：读 [chart-box](references/chart-box.md)
- 图例、颜色标识、数值和占比展示：读 [chart-legend](references/chart-legend.md)
- 单指标趋势、时间序列、走势分析：读 [chart-line](references/chart-line.md)
- 多指标趋势、多系列时间序列：读 [chart-multi-line](references/chart-multi-line.md)
- 单系列柱状图、分类统计：读 [chart-bar](references/chart-bar.md)
- 双柱图、两组数据对比、同期比较：读 [chart-double-bar](references/chart-double-bar.md)
- 多柱图、多系列分类对比：读 [chart-multi-bar](references/chart-multi-bar.md)
- 柱线组合、数量加趋势、双指标关联：读 [chart-bar-and-line](references/chart-bar-and-line.md)
- 多柱多折线复杂多指标分析：读 [chart-multi-bar-and-multi-line](references/chart-multi-bar-and-multi-line.md)
- 饼图、环形图、占比构成：读 [chart-pie](references/chart-pie.md)
- 雷达图、能力模型、多维评分：读 [chart-radar](references/chart-radar.md)

### 上传、图标与编辑器

- 文件上传、文件列表、删除操作、只读附件：读 [upload-files](references/upload-files.md)
- 图片上传、头像上传、预览遮罩、失败状态：读 [upload-image](references/upload-image.md)
- 图标尺寸、颜色继承、按钮图标、导航图标：读 [svg-icon](references/svg-icon.md)
- Markdown / 富文本编辑区、预览区、内容输入页面：读 [custom-mavon-editor](references/custom-mavon-editor.md)

## 输出约束

- 不新增脱离 `artisan-design` 的颜色、字号、圆角、阴影和间距。
- 不把组件规范改写成营销页风格，后台产品优先保证清晰、稳定、可扫描。
- 组件规则冲突时，以更具体的组件 reference 为准；整页组合和业务组件以 `page-patterns/page-patterns-and-composition.md` 为准；没有具体规则时，以 `artisan-design` 为准。
