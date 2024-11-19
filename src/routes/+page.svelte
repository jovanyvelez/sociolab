<script>
	//import imagen1 from "$lib/IMAGES/bg-2.svg"
	import logo from '$lib/IMAGES/images/logo.png';
	import gato1 from '$lib/IMAGES/images/gato-1.png';
	import gato2 from '$lib/IMAGES/images/gato_2.png';
  import whatss from '$lib/IMAGES/images/whatsapp.png';
  import face from '$lib/IMAGES/images/facebook.png';
  import email from '$lib/IMAGES/images/correo.png';
  import s1 from '$lib/IMAGES/images/bg.svg'
  import s2 from '$lib/IMAGES/images/bg-2.svg'
	import '$lib/CSS/inicio.css';
</script>

<header class="header">
    <img class="bg" src={s1} alt="" />
    <div class="menu container">
      <img class="logo" src={logo} alt="SocioLab" />
      <input type="checkbox" id="menu" />
      <label for="menu">
        <img src="images/menu.png" class="menu-icono" alt="" />
      </label>
      <nav class="navbar">
        <ul>
          <li><a href="/login" data-sveltekit-preload-data="tap" data-sveltekit-reload>Inicio de sesión</a></li>
          <li><a href="#Contactanos" data-sveltekit-preload-data="tap" data-sveltekit-reload>Contáctanos</a></li>
          <li><a href="/sobre_nosotros" data-sveltekit-preload-data="tap" data-sveltekit-reload >Sobre nosotros</a></li>
        </ul>
      </nav>
    </div>
    <div class="header-content container">
      <div class="header-info">
        <div class="header-txt">
          <h1>Aprende sociales de una forma fácil y entretenida</h1>
          <p>Estamos aquí para ayudarte a alcanzar tus metas académicas mientras te diviertes. Prepárate para descubrir el fascinante mundo de las Ciencias Sociales y conquistar el ICFES con confianza y entusiasmo. ¡Empecemos esta aventura educativa juntos!</p>
          <a href="/login" data-sveltekit-preload-data="tap" data-sveltekit-reload class="btn-1">¡Empieza ya!</a>
        </div>
        <div class="header-img">
          <img src={gato1} alt="" />
        </div>
      </div>
    </div>
  </header>
  
  <section class="nosotros">
    <img class="bg-2" alt="" src={s2}/>
    <div class="nosotros-info container">
      <div class="nosotros-img">
        <img src={gato2} alt="" />
      </div>
      <div class="nosotros-txt">
        <span>pero....</span>
        <h2>¿Quiénes somos?</h2>
        <p>"¡Somos cuatro estudiantes de grado once decididos a cambiar la forma aburrida y monótona de aprender ciencias sociales para las pruebas ICFES! Estamos reinventando el proceso de estudio con una metodología emocionante y efectiva. Únete a nuestra iniciativa y descubre una nueva manera inspiradora de prepararte para el éxito académico. ¡Es hora de desafiar lo establecido y transformar el aprendizaje en una experiencia estimulante y gratificante!"</p>
      </div>
    </div>
  </section>
  
  <section class="info container" id="Contactanos">
    <div class="info-head" id="contact">
      <h1>Contáctanos</h1>
      <p>Comunícate con nosotros si tienes dudas o sugerencias</p>
    </div>
    <div class="info-1">
      <a href="https://api.whatsapp.com/send?phone=573054035509&text=hola" data-sveltekit-preload-data="tap" data-sveltekit-reload>
        <img src={whatss} alt="" />
      </a>
      <h3>WhatsApp</h3>
      <p>3054035509</p>
    </div>
    <div class="info-1">
      <a href="https://www.facebook.com/sharer/sharer.php?u=https%3A//www.facebook.com/profile.php?id=100087638443777" data-sveltekit-preload-data="tap" data-sveltekit-reload>
        <img src={face} alt="" />
      </a>
      <h3>Facebook</h3>
      <p>@SocioLab</p>
    </div>
    <div class="info-1">
      <a href="mailto:srguzman260@gmail.com?subject=mas%20informacion&" data-sveltekit-preload-data="tap" data-sveltekit-reload>
        <img src={email} alt="" />
      </a>
      <h3>Correo</h3>
      <p>SocioLab@gmail.com</p>
    </div>
  </section>
  
  <hr />
  
  <footer class="footer container">
    <div class="footer-links">
      <div class="link">
        <h3>SocioLab</h3>
      </div>
      <div class="link">
        <h3>Código postal</h3>
        <ul>
          <li><a href="/">050010</a></li>
        </ul>
      </div>
      <div class="link">
        <h3>Términos y condiciones</h3>
        <ul>
          <li><a href="/">Términos de la comunidad</a></li>
          <li><a href="/">Privacidad</a></li>
          <li><a href="/">Normas</a></li>
        </ul>
      </div>
      <div class="link">
        <h3>Créditos</h3>
        <ul>
          <li><a href="/">lore</a></li>
          <li><a href="/">Lore</a></li>
          <li><a href="/">Lore</a></li>
          <li><a href="/">Lore</a></li>
        </ul>
      </div>
    </div>
    <hr />
    <section class="Copyright">
      <p>Copyright &copy; 2024 All Rights Reserved By SocioLab</p>
    </section>
  </footer>
