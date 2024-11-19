<script>
	import '$lib/CSS/examen_guerraM.css';
	let activeTab = 'video';

	function openTab(tab) {
		activeTab = tab;
	}

    import mapa from '$lib/IMAGES/img_examen_guerraM/mapa.jpg'
    import trinchera from '$lib/IMAGES/img_examen_guerraM/trinchera.jpg'
    import aliados from '$lib/IMAGES/img_examen_guerraM/Aliados.jpg'
    import batalla from '$lib/IMAGES/img_examen_guerraM/batalla.jpg'

</script>

<nav class="navbar">
	<div class="logo">
		<h4>SOCIOLAB🌎</h4>
	</div>
	<ul class="nav-links">
		<li><a href="/temas" data-sveltekit-preload-data="tap" data-sveltekit-reload class="nav-item">Inicio</a></li>
		<li><a href="/examen_guerraM" class="nav-item">Nosotros</a></li>
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
		<div class="tab-content active">
			<h2>VIDEO DE APOYO</h2>
			<p>Observa atentamente el video.</p>
			<iframe
				width="700"
				height="513"
				src="https://www.youtube.com/embed/nBlTdwJiXoE?si=mtsxDc0p4rfXBznu"
				title="YouTube video player"
				frameborder="0"
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
				referrerpolicy="strict-origin-when-cross-origin"
				allowfullscreen
			></iframe>
		</div>
	{/if}

	{#if activeTab === 'pdf'}
		<div class="tab-content active">
			<section id="ww1" class="war-section">
				<h2>Primera Guerra Mundial (1914-1918)</h2>
				<p>
					La Primera Guerra Mundial comenzó en 1914, tras el asesinato del archiduque Francisco
					Fernando de Austria en Sarajevo. Esto desató tensiones entre las principales potencias
					europeas, que ya estaban inmersas en un ambiente de competencia por la expansión
					imperialista, el nacionalismo y el militarismo. Los principales bandos eran los Aliados
					(Francia, Reino Unido, Rusia y más tarde, Italia y EE.UU.) contra las Potencias Centrales
					(Alemania, Austria-Hungría, el Imperio Otomano y Bulgaria).
				</p>
				<div class="image-placeholder">
					<img src={mapa} alt="Mapa de Europa en 1914" />
				</div>
				<h3>Causas</h3>
				<ul>
					<li>
						Asesinato de Francisco Fernando: El 28 de junio de 1914, el heredero del trono
						austrohúngaro fue asesinado por un nacionalista serbio, lo que llevó a Austria-Hungría a
						declarar la guerra a Serbia. Las alianzas se activaron, escalando el conflicto.
					</li>
					<li>
						Imperialismo: Las potencias europeas competían por territorios en África y Asia, lo que
						generaba tensiones.
					</li>
					<li>
						Militarismo: La carrera armamentista entre las potencias aumentó el riesgo de guerra.
					</li>
					<li>
						Nacionalismo: Movimientos nacionalistas en Europa, especialmente en los Balcanes,
						desestabilizaban la región.
					</li>
				</ul>
				<h3>Desarrollo</h3>
				<p>La guerra se combatió principalmente en tres frentes:</p>
				<ul>
					<li>
						Frente Occidental: La línea de batalla entre Francia, Bélgica y Alemania, donde
						predominaba la guerra de trincheras.
					</li>
					<li>Frente Oriental: Rusia luchó contra Alemania y Austria-Hungría.</li>
					<li>
						Frente Italiano: Italia, que inicialmente era neutral, se unió a los Aliados en 1915.
					</li>
				</ul>
				<p>
					La guerra fue larga y devastadora, con nuevas tecnologías como aviones, tanques y gases
					venenosos que hicieron que los combates fueran más letales. La participación de Estados
					Unidos en 1917 inclinó la balanza a favor de los Aliados.
				</p>
				<div class="image-placeholder">
					<img src={trinchera} alt="Trincheras en el Frente Occidental" />
				</div>
				<h3>Consecuencias</h3>
				<ul>
					<li>
						Tratado de Versalles (1919): Puso fin a la guerra y sancionó duramente a Alemania,
						obligándola a pagar reparaciones, perder territorios y reducir su ejército.
					</li>
					<li>
						Cambio de mapa político: La disolución de los imperios Austrohúngaro, Otomano, Alemán y
						Ruso.
					</li>
					<li>
						Crisis económica: Muchos países europeos quedaron devastados económicamente, lo que
						sentó las bases para futuras tensiones.
					</li>
					<li>
						La Sociedad de Naciones: Se creó para promover la paz, pero fue débil y no pudo evitar
						futuros conflictos.
					</li>
				</ul>
			</section>

			<section id="ww2" class="war-section">
				<h2>Segunda Guerra Mundial (1939-1945)</h2>
				<p>
					La Segunda Guerra Mundial fue un conflicto global que involucró a la mayoría de las
					naciones del mundo, dividiéndose en dos bandos principales: los Aliados (EE.UU., Reino
					Unido, la Unión Soviética, China, entre otros) y las Potencias del Eje (Alemania, Italia y
					Japón).
				</p>
				<div class="image-placeholder">
					<img src={aliados} alt="Líderes de los Aliados" />
				</div>
				<h3>Causas</h3>
				<ul>
					<li>
						Tratado de Versalles: Las condiciones humillantes impuestas a Alemania tras la Primera
						Guerra Mundial generaron resentimiento, facilitando el ascenso del nazismo.
					</li>
					<li>
						Ascenso de Hitler y el nazismo: En 1933, Adolf Hitler llegó al poder con un discurso
						ultranacionalista, expansionista y antisemita, buscando restaurar el poder de Alemania.
					</li>
					<li>
						Expansión de las potencias del Eje: Alemania anexó Austria en 1938, y luego invadió
						Polonia en 1939, lo que desencadenó la guerra. Japón también estaba en una campaña
						expansionista en Asia.
					</li>
					<li>
						Fracaso de la Liga de las Naciones: Incapaz de prevenir agresiones internacionales como
						la invasión italiana a Etiopía (1935) o la ocupación japonesa de Manchuria (1931).
					</li>
				</ul>
				<h3>Desarrollo</h3>
				<ul>
					<li>
						Europa: La invasión alemana de Polonia en septiembre de 1939 llevó al Reino Unido y
						Francia a declarar la guerra a Alemania. La Blitzkrieg (guerra relámpago) permitió a
						Alemania conquistar rápidamente gran parte de Europa. Sin embargo, la invasión de la
						Unión Soviética (1941) y la entrada de EE.UU. en 1941 tras el ataque a Pearl Harbor
						fueron puntos clave que llevaron al declive del Eje.
					</li>
					<li>
						Asia: Japón atacó Pearl Harbor en 1941, lo que provocó la entrada de EE.UU. en la
						guerra. Japón conquistó gran parte del sudeste asiático, pero fue derrotado tras las
						batallas del Pacífico, como Midway y Guadalcanal.
					</li>
					<li>
						África: Los Aliados lograron frenar el avance de las Potencias del Eje en el norte de
						África, especialmente en la Batalla de El Alamein.
					</li>
				</ul>
				<div class="image-placeholder">
					<img src={batalla} alt="Batalla de Stalingrado" />
				</div>
				<h3>Final</h3>
				<p>
					La guerra terminó en Europa con la rendición de Alemania el 8 de mayo de 1945, tras la
					caída de Berlín y el suicidio de Hitler. En Asia, Japón se rindió el 2 de septiembre de
					1945, después de los bombardeos atómicos de Hiroshima y Nagasaki.
				</p>
				<h3>Consecuencias</h3>
				<ul>
					<li>
						Muerte y destrucción masiva: Aproximadamente 70 millones de personas murieron,
						incluyendo 6 millones de judíos en el Holocausto.
					</li>
					<li>
						Creación de la ONU: Las Naciones Unidas se fundaron en 1945 para promover la paz y la
						cooperación internacional.
					</li>
					<li>
						Inicio de la Guerra Fría: La rivalidad entre EE.UU. y la Unión Soviética se intensificó,
						dando lugar a una nueva era de conflictos indirectos y tensiones globales.
					</li>
					<li>
						Reestructuración mundial: Europa quedó devastada y EE.UU. y la URSS emergieron como
						superpotencias.
					</li>
				</ul>
			</section>
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
					<p>1. ¿Qué evento desencadenó la Primera Guerra Mundial en 1914?</p>
					<div class="options">
						<label
							><input type="radio" name="q1" value="a" required /> La firma del Tratado de Versalles</label
						>
						<label><input type="radio" name="q1" value="b" /> La invasión de Polonia</label>
						<label
							><input type="radio" name="q1" value="c" /> El asesinato del archiduque Francisco Fernando
							</label
						>
						<label><input type="radio" name="q1" value="d" /> El bombardeo de Pearl Harbor</label>
					</div>
				</div>

				<div class="question">
					<p>
						2. ¿Qué potencias integraban la alianza de los Aliados y las Potencias Centrales en la
						Primera Guerra Mundial?
					</p>
					<div class="options">
						<label
							><input type="radio" name="q2" value="a" required /> Aliados: Alemania, Japón y Rusia;
							Potencias Centrales: Francia, Reino Unido y Estados Unidos</label
						>
						<label
							><input type="radio" name="q2" value="b" /> Aliados: Francia, Reino Unido, Rusia, EE.UU.;
							Potencias Centrales: Alemania, Austria-Hungría, Imperio Otomano, Bulgaria </label
						>
						<label
							><input type="radio" name="q2" value="c" /> Aliados: China, EE.UU. y Japón; Potencias Centrales:
							Alemania y Rusia</label
						>
						<label
							><input type="radio" name="q2" value="d" /> Aliados: Austria-Hungría, Alemania y Rusia;
							Potencias Centrales: Francia, EE.UU. y Reino Unido</label
						>
					</div>
				</div>

				<div class="question">
					<p>3. ¿Cuáles fueron las principales causas de la Primera Guerra Mundial?</p>
					<div class="options">
						<label
							><input type="radio" name="q3" value="a" required /> Nacionalismo, militarismo, imperialismo
							y alianzas </label
						>
						<label
							><input type="radio" name="q3" value="b" /> Carrera espacial, tratados comerciales, conflictos
							civiles y avances tecnológicos</label
						>
						<label
							><input type="radio" name="q3" value="c" /> Expansión de la Liga de Naciones, guerra fría,
							descolonización y competencia económica</label
						>
						<label
							><input type="radio" name="q3" value="d" /> Crecimiento del socialismo, colonización de
							África y acuerdos de paz</label
						>
					</div>
				</div>

				<div class="question">
					<p>
						4. ¿Qué tipo de combate predominó en el Frente Occidental durante la Primera Guerra
						Mundial?
					</p>
					<div class="options">
						<label><input type="radio" name="q4" value="a" required /> Guerra de guerrillas</label>
						<label><input type="radio" name="q4" value="b" /> Combates navales</label>
						<label><input type="radio" name="q4" value="c" /> Guerra de trincheras </label
						>
						<label><input type="radio" name="q4" value="d" /> Ataques aéreos</label>
					</div>
				</div>

				<div class="question">
					<p>5. ¿Qué tratado puso fin a la Primera Guerra Mundial y cómo afectó a Alemania?</p>
					<div class="options">
						<label
							><input type="radio" name="q5" value="a" required /> Tratado de Versalles; sancionó duramente
							a Alemania </label
						>
						<label
							><input type="radio" name="q5" value="b" /> Tratado de Paz de París; otorgó territorios
							a Alemania</label
						>
						<label
							><input type="radio" name="q5" value="c" /> Tratado de Núremberg; promovió la reconstrucción
							alemana</label
						>
						<label
							><input type="radio" name="q5" value="d" /> Tratado de Tordesillas; dividió el continente
							americano</label
						>
					</div>
				</div>

				<div class="question">
					<p>
						6. ¿Cuáles fueron las consecuencias económicas de la Primera Guerra Mundial para los
						países europeos?
					</p>
					<div class="options">
						<label
							><input type="radio" name="q6" value="a" required /> Prosperidad y crecimiento económico
							en toda Europa</label
						>
						<label
							><input type="radio" name="q6" value="b" /> Crisis económica y devastación en muchos países
							europeos </label
						>
						<label
							><input type="radio" name="q6" value="c" /> Incremento en los recursos disponibles y estabilidad
							política</label
						>
						<label
							><input type="radio" name="q6" value="d" /> Aumento en la inversión extranjera y reducción
							de deudas</label
						>
					</div>
				</div>

				<div class="question">
					<p>
						7. ¿Por qué el Tratado de Versalles y la humillación impuesta a Alemania se consideran
						causas de la Segunda Guerra Mundial?
					</p>
					<div class="options">
						<label
							><input type="radio" name="q7" value="a" required /> Porque promovieron la paz entre los
							países europeos</label
						>
						<label
							><input type="radio" name="q7" value="b" /> Porque fortalecieron la economía y las fuerzas
							militares de Alemania</label
						>
						<label
							><input type="radio" name="q7" value="c" /> Porque generaron resentimiento en Alemania,
							facilitando el ascenso del nazismo </label
						>
						<label
							><input type="radio" name="q7" value="d" /> Porque crearon buenas relaciones diplomáticas
							entre Alemania y Francia</label
						>
					</div>
				</div>

				<div class="question">
					<p>
						8. ¿Qué países formaban parte de las Potencias del Eje durante la Segunda Guerra
						Mundial?
					</p>
					<div class="options">
						<label
							><input type="radio" name="q8" value="a" required /> Reino Unido, Francia y Estados Unidos</label
						>
						<label><input type="radio" name="q8" value="b" /> China, Unión Soviética y EE.UU.</label
						>
						<label
							><input type="radio" name="q8" value="c" /> Alemania, Italia y Japón </label
						>
						<label><input type="radio" name="q8" value="d" /> Alemania, Rusia y Francia</label>
					</div>
				</div>

				<div class="question">
					<p>9. ¿Cuál fue el impacto de la rendición de Alemania y Japón en 1945?</p>
					<div class="options">
						<label
							><input type="radio" name="q9" value="a" required /> Inició la Guerra Fría </label
						>
						<label
							><input type="radio" name="q9" value="b" /> Puso fin a la Primera Guerra Mundial</label
						>
						<label
							><input type="radio" name="q9" value="c" /> Comenzó la Revolución Industrial</label
						>
						<label><input type="radio" name="q9" value="d" /> Estableció la Liga de Naciones</label>
					</div>
				</div>

				<div class="question">
					<p>
						10. ¿Qué organismo internacional se creó tras la Segunda Guerra Mundial con el fin de
						mantener la paz global?
					</p>
					<div class="options">
						<label><input type="radio" name="q10" value="a" /> La Liga de Naciones</label>
						<label><input type="radio" name="q10" value="b" /> La OTAN</label>
						<label><input type="radio" name="q10" value="c" required /> La ONU </label>
						<label><input type="radio" name="q10" value="d" /> La Comunidad Europea</label>
					</div>
				</div>

				<button type="submit">Enviar Examen</button>
			</form>
		</div>
	{/if}
</div>

<style>
	.tab-content {
		display: none;
	}
	.tab-content.active {
		display: block;
	}
</style>
