const UI = {
    drawNotes(listData) {
        const list = document.getElementById("note-list");
        list.innerHTML = "";

        listData.forEach((item, i) => {
            const li = document.createElement("li");

            const block = document.createElement("div");
            block.innerHTML = `<b>${item.title}</b><p>${item.text}</p>`;

            const remove = document.createElement("button");
            remove.textContent = "Убрать";
            remove.onclick = () => {
                listData.splice(i, 1);
                Storage.save(listData);
                UI.drawNotes(listData);
            };

            li.appendChild(block);
            li.appendChild(remove);
            list.appendChild(li);
        });
    }
};