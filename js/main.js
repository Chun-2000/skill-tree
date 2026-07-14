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
