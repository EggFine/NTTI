# NTTI - 不太正经人格测试

**在线体验：[ntti.eggfine.com](https://ntti.eggfine.com/)**

基于 SBTI 体系改进优化的 15 维度人格测试。通过 5 大模型、45 道随机题目，匹配 40+ 种不太正经的人格类型。

> SBTI 已经过时，NTTI 来了。

## NTTI vs SBTI 对比

| 特性 | SBTI（原版） | NTTI |
|------|-------------|------|
| 技术栈 | 单 HTML + 内联 JS/CSS | Next.js 16 + Tailwind v4 + TypeScript |
| 题目数量 | 30 题固定 | 90+ 题库，每次随机抽 45 题 |
| 每维度题数 | 2 题 | 3 题（更稳定的测量） |
| 人格类型 | 26 种 | 40+ 种 |
| 评分算法 | 硬阈值 + 等权距离 | 概率化等级 + 维度加权匹配 |
| 选项偏差控制 | 无（ABC 固定顺序） | 选项顺序前端随机打乱 |
| 一致性检测 | 无 | 自动检测矛盾作答，补充附加题 |
| 答题方式 | 全部题目一页显示 | 逐题卡片切换，键盘快捷键 |
| 分享功能 | 无 | 签名防伪二维码 + 结果海报生成 |
| 主题 | 仅亮色 | 明暗切换 |
| 响应式 | 基础适配 | 全端响应式（手机/平板/桌面） |
| 动画 | 无 | Spring 物理动画（Motion 库） |
| 部署 | 静态 HTML | Cloudflare Pages + SSR |

## 创新点

### 测量学改进
- **概率化等级映射**：不再用硬阈值切分 L/M/H，而是根据分数计算每个等级的概率分布，消除"差1分跨等级"的断崖效应
- **维度加权匹配**：每种人格可定义核心维度权重（1-3），核心维度的差异对匹配度影响更大
- **选项随机打乱**：前端渲染时自动 shuffle ABC 顺序，消除"默认选中间/选C"的系统性偏差
- **一致性检测 + 补充题**：同一维度内3题最大分差≥2时自动追加补充题，循环直到一致或题库耗尽

### 产品功能
- **结果分享**：签名防伪 URL 编码，扫码查看他人结果并引导测试
- **海报生成**：亮色/暗色双主题海报，含二维码，一键保存图片
- **首页扫码**：PC 端显示 QR 码，手机扫码直接测试

## 特性

- **15 维度 / 5 模型** — 自我、情感、态度、行动驱力、社交
- **90+ 随机题库** — 每维度 6-7 题，每次随机抽取 3 题
- **40+ 人格类型** — 含隐藏类型（DRUNK）和兜底类型（HHHH）
- **概率化评分** — 7级概率分布 + 维度加权匹配
- **一致性检测** — 矛盾作答自动补题，提高结果准确性
- **选项随机化** — ABC 顺序每题打乱，防止默认偏向
- **分享二维码** — 签名防伪结果链接
- **结果海报** — 亮/暗双主题，含二维码，保存到相册
- **明暗主题** — 默认亮色，支持切换
- **全站响应式** — 手机、平板、桌面端适配
- **Spring 动画** — 基于 Motion 库的物理弹簧动画

## 技术栈

- [Next.js 16](https://nextjs.org/) (App Router)
- [Tailwind CSS v4](https://tailwindcss.com/)
- [Motion](https://motion.dev/) (Framer Motion)
- TypeScript / Bun

## 快速开始

```bash
bun install
bun run dev
```

打开 [http://localhost:3000](http://localhost:3000) 查看。

```bash
bun run build
bun run start
```

## 项目结构

```
app/
  page.tsx              # 入口页
  layout.tsx            # 根布局（字体、主题）
  globals.css           # Tailwind v4 主题 + 动画
  r/page.tsx            # 分享结果页（/r?d=...&s=...）

lib/
  types.ts              # TypeScript 类型
  scoring.ts            # 概率化评分 + 加权匹配 + 一致性检测
  share.ts              # 分享链接编码/解码/签名
  utils.ts              # 工具函数
  data/
    questions.ts        # 题库（每维度 6-7 题）
    personalities.ts    # 40+ 人格类型（含维度权重）
    dimensions.ts       # 15 维度元数据

components/
  TestApp.tsx           # 主控状态机 + 附加轮循环
  IntroScreen.tsx       # 首页（粒子背景 + 扫码入口）
  TestScreen.tsx        # 答题流程 + 附加题提示
  ResultScreen.tsx      # 结果页（海报 + 分享）
  SharedResultView.tsx  # 分享结果查看页
  ResultPoster.tsx      # 海报渲染（亮/暗双主题）
  QuestionCard.tsx      # 题目卡片（选项自动打乱）
  ProgressBar.tsx       # 进度条
  DimensionChart.tsx    # 维度网格
  QRCode.tsx            # 二维码组件
  ThemeToggle.tsx       # 明暗切换
```

## 致谢

SBTI 原作者：B站 [@Q肉儿串儿](https://space.bilibili.com/417038183)

NTTI 基于 SBTI 体系、题库和人格改进优化而成。

## 部署

托管于 [Cloudflare Pages](https://pages.cloudflare.com/)。

## License

MIT
