document.addEventListener("DOMContentLoaded", () => {
    let data = Storage.load();
    UI.drawNotes(data);

    const form = document.getElementById("note-form");

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        const title = document.getElementById("note-title");
        const text = document.getElementById("note-text");

        const entry = {
            title: title.value.trim(),
            text: text.value.trim()
        };

        data.push(entry);
        Storage.save(data);
        UI.drawNotes(data);

        title.value = "";
        text.value = "";
    });
});
