# 陈哲豪 · 个人作品集

Neo-Brutalism 风格的单页作品集：简历展示 + 视频作品。纯 HTML/CSS/JS，零框架零构建。

## 文件结构

```
index.html      单页站点（全部样式与脚本内联）
videos.js       已发布视频清单 + 路径自适应函数
videos/         视频文件存放目录
```

## 视频路径配置原理

`videos.js` 顶部内置了 `SITE_PREFIX` 与 `resolveVideoSrc()` 两个工具，**自动适配三种部署场景**：

| 部署方式                         | 访问 URL                                   | `videos/xxx.mp4` 实际解析为       |
| -------------------------------- | ------------------------------------------ | --------------------------------- |
| GitHub Pages 子路径              | `https://user.github.io/portfolio/`        | `https://user.github.io/portfolio/videos/xxx.mp4` |
| GitHub Pages 根目录              | `https://user.github.io/`                  | `https://user.github.io/videos/xxx.mp4`           |
| 本地直接打开                     | `file:///D:/0毕设/index.html`              | `file:///D:/0毕设/videos/xxx.mp4`                 |

你**只需在 `videos.js` 的 `HOSTED_VIDEOS` 数组中写相对路径** `videos/你的文件.mp4`，无需关心部署位置。

## 如何让访客看到新视频

页面里的「本地上传」面板只是浏览器临时预览（ObjectURL），别人看不到。要正式发布视频：

1. 把 mp4 放进 `videos/`（建议 ≤ 25MB，文件名英文小写）
2. 在 `videos.js` 的 `HOSTED_VIDEOS` 数组中添加一条 `{ src, title, desc }`
3. `git add . && git commit -m "add video" && git push`
4. GitHub Pages 会在 1~2 分钟内自动重新部署

视频超过 25MB 时，建议上传 Bilibili / 腾讯视频，把链接写进视频简介或页脚。

## 部署到 GitHub Pages（完整步骤）

### 0. 准备：重命名仓库（强烈建议）

GitHub 仓库名直接决定 Pages URL，原名 `-`（单个连字符）会让 URL 变成 `https://ouyangnana123.github.io/-/`，不专业且可能引发工具解析问题。

**操作**：打开 `https://github.com/ouyangnana123/-` → **Settings** → **General** → **Repository name** → 改为 `portfolio` → 点击 **Rename**。

改名后更新本地 remote：

```bash
git remote set-url origin https://github.com/ouyangnana123/portfolio.git
git remote -v   # 验证
```

### 1. 推送代码到 GitHub（若已推送过可跳过）

```bash
git add .
git commit -m "适配 GitHub Pages 子路径部署"
git push -u origin main
```

### 2. 启用 GitHub Pages

1. 打开仓库 `https://github.com/ouyangnana123/portfolio` → **Settings** 标签
2. 左侧菜单找到 **Pages**（在 Code & automation 分组下）
3. **Build and deployment** 区域：
   - **Source**：选 `Deploy from a branch`
   - **Branch**：选 `main`，文件夹选 `/ (root)`
   - 点击 **Save**
4. 等待 1~2 分钟，页面顶部会出现绿色提示：
   ```
   Your site is live at https://ouyangnana123.github.io/portfolio/
   ```

### 3. 验证

- 浏览器打开 `https://ouyangnana123.github.io/portfolio/`
- 滚动到「视频作品」区，点击播放按钮，确认视频能正常加载播放
- 如果视频 404，按 F12 打开 DevTools → Network 面板查看请求 URL 是否包含 `/portfolio/` 前缀

### 4.（可选）绑定自定义域名

GitHub Pages 支持绑定自己的域名（如 `chenzhehao.com`）：

1. 仓库 → **Settings** → **Pages** → **Custom domain** → 输入域名 → **Save**
2. 在域名服务商处添加 CNAME 记录：`@ → ouyangnana123.github.io`
3. 勾选 **Enforce HTTPS** 强制 HTTPS 访问

## 常见问题

| 现象                              | 原因与解决                                                                  |
| --------------------------------- | --------------------------------------------------------------------------- |
| 视频显示但播放按钮点击无反应       | 检查浏览器是否拦截弹窗（dialog）。Chrome 设置允许该站点的弹窗               |
| 视频加载 404                       | 确认 `videos/` 目录下的文件名与 `videos.js` 中 `src` 字段大小写完全一致     |
| 网页打开空白                       | 检查 git push 是否成功，GitHub 仓库 `main` 分支根目录是否有 `index.html`    |
| Pages 显示 404 但代码已推送        | 等 1~2 分钟让 GitHub 完成构建；或检查 Settings → Pages 中 Branch 是否选对   |
| 视频加载缓慢                       | GitHub Pages 无 CDN 加速，国内访问较慢。可改用 Cloudflare Pages 部署        |
