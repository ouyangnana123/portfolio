/* ============================================================
 * 已发布视频清单 —— 访客可见的视频在这里登记
 *
 * 使用方法：
 *   1. 把 mp4 文件放进 videos/ 文件夹（文件名建议用英文小写，如 campus-tour.mp4）
 *   2. 在下面 HOSTED_VIDEOS 数组里加一条记录，src 写相对路径 "videos/你的文件.mp4"
 *   3. 保存后 git add . && git commit -m "add video" && git push
 *      GitHub Pages 会在 1~2 分钟内自动更新，访客即可看到
 *
 * 路径自适应说明：
 *   - 部署到 https://用户名.github.io/              （根目录）→ src 解析为 /videos/xxx.mp4
 *   - 部署到 https://用户名.github.io/portfolio/    （子路径）→ src 解析为 /portfolio/videos/xxx.mp4
 *   - 本地直接打开 index.html                       （file://）→ 解析为相对当前目录
 *   下方 resolveSrc() 会自动处理，你只需写相对路径 "videos/xxx.mp4" 即可。
 *
 * 容量建议：
 *   - GitHub Pages 单个文件硬上限 100MB，但建议 ≤ 25MB 以提升加载速度
 *     （可用 HandBrake 或剪映导出 1080p H.264）
 *   - 超过 25MB 的视频建议上传到 Bilibili / 腾讯视频，再把链接放到简介里
 * ============================================================ */

/* 自动计算部署路径前缀，适配根目录与子路径部署 */
window.SITE_PREFIX = (function () {
  var p = window.location.pathname;            // 如 "/"  "/portfolio/"  "/portfolio/index.html"
  // 去掉结尾的文件名（如 index.html）
  var lastSlash = p.lastIndexOf("/");
  if (lastSlash >= 0 && /\.[a-z0-9]+$/i.test(p.slice(lastSlash + 1))) {
    p = p.slice(0, lastSlash);                  // 如 ""  "/portfolio"
  }
  // 去掉结尾的斜杠
  if (p.length > 0 && p.charAt(p.length - 1) === "/") {
    p = p.slice(0, -1);
  }
  return p || "";                               // 根目录部署返回 ""，子路径返回 "/portfolio"
})();

/* 把 "videos/xxx.mp4" 解析成带前缀的绝对路径 */
window.resolveVideoSrc = function (src) {
  // 已经是绝对 URL（http/https/data/blob）则原样返回
  if (/^(https?:|data:|blob:)/i.test(src)) return src;
  // 以 / 开头的视为已带绝对路径，原样返回
  if (src.charAt(0) === "/") return src;
  // 拼接前缀 + 相对路径
  return window.SITE_PREFIX + "/" + src;
};

window.HOSTED_VIDEOS = [
  {
    src: "videos/project-demo-2026-05-14.mp4",
    title: "项目演示视频 2026-05-14",
    desc: "项目实操演示（由 Bandicam 录制）。如需替换标题或简介，直接修改这里即可。"
  }
];
