# 个人作品集 — 任务概览

## 已完成

### 项目代码
- **`index.html`** — Neo-Brutalism 风格单页（纯 HTML/CSS/JS，零框架），内容已替换为简历 PDF 中的真实信息：
  - Hero：陈哲豪 · Unity / VR 开发工程师
  - 简历区：个人简介、教育背景、实习经历、项目经历、校园实践、研究经历、技能矩阵
  - 视频作品区：本地拖拽预览 + videos.js 清单发布双模式，弹窗播放
  - 页脚：918585617@qq.com / 18167297294
- **`videos.js`** — 已发布视频清单 + **路径自适应函数**（SITE_PREFIX / resolveVideoSrc）
  - 自动适配 GitHub Pages 子路径（`/portfolio/`）、根目录、本地 file:// 三种部署场景
  - HOSTED_VIDEOS 里只需写相对路径 `videos/xxx.mp4`，无需关心部署位置
- **`videos/project-demo-2026-05-14.mp4`** — 演示视频（4.1MB）
- **`README.md`** — 重写为 GitHub Pages 完整部署流程，含重命名仓库 / push / 启用 Pages / 验证 / FAQ
- **`部署指南.html`** — 与作品集同款 Neo-Brutalism 风格的可视化部署指南，4 步操作 + 视频路径原理 + FAQ
- git 仓库已初始化，最新 commit 待推送：`适配 GitHub Pages 子路径部署`

## 待用户操作（按部署指南.html 执行）

1. **重命名 GitHub 仓库**：`-` → `portfolio`（Settings → Repository name → Rename）
2. **更新本地 remote**：
   ```bash
   git remote set-url origin https://github.com/ouyangnana123/portfolio.git
   git remote -v  # 验证
   ```
3. **推送代码**：
   ```bash
   git add .
   git commit -m "适配 GitHub Pages 子路径部署"
   git push -u origin main
   ```
4. **启用 GitHub Pages**：仓库 Settings → Pages → Source: Deploy from a branch → Branch: main / (root) → Save
5. **等待 1~2 分钟**，访问 `https://ouyangnana123.github.io/portfolio/` 验证
6. **页脚占位链接**：拿到真实 GitHub / Bilibili URL 后替换 `index.html` 中对应的 `href="#"`

## 关键技术决策

| 决策点 | 选择 | 原因 |
|--------|------|------|
| 托管平台 | GitHub Pages | 与 git 仓库零配置集成，4.1MB 视频远低于 100MB 限制 |
| 仓库名 | 改为 `portfolio` | 原 `-` 让 URL 变成 `ouyangnana123.github.io/-/`，不专业 |
| 视频路径 | 相对路径 + resolveVideoSrc 自适应 | 一种写法适配所有部署场景，避免子路径部署下视频 404 |
| 视频策略 | 保持 4.1MB mp4 随仓库部署 | 加载快，无需第三方视频平台 |

## 后续可选优化

- 视频转 WebM 格式（同等画质体积减少 30%）
- 绑定自定义域名（如 chenzhehao.com）
- 添加 Open Graph meta 标签，让社交平台分享时显示卡片预览
- 添加 Google Analytics 统计访问量
