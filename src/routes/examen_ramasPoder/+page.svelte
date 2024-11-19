<script>
	import '$lib/CSS/examen_ramasPoder.css';
	import uno from '$lib/IMAGES/img_ramaPoder/1.jpeg';
	import dos from '$lib/IMAGES/img_ramaPoder/2.jpeg';
	import tres from '$lib/IMAGES/img_ramaPoder/3.jpeg';

	let activeTab = 'video';

	function openTab(tab) {
		activeTab = tab;
	}
</script>

<!-- Navbar -->
<nav class="navbar">
    <div class="logo">
        <h4>SOCIOLAB🌎</h4>
    </div>
    <ul class="nav-links">
        <li><a href="/temas" data-sveltekit-preload-data="tap" data-sveltekit-reload  class="nav-item">Inicio</a></li>
        <li><a href="/sobre_nosotros" class="nav-item">Nosotros</a></li>
        <li><a href="/" class="nav-item">Contacto</a></li>
    </ul>
    <div class="burger">
        <div class="line1"></div>
        <div class="line2"></div>
        <div class="line3"></div>
    </div>
</nav>

<!-- Content Section with Tabs -->
<div class="content">
    <div class="tabs">
		<button class="tab {activeTab === 'video' ? 'active' : ''}" on:click={() => openTab('video')}>
			Video
		</button>
		<button class="tab {activeTab === 'pdf' ? 'active' : ''}" on:click={() => openTab('pdf')}>
			Información
		</button>
		<button class="tab {activeTab === 'examen' ? 'active' : ''}" on:click={() => openTab('examen')}>
			Examen
		</button>
	</div>

    <!-- Video Tab -->
    {#if activeTab === 'video'}
    <div id="video" class="tab-content active">
        <h2>VIDEO DE APOYO</h2>
        <p>Observa atentamente el video.</p>
        <iframe width="100%" height="480" src="https://www.youtube.com/embed/epDBRxITROg" 
                title="Las Ramas del Poder Público" frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    </div>
    {/if}

    <!-- PDF Tab -->
    {#if activeTab === 'pdf'}
    <div class="tab-content active">
        <h1>Ramas del Poder Público</h1>
        <p>Las ramas del poder público son el conjunto de instituciones que ejercen las funciones del Estado de manera permanente...</p>
    
        <!-- Executive Branch Section -->
        <h2>Rama Ejecutiva</h2>
        <img src={uno} alt="Imagen de la Rama Ejecutiva" style="width:100%; height:auto;">
        <p>Es la responsable de la implementación y ejecución de las leyes y políticas del Estado...</p>
        
        <h3>¿Quiénes conforman la rama Ejecutiva?</h3>
        <p>Está representada por el presidente de la República...</p>
    
        <h3>Funciones de la Rama Ejecutiva:</h3>
        <ul>
            <li>Promover el desarrollo económico y social del país.</li>
            <li>Garantizar la seguridad y el orden público.</li>
            <li>Dirigir la política exterior y representar al país en el ámbito internacional.</li>
            <li>Administrar los recursos y presupuestos del Estado.</li>
            <li>Ejecutar las decisiones judiciales.</li>
        </ul>
    
        <!-- Legislative Branch Section -->
        <h2>Rama Legislativa</h2>
        <img src={dos} alt="Imagen de la Rama Legislativa" style="width:100%; height:auto;">
        <p>Se encarga de la elaboración y aprobación de leyes...</p>
    
        <h3>¿Quiénes conforman la rama Legislativa?</h3>
        <p>Está conformada por el Congreso de la República, que se divide en dos...</p>
    
        <h3>Funciones de la Rama Legislativa:</h3>
        <ul>
            <li>Elaborar, discutir y aprobar leyes que regulan la convivencia y el funcionamiento del Estado.</li>
            <li>Representar a los ciudadanos y sus intereses en el ámbito legislativo.</li>
            <li>Ejercer el control político sobre el Gobierno y las entidades estatales.</li>
            <li>Fiscalizar el manejo de los recursos públicos y promover la transparencia en la gestión pública.</li>
        </ul>
    
        <!-- Judicial Branch Section -->
        <h2>Rama Judicial</h2>
        <img src={tres} alt="Imagen de la Rama Judicial" style="width:100%; height:auto;">
        <p>Responsable de administrar justicia y garantizar el cumplimiento de las leyes...</p>
    
        <h3>¿Quiénes conforman la rama Judicial?</h3>
        <p>Está integrada por la Corte Suprema de Justicia, la Corte Constitucional...</p>
    
        <h3>Funciones de la Rama Judicial:</h3>
        <ul>
            <li>Administrar justicia de manera independiente e imparcial.</li>
            <li>Resolver conflictos legales y aplicar las leyes vigentes.</li>
            <li>Proteger los derechos fundamentales de los ciudadanos.</li>
            <li>Velar por el cumplimiento de las decisiones judiciales.</li>
        </ul>
    
        <h2>Bibliografía</h2>
        <p><a href="https://programas.uniandes.edu.co/blog/ramas-del-poder-publico#:~:text=Se%20dividen%20en%20Ejecutiva%2C%20Legislativa,y%20la%20separaci%C3%B3n%20de%20poderes">Enlace a la fuente</a></p>
    </div>
    {/if}

    <!-- Exam Tab -->
    {#if activeTab === 'examen'}
    <div id="examen" class="tab-content active">
        <h2 style="text-align: center;">Examen de Opción Múltiple</h2>
        <form id="examForm">
            <label for="nombre">Nombre:</label>
            <input type="text" id="nombre" name="nombre" required>

            <label for="email">Correo Electrónico:</label>
            <input type="email" id="email" name="email" required>

            <!-- Questions -->
            <div class="question">
                <p>1. ¿Cuántas ramas del poder público hay en Colombia?</p>
                <div class="options">
                    <label><input type="radio" name="q1" value="a" required> Dos</label>
                    <label><input type="radio" name="q1" value="b"> Tres</label>
                    <label><input type="radio" name="q1" value="c"> Cuatro</label>
                    <label><input type="radio" name="q1" value="d"> Cinco</label>
                </div>
            </div>

            <!-- Repeat similar structure for each question -->
            <!-- Question 2 -->
            <div class="question">
                <p>2. ¿Cuál es la función principal de la Rama Ejecutiva?</p>
                <div class="options">
                    <label><input type="radio" name="q2" value="a" required> Elaborar leyes</label>
                    <label><input type="radio" name="q2" value="b"> Administrar justicia</label>
                    <label><input type="radio" name="q2" value="c"> Implementar y ejecutar las leyes</label>
                    <label><input type="radio" name="q2" value="d"> Fiscalizar recursos públicos</label>
                </div>
            </div>

            <!-- Other questions (3-10) here with similar structure... -->
            <div class="question">
                <p>3. ¿Quién es el jefe de la Rama Ejecutiva en Colombia?</p>
                <div class="options">
                    <label><input type="radio" name="q3" value="a" required> El Presidente del Senado</label>
                    <label><input type="radio" name="q3" value="b"> El Ministro de Justicia</label>
                    <label><input type="radio" name="q3" value="c"> El presidente de la República</label>
                    <label><input type="radio" name="q3" value="d"> El Procurador General</label>
                </div>
            </div>
            
            <div class="question">
                <p>4. ¿Qué órgano conforma la Rama Legislativa?</p>
                <div class="options">
                    <label><input type="radio" name="q4" value="a" required> La Corte Suprema de Justicia</label>
                    <label><input type="radio" name="q4" value="b"> El Congreso de la República</label>
                    <label><input type="radio" name="q4" value="c"> La Fiscalía General</label>
                    <label><input type="radio" name="q4" value="d"> La Defensoría del Pueblo</label>
                </div>
            </div>
            
            <div class="question">
                <p>5. ¿Cuáles son las dos cámaras que componen el Congreso de la República?</p>
                <div class="options">
                    <label><input type="radio" name="q5" value="a" required> Senado y Cámara de Representantes</label>
                    <label><input type="radio" name="q5" value="b"> Senado y Cámara de Comercio</label>
                    <label><input type="radio" name="q5" value="c"> Asamblea y Senado</label>
                    <label><input type="radio" name="q5" value="d"> Cámara de Representantes y Consejo de Estado</label>
                </div>
            </div>
            
            <div class="question">
                <p>6. ¿Cuál es la principal tarea de la Rama Judicial?</p>
                <div class="options">
                    <label><input type="radio" name="q6" value="a" required> Crear políticas públicas</label>
                    <label><input type="radio" name="q6" value="b"> Administrar justicia</label>
                    <label><input type="radio" name="q6" value="c"> Supervisar elecciones</label>
                    <label><input type="radio" name="q6" value="d"> Controlar el presupuesto</label>
                </div>
            </div>
            
            <div class="question">
                <p>7. ¿Qué organismo está incluido en la Rama Judicial?</p>
                <div class="options">
                    <label><input type="radio" name="q7" value="a" required> La Corte Constitucional</label>
                    <label><input type="radio" name="q7" value="b"> El Ministerio de Hacienda</label>
                    <label><input type="radio" name="q7" value="c"> La Agencia Nacional de Tierras</label>
                    <label><input type="radio" name="q7" value="d"> El Banco de la República</label>
                </div>
            </div>
            
            <div class="question">
                <p>8. ¿Cuál de las siguientes es una función de la Rama Legislativa?</p>
                <div class="options">
                    <label><input type="radio" name="q8" value="a" required> Procesar conflictos legales</label>
                    <label><input type="radio" name="q8" value="b"> Proteger derechos fundamentales</label>
                    <label><input type="radio" name="q8" value="c"> Elaborar y aprobar leyes</label>
                    <label><input type="radio" name="q8" value="d"> Promover la política exterior</label>
                </div>
            </div>
            
            <div class="question">
                <p>9. ¿Qué función no corresponde a la Rama Ejecutiva?</p>
                <div class="options">
                    <label><input type="radio" name="q9" value="a" required> Velar por el cumplimiento de normas</label>
                    <label><input type="radio" name="q9" value="b"> Aprobar leyes</label>
                    <label><input type="radio" name="q9" value="c"> Dirigir la política exterior</label>
                    <label><input type="radio" name="q9" value="d"> Administrar recursos del Estado</label>
                </div>
            </div>
            
            <div class="question">
                <p>10. ¿Qué aspecto destaca la Constitución de 1991 sobre las ramas del poder público?</p>
                <div class="options">
                    <label><input type="radio" name="q10" value="a" required> La creación de nuevas leyes</label>
                    <label><input type="radio" name="q10" value="b"> La importancia de la separación de poderes</label>
                    <label><input type="radio" name="q10" value="c"> La eliminación de la Rama Judicial</label>
                    <label><input type="radio" name="q10" value="d"> El fortalecimiento de la Presidencia</label>
                </div>
            </div>
            <button type="submit">Enviar Examen</button>
        </form>
    </div>
    {/if}
</div>
