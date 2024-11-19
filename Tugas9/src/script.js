const toggleDarkMode = document.getElementById('dark-mode-toggle');
const htmlElement = document.documentElement;

toggleDarkMode.addEventListener('click', () => {
    htmlElement.classList.toggle('dark');
});

const imageData = [
    {
        titleImage: "Foto 1",
        altImage: "Foto 1",
        srcImage: "https://images.unsplash.com/photo-1731600800681-3970e965bb95?q=80&w=2832&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        descImage: "Deskripsi Singkat Tentang Foto 1"
    },
    {
        titleImage: "Foto 2",
        altImage: "Foto 2",
        srcImage: "https://plus.unsplash.com/premium_photo-1731358673371-2a521793f27d?q=80&w=2832&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        descImage: "Deskripsi Singkat Tentang Foto 2"
    },
    {
        titleImage: "Foto 3",
        altImage: "Foto 3",
        srcImage: "https://images.unsplash.com/photo-1731575115709-d4325615e868?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        descImage: "Deskripsi Singkat Tentang Foto 3"
    },
    {
        titleImage: "Foto 4",
        altImage: "Foto 4",
        srcImage: "https://images.unsplash.com/photo-1731432245325-d820144afe4a?q=80&w=2942&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        descImage: "Deskripsi Singkat Tentang Foto 4"
    },
    {
        titleImage: "Foto 5",
        altImage: "Foto 5",
        srcImage: "https://images.unsplash.com/photo-1726108954014-71ffe50f8a26?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        descImage: "Deskripsi Singkat Tentang Foto 5"
    },
    {
        titleImage: "Foto 6",
        altImage: "Foto 6",
        srcImage: "https://plus.unsplash.com/premium_photo-1700070241926-e8d6ab81ba80?q=80&w=2832&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        descImage: "Deskripsi Singkat Tentang Foto 6"
    },
    {
        titleImage: "Foto 7",
        altImage: "Foto 7",
        srcImage: "https://images.unsplash.com/photo-1731569348001-e49c36947289?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        descImage: "Deskripsi Singkat Tentang Foto 7"
    },
    {
        titleImage: "Foto 8",
        altImage: "Foto 8",
        srcImage: "https://plus.unsplash.com/premium_photo-1731114103697-c3a21192181c?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        descImage: "Deskripsi Singkat Tentang Foto 8"
    },
    {
        titleImage: "Foto 9",
        altImage: "Foto 9",
        srcImage: "https://images.unsplash.com/photo-1719937206158-cad5e6775044?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        descImage: "Deskripsi Singkat Tentang Foto 9"
    }
]

const gallery = document.getElementById("gallery");
const gridContainer = document.createElement("div");
gridContainer.className = "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6";

imageData.forEach(image => {
    const card = document.createElement("div");
    card.className = "bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden";

    card.innerHTML = `
        <img src="${image.srcImage}" alt="${image.altImage}" class="w-full h-48 object-cover">
        <div class="p-4">
            <h3 class="text-xl font-semibold mb-2">${image.titleImage}</h3>
            <p class="text-gray-600 dark:text-gray-400">${image.descImage}</p>
        </div>
    `;
    
    gridContainer.appendChild(card);
});

gallery.appendChild(gridContainer);