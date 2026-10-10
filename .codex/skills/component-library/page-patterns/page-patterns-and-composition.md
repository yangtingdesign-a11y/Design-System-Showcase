---
name: component-library
description: 定义企业级 SaaS 复杂组件、组合组件、数据展示组件及布局规则。在用户实现 Card、Table、Pagination、Modal、Drawer、Tabs、Empty、查询区、表格工具栏，或提到组件库、Component Library、Artisan 组件规范时使用。Button/Input/Select/Form 等基础组件见 artisan-design skill。
---

# Component Library

组件库模块。定义企业级 SaaS 产品中的复杂组件、组合组件、数据展示组件及布局规则。

## 依赖

- [artisan-design](../Artisan-Design-Skill/SKILL.md) — 基础设计规范与 Design Token

说明：Button、Input、Select、Form 等基础组件已在 artisan-design 中定义；本 skill 聚焦复杂组件、组合组件与页面模式。

---

# 1. 组件库使用原则

## 1.1 优先级规则

优先复用已有组件与页面模式，再考虑扩展。

## 1.2 组件复用规则

同一产品内相同场景须使用同一组件结构与样式，禁止重复造轮子。

## 1.3 页面一致性规则

布局、间距、交互状态须与 artisan-design 全局规范一致。

## 1.4 AI 生成约束

见第 9 章。

---

# 2. 布局组件

## 2.1 Card 卡片

### 使用场景

信息分组、列表项、指标展示、表格容器。

### 结构规范

- 背景：#FFFFFF
- 边框：1px solid #E8EAEC
- 圆角：12px
- Padding：20px
- 默认阴影：`0 2px 4px rgba(255,255,255,0.1)`

### 内容间距规则

卡片内元素间距遵循 8px 栅格；标题与内容区间距 12–16px。

### Header 规范

标题左对齐，操作按钮右对齐；同一行 `flex` + `space-between`。

### Footer 规范

Footer 与内容区用 `border-top: 1px solid #EBEEF5` 分隔；操作按钮右对齐。

---

## 2.2 Page Container 页面容器

### 页面宽度

设计基准 1440px，最小 1280px。

### 页面间距

页面内边距 20–24px；区块间距 16–24px。

### 页面结构

顶栏 → 内容区 → 可选 Footer；内容区优先卡片式布局。

---

## 2.3 Section 区块容器

### 标题区

区块标题 16px / 600，副标题 14px / #666666。

### 内容区

与标题区间距 12px；内容遵循 Card 或 Table 规范。

### 操作区

操作按钮置于标题区右侧或 Footer 区，主按钮仅一个。

---

## 2.4 Page Header 页面顶部标题条

### 用途

用于展示页面标题、辅助说明和页面层级导航。适用于列表页、详情页、配置页、管理后台。

### 组成

Page Header → Title 页面标题 · Description 辅助说明 · Breadcrumb 面包屑（可选）

### 显示规则

- **无面包屑**：显示主标题 + 辅助说明（横向排列）
- **有面包屑**：仅显示面包屑，**不显示**主标题与辅助说明；面包屑置于 Page Header 内（`.page-header`），不得重复出现在内容区

### 尺寸与投影

- 高度：**48px**（`height: 48px`）
- 投影：`0 2px 4px 0 rgba(0, 0, 0, 0.1)`（`--shadow-elevated`）
- 卡片（`.card`、`.stat-card`）使用相同投影

### 页面标题

主标题：`font-size: 16px` · `font-weight: 600` · `color: #333333`

辅助说明：`font-size: 12px` · `font-weight: 400` · `color: #999999`

规则：主标题与辅助说明横向排列；主标题在左、说明在右；**主标题与辅助说明间距 10px**；内容垂直居中。

### Breadcrumb 面包屑

文字（路径节点、当前页）：`font-size: 16px` · `font-weight: 400` · `color: #333333`（不加粗）

返回箭头：置于最左侧 · **16×16px** 单线描边 SVG · `color: #333333` · 点击返回上一级

分隔符：`/` · `font-size: 12px` · `font-weight: 400` · `color: #999999` · 左右各 **8px** 间距

规则：单行显示；面包屑不得换行；链接 hover 可使用主色 `#005CF1`。

### AI 生成约束

必须：

- 标题 16px / 600 / #333333
- 说明 12px / #999999
- 标题与说明间距 **10px**
- 有面包屑时面包屑替代标题，放在 Page Header
- 面包屑文字 16px / 400 / #333333（不加粗）
- 使用 `/` 分隔符与左侧返回箭头

禁止：

- 有面包屑时同时显示页面标题
- 面包屑放在内容区重复展示
- 面包屑换行
- 面包屑文字加粗（`font-weight: 600`）

实现：`.page-header` + `.page-header-row` + `.page-header-title` + `.page-header-desc` + `.breadcrumb` + `.breadcrumb-back` + `.breadcrumb-link` + `.breadcrumb-sep` + `.breadcrumb-current`

---

## 2.5 Bottom Action Bar 底部操作栏

### 用途

用于详情页、编辑页、新建页底部固定操作区域。

适用场景：新建页面 · 编辑页面 · 详情页面 · 表单提交页面

### 结构

Bottom Action Bar → Secondary Button（可多个）· Primary Button（仅一个）

### 容器规范

独立固定容器：

- `background: #FFFFFF`
- `height: 64px`
- `padding: 0 24px`

### 阴影规范

顶部向上投影，与页面内容区分：

- `box-shadow: 0 -2px 8px rgba(0, 0, 0, 0.08)`

规则：阴影方向向上；页面滚动时始终保持可见；与内容区域形成层级区分。

### 布局规范

- `display: flex`
- `align-items: center`
- `justify-content: center`
- `gap: 12px`

规则：按钮水平居中排列；主按钮位于最右侧；辅助按钮位于主按钮左侧。

示例：`返回` `取消` → `提交`（主按钮在最右）

### 按钮规范

主按钮：仅允许一个 · 使用主色按钮（`#005CF1` / `.btn-primary`）· 用于提交、保存、新建、发布等核心操作 · **必须位于最右侧**

辅助按钮：使用次按钮样式 · 用于取消、返回、上一步等辅助操作

主按钮优先级（详情页多操作时）：`分配` > `完成处理` > `工单确认` > `开始处理` > 其余操作；有「分配」时「分配」为主按钮

### 页面结构关系

```text
Page Header → Filter Panel（可选）→ Content Card → Bottom Action Bar
```

内容区须预留底部空间（`padding-bottom` 含 64px 操作栏高度），避免内容被遮挡。

### AI 生成约束

必须：

- 固定在页面底部
- 使用独立白色容器
- 顶部增加向上投影
- 按钮水平居中
- 同一区域仅允许一个主按钮
- 主按钮位于最右侧
- 非主操作全部使用辅助按钮

禁止：

- 出现多个主按钮
- 底部操作栏跟随页面滚动消失
- 按钮靠左排列
- 取消按钮使用主色
- 缺少顶部阴影

实现：`.bottom-action-bar` + `.main-area.has-bottom-action-bar`

---

# 3. 数据展示组件

## 3.1 Table 表格

见「基础组件规范 → 表格 Table」详细定义。

### Toolbar 规范

见「Table Toolbar 表格工具栏」。

### Header / Body / Column / Filter / Sort / Empty / Loading / 分页规范

见下文表格与分页详细章节。

### 禁止事项

- 禁止表头拆字、筛选图标误用排序箭头
- 禁止随意压窄列宽导致换行
- 禁止自创表格结构

---

## 3.2 Data Card 数据卡片

### 指标卡

单指标 + 数值 + 可选趋势，置于 Card 内，Padding 20px。

### 趋势卡

指标 + 迷你图表（ECharts），高度建议 80–120px。

### 统计卡

多指标横排或网格，间距 16px。

---

## 3.3 Description 描述列表

### 键值对布局

标签 #666666，值 #333333；行高 32–40px。

### 多列布局

2–3 列，列间距 24px，响应式下可折为单列。

### 详情页规范

用于详情抽屉/详情页，标签宽度固定（如 120px），值区自适应。

---

# 4. 导航组件

## 4.1 Tabs 标签页

### 默认

字号 14px，颜色 #666666，底部分割线 #E9E9E9。

### 当前状态

颜色 #005CF1，底部 2px 主色指示线。

### 切换规则

切换不刷新整页；内容区与 Tab 间距 16px。

---

## 4.2 Breadcrumb 面包屑

见 **2.4 Page Header** 中 Breadcrumb 规范。有面包屑时在 Page Header 展示并替代标题；文字 16px / 400 / #333333（不加粗）；左侧返回箭头 + `/` 分隔符。

### 最大层级

建议不超过 4 级；超出时中间层级可折叠为 `...`。

---

# 5. 反馈组件

## 5.1 Empty 空状态

### 插画 / 标题 / 描述 / 操作按钮规范

插画 120–160px；标题 14px #333；描述 14px #999；可选主按钮一个。

---

## 5.2 Loading 加载状态

### 页面 / 区块 / 表格加载

页面级居中 Spinner 或骨架屏；区块/表格优先骨架屏，避免全屏遮罩滥用。

---

## 5.3 Result 结果页

### 成功 / 失败 / 无权限 / 无数据

统一 Result 布局：图标 + 标题 + 描述 + 操作；成功 #52C41A，失败 #F5222D。

---

# 6. 弹层组件

## 6.1 Modal 弹窗

### 使用场景

确认操作、短表单、关键信息展示。

### 结构规范

标题 + 内容 + Footer 操作区；宽度 480–720px。

### 操作区规范

取消（次按钮）+ 确认（主按钮），右对齐，间距 12px。

---

## 6.2 Drawer 抽屉

### 使用场景

详情、长表单、辅助面板。

### 宽度规范

默认 480px；复杂详情 720px。

### 内容规范

Header 固定，Body 可滚动，Footer 可选固定操作区。

---

# 7. 业务组合组件

## 7.1 Search Area 查询区域

组成：Input、Select、DatePicker、Search Button、Reset Button。

布局：表单项横排，间距 12px；换行时间距 16px；查询按钮组右对齐或紧随末项。

---

## 7.2 Table Toolbar 表格工具栏

组成：新建、导出、批量操作。

布局：主操作左对齐，次操作/批量右对齐；与表格间距 16px。

---

## 7.3 Filter Area 筛选区

组成：标签筛选、下拉筛选、快捷筛选。

布局：标签筛选在上，下拉/快捷筛选横排；与内容区间距 12px。

---

# 8. 企业级 SaaS 页面模式

## 8.1 查询 + 表格

最常见模式：Search Area → Table Toolbar → Table + Pagination。

## 8.2 指标卡 + 图表

数据分析模式：Data Card 行 → 图表 Card。

## 8.3 左树右表

资源管理模式：左侧树 240–320px，右侧 Table。

## 8.4 列表 + 详情抽屉

运维管理模式：左侧列表/卡片 + 右侧或 Drawer 详情。

---

# 9. AI 生成约束

必须：

- 优先使用已有组件
- 优先使用页面模式
- 遵循 Table 规范
- 遵循 Card 规范

禁止：

- 自创组件
- 修改组件结构
- 修改组件交互逻辑
- 忽略组件规范

---

# 10. 基础组件规范（详细）

## 按钮 Button

### 主按钮

- 背景：#005CF1
- 文字：#FFFFFF
- 圆角：8px
- Padding：0 20px

高度：

- Small：32px
- Default：36px
- Large：40px

规则：

- 同一区域仅允许一个主按钮
- 用于核心操作

### 次按钮

- 背景：#FFFFFF
- 边框：1px solid #D9D9D9
- 文字：#666666
- 圆角：8px

### 文字按钮

- 颜色：#005CF1
- 无背景
- 无边框

按钮间距：12px

### 交互状态

Hover：当前颜色加深 8%–12%

Active：当前颜色加深 16%–20%

Disabled：Opacity 40%–50%

Transition：`all 0.2s ease`

---

## 输入框 Input

默认状态：

- 高度：40px
- 背景：#FFFFFF
- 边框：1px solid #D9D9D9
- 圆角：8px
- Padding：10px 12px
- 字号：14px
- 文字颜色：#333333
- 占位文字：#999999

Focus：边框 #005CF1；Ring `0 0 0 2px rgba(0,92,241,0.1)`

Hover：边框加深 10%

Error：边框 #F27C78

Disabled：背景 #F5F7FA，禁止交互

---

## 卡片 Card

默认状态：

- 背景：#FFFFFF
- 边框：1px solid #E8EAEC
- 圆角：12px
- Padding：20px
- 默认阴影：`0 2px 4px rgba(255,255,255,0.1)`

---

## 表格 Table

### 容器规范

- 表格放置于卡片容器内
- 距离容器左右间距 20px
- **首列对齐**：第一列内容距表格左边缘 20px；`th:first-child` / `td:first-child` 须 `padding-left: 20px`
- **表头图标尺寸**：筛选/排序图标固定 **16×16px**（`flex-shrink: 0`，`object-fit: contain`），与文字 `inline-flex` 横排、`gap: 4px`、垂直居中
- **列间距**：单元格 `padding-right: 12px`（末列 20px）

### 工具栏

主按钮：背景 #005CF1，文字 #FFFFFF，高度 32px，圆角 4px，字号 14px

次按钮：背景 #FFFFFF，边框 1px solid #D9D9D9，文字 #666666，高度 32px，圆角 4px

按钮间距：12px

### 表格规范

功能：分页、多选、排序、空状态、加载状态

表头：背景 #F1F6FE，字号 14px，字重 500，颜色 #333333，高度 45px

表格内容：字号 14px，颜色 #333333，行高 50px

边框：1px solid #EBEEF5

Hover：行背景 #F5F7FA

选中：主色弱高亮

### 表头筛选图标（Filter）

表格表头旁图标须与 Figma **语义与造型一致**，不得用近似图标替代。

| Figma 语义 | 造型 | 适用场景 | 禁止误用 |
| ---------- | ---- | -------- | -------- |
| **筛选** | **漏斗形**（上宽下窄梯形 + 下方短竖线/柄） | 可筛选列 | 上下箭头、caret、chevron |
| **排序** | 三角 / 双向箭头 | 排序列 | 漏斗形筛选符 |

实现要求：

- 尺寸：**16×16px**，与表头文字垂直居中，`gap: 4px`
- 颜色：弱化灰约 `#5D719B`，或 `var(--text-secondary)`
- 结构：`inline-flex` + `white-space: nowrap`
- 优先使用 Figma `get_design_context` 返回的图标资源
- 参考：Element Plus `Filter`、Material **filter_list**

### 表格（重点）

表头与单元格在 Figma 为单行时，必须同时满足：

| 要求 | 做法 |
| ---- | ---- |
| 禁止表头拆字 | 表头 `th` 使用 `white-space: nowrap` |
| 禁止表头+图标折行 | 带筛选图标的表头用 `inline-flex; align-items: center; gap: 4px; white-space: nowrap` |
| 筛选图标造型 | 须为**漏斗形筛选符**，禁止用排序箭头代替 |
| **表头图标 16px** | 筛选列图标必须 **16×16px** |
| 禁止单元格内拆行 | 组合文案在同一文本框内一行展示时，单元格 `white-space: nowrap` |
| 列宽足够 | 为 `th`/`td` 设置不小于 Figma 的 `min-width` |
| 避免表格挤压 | 宽表使用 `min-width` 或横向滚动，勿用 `table-layout: fixed` 压窄列 |

### 推荐 CSS 模式

```css
.data-table thead th {
  white-space: nowrap;
}

.data-table .th-filter {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  white-space: nowrap;
}

.data-table .th-filter .icon-filter {
  width: 16px;
  height: 16px;
  flex-shrink: 0;
  color: #5d719b;
}

.data-table .cell-nowrap {
  white-space: nowrap;
}
```

### 禁止

- 禁止在 Figma 为单行的表头/单元格上使用会导致折行的 `word-break: break-all`、`overflow-wrap: anywhere`
- 禁止为省空间随意缩小列宽导致文案被拆成两行
- 禁止用多个块级元素竖排堆叠来替代 Figma 中同一行内的文案

---

## 分页 Pagination

功能：页码切换、上一页 / 下一页、快速跳转、总数展示

默认：每页 10 条

分页按钮：

- 高度：32px
- 最小宽度：32px
- 圆角：4px

当前页：

- 背景：#005CF1
- 文字：#FFFFFF

默认页码：

- 背景：#FFFFFF
- 边框：1px solid #D9D9D9
- 文字：#666666

布局：

- 顶部间距：16px
- 分页右对齐
- 总数左对齐
