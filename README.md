# 银川产业园资产战略合作官网

这是一个用于展示企业历史、园区资产价值并吸引战略合作方的静态官网项目。网站支持中文和英文切换，突出企业历史、改制背景、社会责任、成熟运营、园区生态和资产升级机会，风格偏工业、地产与投资机构官网，适配电脑和手机。

## 技术栈

- Next.js
- React
- TypeScript
- Tailwind CSS
- lucide-react 图标

## 页面内容

- 首页 Hero 区
- 出售方案与资产范围
- 企业概况
- 资产亮点
- 项目机会
- 适合的合作方
- 企业历史时间轴
- 联系我们表单（提交后发送至 `liangzmu7@163.com`）
- 招商引资与资产合作内容
- 中文 / 英文切换按钮

联系表单已接入邮件提交服务，访客提交后会发送至 `liangzmu7@163.com`。首次启用时，邮箱可能会收到一封确认邮件，需点击确认后才能稳定接收后续留言。

## 本地运行

先安装依赖：

```bash
pnpm install
```

启动开发服务器：

```bash
pnpm dev
```

默认访问地址：

```text
http://localhost:3000
```

## 构建生产版本

```bash
pnpm build
pnpm start
```

## 主要文件

- `app/page.tsx`：首页入口
- `lib/content.ts`：网站中英文招商文案
- `components/SiteShell.tsx`：全站语言切换和内容控制
- `app/globals.css`：全局样式和 Hero 背景
- `components/`：页面各板块组件
- `tailwind.config.ts`：Tailwind 主题配置
