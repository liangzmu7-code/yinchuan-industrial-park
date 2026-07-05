# 银川产业园资产战略合作官网

这是一个用于展示企业历史、园区资产价值并吸引战略合作方的静态官网项目。网站采用中英对照展示，中文为主、英文置于中文下方并使用较小字号，风格偏工业、地产与投资机构官网，适配电脑和手机。

## 技术栈

- Next.js
- React
- TypeScript
- Tailwind CSS
- lucide-react 图标

## 页面内容

- 首页 Hero 区
- 企业概况
- 资产亮点
- 项目机会
- 适合的合作方
- 企业历史时间轴
- 联系我们表单
- 中英对照展示

联系表单当前为前端展示版本，提交后会显示“感谢您的留言，我们将尽快联系您。”，暂未接入后台或邮件服务。

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
- `lib/content.ts`：中英双语文案
- `components/SiteShell.tsx`：全站中英对照内容控制
- `app/globals.css`：全局样式和 Hero 背景
- `components/`：页面各板块组件
- `tailwind.config.ts`：Tailwind 主题配置
