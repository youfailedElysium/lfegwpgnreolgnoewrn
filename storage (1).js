const Storage = {
    load: () => JSON.parse(localStorage.getItem("notes") || "[]"),

    save: (arr) => {
        localStorage.setItem("notes", JSON.stringify(arr));
    }
};