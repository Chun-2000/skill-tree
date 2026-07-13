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
];

const container = document.querySelector("#mind-map");
categories.forEach((category) => {
  //建立 node => div 元素
  const node = document.createElement("div");
  node.className = "node"; //元素的class名稱
  node.textContent = category.title; //元素內容

  container.appendChild(node);
  //建立 ui
  const list = document.createElement("ul");
  //建立 leaf
  category.items.forEach((item) => {
    const li = document.createElement("li");

    const leaf = document.createElement("div");
    leaf.className = "leaf";
    leaf.textContent = item.name;
    leaf.dataset.url = item.url;

    leaf.addEventListener("click", () => {
      if (item.url) {
        window.open(item.url, "_blank");
      }
    });

    li.appendChild(leaf);
    list.appendChild(li);
  });

  container.appendChild(list);
});
