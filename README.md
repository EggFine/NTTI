# NTTI - 不太正经人格测试

**在线体验：[ntti.eggfine.com](https://ntti.eggfine.com/)**

基于 SBTI 体系改进优化的 15 维度人格测试。通过 5 大模型、30 道随机题目，匹配 30+ 种不太正经的人格类型。

> SBTI 已经过时，NTTI 来了。

## 特性

- **15 维度 / 5 模型** - 自我、情感、态度、行动驱力、社交
- **90+ 随机题库** - 每维度 6-7 题，每次测试随机抽取 2 题，体验不重复
- **40+ 人格类型** - 包含隐藏类型（DRUNK）和兜底类型（HHHH）
- **明暗主题切换** - 默认亮色，支持暗色模式
- **紧凑结果页** - 5x3 维度网格 + SVG 圆环匹配度 + 可折叠描述

## 技术栈

- [Next.js 16](https://nextjs.org/) (App Router)
- [Tailwind CSS v4](https://tailwindcss.com/)
- TypeScript
- Bun

## 开发

```bash
bun install
bun run dev
```

打开 [http://localhost:3000](http://localhost:3000) 查看。

## 构建

```bash
bun run build
bun run start
```

## 项目结构

```
app/                  # Next.js App Router
  page.tsx            # 入口页
  layout.tsx          # 根布局（字体、主题脚本）
  globals.css         # Tailwind v4 主题 + 动画

lib/                  # 数据与逻辑
  types.ts            # TypeScript 类型
  scoring.ts          # 评分算法
  utils.ts            # 工具函数
  data/
    questions.ts      # 题库（每维度 4-5 题）
    personalities.ts  # 人格类型定义
    dimensions.ts     # 15 维度元数据

components/           # UI 组件
  TestApp.tsx         # 主控状态机
  IntroScreen.tsx     # 首页
  TestScreen.tsx      # 答题流程
  ResultScreen.tsx    # 结果页
  QuestionCard.tsx    # 题目卡片
  ProgressBar.tsx     # 进度条
  DimensionChart.tsx  # 5x3 维度网格
  ThemeToggle.tsx     # 明暗切换
```

## 致谢

SBTI 原作者：B站 [@Q肉儿串儿](https://space.bilibili.com/417038183)

NTTI 基于 SBTI 体系、题库和人格改进优化而成。

## 部署

托管于 [Cloudflare Pages](https://pages.cloudflare.com/)。

## License

MIT
