<script>
    import "$lib/CSS/temas.css"
    import imagenWpp from '$lib/IMAGES/img_temas/Imagen_de_WhatsApp_2024-10-31_a_las_11.07.24_227c309c-removebg-preview.png'
    import guerra from '$lib/IMAGES/img_temas/guerrasmundiales.jpg'
    import participacion from '$lib/IMAGES/img_temas/participacion.png'
    import tratado from '$lib/IMAGES/img_temas/tratado.webp'
    import fria from '$lib/IMAGES/img_temas/guerrafria.webp'
    import depresion from '$lib/IMAGES/img_temas/depresion.png'
    import ramas from '$lib/IMAGES/img_temas/ramasdepoder.jpg'

</script>

<nav class="navbar">
    <div class="logo">
    <h4>SOCIOLAB🌎</h4>
    </div>
    <ul class="nav-links">
        <li>
            <div class="search-container">
                <input type="text" class="search-input" placeholder="Buscar...">
                <button class="search-button">Buscar</button>
            </div>
        </li>
        <li><a href="/" class="nav-item" data-sveltekit-preload-data="tap" data-sveltekit-reload>Inicio</a></li>
        <li><a href="/sobre_nosotros" class="nav-item" data-sveltekit-preload-data="tap" data-sveltekit-reload>Acerca de</a></li>
        <li><a href="/servicios" class="nav-item" data-sveltekit-preload-data="tap" data-sveltekit-reload>Servicios</a></li>
        <li><a href="/" class="nav-item" data-sveltekit-preload-data="tap" data-sveltekit-reload>Contacto</a></li>
       
    </ul>
    <div class="burger">
        <div class="line1"></div>
        <div class="line2"></div>
        <div class="line3"></div>
    </div>
</nav>

<main>
    <section class="hero">
        <div class="container">
            <div class="hero-content">
                <img src={imagenWpp} alt="Imagen principal" class="hero-image">
                <div class="hero-text">
                    <h1>¡Bienvenido a tu nueva aventura en Ciencias Sociales! 🌎✨ </h1>
                    <p>Aquí podrás explorar temas apasionantes, ver videos, leer información clave, y poner a prueba tus conocimientos con exámenes interactivos. ¿Listo para sumergirte en el conocimiento? ¡Vamos a empezar! 🚀📚</p>
                </div>
            </div>
        </div>
    </section>

    <section class="options">
        <div class="container">
            <h2>NUESTROS TEMAS 🌍🎓📖</h2>
            <div class="options-grid">
                <div class="option-card">
                    <img src={guerra} alt="Opción 1" class="option-image">
                    <div class="option-content">
                        <h3>GUERRAS MUNDIALES</h3>
                        <p>Dos conflictos épicos que moldearon el rumbo de la humanidad, cambiando para siempre nuestras ideas de paz, poder y progreso. Conoce las causas, las grandes batallas y las profundas consecuencias de estas guerras.</p>
                        
                        
                        <a href="/examen_guerraM"><button class="btn">Entrar</button></a>
                    </div>
                </div>
                <div class="option-card">
                    <img src={participacion} alt="Opción 2" class="option-image">
                    <div class="option-content">
                        <h3>MECANISMOS DE PARTICIPACION</h3>
                        <p>En esta sección, descubrirás las herramientas y espacios que te permiten ser un ciudadano activo. Desde el voto hasta los cabildos abiertos, entenderás cómo influir en las decisiones que construyen nuestro país.</p>
                        <a href="/examen_mecanismos"><button class="btn">Entrar</button></a>
                    </div>
                </div>
                <div class="option-card">
                    <img src={tratado} alt="Opción 3" class="option-image">
                    <div class="option-content">
                        <h3>TRATADO DE VERSALLES</h3>
                        <p>Un pacto que prometió el fin de la Primera Guerra Mundial, pero terminó sembrando la semilla de nuevas tensiones. Aquí verás sus términos, sus promesas, y el impacto que tuvo en el mapa político mundial.</p>
                        <a href="/examen_tratadov"><button class="btn">Entrar</button></a>
                    </div>
                </div>
                <div class="option-card">
                    <img src={fria} alt="Opción 4" class="option-image">
                    <div class="option-content">
                        <h3>LA GUERRA FRIA </h3>
                        <p>Una batalla sin armas entre dos potencias. Conoce cómo Estados Unidos y la Unión Soviética compitieron en ideología, tecnología y poder, creando una era de tensiones globales que nos afectó a todos.</p>
                        <a href="/examen_guerraF"><button class="btn">Entrar</button></a>
                    </div>
                </div>
                <div class="option-card">
                    <img src={depresion} alt="Opción 5" class="option-image">
                    <div class="option-content">
                        <h3>LA GRAN DEPRESION </h3>
                        <p>La crisis económica que paralizó al mundo. Explora cómo una caída en la bolsa de valores desencadenó una crisis sin precedentes, afectando a millones de personas y dando origen a nuevas políticas.</p>
                        <a href="/examen_gran_depresion"><button class="btn">Entrar</button></a>
                    </div>
                </div>
                <div class="option-card">
                    <img src={ramas} alt="Opción 6" class="option-image">
                    <div class="option-content">
                        <h3>RAMAS DE PODER PUBLICO </h3>
                        <p>¿Cómo se organiza el poder en Colombia? Aquí descubrirás las tres ramas que lo componen: Ejecutiva, Legislativa y Judicial, y cómo trabajan juntas para dirigir el país.</p>
                        <a href="/examen_ramasPoder"><button class="btn">Entrar</button></a>
                    </div>
                </div>
            </div>
        </div>
    </section>
</main>

<footer>
    <div class="container">
        <p>&copy; 2023 SOCIOLAB. Todos los derechos reservados.</p>
    </div>
</footer>