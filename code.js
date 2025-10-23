const PROJECTS = [
  {
    id: 'small-business-site',
    title: 'Site for Bakery shop',
    desc: 'Created using HTML + Bootstrap',
    thumb: 'assets/images/todo-thumb.png',
    github: 'https://github.com/oleks1ip/web-development',
    demo: 'https://oleks1ip.github.io/web-development/',
    tree: {
      'README.md': '# Site for small business',
        'index.html': `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet">
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"/>
    <style>
        body {
            font-family: 'Montserrat', sans-serif;
        }
    </style>
    <title>Home confectionery</title>
</head>
<body class="bg-dark text-white p-3">
    <header class="bg-secondary text-white p-3">
        <div class="container">
            <div class="text-center">
                <h1 class="text-center text-white text-primary animate__animated animate__bounce">The Confectionarium</h1>
            </div>
        </div>
        <nav class="navbar navbar-expand-lg navbar-ligh bg-light text-dark p-3 ">
            <div class="container-fluid">
                <a class="navbar-brand" href="#"><i class="fa-solid fa-cake-candles fa-xl" style="color: rgb(240, 209, 97);"></i></a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarDropdown">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse justify-content-center shadow-lg" id="navbarDropdown">
                    <ul class="navbar-nav">
                        <li class="nav-item"><a class="nav-link active" href="#">Home</a></li>
                        <li class="nav-item"><a class="nav-link " href="#">Cakes</a></li>
                        <li class="nav-item"><a class="nav-link" href="#">Cookies & Biscuits</a></li>
                        <li class="nav-item"><a class="nav-link" href="#">Tarts</a></li>
                        <li class="nav-item"><a class="nav-link" href="#">Pies</a></li>
                        <li class="nav-item"><a class="nav-link" href="#">Bread</a></li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown">Specialties</a>
                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item" href="#">Holiday 1</a></li>
                                <li><a class="dropdown-item" href="#">Holiday 2</a></li>
                                <li><a class="dropdown-item" href="#">Holiday 3</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </header>
    <main>
        <div class="mt-4"></div>

        <div class="container">
            <div class="row g-4 d-flex align-items-stretch">
                <div class="col-md-4">
                    <div class="card h-100 border-white text-black">
                        <img src="Images/cake.png" alt="Cake" class="card-img-top">
                        <div class="card-body">
                            <h5 class="card-title">Cakes</h5>
                            <p class="card-text">
                                Rich chocolate cakes for the true chocoholics<br>
                                Light, fluffy sponge cakes perfect for any celebration<br>
                                Custom designs to make your vision come to life<br>
                            </p>
                            <a href="#" class="btn btn-primary">See more</a>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="card h-100 border-white text-black">
                        <img src="Images/cookies.jpg" alt="Cookies" class="card-img-top mx-auto">
                        <div class="card-body">
                            <h5 class="card-title">Cookies</h5>
                            <p class="card-text">
                                Rich chocolate cakes for the true chocoholics<br>
                                Light, fluffy sponge cakes perfect for any celebration<br>
                                Custom designs to make your vision come to life<br>
                            </p>
                            <a href="#" class="btn btn-primary">See more</a>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="card h-100 border-white text-black">
                        <img src="Images/tart.png" alt="Tarts" class="card-img-top">
                        <div class="card-body">
                            <h5 class="card-title">Tarts</h5>
                            <p class="card-text">
                                Classic Lemon Tarts: A balance of tart and sweet in every bite<br>
                                Chocolate Ganache Tarts: Rich, smooth, and heavenly<br><br>
                            </p>
                            <a href="#" class="btn btn-primary">See more</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        ----- PLEASE SEE FULL CODE ON GITHUB -----`,
      'Images': {
      }
    }
  },
  {
    id: 'proj-portfolio',
    title: 'Portfolio Website',
    desc: 'My personal portfolio with project modals and CV.',
    thumb: 'assets/images/portfolio-thumb.png',
    github: 'https://github.com/yourhandle/portfolio',
    demo: '#',
    tree: {
      'index.html': '<!-- portfolio index -->',
      'css': {'main.css': '/* styles */'},
      'js': {'app.js': '// client logic'}
    }
  }
];

const grid = document.getElementById('projects-grid');
PROJECTS.forEach(p => {
  const card = document.createElement('div');
  card.className = 'card';
  card.tabIndex = 0;
  card.innerHTML = `<div>${p.title}</div><div>${p.desc}</div>`;
  card.addEventListener('click', () => openProject(p));
  card.addEventListener('keypress', e => { if(e.key==='Enter') openProject(p); });
  grid.appendChild(card);
});

const modal = document.getElementById('modal');
const modalTitle = document.getElementById('modal-title');
const fileTreeEl = document.getElementById('file-tree');
const codeContent = document.getElementById('code-content');
const projectGithub = document.getElementById('project-github');
const projectDemo = document.getElementById('project-demo');

let currentProject = null;

function openProject(p) {
  currentProject = p;
  modalTitle.textContent = p.title;
  projectGithub.href = p.github;
  projectDemo.href = p.demo;
  buildTree(p.tree, fileTreeEl);
  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeProject() {
  modal.classList.remove('active');
  document.body.style.overflow = '';
}

document.getElementById('close-modal').addEventListener('click', closeProject);
modal.addEventListener('click', e => { if(e.target === modal) closeProject(); });

function buildTree(tree, parentEl) {
  parentEl.innerHTML = '';
  const ul = document.createElement('ul');
  function recurse(node, parent) {
    for (let key in node) {
      const li = document.createElement('li');
      if (typeof node[key] === 'string') {
        li.textContent = key;
        li.addEventListener('click', () => showFile(key, node[key]));
      } else {
        li.textContent = key + '/';
        const innerUl = document.createElement('ul');
        innerUl.style.display = 'none';
        recurse(node[key], innerUl);
        li.appendChild(innerUl);
        li.addEventListener('click', e => { e.stopPropagation(); innerUl.style.display = innerUl.style.display==='none'?'block':'none'; });
      }
      parent.appendChild(li);
    }
  }
  recurse(tree, ul);
  parentEl.appendChild(ul);
}

function showFile(name, content) {
  const ext = name.split('.').pop().toLowerCase();
  let lang = 'language-javascript';
  if(ext==='html') lang='language-markup';
  if(ext==='css') lang='language-css';
  if(ext==='md') lang='language-markup';
  codeContent.className = lang;
  codeContent.textContent = content;
  Prism.highlightElement(codeContent);
}

// Footer year
document.getElementById('year').textContent = new Date().getFullYear();
