<script>
	import '$lib/CSS/examen_tratado.css';
	import firma from '$lib/IMAGES/img_examen_tratado/firma.jpeg';
	import destruccion from '$lib/IMAGES/img_examen_tratado/destruccion.webp';
	import mapa from '$lib/IMAGES/img_examen_tratado/mapa.jpeg';
	import tratado from '$lib/IMAGES/img_examen_tratado/tratado.webp';

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
				width="100%"
				height="480"
				src="https://www.youtube.com/embed/dkdc0Py3s8Y"
				title="¿Qué fue el Tratado de Versalles? - Resumen | Cláusulas y Consecuencias."
				frameborder="0"
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
				referrerpolicy="strict-origin-when-cross-origin"
				allowfullscreen
			></iframe>
		</div>
	{/if}

	{#if activeTab === 'pdf'}
		<div class="tab-content active">
			<h1>Tratado de Versalles</h1>
			<p>
				<img src={firma} alt="Firma del Tratado de Versalles" style="width:100%; height:auto;" />
				El Tratado de Versalles fue un acuerdo firmado el 28 de junio de 1919 entre los principales victoriosos
				de la Primera Guerra Mundial (1914-1918), fue firmado cinco años después del atentado de Sarajevo
				en el que fue asesinado el archiduque Francisco Fernando, la causa directa de la Primera Guerra
				Mundial. El tratado fue firmado en la Galería de los Espejos del Palacio de la ciudad de Versalles,
				Francia, y terminó oficialmente con el estado de guerra entre la Alemania del segundo Reich y
				los Aliados de la Primera Guerra Mundial. El tratado culpó y castigó a Alemania.
			</p>

			<h2>Causas del Tratado de Versalles</h2>
			<p>
				<img
					src={destruccion}
					alt="Destrucción tras la Primera Guerra Mundial"
					style="width:100%; height:auto;"
				/>
				1. <strong>La devastación de la Primera Guerra Mundial:</strong> Las grandes potencias quedaron
				económica y militarmente devastadas, por lo cual se buscaban garantías de seguridad para evitar
				futuras invasiones.
			</p>
			<p>
				2. <strong>Responsabilidad de Alemania:</strong> Muchos países pensaban que Alemania había sido
				el principal responsable de desencadenar el conflicto al apoyar a Austria-Hungría tras el asesinato
				del archiduque Francisco Fernando, por lo cual se condujo a la inclusión de la cláusula de culpabilidad
				de guerra en la que se responsabilizaba oficialmente a Alemania por el conflicto.
			</p>
			<p>
				3. <strong>Presión política en los países aliados:</strong> Francia, Reino Unido y Estados Unidos
				estaban a favor de que Alemania recibiera un castigo para garantizar que no volviera a ser una
				amenaza.
			</p>

			4.<strong>Objetivo de debilitar a Alemania militarmente:</strong>
			<ul>
				<li>
					Uno de los principales objetivos del tratado era reducir el poder militar de Alemania para
					que no pudiera desatar otro conflicto. La experiencia de la guerra había convencido a los
					aliados de que Alemania debía ser desmilitarizada y limitada en su capacidad de armarse
					nuevamente. Por lo tanto, se impusieron restricciones severas sobre el tamaño de su
					ejército, la prohibición de conscripción y la limitación del armamento.
				</li>
			</ul>

			5.<strong>Demandas de reparaciones económicas:</strong>
			<ul>
				<li>
					Los países aliados, en especial Francia y Bélgica, estaban profundamente endeudados debido
					a los enormes costos de la guerra, y sus economías habían sufrido daños severos. Exigieron
					que Alemania pagara reparaciones como compensación por los daños causados durante la
					guerra. Esta fue una demanda central en las negociaciones de paz y condujo a la inclusión
					de elevadas reparaciones en el tratado.
				</li>
				<li>
					Las reparaciones no solo buscaban reparar el daño material, sino también castigar a
					Alemania económicamente, impidiendo su recuperación y, por ende, su capacidad de emprender
					acciones agresivas en el futuro.
				</li>
			</ul>

			6.<strong>Tensiones entre las potencias europeas antes de la guerra:</strong>
			<ul>
				<li>
					Antes de la Primera Guerra Mundial, las potencias europeas ya habían estado compitiendo
					por la supremacía política, militar y económica. Alemania, que se había unificado en 1871,
					había emergido como una potencia industrial y militar, lo que inquietaba a naciones como
					Francia y el Reino Unido.
				</li>
				<li>
					Las potencias aliadas utilizaron la oportunidad del fin de la guerra para reducir la
					influencia de Alemania en Europa y redistribuir su poder. La pérdida de territorios,
					colonias y la limitación militar eran formas de contener el ascenso alemán.
				</li>
			</ul>

			<img src={mapa} alt="Rediseño del mapa de Europa" style="width:100%; height:auto;" />
			7. <strong>Rediseño del mapa de Europa:</strong>
			<ul>
				<li>
					El fin de la Primera Guerra Mundial también ofreció la oportunidad de rediseñar el mapa de
					Europa, en especial en áreas como Europa Central y del Este, donde la caída de los
					imperios austrohúngaro, ruso y otomano había creado un vacío de poder. Los aliados querían
					establecer un nuevo orden político basado en el principio de autodeterminación de los
					pueblos.
				</li>
				<li>
					El Tratado de Versalles permitió la creación o el fortalecimiento de nuevos estados como
					Polonia, Checoslovaquia y Yugoslavia. Para hacerlo, Alemania tuvo que ceder territorios y
					aceptar cambios fronterizos que redujeron su tamaño e influencia.
				</li>
			</ul>

			8.<strong>Fracaso de la diplomacia previa:</strong>
			<ul>
				<li>
					El fracaso de la diplomacia europea antes de la guerra, como el sistema de alianzas y la
					falta de un organismo internacional efectivo para mediar en conflictos, se consideraba una
					de las causas de la Primera Guerra Mundial. El Tratado de Versalles intentó, en parte,
					corregir este problema mediante la creación de la Sociedad de Naciones, que sería un foro
					para la resolución pacífica de disputas internacionales.
				</li>
				<li>
					Aunque este fue un objetivo a largo plazo, las tensiones entre los países y la dureza de
					las condiciones impuestas a Alemania demostraron ser más divisorias que reconciliadoras.
				</li>
			</ul>

			<h2>Consecuencias del Tratado de Versalles</h2>

			<img
				src={tratado}
				alt="Consecuencias del Tratado de Versalles"
				style="width:100%; height:auto;"
			/>
			1. <strong>Humillación y resentimiento en Alemania:</strong>
			<ul>
				<li>
					Las duras condiciones impuestas a Alemania generaron un profundo resentimiento y un
					sentimiento de humillación entre los alemanes, que consideraban el tratado como injusto y
					excesivo. Este descontento se convirtió en terreno fértil para el crecimiento del
					nacionalismo y la radicalización política, lo que eventualmente facilitó el ascenso de
					Adolf Hitler y el Partido Nazi al poder en 1933.
				</li>
			</ul>

			2.<strong>Inestabilidad económica:</strong>
			<ul>
				<li>
					Las reparaciones y las pérdidas territoriales, combinadas con la destrucción provocada por
					la guerra, debilitaron gravemente la economía alemana. Esto llevó a una hiperinflación
					masiva en 1923 y una crisis económica que se agravó con la Gran Depresión a fines de la
					década de 1920 y principios de la de 1930.
				</li>
			</ul>

			3.<strong>Crisis política en Europa:</strong>
			<ul>
				<li>
					El tratado reconfiguró las fronteras de Europa, creando nuevos estados como Polonia,
					Checoslovaquia y Yugoslavia, pero también dejó a muchas minorías étnicas en condiciones
					vulnerables y a algunos estados insatisfechos, lo que generó tensiones.
				</li>
				<li>
					El resentimiento alemán por el tratado fue una de las causas principales de la Segunda
					Guerra Mundial. Hitler utilizó la oposición al tratado para movilizar a la población
					alemana y llevar adelante sus políticas expansionistas.
				</li>
			</ul>

			4.<strong>Fracaso de la Sociedad de Naciones:</strong>
			<ul>
				<li>
					Aunque la Sociedad de Naciones fue creada con el propósito de prevenir guerras futuras, su
					falta de poder real para imponer decisiones y sanciones, junto con la ausencia de
					potencias clave como Estados Unidos, debilitó su eficacia. Este fracaso quedó evidente con
					el estallido de nuevos conflictos en la década de 1930, como la invasión de Manchuria por
					Japón y la expansión nazi.
				</li>
			</ul>

			<h2>Bibliografía</h2>
			<p>
				<a
					href="https://www.pucv.cl/pucv/noticias/vida-universitaria/instituto-de-historia-conmemoro-los-100-anos-del-tratado-de-versalles"
				>
					Tratado de Versalles - Qué fue, causas y consecuencias
				</a>
			</p>
			<p>
				<a
					href="https://www.nationalgeographic.es/historia/2019/06/tratado-versalles-fin-primera-guerra-mundial-inicio-segunda"
				>
					National Geographic - Fin de la Primera Guerra Mundial e inicio de la Segunda
				</a>
			</p>
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
					<div class="question">
						<p>1. ¿Cuándo fue firmado el Tratado de Versalles?</p>
						<div class="options">
							<label><input type="radio" name="q1" value="a" required /> 28 de junio de 1914</label>
							<label><input type="radio" name="q1" value="b" /> 28 de junio de 1919</label>
							<label><input type="radio" name="q1" value="c" /> 28 de junio de 1923</label>
							<label><input type="radio" name="q1" value="d" /> 28 de junio de 1939</label>
						</div>
					</div>

					<div class="question">
						<p>2. ¿Qué evento desencadenó la Primera Guerra Mundial?</p>
						<div class="options">
							<label
								><input type="radio" name="q2" value="a" required /> La firma del Tratado de Versalles</label
							>
							<label><input type="radio" name="q2" value="b" /> La unificación de Alemania</label>
							<label
								><input type="radio" name="q2" value="c" /> El asesinato del archiduque Francisco Fernando</label
							>
							<label
								><input type="radio" name="q2" value="d" /> La creación de la Sociedad de Naciones</label
							>
						</div>
					</div>

					<div class="question">
						<p>3. Uno de los objetivos del Tratado de Versalles era:</p>
						<div class="options">
							<label
								><input type="radio" name="q3" value="a" required /> Fortalecer a Alemania militarmente</label
							>
							<label
								><input type="radio" name="q3" value="b" /> Mantener la paz a largo plazo sin restricciones</label
							>
							<label
								><input type="radio" name="q3" value="c" /> Debilitar a Alemania militarmente</label
							>
							<label><input type="radio" name="q3" value="d" /> Colonizar nuevas regiones</label>
						</div>
					</div>

					<div class="question">
						<p>
							4. ¿Cuál de las siguientes fue una consecuencia económica del Tratado de Versalles?
						</p>
						<div class="options">
							<label
								><input type="radio" name="q4" value="a" required /> Éxito económico inmediato en Alemania</label
							>
							<label><input type="radio" name="q4" value="b" /> Hiperinflación masiva en 1923</label
							>
							<label
								><input type="radio" name="q4" value="c" /> Crecimiento de la economía francesa</label
							>
							<label
								><input type="radio" name="q4" value="d" /> Estabilidad financiera en Europa</label
							>
						</div>
					</div>

					<div class="question">
						<p>5. ¿Qué cláusula se incluyó en el Tratado en relación con Alemania?</p>
						<div class="options">
							<label
								><input type="radio" name="q5" value="a" required /> Cláusula de neutralidad</label
							>
							<label
								><input type="radio" name="q5" value="b" /> Cláusula de culpabilidad de guerra</label
							>
							<label><input type="radio" name="q5" value="c" /> Cláusula de colaboración</label>
							<label><input type="radio" name="q5" value="d" /> Cláusula de paz eterna</label>
						</div>
					</div>

					<div class="question">
						<p>6. ¿Qué organización se creó como parte del esfuerzo de corrección diplomática?</p>
						<div class="options">
							<label><input type="radio" name="q6" value="a" required /> La OTAN</label>
							<label><input type="radio" name="q6" value="b" /> La Sociedad de Naciones</label>
							<label><input type="radio" name="q6" value="c" /> La Liga de las Naciones</label>
							<label><input type="radio" name="q6" value="d" /> La Conferencia de París</label>
						</div>
					</div>

					<div class="question">
						<p>
							7. ¿Cuál fue una de las principales demandas de los aliados hacia Alemania tras la
							guerra?
						</p>
						<div class="options">
							<label
								><input type="radio" name="q7" value="a" required /> Reparaciones económicas</label
							>
							<label><input type="radio" name="q7" value="b" /> Alianzas militares</label>
							<label><input type="radio" name="q7" value="c" /> Redistribución de colonias</label>
							<label><input type="radio" name="q7" value="d" /> Ampliación territorial</label>
						</div>
					</div>

					<div class="question">
						<p>8. ¿Qué estados emergieron o se fortalecieron tras el Tratado de Versalles?</p>
						<div class="options">
							<label><input type="radio" name="q8" value="a" required /> Austria y Hungría</label>
							<label
								><input type="radio" name="q8" value="b" /> Polonia, Checoslovaquia y Yugoslavia</label
							>
							<label><input type="radio" name="q8" value="c" /> Alemania y Francia</label>
							<label><input type="radio" name="q8" value="d" /> Italia y España</label>
						</div>
					</div>

					<div class="question">
						<p>9. ¿Qué sentimiento prevaleció en Alemania tras la imposición del tratado?</p>
						<div class="options">
							<label><input type="radio" name="q9" value="a" required /> Orgullo nacional</label>
							<label><input type="radio" name="q9" value="b" /> Alegría por la paz</label>
							<label><input type="radio" name="q9" value="c" /> Humillación y resentimiento</label>
							<label><input type="radio" name="q9" value="d" /> Indiferencia</label>
						</div>
					</div>

					<div class="question">
						<p>10. ¿Qué limitación fue impuesta a Alemania en el tratado?</p>
						<div class="options">
							<label
								><input type="radio" name="q10" value="a" required /> Prohibición de trade</label
							>
							<label
								><input type="radio" name="q10" value="b" /> Limitación del tamaño de su ejército</label
							>
							<label><input type="radio" name="q10" value="c" /> Prohibición de alianzas</label>
							<label
								><input type="radio" name="q10" value="d" /> Restricción de la industria cultural</label
							>
						</div>
					</div>
				</div>

				<button type="submit">Enviar Examen</button>
			</form>
		</div>
	{/if}
</div>
