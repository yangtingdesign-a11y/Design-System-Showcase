---
name: "artisan-design"
description: |
  企业级 SaaS UI 基础设计规范。当用户要求做 Artisan 风格页面、组件、Figma 还原、前端界面、HTML/CSS 页面、Element Plus 风格控制台或企业级后台设计时使用。若任务涉及具体组件细则、组件库页面、表格、查询区、弹窗、导航、图表、上传或表单组合，同时使用 artisan-component-library。
triggers:
  - "artisan-design"
---

# Artisan Design Skill

## 适用范围

企业级 SaaS UI 设计规范。在用户要求做页面、组件、设计还原、Figma 转代码、Element Plus 风格控制台、HTML/CSS 页面或提到 Artisan 设计时使用。生成代码须自写 CSS、精简 class、ECharts 图表；表格表头与 Figma 同行不换行，筛选列为漏斗图标非排序箭头。

## 关联 Skill

- 具体组件细则、组件库页面、表格、查询区、弹窗、导航、图表、上传和表单组合：使用 [artisan-component-library](../component-library/SKILL.md)

## 1. 视觉主题与设计哲学

### 视觉风格

国际化企业级 SaaS 平台设计风格。  

### 设计特征

- 极简主义  
- 企业级专业感  
- 国际化  
- 高级感  
- 高可读性  
- 高信息密度  
- 开发可落地

### 视觉原则

- 内容优先  
- 清晰的信息层级  
- 强调可读性与效率  
- 避免炫技式设计  
- 避免渐变滥用  
- 避免玻璃拟态  
- 避免过重阴影  
- 避免复杂纹理背景

### 界面特征

- 浅色背景为主  
- 卡片式布局  
- 柔和圆角  
- 轻量阴影  
- 统一栅格系统  
- 强调对齐与节奏感

### 一致性原则

- 颜色一致  
- 间距一致  
- 字体一致  
- 组件一致  
- 交互一致

### 情绪基调

- 高颜值  
- 高可用性  
- 企业级专业感  
- 国际大厂简约风格

### 风格参考

- Element Plus Design System  
- 百度云控制台  
- 华为云控制台  
⸻

# 2. 色彩体系

**颜色 Token**  


| Token          | 色值      | 用途            |
| -------------- | ------- | ------------- |
| Primary        | #005CF1 | 主按钮 / 链接 / 高亮 |
| Secondary      | #F9A063 | 辅助强调          |
| Background     | #F5F7FA | 页面背景          |
| Surface        | #FFFFFF | 卡片 / 弹窗       |
| Title          | #000000 | 页面标题          |
| Text Primary   | #333333 | 正文            |
| Text Secondary | #666666 | 辅助文字          |
| Text Disabled  | #999999 | 占位符           |
| Border         | #E2E8F0 | 边框            |
| Success        | #00C27D | 成功状态          |
| Warning        | #F9A063 | 警告状态          |
| Danger         | #F27C78 | 错误状态          |
| Info           | #73767A | 信息状态          |


## 色彩规则

- 禁止新增未定义色值  
- 主色视觉占比不超过 10%  
- 避免大面积纯蓝背景  
- 使用中性色作为视觉基础  
- 功能色仅用于状态表达  
- 禁止高饱和霓虹色  
- 禁止彩虹渐变  
- 禁止纯黑纯白大面积使用  
⸻

# 3. 字体与排版

## 字体家族

### 标题字体

- PingFang SC  
- Source Han Sans SC  
- Microsoft YaHei  
- Helvetica Neue  
- Arial  
- sans-serif

字重：  

- 400  
- 600  
- 800

适用于：  

- 页面标题  
- 模块标题  
- 数据指标  
⸻

### 正文字体

- PingFang SC  
- Source Han Sans SC  
- Microsoft YaHei  
- Helvetica Neue  
- Arial  
- sans-serif

字重：  

- 400  
- 600

适用于：  

- 正文  
- 表格  
- 表单  
- 标签  
⸻  
**字号体系**


| Token   | Size |
| ------- | ---- |
| XS      | 12px |
| SM      | 14px |
| MD      | 16px |
| LG      | 18px |
| XL      | 20px |
| H5      | 24px |
| H4      | 30px |
| H3      | 36px |
| H2      | 48px |
| H1      | 64px |
| Display | 72px |


**推荐使用规范**  


| 场景     | 规范         |
| ------ | ---------- |
| 卡片数据指标 | 40px / 600 |
| 模块标题   | 16px / 600 |
| 卡片标题   | 20px / 600 |
| 正文     | 14px       |
| 辅助文字   | 12px       |


## 排版规则

- 标题行高：1.2  
- 正文行高：1.5  
- 表格行高：1.5  
- 按钮行高：1  
- 大标题 ≥36px 使用 -0.02em 字距  
- 禁止 ALL CAPS  
- 保持统一命名规范  
⸻

# 4. 间距与网格

## 基础单位

- 4px  
- 8px

## 间距刻度

4 · 8 · 12 · 16 · 20 · 24 · 32 · 40 · 48 · 64 · 80 · 120  

## 栅格系统

- 12 列栅格  
- Gutter：24px  
⸻

# 5. 圆角与图标

**圆角体系**  


| 组件     | 圆角    |
| ------ | ----- |
| 输入框    | 4px   |
| Select | 4px   |
| 按钮     | 8px   |
| 小卡片    | 8px   |
| 卡片     | 12px  |
| 抽屉     | 12px  |
| 弹窗     | 16px  |
| Tag    | 999px |

### 非对称圆角（Figma 逐角还原）

圆角**不得**默认套用上表统一值，须按 Figma 节点**逐角**读取（如 `rounded-tr-[14px]`、`rounded-t-[14px]`、`rounded-[12px]`）。

| 规则 | 说明 |
| ---- | ---- |
| 对照截图 | `get_design_context` 若只写出单角 class，须结合截图确认其余三角是否也为圆弧，禁止擅自把未标注角设为 `0` |
| CSS 写法 | 使用完整 `border-radius: TL TR BR BL` 或分属性 `border-top-left-radius` 等，与稿一致 |
| 禁止 | 将「仅右上角 14px」误实现为「仅右上角 14px、左上 0」若设计稿左上亦为 14px |

**健康检查 · 右侧风险区（工作台2）**

| 区块 | 尺寸 / 间距 | 说明 |
| ---- | ----------- | ---- |
| 风险栈容器 | **250×191px**，相对内容区 `right: 0; top: 48px` | Figma `Frame 5` |
| 版本风险 外层 | **250×111px**，`top: -47px`；`padding: 6px 12px 1px 10px` | 背景 `#ECF3FE`，圆角 **12px** |
| 漏洞风险 外层 | **250×115px**，`top: 76px`；`padding: 6px 10px 1px 10px` | 背景 `#FFF4E6`，圆角 **14px 14px 12px 12px** |
| 标题行 | 高 **23px**；图标 **16×16px**，`margin-top: 4px` | 图标 + 12px/500 标题左对齐 |
| 风险统计内层白底 | **230×64px**，`padding: 10px 0`，`gap: 20px` | 背景 `#FFFFFF`，圆角 **8px** |
| 统计列 | 每列宽 **51px** | 高危列 `gap: 6px` 居中；中危列 `align-items: flex-start`、`gap: 4px`；低危列居中 `gap: 4px` |
| 数字色值 | 高危 `#F7635F` / 中危 `#F9A063` / 低危 `#FEB800` | 字号 **22px**；高危字重 **500**、中/低 **600** |

```css
.risk-panel.version { border-radius: 12px; }
.risk-panel.vuln { border-radius: 14px 14px 12px 12px; }
.risk-panel-stats { width: 230px; border-radius: 8px; }
```

## 图标风格

采用 Filled Icons 面性图标。  

参考：  

- Element Plus Icons  
- Material Symbols Rounded

视觉特征：  

- Rounded 圆角风格  
- 几何化设计  
- 简洁现代  
- 企业级 SaaS 风格

**图标尺寸**  


| 场景      | 尺寸   |
| ------- | ---- |
| 辅助信息    | 14px |
| 默认      | 16px |
| 导航 / 按钮 | 20px |
| 数据卡片    | 32px |


默认尺寸：16px  

### 表头筛选图标（Filter）

表格表头旁图标须与 Figma **语义与造型一致**，不得用近似图标替代。

| Figma 语义 | 造型 | 适用场景 | 禁止误用 |
| ---------- | ---- | -------- | -------- |
| **筛选** | **漏斗形**（上宽下窄梯形 + 下方短竖线/柄） | 「事项标题」「严重程度」等可筛选列 | 上下箭头、caret、chevron |
| **排序** | 三角 / 双向箭头（仅设计稿明确为排序时） | 排序列 | 漏斗形筛选符 |

实现要求：

- 尺寸：**16×16px**，与表头文字垂直居中，`gap: 4px`  
- 颜色：弱化灰约 `#5D719B`，或 `var(--text-secondary)`  
- 结构：`inline-flex` + `white-space: nowrap`  
- 优先使用 Figma `get_design_context` 返回的图标资源；自绘 SVG 须复刻**漏斗轮廓**  
- 参考：Element Plus `Filter`、Material **filter_list**，而非 `ArrowUp` / `Sort`

⸻  
**6. 深度与层级**  


| 层级      | 场景                     | 阴影                           |
| ------- | ---------------------- | ---------------------------- |
| Level 0 | 默认                     | 无                            |
| Level 1 | 卡片悬浮                   | 0 2px 8px rgba(0,0,0,0.05)   |
| Level 2 | 弹窗 / 抽屉                | 0 8px 24px rgba(0,0,0,0.08)  |
| Level 3 | Tooltip / Notification | 0 16px 48px rgba(0,0,0,0.12) |


禁止：  

- 霓虹光效  
- 毛玻璃  
- 拟物化阴影  
- 过重阴影  
⸻

# 7. 组件规范

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

Hover：  

- 当前颜色加深 8%-12%

Active：  

- 当前颜色加深 16%-20%

Disabled：  

- Opacity：40%-50%

Transition：  

- all 0.2s ease  
⸻

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

Focus：  

- 边框颜色：#005CF1  
- Ring：0 0 0 2px rgba(0,92,241,0.1)

Hover：  

- 边框加深 10%

Error：  

- 边框：#F27C78

Disabled：  

- 背景：#F5F7FA  
- 禁止交互  
⸻

## 卡片 Card

默认状态：  

- 背景：#FFFFFF  
- 边框：1px solid #E8EAEC  
- 圆角：12px  
- Padding：20px

卡片默认阴影：  

0 2px 4px rgba(255,255,255,0.1)  

⸻  

## 表格 Table

### 容器规范

- 表格放置于卡片容器内  
- 距离容器左右间距  20px
- **首列对齐**：「事项类型」列（表格第一列）内容距表格左边缘 **20px**；表头 `th:first-child` 与表体 `td:first-child` 须设置 `padding-left: 20px`，与 Figma 节点 `left: 0` + 容器 `px: 20px` 一致
- **表头图标尺寸**：带筛选/排序图标的表头，图标固定 **16×16px**（`width`/`height` 均为 16，`flex-shrink: 0`，`object-fit: contain`），与文字 `inline-flex` 横排、`gap: 4px`、垂直居中
- **列间距**：表头/表体单元格右侧 `padding-right: 12px`（末列 `20px`）；列宽参照 Figma 节点（1312px 内容区）：`事项类型 232`（含至「事项标题」起点间距）· `事项标题 446` · `影响范围 291` · `严重程度 122` · `更新时间 117` · `操作 104`

### 工具栏

主按钮：  

- 背景：#005CF1  
- 文字：#FFFFFF  
- 高度：32px  
- 圆角：4px  
- 字号：14px

次按钮：  

- 背景：#FFFFFF  
- 边框：1px solid #D9D9D9  
- 文字：#666666  
- 高度：32px  
- 圆角：4px

按钮间距：12px  

### 表格规范

功能：  

- 支持分页  
- 支持多选  
- 支持排序  
- 支持空状态  
- 支持加载状态

表头：  

- 背景：#F1F6FE
- 字号：14px  
- 字重：500  
- 颜色：#333333  
- 高度：45px

表格内容：  

- 字号：14px  
- 颜色：#333333  
- 行高：50px

边框：  

- 1px solid #EBEEF5

Hover：  

- 行背景：#F5F7FA

选中：  

- 使用主色弱高亮  
⸻

## 分页 Pagination

功能：  

- 页码切换  
- 上一页 / 下一页  
- 快速跳转  
- 总数展示

默认：  

- 每页 10 条

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
⸻

# 8. 动效与交互

Transition：  

- 0.15s ~ 0.25s  
- ease / ease-out

Hover：  

- 轻微上移  
- 阴影增强  
- 颜色过渡

Click：  

- scale(0.97)  
- 背景色变化

Loading：  

- 优先骨架屏  
- 避免过度 Spinner  
⸻

# 9. 响应式规则

## 设计基准

- 设计宽度：1440px  
- 最小宽度：1280px  
- 最大适配：2560px  
- 1336px 优化  
- 1920px 优化

## 桌面端 1280px–1599px

- 12 列栅格  
- 保持完整布局  
- 侧栏默认展开

## 标准宽屏 1600px–1919px

- 适度增加留白  
- 模块适度扩展

## 全高清 1920px–2559px

- 提高空间利用率  
- 增加内容密度  
- 保持紧凑布局

## 超宽屏 ≥2560px

- 使用 Max Width 限制  
- 推荐最大宽度：1800px–2200px  
- 禁止无限拉伸

## 图片规则

- Width：100%  
- Height：auto  
- 保持比例  
- 支持 object-fit: cover  
- 禁止变形

## 页面布局规范

页面整体布局：  

- 页面整体内边距：30px  
- 卡片与页面边缘保持统一安全距离  
- 页面内容区域禁止贴边布局

模块间距：  

- 卡片与卡片之间垂直间距：20px  
- 卡片与卡片之间水平间距：20px  
- 模块间保持统一留白节奏

卡片容器：  

- 卡片内部 Padding：20px  
- 卡片之间通过留白建立层级关系  
- 保持页面呼吸感与视觉节奏  
⸻

# 10. 品牌调性

- 专业  
- 国际化  
- 高效  
- 高级感  
- 企业级  
- 现代简约  
⸻

# 11. Do & Don't

## Do

- 使用留白建立层级  
- 每屏仅保留一个视觉重点  
- 使用真实数据填充设计稿  
- 保持组件一致性

## Don't

- 禁止纯黑文字  
- 禁止同一区域超过三种字号  
- 禁止无意义装饰  
- 禁止新增未定义色值  
- 禁止滥用渐变与阴影  
⸻

# 12. 核心设计原则

1. 内容优先

设计服务于内容。  

1. 一致性优先于完美

统一比孤立的完美更重要。  

1. 克制的优雅

每个元素都必须有存在意义。  

1. 可访问性

- 对比度 ≥ 4.5:1  
- 点击区域 ≥ 44px

1. 优先复用

优先扩展已有组件，而不是重新创造。  
⸻  

# 13. 前端实现规范（代码生成）

生成 HTML / 静态页面 / 设计还原代码时，除遵循上文视觉与组件规范外，还必须遵守本节。  

## 样式

- **禁止引入外部样式框架或 CDN**（如 Tailwind CSS、Bootstrap、UnoCSS、Element Plus 全量样式等）  
- 在页面内通过 `<style>` 或项目内独立 `.css` 文件**自行编写 CSS**  
- 颜色、字号、间距、圆角、阴影等须映射为 CSS 变量或语义化 class，取值来自本文档第 2–6 章 Token  
- **禁止**在交付物中出现 Tailwind 类名、`tailwind.config`、或 Tailwind CDN 引用

## HTML 与 class

- 每个 `div`（及其他元素）** class 尽可能少**，优先**每个元素仅 1 个语义化 class**  
- 将布局、颜色、字号、间距等**合并进该 class 的 CSS 规则**，避免在 HTML 上堆砌多个 utility class  
- 相同视觉的模块复用同一 class，通过父级选择器区分变体，而不是为每个节点重复组合类名

## 图表

- 折线图、柱状图、饼图、关系图等**数据图表统一使用 Apache ECharts**  
- **禁止**用手写 SVG、零散 Canvas 或静态截图代替应可配置的数据图表  
- 拓扑、关系类可视化优先使用 ECharts `graph` 等能力；若仅为装饰性示意，可用 CSS 布局表达，但仍不得用 Tailwind  
- 引入方式：优先复用项目已有 `echarts` 依赖；无依赖时可使用官方 CDN，且仅引入 ECharts，不捆绑其他 UI 库

## Figma 布局还原（单行 / 不换行）

从 Figma 生成或还原页面时，**以设计稿中的换行与宽度为准**，不得因列宽不足或默认样式导致多余换行。

### 判断规则

- Figma 中为**一行**的文案（表头、单元格、标签、链接、指标说明等），实现后必须仍为**一行**  
- 仅当 Figma 明确为多行文本（自动高度、固定多行、`\n`）时，才允许 `white-space: normal` 或换行  
- 还原前对照 Figma 节点宽度：列宽不得小于设计稿中该列内容单行所需宽度

### 表格（重点）

表头与单元格在 Figma 为单行时，必须同时满足：

| 要求 | 做法 |
|------|------|
| 禁止表头拆字 | 表头 `th` 使用 `white-space: nowrap` |
| 禁止表头+图标折行 | 带筛选图标的表头用 `display: inline-flex; align-items: center; gap: 4px; white-space: nowrap`，图标与文字同一 flex 行 |
| 筛选图标造型 | 须为**漏斗形筛选符**，禁止用排序箭头代替（见第 5 章「表头筛选图标」） |
| **表头图标 16px** | 筛选列图标必须 **16×16px**，不得缩放为 14px 或其他尺寸 |
| 禁止单元格内拆行 | 如「影响范围」中「数量 + 系统名」在同一文本框内一行展示时，单元格 `white-space: nowrap` |
| 列宽足够 | 为 `th`/`td` 设置不小于 Figma 的 `min-width`（或 `width`），「影响范围」等组合文案列通常 ≥ 180px |
| 避免表格挤压 | 宽表使用 `min-width` 撑开表格或横向滚动，不要用 `table-layout: fixed` 把列压窄导致换行 |

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

- 禁止在 Figma 为单行的表头/单元格上使用会导致折行的 `word-break: break-all`、`overflow-wrap: anywhere`（除非设计明确要求断词）  
- 禁止为省空间随意缩小列宽导致「严重程度」「1 个流水线 ACBC_GZH」等被拆成两行  
- 禁止用多个块级元素竖排堆叠来替代 Figma 中同一行内的文案（应合并为一行文本或 `inline`/`flex` 横排）

## 交付检查清单

- 无 Tailwind / 其他原子化 CSS 框架  
- 样式为自写 CSS，Token 与本文档一致  
- 单元素 class 数量已压缩合并  
- 数据图表由 ECharts 渲染  
- 表头、表体中与 Figma 一致的单行文案**未出现多余换行**（重点检查带筛选图标的表头、「影响范围」等列）  
- 表头筛选列为**漏斗形筛选图标**，未误用排序箭头  
- 「事项类型」首列 `padding-left: 20px`，距表格左缘 20px  
- 表头筛选图标 **16×16px**，与文字同行不换行  
- 健康检查风险卡片：外层 250px 宽、内层白底 **230×64px**；标题图标 **16px**；三列各 **51px**、间距 **20px**；中危列左对齐  
- 健康检查「漏洞风险」外层**左上 / 右上为 14px**，未误为左上直角  
- Figma 导出的 SVG 资源须使用 `.svg` 扩展名，禁止以 `.png` 引用 SVG 内容导致图片无法显示
