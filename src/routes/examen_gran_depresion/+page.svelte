<script>
	import '$lib/CSS/examen_gran_depresion.css';
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
		<div class="tabs">
			<button class="tab {activeTab === 'video' ? 'active' : ''}" on:click={() => openTab('video')}>
				Video
			</button>
			<button class="tab {activeTab === 'pdf' ? 'active' : ''}" on:click={() => openTab('pdf')}>
				Información
			</button>
			<button
				class="tab {activeTab === 'examen' ? 'active' : ''}"
				on:click={() => openTab('examen')}
			>
				Examen
			</button>
		</div>
	</div>
	{#if activeTab === 'video'}
		<div id="video" class="tab-content active">
			<h2>VIDEO DE APOYO</h2>
			<p>Observa atentamente el video .</p>
			<iframe
				width="100%"
				height="383"
				src="https://www.youtube.com/embed/sxqzgjizzdo"
				title="El crack del 29 y la Gran Depresión"
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
				<h1>
					LA GRAN DEPRESIÓN
					<nav></nav>
				</h1>

				<p>
					La Gran Depresión, también conocida como la Crisis de 1929, fue una profunda crisis
					financiera mundial que comenzó con el colapso de la bolsa de valores de Wall Street de
					Nueva York entre el 24 y el 29 de octubre de 1929. Este evento marcó el inicio de un largo
					período de recesión económica que afectó a múltiples países a lo largo de la década de
					1930, provocando altos niveles de desempleo y dificultades económicas generalizadas.
				</p>

				<!-- Imagen general de la gran depresión -->
				<img
					src="https://i.ytimg.com/vi/yKJrr25pdpY/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLD2sI8bp2EGBAl2U1sERWa6vnOL0A"
					alt="La Gran depresión"
					style="width:100%; height:auto;"
				/>

				<h2>CARACTERÍSTICAS DE LA GRAN DEPRESIÓN:</h2>
				<ul>
					<li>
						<h3>Descenso de la actividad económica</h3>
						 La Gran Depresión provocó una caída generalizada en la producción y la actividad económica.
						Las fábricas redujeron su producción, muchas empresas cerraron, y el desempleo aumentó drásticamente.
						Este descenso de la actividad afectó a todos los sectores de la economía.
					</li>
					<br />
					<li>
						<h3>Reducción del consumo:</h3>
						 La reducción de los ingresos y el aumento del desempleo llevaron a una drástica disminución
						del consumo. Las personas compraban menos productos y servicios, lo que agravó la crisis
						económica, ya que menos demanda significaba menores ventas para las empresas, lo que a su
						vez causaba más despidos y cierres de negocios.
					</li>
					<br />
					<li>
						<h3>Descenso de los precios agrícolas:</h3>
						Debido a la sobreproducción y la falta de demanda, los precios de los productos
						agrícolas cayeron de manera alarmante. Esto perjudicó a los agricultores, que no podían
						cubrir sus costos de producción, lo que llevó a la quiebra a muchas explotaciones
						rurales y aumentó la pobreza en las zonas agrícolas.
					</li>
					<br />
					<li>
						<h3>Caída del comercio internacional:</h3>
						 La imposición de aranceles y las políticas proteccionistas, como el arancel Smoot-Hawley,
						provocaron una reducción del comercio entre países. Esto afectó a las economías globales,
						ya que muchas naciones dependían del comercio internacional para obtener recursos y productos,
						y la caída en el intercambio de bienes y servicios empeoró la crisis.
					</li>
					<br />
					<li>
						<h3>Quiebra del sistema bancario:</h3>
						 La quiebra de bancos fue uno de los efectos más devastadores de la Gran Depresión. Los bancos
						no pudieron hacer frente a la enorme cantidad de deudas incobrables y a la falta de confianza
						en el sistema financiero, lo que llevó al cierre de miles de instituciones bancarias y a
						la pérdida de los ahorros de millones de personas.
					</li>
					<br />
					<li>
						<h3>Aumento de la tasa de suicidios:</h3>
						 La desesperación derivada del desempleo, la pobreza extrema y la incertidumbre económica
						provocó un aumento significativo en las tasas de suicidio. Muchas personas se sintieron incapaces
						de enfrentar la situación y recurrían a medidas extremas debido a la angustia mental y emocional
						causada por la crisis.
					</li>
				</ul>

				<!-- Imagen de huelga -->
				<img
					src="https://www.laizquierdadiario.com/local/cache-vignettes/L720xH405/arton153130-07652.jpg?1731221330"
					alt="La Gran depresión"
					style="width:100%; height:auto;"
				/>

				<h2>CAUSAS DE LA GRAN DEPRESIÓN:</h2>
				<ul>
					<li>
						<h3>El desplome de la bolsa de valores en octubre de 1929</h3>
						 El colapso de la Bolsa de Nueva York en octubre de 1929, conocido como el "Jueves Negro",
						marcó el inicio de la Gran Depresión. La caída masiva de los precios de las acciones provocó
						pánico y una pérdida generalizada de riqueza, afectando la confianza en el sistema financiero
						global.
					</li>
					<br />
					<li>
						<h3>La sobreproducción industrial</h3>
						 Durante los años previos a la Gran Depresión, la industria produjo más bienes de los que
						los consumidores podían comprar. Esta sobreproducción llevó a un exceso de inventarios, lo
						que resultó en una caída de los precios y la quiebra de muchas empresas incapaces de vender
						sus productos.
					</li>
					<br />
					<li>
						<h3>La poca demanda y la gran oferta</h3>
						La economía estaba saturada con productos, pero la demanda de estos bienes era
						insuficiente debido a la caída en los ingresos y el desempleo. Esta disparidad entre
						oferta y demanda hizo que las empresas redujeran su producción y, en muchos casos,
						despidieran a trabajadores, lo que empeoró la recesión.
					</li>
					<br />
					<li>
						<h3>El colapso del comercio mundial debido al arancel Smoot-Hawley</h3>
						 El arancel Smoot-Hawley, implementado en 1930 en Estados Unidos, aumentó los impuestos sobre
						las importaciones y provocó represalias de otros países. Esto redujo drásticamente el comercio
						internacional, agravando la crisis económica global.
					</li>
					<br />
					<li>
						<h3>Las políticas gubernamentales</h3>
						Las políticas gubernamentales en muchos países, como la austeridad fiscal y la reducción
						del gasto público, empeoraron la situación. En lugar de estimular la economía, estas
						políticas recortaron el gasto y aumentaron el desempleo, profundizando la recesión.
					</li>
					<br />
					<li>
						<h3>La quiebra de bancos a nivel mundial</h3>
						La quiebra de bancos fue un factor crítico en la expansión de la crisis. Muchos bancos
						no pudieron hacer frente a las retiradas masivas de dinero y a las deudas incobrables.
						Esto afectó la confianza en el sistema financiero y causó una contracción del crédito,
						lo que empeoró la crisis económica.
					</li>
					<br />
					<li>
						<h3>El colapso de la oferta monetaria</h3>
						Durante la Gran Depresión, la oferta monetaria se redujo drásticamente debido a la
						quiebra de bancos y la falta de confianza en el sistema financiero. Esto generó
						deflación, aumentando el valor de la deuda y dificultando la recuperación económica.
					</li>
				</ul>

				<!-- Imagen de banco -->
				<img
					src="https://www.lavanguardia.com/files/article_main_microformat/uploads/2019/10/22/5f15f168c0104.png"
					alt="Caída del banco"
					style="width:100%; height:auto;"
				/>

				<h2>CONSECUENCIAS DE LA GRAN DEPRESIÓN:</h2>
				<ul>
					<li>
						<h3>Destrucción de sistemas productivos:</h3>
						 Industrias clave como la del acero y el algodón sufrieron graves contracciones, con la destrucción
						de infraestructuras y el cierre de fábricas debido a la disminución de la demanda.
					</li>
					<br />
					<li>
						<h3>Caída del comercio internacional:</h3>
						 El comercio global se desplomó entre un 50% y un 66% debido a la reducción de la demanda,
						la imposición de barreras arancelarias y políticas proteccionistas.
					</li>
					<br />
					<li>
						<h3>Descenso de los ingresos:</h3>
						 Los beneficios empresariales y los ingresos fiscales cayeron drásticamente, afectando la
						capacidad de los gobiernos para financiar sus actividades y a las empresas para reinvertir
						o mantener el empleo.
					</li>
					<br />
					<li>
						<h3>Aumento del desempleo:</h3>
						 El desempleo se disparó en muchas naciones, especialmente en Alemania y Estados Unidos,
						donde millones de personas perdieron sus empleos, lo que generó una crisis social de gran
						magnitud.
					</li>
					<br />
					<li>
						<h3>Superproducción agrícola:</h3>
						 El exceso de producción agrícola provocó una caída en los precios de los productos, lo que
						perjudicó gravemente a los agricultores, que no podían cubrir sus costos de producción.
					</li>
					<br />
					<li>
						<h3>Impacto en América Latina:</h3>
						 Los precios de las importaciones aumentaron, mientras que el precio internacional de las
						materias primas —de las cuales muchas economías latinoamericanas dependían— disminuyó, afectando
						negativamente sus ingresos y economías.
					</li>
				</ul>

				<h3>Bibliografía</h3>
				<ul>
					<li>
						Gobierno y Constitución Colombiana: Mecanismos de participación ciudadana establecidos
						por la Constitución de 1991.
					</li>
					<li>
						Universidad Pontificia Bolivariana: Explicaciones y ejemplos de mecanismos de
						participación.
					</li>
					<li>Blog UP: Casos y ejemplos recientes de participación ciudadana en Colombia.</li>
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
					<p>1. ¿En qué año se dió la gran depresión?</p>
					<div class="options">
						<label><input type="radio" name="q1" value="a" required /> 1929</label>
						<label><input type="radio" name="q1" value="b" /> 1950</label>
						<label><input type="radio" name="q1" value="c" /> 1928</label>
						<label><input type="radio" name="q1" value="d" /> 1930</label>
					</div>
				</div>

				<div class="question">
					<p>2. ¿Qué significa que comenzara el período de la Gran Depresión?</p>
					<div class="options">
						<label
							><input type="radio" name="q2" value="a" required /> Que comenzó una nueva guerra</label
						>
						<label
							><input type="radio" name="q2" value="b" /> Estados Unidos tuvo un problema económico</label
						>
						<label
							><input type="radio" name="q2" value="c" /> Inició un período de recesión económica a nivel
							mundial</label
						>
						<label
							><input type="radio" name="q2" value="d" /> Se generó una afectación económica en Europa</label
						>
					</div>
				</div>

				<div class="question">
					<p>3. Algunos de los efectos de la Gran Depresión son:</p>
					<div class="options">
						<label
							><input type="radio" name="q3" value="a" required /> Alza en la población mundial</label
						>
						<label
							><input type="radio" name="q3" value="b" /> Desempleo y dificultades económicas</label
						>
						<label><input type="radio" name="q3" value="c" /> Mayor producción de cultivos</label>
						<label
							><input type="radio" name="q3" value="d" /> Mayor oferta de empleo en la población americana</label
						>
					</div>
				</div>

				<div class="question">
					<p>4. ¿Cuál de las siguientes es una característica de la Gran Depresión?</p>
					<div class="options">
						<label
							><input type="radio" name="q4" value="a" required /> Ascenso de la actividad económica</label
						>
						<label><input type="radio" name="q4" value="b" /> Quiebra del sistema bancario</label>
						<label><input type="radio" name="q4" value="c" /> Aumento del empleo</label>
						<label
							><input type="radio" name="q4" value="d" /> Aumento del comercio a nivel mundial</label
						>
					</div>
				</div>

				<div class="question">
					<p>5. La principal causa de la Gran Depresión es:</p>
					<div class="options">
						<label><input type="radio" name="q5" value="a" required /> El cierre de bancos</label>
						<label><input type="radio" name="q5" value="b" /> La falta de producción agrícola</label
						>
						<label
							><input type="radio" name="q5" value="c" /> El desplome de la bolsa de valores en octubre
							de 1930</label
						>
						<label
							><input type="radio" name="q5" value="d" /> El desplome de la bolsa de valores en octubre
							de 1929</label
						>
					</div>
				</div>

				<div class="question">
					<p>6. ¿Cuál fue un efecto o impacto de la Gran Depresión en América Latina?.</p>
					<div class="options">
						<label
							><input type="radio" name="q1" value="a" required /> Los precios de las importaciones aumentaron
							mientras que el precio internacional de las materias primas disminuyó</label
						>
						<label
							><input type="radio" name="q1" value="b" /> Los precios de las importaciones disminuyeron
							mientras que el precio internacional de las materias primas aumentó</label
						>
						<label
							><input type="radio" name="q1" value="c" /> Se generaron nuevos lugares de diálogo sobre
							la economía latinoamericana</label
						>
						<label
							><input type="radio" name="q1" value="d" /> La pobreza disminuyó debido a la constante
							oferta de empleo</label
						>
					</div>
				</div>

				<div class="question">
					<p>
						7. El comercio global se desplomó entre un 50% y un 66% debido a la reducción de la
						demanda, la imposición de barreras arancelarias y políticas proteccionistas. ¿A qué
						consecuencia corresponde este enunciado?
					</p>
					<div class="options">
						<label><input type="radio" name="q2" value="a" required /> Aumento del desempleo</label>
						<label><input type="radio" name="q2" value="b" /> Descenso de los ingresos</label>
						<label
							><input type="radio" name="q2" value="c" /> Caída del Comercio Internacional</label
						>
						<label><input type="radio" name="q2" value="d" /> Impacto en América Latina</label>
					</div>
				</div>

				<div class="question">
					<p>
						8. Las personas compraban menos productos y servicios, lo que agravó la crisis
						económica, ya que menos demanda significaba menores ventas para las empresas, lo que a
						su vez causaba más despidos y cierres de negocios. El anterior hecho corresponde a:
					</p>
					<div class="options">
						<label><input type="radio" name="q3" value="a" required /> Reducción del consumo</label>
						<label
							><input type="radio" name="q3" value="b" /> Descenso de la actividad económica</label
						>
						<label
							><input type="radio" name="q3" value="c" /> Descenso de los precios agrícolas</label
						>
						<label
							><input type="radio" name="q3" value="d" /> Caída del Comercio Internacional</label
						>
					</div>
				</div>

				<div class="question">
					<p>9. ¿Cómo afectó la Gran Depresión el empleo?</p>
					<div class="options">
						<label
							><input type="radio" name="q4" value="a" required /> La Gran Depresión causó que los empleados
							disminuyeran su productividad y generó perjuicios para países como Estados Unidos y Alemania.</label
						>
						<label
							><input type="radio" name="q4" value="b" /> La Gran Depresión causó un aumento masivo del
							desempleo a nivel mundial, algunos de los países más afectados fueron Estados Unidos y
							Alemania.</label
						>
						<label
							><input type="radio" name="q4" value="c" /> La Gran Depresión causó que los empleados aumentaran
							su productividad y generó beneficios para países como Estados Unidos y Alemania.</label
						>
						<label
							><input type="radio" name="q4" value="d" />La Gran Depresión causó un aumento masivo
							en el empleo a nivel mundial, algunos de los países más beneficiados fueron Estados
							Unidos y Alemania.</label
						>
					</div>
				</div>

				<div class="question">
					<p>
						10. ¿Cómo era el nombre de la principal bolsa de valores de Nueva York, la cual tuvo una
						caída que fue la desecadenante de la Gran Depresión?
					</p>
					<div class="options">
						<label
							><input type="radio" name="q5" value="a" required /> Bolsa de New York Stock Exchange</label
						>
						<label><input type="radio" name="q5" value="b" /> Bolsa de London Stock Exchange</label>
						<label><input type="radio" name="q5" value="c" /> Bolsa de Valores de Alemania</label>
						<label><input type="radio" name="q5" value="d" /> Bolsa de Valores de Wall Street</label
						>
					</div>

					<button type="submit">Enviar Examen</button>
				</div>
			</form>
		</div>
	{/if}
</div>
