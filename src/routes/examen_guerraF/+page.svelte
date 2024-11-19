<script>
	import '$lib/CSS/examen_guerraF.css';
    import guerra from'$lib/IMAGES/img_examen_guerraF/guerra-fria.jpeg'
	let activeTab = 'video';

	function openTab(tab) {
		activeTab = tab;
	}
</script>

<nav class="navbar">
	<div class="logo">
		<h4>SOCIOLAB🌎</h4>
	</div>
	<ul class="nav-links">
		<li><a href="/temas" data-sveltekit-preload-data="tap" data-sveltekit-reload  class="nav-item">Inicio</a></li>
		<li><a href="/sobre_nosotros" class="nav-item">nosotros</a></li>
		<li><a href="/" class="nav-item">Contacto</a></li>
	</ul>
	<div class="burger">
		<div class="line1"></div>
		<div class="line2"></div>
		<div class="line3"></div>
	</div>
</nav>
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

	{#if activeTab === 'video'}
		<div id="video" class="tab-content active">
			<h2>VIDEO DE APOYO</h2>
			<p>Observa atentamente el video .</p>
			<iframe
				width="681"
				height="383"
				src="https://www.youtube.com/embed/EXijvhBQ-u8"
				title="La Guerra Fría en 7 minutos"
				frameborder="0"
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
				referrerpolicy="strict-origin-when-cross-origin"
				allowfullscreen
			></iframe>
		</div>
	{/if}

	{#if activeTab === 'pdf'}
		<div class="tab-content active">
			<h1>La Guerra Fría</h1>
			<img src={guerra} alt="Mapa de la Unión Soviética" style="width: 100%;" />

			<p>
				La Guerra Fría fue un período caracterizado por un conflicto o enfrentamiento a nivel
				político, económico, social, ideológico y propagandístico entre Estados Unidos y la Unión
				Soviética (URSS) entre 1947 y 1991, es decir que tuvo lugar luego de la Segunda Guerra
				Mundial. El conflicto se dio por bloques principales: el bloque occidental o capitalista y
				el bloque oriental o comunista.
			</p>
			<p>
				El inicio de este conflicto se remonta al año 1945 debido a que los Estados Unidos temían la
				expansión del comunismo y buscaban frenar la influencia soviética en Europa. El término
				“guerra fría” fue atribuido por primera vez al período correspondiente a 1945, por el
				escritor británico George Orwell, autor de la novela <em>1984</em>.
			</p>

			<h2>Crisis destacadas durante la Guerra Fría</h2>
			<ul>
				<li>Bloqueo de Berlín (1948-1949)</li>
				<li>Segunda fase de la guerra civil china (1946-1949)</li>
				<li>Guerra de Corea (1950-1953)</li>
				<li>Crisis de Suez (1956)</li>
				<li>Insurrección húngara (1956)</li>
				<li>Crisis de Berlín (1961)</li>
				<li>Crisis de los misiles cubanos (1962)</li>
			</ul>

			<h2>Objetivos de Estados Unidos con la Guerra Fría</h2>
			<ul>
				<li>Contener el comunismo</li>
				<li>Defender la democracia y el libre mercado</li>
				<li>Mantener su hegemonía global</li>
			</ul>

			<h2>Objetivos de la Unión Soviética con la Guerra Fría</h2>
			<ul>
				<li>Expandir la influencia del comunismo</li>
				<li>Tener seguridad de evitar ataques futuros</li>
				<li>Contrarrestar la hegemonía capitalista</li>
			</ul>

			<h2>Causas de la Guerra Fría</h2>
			<ol>
				<li>Choque ideológico entre Estados Unidos (capitalista) y la URSS (comunista)</li>
				<li>Consecuencias de la Segunda Guerra Mundial generando zonas de influencia</li>
				<li>Desconfianza entre países por las invasiones</li>
				<li>La posesión de nuevas armas nucleares por parte de EE. UU. y la URSS</li>
			</ol>

			<h2>Consecuencias de la Guerra Fría</h2>
			<ol>
				<li>Carrera armamentista y amenaza nuclear</li>
				<li>Carrera espacial entre EE. UU. y la URSS</li>
				<li>Guerras de terceros o “guerras por el poder”</li>
				<li>División del mundo en dos bloques</li>
				<li>Revoluciones y movimientos sociales en el tercer mundo</li>
				<li>Caída del Muro de Berlín (1989) y fin de la URSS (1991)</li>
			</ol>

			<h2>Características de la Guerra Fría</h2>
			<ul>
				<li>Polarización del mundo en bloques capitalistas y comunistas</li>
				<li>Carrera armamentista</li>
				<li>Carrera espacial</li>
				<li>Guerras de poder indirectas</li>
				<li>Espionaje y propaganda</li>
				<li>Alianzas militares como la OTAN y el Pacto de Varsovia</li>
				<li>Descolonización y conflictos en el Tercer Mundo</li>
			</ul>

			<p>
				Para resumir, la Guerra Fría se caracterizó por la confrontación indirecta, la división
				ideológica, la carrera armamentista y tecnológica, y los conflictos en terceros países.
			</p>

			<h2>Factores que llevaron al fin de la Guerra Fría</h2>
			<ol>
				<li>Reformas de Perestroika y Glasnost</li>
				<li>Agotamiento del modelo soviético</li>
				<li>Caída del Muro de Berlín (1989)</li>
				<li>Fin del Pacto de Varsovia</li>
				<li>Disolución de la Unión Soviética (1991)</li>
				<li>Política exterior de Ronald Reagan y presión económica hacia la URSS</li>
			</ol>

			<h2>Bibliografías</h2>
			<ul>
				<li>
					<a href="https://www.nationalgeographicla.com/historia/2022/11/que-fue-la-guerra-fria"
						>National Geographic</a
					>
				</li>
				<li><a href="https://es.wikipedia.org/wiki/Guerra_Fr%C3%ADa">Wikipedia</a></li>
			</ul>
		</div>
	{/if}

	{#if activeTab === 'examen'}
		<div class="tab-content active">
			<h2 style="text-align: center;">Examen de Opción Múltiple</h2>
			<form id="examForm">
				<label for="nombre">Nombre:</label>
				<input type="text" id="nombre" name="nombre" required />

				<label for="email">Correo Electrónico:</label>
				<input type="email" id="email" name="email" required />
				<div class="question">
					<p>1. ¿Qué período histórico abarca la Guerra Fría?</p>
					<div class="options">
						<label><input type="radio" name="q1" value="a" required /> 1945-1980</label>
						<label><input type="radio" name="q1" value="b" /> 1947-1991</label>
						<label><input type="radio" name="q1" value="c" /> 1939-1945</label>
						<label><input type="radio" name="q1" value="d" /> 1950-1975</label>
					</div>
				</div>

				<div class="question">
					<p>2. ¿Cuáles eran los dos bloques principales en la Guerra Fría?</p>
					<div class="options">
						<label><input type="radio" name="q2" value="a" required /> Liberal y autoritario</label>
						<label><input type="radio" name="q2" value="b" /> Occidental y oriental</label>
						<label><input type="radio" name="q2" value="c" /> Capitalista y socialista</label>
						<label><input type="radio" name="q2" value="d" /> Democrático y totalitario</label>
					</div>
				</div>

				<div class="question">
					<p>3. ¿Qué evento se considera el inicio del conflicto que dio lugar a la Guerra Fría?</p>
					<div class="options">
						<label
							><input type="radio" name="q3" value="a" required /> Fin de la Segunda Guerra Mundial</label
						>
						<label><input type="radio" name="q3" value="b" /> Bloqueo de Berlín</label>
						<label><input type="radio" name="q3" value="c" /> Revolución Rusa</label>
						<label><input type="radio" name="q3" value="d" /> Conferencia de Yalta</label>
					</div>
				</div>

				<div class="question">
					<p>4. ¿Cuál de las siguientes crisis ocurrió durante la Guerra Fría?</p>
					<div class="options">
						<label><input type="radio" name="q4" value="a" required /> Guerra de Vietnam</label>
						<label><input type="radio" name="q4" value="b" /> Crisis de los misiles cubanos</label>
						<label><input type="radio" name="q4" value="c" /> Guerra de Irak</label>
						<label><input type="radio" name="q4" value="d" /> Crisis del petróleo</label>
					</div>
				</div>

				<div class="question">
					<p>
						5. ¿Cuál era uno de los principales objetivos de Estados Unidos durante la Guerra Fría?
					</p>
					<div class="options">
						<label><input type="radio" name="q5" value="a" required /> Expandir el comunismo</label>
						<label><input type="radio" name="q5" value="b" /> Defender el comunismo</label>
						<label><input type="radio" name="q5" value="c" /> Contener el comunismo</label>
						<label><input type="radio" name="q5" value="d" /> Aislar a la URSS</label>
					</div>
				</div>

				<div class="question">
					<p>6. ¿Qué buscaba la Unión Soviética durante la Guerra Fría?</p>
					<div class="options">
						<label
							><input type="radio" name="q6" value="a" required /> Promover el libre mercado</label
						>
						<label
							><input type="radio" name="q6" value="b" /> Expandir la influencia del comunismo</label
						>
						<label
							><input type="radio" name="q6" value="c" /> Mantener relaciones con los países de Europa
							Occidental</label
						>
						<label
							><input type="radio" name="q6" value="d" /> Establecer democracias en Europa del Este</label
						>
					</div>
				</div>

				<div class="question">
					<p>7. ¿Cuál de las siguientes fue una consecuencia de la Guerra Fría?</p>
					<div class="options">
						<label
							><input type="radio" name="q7" value="a" required /> Alianzas con países neutrales</label
						>
						<label><input type="radio" name="q7" value="b" /> Carrera armamentista</label>
						<label><input type="radio" name="q7" value="c" /> Descolonización pacífica</label>
						<label><input type="radio" name="q7" value="d" /> Estabilidad política global</label>
					</div>
				</div>

				<div class="question">
					<p>8. ¿Qué evento simbolizó de manera más clara el fin de la Guerra Fría?</p>
					<div class="options">
						<label
							><input type="radio" name="q8" value="a" required /> La disolución de la URSS</label
						>
						<label><input type="radio" name="q8" value="b" /> La caída del Muro de Berlín</label>
						<label><input type="radio" name="q8" value="c" /> La llegada del hombre a la Luna</label
						>
						<label
							><input type="radio" name="q8" value="d" /> La firma del Tratado de Versalles</label
						>
					</div>
				</div>

				<div class="question">
					<p>9. ¿Qué reformas en la URSS ayudaron a contribuir al fin de la Guerra Fría?</p>
					<div class="options">
						<label><input type="radio" name="q9" value="a" required /> Glasnost y Perestroika</label
						>
						<label><input type="radio" name="q9" value="b" /> Marshall y Lend-Lease</label>
						<label><input type="radio" name="q9" value="c" /> Nueva Política Económica</label>
						<label><input type="radio" name="q9" value="d" /> Seguridad Social y Educación</label>
					</div>
				</div>

				<div class="question">
					<p>10. ¿Qué efecto tuvo la política exterior de Ronald Reagan sobre la Guerra Fría?</p>
					<div class="options">
						<label
							><input type="radio" name="q10" value="a" required /> Aumentó la cooperación con la URSS</label
						>
						<label
							><input type="radio" name="q10" value="b" /> Incrementó la presión económica sobre la URSS</label
						>
						<label
							><input type="radio" name="q10" value="c" /> Promovió el comunismo en Europa del Este</label
						>
						<label
							><input type="radio" name="q10" value="d" /> Estableció la paz en Oriente Medio</label
						>
					</div>
				</div>

				<button type="submit">Enviar Examen</button>
			</form>
		</div>
	{/if}
</div>
