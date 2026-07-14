const categories = [
  {
    title: "開發工具（IDE、編輯器）",
    items: [
      {
        name: "Visual Studio Code",
        url: "https://www.notion.so/Visual-Studio-Code-20069c4f96478078bcacc6d21baf9121?source=copy_link",
      },
      {
        name: "Microsoft Visual Studio",
        url: "https://app.notion.com/p/Microsoft-Visual-Studio-20269c4f964780f59fcdef8210edbe44?source=copy_link",
      },
      {
        name: "Sublime Text",
        url: "https://app.notion.com/p/Sublime-Text-21169c4f964780a59939fe37aa1e4d66?source=copy_link",
      },
      {
        name: "Spyder",
        url: "https://app.notion.com/p/Spyder-28769c4f96478039ac34d94c6df25f20?source=copy_link",
      },
    ],
  },
  {
    title: "後端 / Web 框架（Backend / Web Framework）",
    items: [
      {
        name: "ASP.NET MVC (.NET Framework)",
        url: "https://app.notion.com/p/ASP-NET-MVC-NET-Framework-27169c4f96478030bb32da2ca78538ce?source=copy_link",
      },
      {
        name: " ASP.NET Core MVC",
        url: "https://app.notion.com/p/ASP-NET-Core-MVC-27169c4f964780308945cdcbf144a8a1?source=copy_link",
      },
    ],
  },
  {
    title: "前端框架（Frontend Framework）",
    items: [
      {
        name: "React",
        url: "https://app.notion.com/p/React-20069c4f96478044b3bef2704931c304?source=copy_link",
      },
      {
        name: "Vue",
        url: "https://app.notion.com/p/Vue-20269c4f96478018ac93c1856e83b76f?source=copy_link",
      },
    ],
  },
  {
    title: "桌面應用程式 UI Framework（Desktop UI Framework）",
    items: [
      {
        name: "WinForms（Windows Forms）",
        url: "https://app.notion.com/p/WinForms-Windows-Forms-29969c4f96478073b01ce5c59662c102?source=copy_link",
      },
      {
        name: "WPF（Windows Presentation Foundation）",
        url: "https://app.notion.com/p/WPF-Windows-Presentation-Foundation-29969c4f964780998a4cdbae76d19dbd?source=copy_link",
      },
    ],
  },
  {
    title: "CSS Framework",
    items: [
      {
        name: "Bootstrap",
        url: "https://app.notion.com/p/Bootstrap-20269c4f96478091bf66fed1b1d93aad?source=copy_link",
      },
      {
        name: "Tailwind CSS",
        url: "https://app.notion.com/p/Tailwind-CSS-21e69c4f9647801abd34dc47b1227723?source=copy_link",
      },
    ],
  },
  {
    title: "Component Library",
    items: [
      {
        name: "MUI",
        url: "https://app.notion.com/p/MUI-20269c4f96478047a167f93948a40d56?source=copy_link",
      },
    ],
  },
  {
    title: "Vibe Coding",
    items: [
      {
        name: "Claude Code",
        url: "https://app.notion.com/p/Claude-Code-2eb69c4f964780c689cbf36fc7e96117?source=copy_link",
      },
    ],
  },
  {
    title: "平台 Platform",
    items: [
      {
        name: "Node.js",
        url: "https://app.notion.com/p/Node-js-31169c4f964780469f01df5e5216ea61?source=copy_link",
      },
      {
        name: ".NET",
        url: "https://app.notion.com/p/NET-31169c4f964780a0952efb991a8cee34?source=copy_link",
      },
    ],
  },
  {
    title: "主機 Server",
    items: [
      {
        name: "Azure DevOps",
        url: "https://app.notion.com/p/Azure-DevOps-31169c4f9647807581c4ffa3e0eb4c2f?source=copy_link",
      },
    ],
  },
  {
    title: "語言",
    items: [
      {
        name: "C#",
        url: "https://app.notion.com/p/C-26f69c4f96478011b4b2ebc910bbb4cf?source=copy_link",
      },
      {
        name: "JavaScript",
        url: "https://app.notion.com/p/JavaScript-26f69c4f964780f2a9e8d00a968bae38?source=copy_link",
      },
      {
        name: "Python",
        url: "https://app.notion.com/p/Python-27169c4f96478057ae77ce9e0fdc01c1?source=copy_link",
      },
      {
        name: "C",
        url: "https://app.notion.com/p/C-27169c4f9647803d9ebdc7721b84db2f?source=copy_link",
      },
      {
        name: "C++",
        url: "https://app.notion.com/p/C-27169c4f96478016b059dc7611622cac?source=copy_link",
      },
    ],
  },
  {
    title: "網頁設計",
    items: [
      {
        name: "HTML",
        url: "https://app.notion.com/p/HTML-27169c4f964780e1b495d14faeaa8844?source=copy_link",
      },
      {
        name: "CSS",
        url: "https://app.notion.com/p/CSS-27169c4f9647807793fcd4a008ced259?source=copy_link",
      },
      {
        name: "jQuery",
        url: "https://app.notion.com/p/jQuery-27169c4f9647807b8f83c55368634fc3?source=copy_link",
      },
    ],
  },
  {
    title: "CSS Preprocessor（CSS 預處理器）",
    items: [
      {
        name: "SCSS",
        url: "https://app.notion.com/p/SCSS-29d69c4f964780229ea6dc6eebd79c13?source=copy_link",
      },
    ],
  },
  {
    title: "前端資料視覺化",
    items: [
      {
        name: "Chart.js",
        url: "https://app.notion.com/p/Chart-js-1e88f9fd335c41dfb79269a886115169?source=copy_link",
      },
    ],
  },
  {
    title: "Python Web App / Dashboard",
    items: [
      {
        name: "Streamlit",
        url: "https://app.notion.com/p/Streamlit-0b87fa6ed6cf40d3ae2931f7812b423a?source=copy_link",
      },
    ],
  },
  {
    title: "版本控制",
    items: [
      {
        name: "Git",
        url: "https://app.notion.com/p/Git-27169c4f964780b6922ed635300adaee?source=copy_link",
      },
    ],
  },
  {
    title: "線上的程式碼託管平台",
    items: [
      {
        name: "GitHub",
        url: "https://app.notion.com/p/GitHub-28769c4f964780a98fbed2df7c0f89b9?source=copy_link",
      },
    ],
  },
  {
    title: "npm 套件（npm package）",
    items: [
      {
        name: "npm（npm package）",
        url: "https://app.notion.com/p/21e69c4f9647805499cdfa75cf86cd52?v=21e69c4f9647801bb202000cbd260510&source=copy_link",
      },
    ],
  },
  {
    title: "View Template Engine 模板引擎、標記語法",
    items: [
      {
        name: "Razor",
        url: "https://app.notion.com/p/Razor-31069c4f964780c1b32ffe043780dddf?source=copy_link",
      },
    ],
  },
  {
    title: "前端構建工具 / 開發流程工具 (Frontend Tooling / Build Tools)",
    items: [
      {
        name: "Prettier",
        url: "https://app.notion.com/p/Prettier-29c69c4f96478084a679e8a6af72c706?source=copy_link",
      },
      {
        name: "Vite",
        url: "https://app.notion.com/p/Vite-21269c4f964780caa33bee5b01e3f87e?source=copy_link",
      },
      {
        name: "Babel",
        url: "https://app.notion.com/p/Babel-20269c4f964780e19760c189cd08f64b?source=copy_link",
      },
    ],
  },
  {
    title: "DBMS",
    items: [
      {
        name: "SSMS",
        url: "https://app.notion.com/p/SSMS-28769c4f964780ce8e45f3d8e92edc5a?source=copy_link",
      },
      {
        name: "MySQL",
        url: "https://app.notion.com/p/MySQL-2ef69c4f964780eebb7ccf4b48cf590f?source=copy_link",
      },
      {
        name: "MongoDB",
        url: "https://app.notion.com/p/MongoDB-28769c4f96478073b93cde38efa382b4?source=copy_link",
      },
    ],
  },
  {
    title: "DB 管理工具 (GUI)",
    items: [
      {
        name: "pgAdmin 4",
        url: "https://app.notion.com/p/pgAdmin-4-28769c4f964780e1bbbae7108ab103be?source=copy_link",
      },
    ],
  },
  {
    title: "Design Tools",
    items: [
      {
        name: "Figma",
        url: "",
      },
      {
        name: "Draw.io (Diagrams.net)",
        url: "",
      },
      {
        name: "Photoshop",
        url: "",
      },
      {
        name: "Illustrator",
        url: "",
      },
    ],
  },
  {
    title: "遠端桌面連線",
    items: [
      {
        name: "AnyDesk",
        url: "",
      },
    ],
  },
  {
    title: "擴充等好用的工具",
    items: [
      {
        name: "YouTube Summary with ChatGPT & Claude",
        url: "",
      },
      {
        name: "scrcpy",
        url: "",
      },
    ],
  },
  {
    title: "自架網站",
    items: [
      {
        name: "WordPress",
        url: "https://app.notion.com/p/WordPress-2ef69c4f9647809bb185ead7e5d8591c?source=copy_link",
      },
      {
        name: "Squarespace",
        url: "https://app.notion.com/p/Squarespace-2ea69c4f964780b6a336e83fc14ad008?source=copy_link",
      },
    ],
  },
  {
    title: "生產力與輔助工具",
    items: [
      {
        name: "Notion",
        url: "https://app.notion.com/p/Notion-20269c4f964780edac5bc418ea6ed40e?source=copy_link",
      },
      {
        name: "专注清单- 番茄工作法& 任务清单（番茄钟app）",
        url: "https://app.notion.com/p/app-28769c4f96478022bd4dfaf9f559ac73?source=copy_link",
      },
      {
        name: "Kami",
        url: "https://app.notion.com/p/Kami-20069c4f96478031ace4ec5e9fffb4b9?source=copy_link",
      },
      {
        name: "Tabnine token",
        url: "https://app.notion.com/p/Tabnine-token-10c69c4f9647804a9bbedd31a9a30b89?source=copy_link",
      },
      {
        name: "XMind",
        url: "https://app.notion.com/p/XMind-21d69c4f9647802f917ad999f427adc7?source=copy_link",
      },
      {
        name: "Forest",
        url: "https://app.notion.com/p/Forest-27969c4f9647804cb1b9fe6cfe57f1d4?source=copy_link",
      },
      {
        name: "OneNote",
        url: "https://app.notion.com/p/OneNote-2f769c4f964780d389d3d48a6af47389?source=copy_link",
      },
    ],
  },
  {
    title: "API 測試工具",
    items: [
      {
        name: "Postman",
        url: "https://app.notion.com/p/Postman-31869c4f96478065bf30cb65199ea935?source=copy_link",
      },
    ],
  },
  {
    title: "工具",
    items: [
      {
        name: "Canva",
        url: "https://app.notion.com/p/Canva-31869c4f96478036be06d879f88986d6?source=copy_link",
      },
      {
        name: "Gamma",
        url: "https://app.notion.com/p/Gamma-33569c4f964780f486c7c0308eaf7125?source=copy_link",
      },
      {
        name: "Julius ai",
        url: "https://app.notion.com/p/Julius-ai-36069c4f96478091a24ed1ae2dd96f97?source=copy_link",
      },
      {
        name: "NotebookLM",
        url: "https://app.notion.com/p/NotebookLM-36069c4f964780d88ea6edc34d0505b7?source=copy_link",
      },
    ],
  },
];
