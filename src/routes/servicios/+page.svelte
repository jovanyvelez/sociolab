<script>
    import '$lib/CSS/servicios.css'
    import imagen1 from "$lib/IMAGES/images/Imagen1.png"
    import imgexamen from '$lib/IMAGES/images/exams-concept-illustration_114360-2754.avif'
    import imgcolegio from '$lib/IMAGES/images/college-students-concept-illustration_114360-10205.avif'

</script>

<nav class="navbar">
    <div class="logo">
    <h4>SOCIOLAB🌎</h4>
    </div>
    <ul class="nav-links">
      
        <li><a href="/temas" class="nav-item" data-sveltekit-preload-data="tap" data-sveltekit-reload>Inicio</a></li>
        <li><a href="/sobre_nosotros" data-sveltekit-preload-data="tap" data-sveltekit-reload>nosotros</a></li>
        <li><a href="/" class="nav-item" data-sveltekit-preload-data="tap" data-sveltekit-reload>Contacto</a></li>
 
       
    </ul>
    <div class="burger">
        <div class="line1"></div>
        <div class="line2"></div>
        <div class="line3"></div>
    </div>
</nav>

<main class="services">
    <div class="container">
        <h1>Nuestros Servicios</h1>
        <div class="services-grid">
            <div class="service-card">
                <img src={imagen1} alt="Diseño Web">
                <h2>Educacion </h2>
                <p>Creamos sitios web atractivos y funcionales que representan tu marca.</p>
            </div>
            <div class="service-card">
                <img src={imgexamen} alt="Desarrollo de Aplicaciones">
                <h2>Preparacion</h2>
                <p>Desarrollamos aplicaciones móviles y de escritorio personalizadas.</p>
            </div>
            <div class="service-card">
                <img src={imgcolegio} alt="Marketing Digital">
                <h2>Futuro</h2>
                <p>Estrategias de marketing digital para aumentar tu presencia en línea.</p>
            </div>
           
        </div>
    </div>
</main>

<footer>
    <div class="container">
        <p>&copy; 2024 SOCIOLAB🌎. Todos los derechos reservados.</p>
    </div>
</footer>