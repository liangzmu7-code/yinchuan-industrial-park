export type Language = "zh" | "en";

export const siteContent = {
  zh: {
    languageLabel: "中文",
    languageSwitch: "EN",
    nav: [
      { label: "企业概况", href: "#overview" },
      { label: "资产亮点", href: "#assets" },
      { label: "项目机会", href: "#opportunity" },
      { label: "发展历程", href: "#history" },
      { label: "联系我们", href: "#contact" }
    ],
    header: {
      brand: "银川产业园资产",
      subtitle: "战略合作项目",
      cta: "洽谈合作",
      ariaHome: "返回首页"
    },
    hero: {
      eyebrow: "宁夏银川 · 贺兰德胜工业园区 · 成熟运营资产",
      title: "一座扎根银川六十余年的产业园资产，正在寻找新的战略伙伴",
      subtitle:
        "从1963年的国有粮食企业，到今天成熟运营的产业园区，我们希望与有长期视野的投资者共同推动资产升级。",
      primary: "了解项目",
      secondary: "联系我们",
      stats: [
        ["60余年", "本地产业根基"],
        ["2007至今", "园区化运营"],
        ["成熟租户", "稳定现金流"],
        ["可升级土地", "后续开发空间"]
      ]
    },
    overview: {
      eyebrow: "Company Profile",
      title: "从国有粮食企业到成熟产业园运营主体",
      description:
        "这不是一块孤立土地，也不是单一厂房资产，而是一套经过多年运营验证的产业空间、租户基础与区域关系网络。",
      points: [
        "前身始建于1963年，曾承担本地粮食加工与民生保供责任。",
        "1999/2000年前后完成企业改制，由家族企业接手并持续经营。",
        "2006-2007年整体搬迁至宁夏银川贺兰德胜工业园区。",
        "目前园区化运营多年，拥有稳定租户、成熟基础设施和持续租金收入。",
        "企业具有清晰的本地产业基础、社会信用和可延续的资产运营价值。"
      ]
    },
    assets: {
      eyebrow: "Asset Highlights",
      title: "成熟资产、稳定现金流与可升级土地的组合价值",
      description: "项目价值来自现有运营收益、工业园区区位、基础设施沉淀和未来开发弹性。",
      highlights: [
        ["区位优势", "位于宁夏银川贺兰德胜工业园区，具备产业承接、城市配套和交通组织基础。"],
        ["稳定现金流", "园区已有稳定租户与租金收入，具备资产持有和改造升级的现实基础。"],
        ["成熟基础设施", "现有厂房、仓储、办公楼、道路及配套设施，可支撑多类型产业入驻。"],
        ["土地潜力", "资产仍具备后续开发、业态更新与价值重估空间，适合长期投资人参与。"],
        ["产业承接", "适合物流仓储、轻加工、冷链、新能源配套、数字化产业园等方向。"],
        ["运营基础", "园区运营多年，现场管理、租户服务与基础物业秩序已形成稳定框架。"]
      ]
    },
    opportunity: {
      eyebrow: "Project Opportunity",
      title: "本次不是简单低价出售，而是寻找战略合作方",
      description:
        "我们更重视合作方的产业理解、资金能力、运营能力与长期视野，希望在资产优化、产业导入和园区升级之间形成可持续方案。",
      models: ["可整体转让", "可部分合作开发", "可引入战略投资", "可共同打造新型产业园"]
    },
    partners: {
      eyebrow: "Strategic Partners",
      title: "适合具备产业导入能力与资产运营能力的长期伙伴",
      description: "合作方可以来自产业地产、物流仓储、冷链、新能源配套、地方平台或民营产业资本。",
      list: [
        "产业地产投资方",
        "物流仓储企业",
        "冷链企业",
        "地方国资平台",
        "民营产业投资人",
        "新能源配套企业",
        "低碳园区运营方",
        "智能仓储相关企业"
      ]
    },
    timeline: {
      eyebrow: "Milestones",
      title: "企业历史时间轴",
      description: "六十余年企业沿革，形成了从粮食加工到产业园区运营的资产更新路径。",
      events: [
        ["1963", "银川第一面粉厂创立"],
        ["1999/2000", "完成企业改制，家族接手经营"],
        ["2002", "企业经营规模达到重要阶段"],
        ["2006-2007", "搬迁至贺兰德胜工业园区"],
        ["2007至今", "逐步发展为产业园运营主体"],
        ["2026", "启动资产优化与战略合作"]
      ]
    },
    contact: {
      eyebrow: "Contact",
      title: "欢迎与我们进一步沟通项目资料与合作方案",
      description: "如您关注整体收购、联合开发、战略投资或产业导入，可留下信息，我们会安排专人对接。",
      focusTitle: "沟通重点",
      focusText: "资产范围、租赁现状、土地利用、开发条件、交易方式、合作结构及现场考察安排。",
      fields: [
        ["name", "姓名", "text"],
        ["company", "公司", "text"],
        ["phone", "电话", "tel"],
        ["email", "邮箱", "email"],
        ["intent", "合作意向", "text"]
      ],
      messageLabel: "留言",
      submit: "提交留言",
      thanks: "感谢您的留言，我们将尽快联系您。"
    },
    footer: {
      left: "银川产业园资产战略合作项目",
      right: "扎根银川 · 成熟运营 · 面向长期合作"
    }
  },
  en: {
    languageLabel: "English",
    languageSwitch: "中文",
    nav: [
      { label: "Profile", href: "#overview" },
      { label: "Assets", href: "#assets" },
      { label: "Opportunity", href: "#opportunity" },
      { label: "History", href: "#history" },
      { label: "Contact", href: "#contact" }
    ],
    header: {
      brand: "Yinchuan Industrial Park Asset",
      subtitle: "Strategic Partnership Project",
      cta: "Discuss Partnership",
      ariaHome: "Back to home"
    },
    hero: {
      eyebrow: "Yinchuan, Ningxia · Helan Desheng Industrial Park · Mature Operating Asset",
      title: "An industrial park asset rooted in Yinchuan for more than 60 years is seeking a new strategic partner",
      subtitle:
        "From a state-owned grain enterprise founded in 1963 to a mature industrial park operator today, we seek long-term investors to jointly advance asset upgrading.",
      primary: "Explore Project",
      secondary: "Contact Us",
      stats: [
        ["60+ Years", "Local industrial foundation"],
        ["Since 2007", "Park-based operation"],
        ["Stable Tenants", "Recurring cash flow"],
        ["Upgradeable Land", "Future development capacity"]
      ]
    },
    overview: {
      eyebrow: "Company Profile",
      title: "From a state-owned grain enterprise to a mature industrial park operator",
      description:
        "This is not an isolated parcel or a single factory asset. It is an operating industrial space with proven tenants, infrastructure and local business relationships.",
      points: [
        "The predecessor was founded in 1963 and once supported local grain processing and livelihood supply.",
        "Around 1999/2000, the enterprise completed restructuring and was taken over by the family business.",
        "From 2006 to 2007, the company relocated to Helan Desheng Industrial Park in Yinchuan, Ningxia.",
        "The park has operated for years with stable tenants, mature infrastructure and recurring rental income.",
        "The company carries a clear local industrial foundation, social credibility and sustainable asset operation value."
      ]
    },
    assets: {
      eyebrow: "Asset Highlights",
      title: "A combined value proposition: mature assets, stable cash flow and upgradeable land",
      description: "Project value comes from existing operating income, industrial park location, infrastructure and future development flexibility.",
      highlights: [
        ["Location Advantage", "Located in Helan Desheng Industrial Park, Yinchuan, with industrial access, urban support and transport connectivity."],
        ["Stable Cash Flow", "Existing tenants and rental income provide a practical base for asset holding, renovation and upgrading."],
        ["Mature Infrastructure", "Factories, warehouses, offices, internal roads and supporting facilities can accommodate multiple industrial uses."],
        ["Land Potential", "The asset still offers room for further development, business format renewal and long-term value enhancement."],
        ["Industrial Fit", "Suitable for logistics, warehousing, light processing, cold chain, new energy support and digital industrial park uses."],
        ["Operating Base", "Years of park operation have formed a stable framework for site management, tenant service and property order."]
      ]
    },
    opportunity: {
      eyebrow: "Project Opportunity",
      title: "This is not a simple low-price sale, but a search for a strategic partner",
      description:
        "We value industrial insight, capital strength, operating capability and a long-term view, aiming to form a sustainable plan across asset optimization, industry introduction and park upgrading.",
      models: ["Full asset transfer", "Partial cooperative development", "Strategic investment", "Joint development of a new industrial park"]
    },
    partners: {
      eyebrow: "Strategic Partners",
      title: "Designed for long-term partners with industry introduction and asset operation capabilities",
      description: "Potential partners include industrial real estate investors, logistics and warehousing operators, cold chain companies, local platforms and private industrial capital.",
      list: [
        "Industrial real estate investors",
        "Logistics and warehousing companies",
        "Cold chain operators",
        "Local state-owned platforms",
        "Private industrial investors",
        "New energy support companies",
        "Low-carbon park operators",
        "Smart warehousing enterprises"
      ]
    },
    timeline: {
      eyebrow: "Milestones",
      title: "Company History",
      description: "More than six decades of development have shaped the asset path from grain processing to industrial park operation.",
      events: [
        ["1963", "Yinchuan No. 1 Flour Mill was founded"],
        ["1999/2000", "Enterprise restructuring completed; family business took over operations"],
        ["2002", "Business scale reached an important development stage"],
        ["2006-2007", "Relocated to Helan Desheng Industrial Park"],
        ["Since 2007", "Gradually developed into an industrial park operator"],
        ["2026", "Asset optimization and strategic partnership initiative launched"]
      ]
    },
    contact: {
      eyebrow: "Contact",
      title: "Contact us for project materials and partnership discussions",
      description: "If you are interested in full acquisition, joint development, strategic investment or industry introduction, please leave your information and our team will follow up.",
      focusTitle: "Discussion Focus",
      focusText: "Asset scope, leasing status, land use, development conditions, transaction structure, partnership model and site visit arrangements.",
      fields: [
        ["name", "Name", "text"],
        ["company", "Company", "text"],
        ["phone", "Phone", "tel"],
        ["email", "Email", "email"],
        ["intent", "Partnership Interest", "text"]
      ],
      messageLabel: "Message",
      submit: "Submit",
      thanks: "Thank you for your message. We will contact you soon."
    },
    footer: {
      left: "Yinchuan Industrial Park Strategic Partnership Project",
      right: "Rooted in Yinchuan · Mature operation · Long-term partnership"
    }
  }
} as const;

export type SiteContent = (typeof siteContent)[Language];
