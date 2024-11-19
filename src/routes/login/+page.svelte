<script>
    import '$lib/CSS/inicio_sesion.css'
    let signUpMode = false;  

    function toggleSignUp() {  
        signUpMode = true;  
    }  

    function toggleSignIn() {  
        signUpMode = false;  
    }  
</script>

<svelte:head>
  <script
      src="https://kit.fontawesome.com/64d58efce2.js"
      crossorigin="anonymous"></script>
</svelte:head>

<div class="container {signUpMode ? 'sign-up-mode' : ''}">
    <div class="forms-container">
      <div class="signin-signup">
        <form action="?/login" class="sign-in-form" method="POST" data-sveltekit-preload-data="tap" data-sveltekit-reload>
          <h2 class="title">Iniciar sesion</h2>
          <div class="input-field">
            <i class="fas fa-user"></i>
            <input name="correo" type="email" placeholder="email" required/>
          </div>
          <div class="input-field">
            <i class="fas fa-lock"></i>
            <input name="password" type="password" placeholder="Password" required/>
          </div>
          <input type="submit" value="Login" class="btn solid" />
          <p class="social-text">O Iniciar sesión con plataformas sociales</p>
          <div class="social-media">
            <a href="/" class="social-icon">
              <i class="fab fa-facebook-f"></i>
            </a>
            <a href="/" class="social-icon">
              <i class="fab fa-twitter"></i>
            </a>
            <a href="/" class="social-icon">
              <i class="fab fa-google"></i>
            </a>
            <a href="/" class="social-icon">
              <i class="fab fa-linkedin-in"></i>
            </a>
          </div>
        </form>



        <form action="?/register" class="sign-up-form" method="POST" data-sveltekit-preload-data="tap" data-sveltekit-reload>
          <h2 class="title">Registrarse</h2>
          <div class="input-field">
            <i class="fas fa-user"></i>
            <input name="username" type="text" placeholder="Username" required />
          </div>
          <div class="input-field">
            <i class="fas fa-envelope"></i>
            <input name="correo" type="email" placeholder="Email" required/>
          </div>
          <div class="input-field">
            <i class="fas fa-lock"></i>
            <input name="password" type="password" placeholder="Password" required/>
          </div>
          <input type="submit" class="btn" value="Sign up" />
          <p class="social-text">O Regístrese con las plataformas sociales</p>
          <div class="social-media">
            <a href="/" class="social-icon">
              <i class="fab fa-facebook-f"></i>
            </a>
            <a href="/" class="social-icon">
              <i class="fab fa-twitter"></i>
            </a>
            <a href="/" class="social-icon">
              <i class="fab fa-google"></i>
            </a>
            <a href="/" class="social-icon">
              <i class="fab fa-linkedin-in"></i>
            </a>
          </div>
        </form>
      </div>
    </div>

    <div class="panels-container" >
      <div class="panel left-panel">
        <div class="content">
          <h3>Nuevo aquí?</h3>
          <p>¡Registrate y conocénos!</p>
          <button on:click={toggleSignUp} class="btn transparent" id="sign-up-btn">
            registrarse
          </button>
        </div>
        <img src="file:///C:/Users/USUARIO/Downloads/undraw_mobile_content_xvgr.svg" class="image" alt="" id="cohete" />
      </div>
      <div class="panel right-panel">
        <div class="content">
          <h3>¿Ya eres uno de nosotros?</h3>
          <p>Nos alegra verte de nuevo :D</p>
          <button on:click={toggleSignIn }  class="btn transparent" id="sign-in-btn">
            Iniciar sesión
          </button>
        </div>
        <img src="file:///C:/Users/USUARIO/Downloads/undraw_electricity_k2ft.svg" class="image" alt="" />
      </div>
    </div>
  </div>