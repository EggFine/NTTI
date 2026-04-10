# NTTI - 不太正经人格测试

**在线体验：[ntti.eggfine.com](https://ntti.eggfine.com/)**

基于 SBTI 体系改进优化的 15 维度人格测试。通过 5 大模型、45 道随机题目，匹配 40+ 种不太正经的人格类型。

> SBTI 已经过时，NTTI 来了。

## NTTI vs SBTI 对比

| 特性 | SBTI（原版） | NTTI |
|------|-------------|------|
| 技术栈 | 单 HTML + 内联 JS/CSS | Next.js 16 + Tailwind v4 + TypeScript |
| 题目数量 | 30 题固定 | 600+ 题库，每次随机抽 45 题 |
| 每维度题数 | 2 题 | 3 题（更稳定的测量） |
| 人格类型 | 26 种 | 40+ 种 |
| 评分算法 | 硬阈值 + 等权距离 | 概率化等级 + 维度加权匹配 |
| 选项偏差控制 | 无（ABC 固定顺序） | 选项顺序前端随机打乱 |
| 一致性检测 | 无 | 自动检测矛盾作答，补充附加题 |
| 答题方式 | 全部题目一页显示 | 逐题卡片切换，键盘快捷键 |
| 分享功能 | 无 | 签名防伪二维码 + 结果海报生成 |
| 主题 | 仅亮色 | 明暗切换 |
| 多语言 | 无 | 中文 / English（i18n） |
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
- **多语言支持**：中文/英文自动检测，URL 路由切换，Cookie 记忆偏好

## 特性

- **15 维度 / 5 模型** — 自我、情感、态度、行动驱力、社交
- **600+ 随机题库** — 每维度 40 题，每次随机抽取 3 题
- **40+ 人格类型** — 含隐藏类型（DRUNK）和兜底类型（HHHH）
- **概率化评分** — 7级概率分布 + 维度加权匹配
- **一致性检测** — 矛盾作答自动补题，提高结果准确性
- **选项随机化** — ABC 顺序每题打乱，防止默认偏向
- **多语言 i18n** — 中文/英文，自动检测 + 手动切换
- **人格图鉴** — 收集解锁的人格，网格展示进度，新解锁有特效
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
  layout.tsx              # 根布局（最小化壳层）
  [lang]/
    layout.tsx            # 语言布局（字体、主题、I18nProvider）
    page.tsx              # 入口页
    codex/page.tsx        # 人格图鉴页
    r/page.tsx            # 分享结果页（/r?d=...&s=...）
  globals.css             # Tailwind v4 主题 + 动画

lib/
  i18n/
    index.ts              # i18n 配置、Dictionary 类型、字典加载器
    context.tsx           # I18nProvider + useI18n/useLocale/useDict
    locales/
      zh.ts               # 中文 UI 字典
      en.ts               # 英文 UI 字典
  data/
    locale.ts             # 按语言加载内容数据
    questions.ts          # 中文题库（600+ 题）
    questions.en.ts       # 英文题库
    personalities.ts      # 中文人格类型（40+ 种）
    personalities.en.ts   # 英文人格类型
    dimensions.ts         # 维度元数据 + DIMENSION_IDS
    dimensions.en.ts      # 英文维度数据
  types.ts                # TypeScript 类型
  scoring.ts              # 概率化评分 + 加权匹配 + 一致性检测
  share.ts                # 分享链接编码/解码/签名
  codex.ts                # 人格图鉴 localStorage 存储
  utils.ts                # 工具函数

components/
  TestApp.tsx             # 主控状态机 + 附加轮 + 解锁检测
  IntroScreen.tsx         # 首页（扫码 + 图鉴入口）
  ParticleField.tsx       # 粒子背景动画
  CodexView.tsx           # 人格图鉴（网格 + 解锁进度）
  TestScreen.tsx          # 答题流程 + 附加题提示
  ResultScreen.tsx        # 结果页（海报 + 分享）
  SimilarityRing.tsx      # 匹配度环形图
  SharedResultView.tsx    # 分享结果查看页
  ResultPoster.tsx        # 海报渲染（亮/暗双主题）
  QuestionCard.tsx        # 题目卡片（选项自动打乱）
  DimensionChart.tsx      # 维度网格
  ProgressBar.tsx         # 进度条
  QRCode.tsx              # 二维码组件
  ThemeToggle.tsx         # 明暗切换
  LanguageSwitcher.tsx    # 语言切换

proxy.ts                  # 语言检测 + URL 重定向
```

## 致谢

SBTI 原作者：B站 [@Q肉儿串儿](https://space.bilibili.com/417038183)

NTTI 基于 SBTI 体系、题库和人格改进优化而成。

## 部署

官方站点托管于 [Cloudflare Pages](https://pages.cloudflare.com/)。

### 使用 Release 产物部署

1. 前往 [Releases](https://github.com/EggFine/NTTI/releases) 下载最新的 `ntti-source-*.zip`
2. 解压后安装依赖并构建：
   ```bash
   bun install
   bun run build
   bun run start
   ```

### 从源码部署到 Cloudflare Pages

1. Fork 本仓库
2. 在 Cloudflare Pages 创建项目，关联 GitHub 仓库
3. 构建设置：框架预设 `Next.js`，构建命令 `bun run build`
4. 每次 push 自动部署

### 从源码部署到 Vercel

1. Fork 本仓库
2. 在 [Vercel](https://vercel.com) 导入项目
3. 框架会自动识别为 Next.js，无需额外配置

## CI/CD

每次 push 到 `main` 分支自动触发 GitHub Actions：

- Bun 安装依赖 + 构建
- 打包构建产物和源码为 zip
- 自动创建 [GitHub Release](https://github.com/EggFine/NTTI/releases)（tag 格式：`v日期-commit`）

也可在 Actions 页面手动触发，指定自定义版本号。

## License

MIT
