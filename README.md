# 陈哲豪 · 个人作品集

Neo-Brutalism 风格的单页作品集：简历展示 + 视频作品。纯 HTML/CSS/JS，零框架零构建。

## 文件结构

```
index.html      单页站点（全部样式与脚本内联）
videos.js       已发布视频清单（访客可见的视频在这里登记）
videos/         视频文件存放目录
```

## 如何让访客看到视频

页面里的「本地上传」只是浏览器临时预览（ObjectURL），别人看不到。
要发布视频：

1. 把 mp4 放进 `videos/`（单个 ≤ 25MB，文件名英文小写）
2. 在 `videos.js` 的 `HOSTED_VIDEOS` 数组中添加一条 `{ src, title, desc }`
3. `git push`，Cloudflare Pages 自动重新部署

视频超过 25MB 时，建议上传 Bilibili / 腾讯视频，把链接写进视频简介或页脚。

## 部署到 GitHub + Cloudflare Pages

```bash
# 1. 在 GitHub 网页上新建一个公开仓库（如 portfolio），不要勾选初始化 README

# 2. 本地推送（首次）
git remote add origin https://github.com/你的用户名/portfolio.git
git push -u origin main
```

然后到 Cloudflare：

1. 登录 dash.cloudflare.com → **Workers & Pages** → **Create** → **Pages** → **Connect to Git**
2. 授权并选择 `portfolio` 仓库
3. 构建设置：**Framework preset 选 None**，构建命令留空，输出目录填 `/`
4. 点击 **Save and Deploy**，约 1 分钟后获得 `https://portfolio.pages.dev` 域名
5.（可选）Pages 项目 → **Custom domains** 绑定自己的域名

之后每次 `git push` 都会自动重新部署。
