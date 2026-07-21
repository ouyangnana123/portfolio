# 个人作品集 — 任务概览

## 已完成

- **`index.html`** — Neo-Brutalism 风格单页（纯 HTML/CSS/JS，零框架），内容已替换为简历 PDF 中的真实信息：
  - Hero：陈哲豪 · Unity / VR 开发工程师
  - 简历区：个人简介、教育背景（浙大宁波理工学院）、实习经历（温州创创魔法科技）、项目经历（VR 触觉反馈 / 3D 教学课件 / HLMAPP 跨境系统）、校园实践（大创 / 互联网+）、研究经历（VR 虚拟面料）、技能矩阵（Unity / C# / OpenXR / CET-6 等）
  - 视频作品区：本地拖拽预览 + **videos.js 清单发布**双模式，弹窗播放
  - 页脚：918585617@qq.com / 18167297294
- **`videos.js`** — 已发布视频清单，登记后访客可见
- **`videos/`** — 视频存放目录（含说明文件）
- **`README.md`** — 视频发布方法 + GitHub / Cloudflare Pages 部署步骤
- **git 仓库已初始化**，首个提交 `deb1bb9` 完成（main 分支）

## 待用户操作

1. 把作品视频（≤25MB mp4）放入 `videos/` 并在 `videos.js` 登记
2. GitHub 新建公开仓库 → `git remote add origin ...` → `git push -u origin main`
3. Cloudflare Pages 连接该仓库（Framework: None，输出目录 `/`）→ 获得 `*.pages.dev` 域名
4. 页脚 GitHub / Bilibili 链接目前为占位，拿到真实地址后替换
