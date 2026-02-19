// Data proyek dengan gambar (ganti dengan gambar proyek Anda)
const projects = [
    {
        title: "Proyek 1: Desain Web",
        images: [
            "https://source.unsplash.com/random/300x200?web",
            "https://source.unsplash.com/random/300x200?design",
            "https://source.unsplash.com/random/300x200?code"
        ]
    },
    {
        title: "Proyek 2: Fotografi",
        images: [
            "https://source.unsplash.com/random/300x200?photo",
            "https://source.unsplash.com/random/300x200?camera",
            "https://source.unsplash.com/random/300x200?landscape"
        ]
    },
    {
        title: "Proyek 3: Ilustrasi",
        images: [
            "https://source.unsplash.com/random/300x200?art",
            "https://source.unsplash.com/random/300x200?illustration",
            "https://source.unsplash.com/random/300x200?drawing"
        ]
    }
];

// Render proyek ke grid
const projectsGrid = document.getElementById('projects');
projects.forEach((project, projectIndex) => {
    const projectDiv = document.createElement('div');
    projectDiv.className = 'project';
    projectDiv.innerHTML = `
        <img src="${project.images[0]}" alt="${project.title}" data-project="${projectIndex}" data-image="0">
        <h3>${project.title}</h3>
    `;
    projectsGrid.appendChild(projectDiv);
});

// Modal elements
const modal = document.getElementById('modal');
const modalImg = document.getElementById('modal-img');
const caption = document.getElementById('caption');
const closeBtn = document.querySelector('.close');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');

let currentProject = 0;
let currentImage = 0;

// Buka modal saat gambar diklik
projectsGrid.addEventListener('click', (e) => {
    if (e.target.tagName === 'IMG') {
        currentProject = parseInt(e.target.dataset.project);
        currentImage = parseInt(e.target.dataset.image);
        showImage();
        modal.style.display = 'block';
    }
});

// Tutup modal
closeBtn.onclick = () => modal.style.display = 'none';

// Navigasi gambar
prevBtn.onclick = () => {
    currentImage = (currentImage - 1 + projects[currentProject].images.length) % projects[currentProject].images.length;
    showImage();
};

nextBtn.onclick = () => {
    currentImage = (currentImage + 1) % projects[currentProject].images.length;
    showImage();
};

// Fungsi untuk menampilkan gambar di modal
function showImage() {
    modalImg.src = projects[currentProject].images[currentImage];
    caption.textContent = `${projects[currentProject].title} - Gambar ${currentImage + 1}`;
}