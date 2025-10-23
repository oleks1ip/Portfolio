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
    github: 'https://github.com/oleks1ip/Portfolio',
    demo: 'https://oleks1ip.github.io/Portfolio/',
    tree: {
      'index.html': `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="Portfolio of Oleksii Popov — Full Stack Developer">
  <meta name="author" content="Oleksii Popov">
  <title>Oleksii Popov — Portfolio</title>

  <link href="https://cdn.jsdelivr.net/npm/prismjs@1.29.0/themes/prism.css" rel="stylesheet">

  <link rel="stylesheet" href="style.css">
</head>
<body>
  <!-- Header / Navigation -->
  <header class="container">
    <div class="nav">
      <div class="brand">
        <div class="logo">L</div>
        <div>
          <div>Oleksii Popov</div>
          <div class="muted-text">Second Year Student</div>
        </div>
      </div>

      <nav>
        <ul id="nav-list">
          <li><a href="#home" class="nav-link">Home</a></li>
          <li><a href="#about" class="nav-link">About</a></li>
          <li><a href="#projects" class="nav-link">Projects</a></li>
          <li><a href="#contact" class="nav-link">Contact</a></li>
        </ul>
      </nav>

      <div class="controls">
        <a class="cta" href="#projects">View Projects</a>
      </div>
    </div>
  </header>

  <main>
    <!-- Hero Section -->
    <section id="home" class="container hero">
      <div class="intro">
        <h1>Oleksii Popov</h1>
        <p>I'm a second-year Computer Science student passionate about learning software development.</p>
        <div class="hero-buttons">
          <a class="cta" href="#projects">See projects</a>
          <a class="icon-btn" href="#contact">Contact me</a>
        </div>
        <div class="tech-highlights">Python · Java · C/C++ · MySQL · HTML/CSS</div>
      </div>
      <aside class="hero-card">
        <img class="avatar" src="MyPhoto.jpg" alt="Oleksii Popov">
        <div class="hero-info">
          <div>
            <div>Oleksii Popov</div>
            <div class="muted-text">Developer</div>
          </div>
          <div class="muted-text">Based in Edinburgh • Open to work</div>
        </div>
      </aside>
    </section>

    <!-- About / CV -->
    <section id="about" class="container">
      <div class="section-title">
        <h2>About / CV</h2>
        <div class="muted-text">Professional profile & experience</div>
      </div>
      <div class="cv">
        <div class="panel">
          <h3>Profile</h3>
          <p class="muted-text">I'm a second-year Computer Science student who enjoys exploring different areas of technology and software development. I'm passionate about learning how things work, solving problems through creative coding, and building projects that challenge me to improve my technical and design skills.</p>

          <h4 style="margin-top: 1rem;">Skills</h4>
          <div class="skills">
            <div class="skill"><strong>Python</strong><div class="bar"><i style="width:90%"></i></div></div>
            <div class="skill"><strong>Java</strong><div class="bar"><i style="width:85%"></i></div></div>
            <div class="skill"><strong>HTML / CSS / JS</strong><div class="bar"><i style="width:90%"></i></div></div>
            <div class="skill"><strong>MySQL / PostgreSQL / Azure</strong><div class="bar"><i style="width:40%"></i></div></div>
          </div>
        </div>

        <aside class="panel" style="margin-top: 1rem;">
          <h4>Projects and Activities</h4>
          <div class="timeline">
            <div class="job">
              <strong>UI/UX Designer & Developer — Group Project: “SNA” Social Media App</strong>
              <span class="muted-text">University Project | 2025</span>
              <p class="muted-text">
                • Collaborated with a 4-person team to design and prototype a social media app concept called “SNA”, focused on connecting users through content sharing and interaction.<br>
                • Helped implement frontend functionality using Java, focusing on navigation, user interface behavior, and core app features. <br>
                • Worked without a backend server, simulating user interactions and data handling locally to demonstrate key features. <br>
                • Presented the final prototype and Java demo to faculty, receiving positive feedback for visual design and functionality.
              </p>
            </div>

            <div class="job" style="margin-top: 1rem;">
              <strong>Personal Portfolio</strong>
              <span class="muted-text">Personal Project | 2025</span>
              <p class="muted-text">
                Designed and developed my personal portfolio website to showcase my projects, skills, and experience as a Computer Science student. <br>
                Built with HTML, CSS, and JavaScript. <br>
                Focused on creating a clean, responsive, and accessible design that works seamlessly across devices. <br>
                Implemented interactive sections such as a project gallery, contact form, and about page. <br>
                Continuously improving the site by updating content and experimenting with new design ideas.
              </p>
            </div>
        ----- PLEASE SEE FULL CODE ON GITHUB -----`,
      'style.css': `:root {
  --bg: #ffffff;
  --panel-bg: #f5f5f5;
  --text: #111111;
  --muted: #555555;
  --accent: #000000;
  --border: #e0e0e0;
  --radius: 12px;
  --transition: 0.25s ease;
  --font: 'Inter', system-ui, sans-serif;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: var(--font);
  background: var(--bg);
  color: var(--text);
  line-height: 1.6;
}

.container { max-width: 1100px; margin: 0 auto; padding: 2rem; }

/* Header / nav */
header { position: static; top: 0; z-index: 50; }
.nav { display: flex; justify-content: space-between; align-items: center; }
.brand { display: flex; align-items: center; gap: 0.8rem; }
.logo { width: 42px; height: 42px; background: var(--accent); color: #fff; display: grid; place-items: center; border-radius: 50%; font-weight: 700; }

nav ul { display: flex; gap: 1rem; list-style: none; }
nav a { text-decoration: none; color: var(--text); padding: .4rem .6rem; border-radius: 8px; }
nav a:hover { color: var(--accent); }

.cta { background: var(--accent); color: #fff; padding: .5rem 1rem; border-radius: var(--radius); text-decoration: none; font-weight: 600; }
.icon-btn { background: var(--panel-bg); color: var(--accent); border: 1px solid var(--border); padding: .5rem .8rem; border-radius: var(--radius); cursor: pointer; text-decoration: none; }

/* Hero */
.hero { display: grid; grid-template-columns: 1fr 340px; gap: 2rem; padding: 3rem 0; }
.hero h1 { font-size: 2.4rem; }
.hero .muted-text { color: var(--muted); }
.hero-buttons { display: flex; gap: .6rem; margin-top: 1rem; }
.hero-card { background: var(--panel-bg); padding: 1rem; border-radius: var(--radius); }
.avatar { width: 100%; border-radius: var(--radius); object-fit: cover; }

/* Panels / CV */
.panel { background: var(--panel-bg); padding: 1.2rem; border-radius: var(--radius); border: 1px solid var(--border); }
.skills { display: flex; flex-direction: column; gap: .6rem; }
.skill { display: flex; justify-content: space-between; align-items: center; }
.bar { flex: 1; height: 8px; background: var(--border); border-radius: 999px; margin-left: .5rem; overflow: hidden; }
.bar i { display: block; height: 100%; background: var(--accent); }
        ----- PLEASE SEE FULL CODE ON GITHUB -----`,
      'app.js': `----- PLEASE SEE FULL CODE ON GITHUB -----`,
    }
  },
  {
    id: 'SNA social media app',
    title: 'Social media app "SNA"',
    desc: 'Social media app prototype built in Java for university project.',
    thumb: 'assets/images/portfolio-thumb.png',
    github: 'https://github.com/Dembem1/Java_SNA',
    demo: 'https://github.com/Dembem1/Java_SNA',
    tree: {
        'README.md': '# SNA Social Media App Prototype',
        'src': {
            'Main.java': `----- PLEASE SEE FULL CODE ON GITHUB -----`,
            'User.java': `----- PLEASE SEE FULL CODE ON GITHUB -----`,
            'Post.java': `----- PLEASE SEE FULL CODE ON GITHUB -----`,
        }
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
