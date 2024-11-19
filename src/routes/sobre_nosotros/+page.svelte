<script>
    import '$lib/CSS/sobre_nosotros.css'
    import globo from '$lib/IMAGES/images/globo.jpg'
    import estu from '$lib/IMAGES/images/ilustracion-concepto-leccion-geografia_114360-19843.jpg'
    import equipo from '$lib/IMAGES/images/ilustracion-vector-concepto-educacion_109722-3616.jpg'
    import mision from '$lib/IMAGES/images/fondo-plano-concepto-universitario_52683-11176.avif'

</script>

<nav class="navbar">
    <div class="logo">
    <h4>SOCIOLAB🌎</h4>
    </div>
    <ul class="nav-links">
        <li><a href="/" class="nav-item" data-sveltekit-preload-data="tap" data-sveltekit-reload>Inicio</a></li>
        <li><a href="/" class="nav-item" data-sveltekit-preload-data="tap" data-sveltekit-reload>Servicios</a></li>
        <li><a href="/" class="nav-item" data-sveltekit-preload-data="tap" data-sveltekit-reload>Contacto</a></li>
       
    </ul>
    <div class="burger">
        <div class="line1"></div>
        <div class="line2"></div>
        <div class="line3"></div>
    </div>
</nav>

<main>
    <section id="inicio" class="section">
        <div class="section-text">
            <h1 class="typing">Sobre Nosotros</h1>
            <p>Bienvenidos a SOCIOLAB. Somos un equipo dedicado a proporcionar soluciones innovadoras para nuestros clientes.</p>
        </div>
        <div class="section-image">
            <img src={globo} alt="Equipo de trabajo" class="floating">
        </div>
    </section>

    <section id="historia" class="section">
        <div class="section-text">
            <h2 class="typing">Nuestra Historia</h2>
            <p>Fundada en 2010, SOCIOLAB ha crecido de ser una pequeña startup a una compañía líder en la industria.</p>
        </div>
        <div class="section-image">
            <img src={estu} alt="Línea de tiempo de la empresa" class="floating">
        </div>
    </section>

    <section id="equipo" class="section">
        <div class="section-text">
            <h2 class="typing">Nuestro Equipo</h2>
            <p>Contamos con un equipo diverso y talentoso, comprometido con la excelencia y la innovación en cada proyecto.</p>
        </div>
        <div class="section-image">
            <img src={equipo} alt="Miembros del equipo" class="floating">
        </div>
    </section>

    <section id="mision" class="section">
        <div class="section-text">
            <h2 class="typing">Nuestra Misión</h2>
            <p>Nuestra misión es proporcionar soluciones de alta calidad que impulsen el éxito de nuestros clientes y contribuyan positivamente a la sociedad.</p>
        </div>
        <div class="section-image">
            <img src={mision}  alt="Representación de nuestra misión" class="floating"  style="height: 2500px; width: auto;">
        </div>
    </section>
</main>

<footer>
    <p>&copy; 2023 SOCIOLAB. Todos los derechos reservados.</p>
</footer>