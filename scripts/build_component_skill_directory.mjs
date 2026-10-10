import fs from "node:fs/promises";
import path from "node:path";
import { SpreadsheetFile, Workbook } from "@oai/artifact-tool";

const outputDir = path.resolve("outputs/component-skill-directory");
const outputPath = path.join(outputDir, "Artisan组件Skill分类目录.xlsx");

const rows = [
  ["组件库入口", "Artisan Component Library", "component-library/SKILL.md", "组件规范总入口，负责判断任务类型并路由到具体规范"],
  ["页面模式与业务组合", "页面模式与组合组件", "page-patterns/page-patterns-and-composition.md", "查询+表格、指标卡+图表、左树右表、列表+详情抽屉、Search Area、Table Toolbar、Filter Area、Page Header、Bottom Action Bar"],
  ["数据展示", "Table 表格", "references/table.md", "表格、分页、操作列、空态、异常态、可编辑行"],
  ["数据展示", "Descriptions 描述列表", "references/descriptions.md", "详情字段、只读信息、摘要信息区、键值对展示"],
  ["数据展示", "Ellipsis Tooltip 文本省略", "references/ellipsis-tooltip.md", "长文本截断、多行省略、悬浮查看全文"],
  ["数据展示", "File Preview 文件预览", "references/file-preview.md", "Word、Excel、PDF 在线预览和文档查看"],
  ["查询与筛选", "Search Form 查询表单", "references/search-form.md", "普通查询区、列表查询条件、展开收起、查询重置"],
  ["查询与筛选", "Search Form Live 即时筛选", "references/search-form-live.md", "即时筛选、条件标签、筛选行、更多筛选弹层"],
  ["表单与输入", "Input 输入框", "references/input.md", "单行输入、搜索输入、禁用输入"],
  ["表单与输入", "Select 下拉选择", "references/select.md", "普通下拉、带图标选项、脱敏选择"],
  ["表单与输入", "Select Search 搜索选择", "references/select-search.md", "大量选项搜索、远程选择、下拉加载"],
  ["表单与输入", "Select Multiple Search 多选搜索", "references/select-multiple-search.md", "多选搜索、已选项标签、添加和删除入口"],
  ["表单与输入", "Dynamic Form 动态表单", "references/dynamic-form.md", "配置表单、分组表单、动态字段、只读表单"],
  ["表单与输入", "Date Picker Group 日期组", "references/date-picker-group.md", "开始结束日期、时间范围、并列日期输入"],
  ["表单与输入", "Switch 开关", "references/switch.md", "启用/停用、二元状态切换"],
  ["表单与输入", "Checkbox Tree 树形勾选", "references/checkbox-tree.md", "层级选择、树状勾选、分组选项"],
  ["导航与页面结构", "Header 页头", "references/header.md", "页头、页面标题、多级标签页、返回入口"],
  ["导航与页面结构", "Header Agile 轻量页头", "references/header-agile.md", "轻量页头、返回栏、标题栏、二级标签栏"],
  ["导航与页面结构", "Sub Header 小节标题", "references/sub-header.md", "小节标题、区块标题、表单分组标题"],
  ["导航与页面结构", "Breadcrumb 面包屑", "references/breadcrumb.md", "页面路径、首页图标、返回层级"],
  ["导航与页面结构", "Nav Menu 侧边导航", "references/nav-menu.md", "侧边导航、折叠菜单、多级菜单"],
  ["导航与页面结构", "Nav Anchor 页内锚点", "references/nav-anchor.md", "长页面锚点、详情页目录、页内导航"],
  ["导航与页面结构", "Nav Anchor Old 旧版锚点", "references/nav-anchor-old.md", "存量旧版锚点导航走查"],
  ["导航与页面结构", "Tabs 标签页", "references/tabs.md", "标签页、层级切换、下拉态"],
  ["导航与页面结构", "Segmented 分段控制器", "references/segmented.md", "轻量视图切换、分段控制"],
  ["弹层与容器", "Dialog 弹窗", "references/dialog.md", "确认窗口、双栏弹窗、提示弹窗、表单弹窗"],
  ["弹层与容器", "Collapse Panel 折叠面板", "references/collapse-panel.md", "可收起内容区、配置区块、折叠面板"],
  ["图表", "Chart Box 图表容器", "references/chart-box.md", "图表承载区、加载态、空态"],
  ["图表", "Chart Legend 图例", "references/chart-legend.md", "图例、颜色标识、数值和占比展示"],
  ["图表", "Chart Line 折线图", "references/chart-line.md", "单指标趋势、时间序列、走势分析"],
  ["图表", "Chart Multi Line 多折线图", "references/chart-multi-line.md", "多指标趋势、多系列时间序列"],
  ["图表", "Chart Bar 柱状图", "references/chart-bar.md", "单系列柱状图、分类统计"],
  ["图表", "Chart Double Bar 双柱图", "references/chart-double-bar.md", "两组数据对比、同期比较"],
  ["图表", "Chart Multi Bar 多柱图", "references/chart-multi-bar.md", "多系列分类对比"],
  ["图表", "Chart Bar and Line 柱线组合", "references/chart-bar-and-line.md", "数量+趋势、双指标关联"],
  ["图表", "Chart Multi Bar and Multi Line 复杂组合图", "references/chart-multi-bar-and-multi-line.md", "多柱多折线、多指标复杂分析"],
  ["图表", "Chart Pie 饼图 / 环图", "references/chart-pie.md", "占比构成、分类占比"],
  ["图表", "Chart Radar 雷达图", "references/chart-radar.md", "能力模型、多维评分"],
  ["上传、图标与编辑器", "Upload Files 文件上传", "references/upload-files.md", "文件上传、文件列表、删除操作、只读附件"],
  ["上传、图标与编辑器", "Upload Image 图片上传", "references/upload-image.md", "图片上传、头像上传、预览遮罩、失败状态"],
  ["上传、图标与编辑器", "Svg Icon 图标", "references/svg-icon.md", "图标尺寸、颜色继承、按钮图标、导航图标"],
  ["上传、图标与编辑器", "Custom Mavon Editor 编辑器", "references/custom-mavon-editor.md", "Markdown / 富文本编辑、预览区、内容输入页面"],
];

const summary = [...rows.reduce((map, [category, component]) => {
  const item = map.get(category) ?? { count: 0, names: [] };
  item.count += 1;
  item.names.push(component);
  map.set(category, item);
  return map;
}, new Map())].map(([category, item]) => [category, item.count, item.names.join("；")]);

const workbook = Workbook.create();
const directory = workbook.worksheets.add("组件分类目录");
const summarySheet = workbook.worksheets.add("分类汇总");

directory.getRange("A1:D1").values = [["一级分类", "二级组件 / 规范", "文件路径", "主要用途"]];
directory.getRange(`A2:D${rows.length + 1}`).values = rows;

summarySheet.getRange("A1:C1").values = [["一级分类", "组件数量", "包含组件"]];
summarySheet.getRange(`A2:C${summary.length + 1}`).values = summary;

const dirRange = directory.getRange(`A1:D${rows.length + 1}`);
const sumRange = summarySheet.getRange(`A1:C${summary.length + 1}`);

for (const [sheet, headerRange, usedRange] of [
  [directory, directory.getRange("A1:D1"), dirRange],
  [summarySheet, summarySheet.getRange("A1:C1"), sumRange],
]) {
  headerRange.format.fill = "#005CF1";
  headerRange.format.font = { color: "#FFFFFF", bold: true };
  headerRange.format.horizontalAlignment = "center";
  headerRange.format.verticalAlignment = "middle";
  headerRange.format.rowHeightPx = 32;
  usedRange.format.wrapText = true;
  usedRange.format.verticalAlignment = "top";
  usedRange.format.font = { name: "PingFang SC", size: 11 };
  usedRange.format.borders = { preset: "all", style: "thin", color: "#E2E8F0" };
}

directory.getRange(`A1:A${rows.length + 1}`).format.columnWidthPx = 150;
directory.getRange(`B1:B${rows.length + 1}`).format.columnWidthPx = 240;
directory.getRange(`C1:C${rows.length + 1}`).format.columnWidthPx = 330;
directory.getRange(`D1:D${rows.length + 1}`).format.columnWidthPx = 520;
summarySheet.getRange(`A1:A${summary.length + 1}`).format.columnWidthPx = 180;
summarySheet.getRange(`B1:B${summary.length + 1}`).format.columnWidthPx = 90;
summarySheet.getRange(`C1:C${summary.length + 1}`).format.columnWidthPx = 760;

await fs.mkdir(outputDir, { recursive: true });
const output = await SpreadsheetFile.exportXlsx(workbook);
await output.save(outputPath);
console.log(outputPath);
