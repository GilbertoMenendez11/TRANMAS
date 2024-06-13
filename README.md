<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>TRANMAS</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css">
    <link rel="shortcut icon" href="img/icono.png">
    <link rel="stylesheet" href="css/estilo.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap" rel="stylesheet">
</head>
    <body>
        <header id="cajonCabecera">
            <div class="cajonfoto">
                <img class="img" src="img/logo ilustrator.png" alt="">
            </div>
            <!-- Botón de hamburguesa para dispositivos móviles -->
        <div class="menu-toggle" onclick="toggleMenu()">
            <span></span>
            <span></span>
            <span></span>
        </div>
        <!-- Barra de navegación -->
        <nav class="menu">
            <ul class="nav-list">
                <li><a href="index.html">INICIO</a></li>
                <li><a href="/vistas/tours.html">TOURS</a></li>
                <li><a href="/vistas/viajesExpress.html">VIAJES EXPRESS</a></li>
                <li><a href="/vistas/Rutas.html">RUTAS</a></li>
                <li><a href="/vistas/Galeria.html">GALERIA</a></li>
            </ul>
        </nav>
        </header>
        <!--seccion de video-->
        <div class="caja">
            <div class="cajonVideo">
                <video src="videos/promocional.mp4" autoplay controls></video>
            </div>
        </div>
        
        <!--seccion quienes somos-->
        <div class="tema"><h1><b>QUIENES SOMOS</b></h1></div>
        <div class="cajonQuienes">
            
            <div class="cardMision">
                <h1><b>MISIÓN</b></h1>
                <p>
                    Facilitar la expanción y operatividad de nuestros clientes al actuar como intermediario, brindando
                    soluciones que potencien sus relaciones comerciales.
                </p>
            </div>
            <div class="cardVision">
                <h1><b>VISIÓN</b></h1>
                <p>
                    Ser reconocidos como el principal facilitador y socio estratégico para empresas de diversos
                    sectores, conectándolas de manera efectiva para maximizar oportunidades de negocio.
                </p>
            </div>
            <div class="cardValores">
                <h1><b>VALORES</b></h1>
                <p>
                    DIOS<br>Respeto<br>Disciplina<br>Puntualidad<br>Responsabilidad<br>Proactividad
                </p>
            </div>
        </div>

        <!--seccion empleo-->
        <div class="temaEm"><h1><b>EMPLEO</b></h1></div>
        <div class="cajonEmpleo">
            <div class="cajonImg">
                <img class="imgg" src="img/icono.png" alt="">
            </div>
            <div class="cajonForm">
                <form action="">
                    <label for="Name">Nombre:</label>
                    <input type="text" placeholder="Nombre completo"><br>
                    <label for="correo">Correo: </label><br>
                    <input type="email" placeholder="Direccion de Correo "><br>
                    <label for="phone">Telefono:</label>
                    <input type="tel" placeholder="Telefono"><br>
                    <label for="tipoEmpleo">Selecciona el puesto a Aplicar: </label>
                    <select id="TipoEmpleo">
                        <option value="#">Motorista</option>
                        <option value="#">Mecanico</option>
                        <option value="#">Despacho</option>
                    </select>
                    <br>
                    <input type="submit" value="Enviar" class="enviar">
                </form>
            </div>
        </div>
        <footer>
            <div class="lg">
                <div>
                    <h4>Correo: <a href="tranmas252@yahoo.es" class="h">tranmas252@yahoo.es</a></h4>
                    <h4>Tel: 2484-5620</h4>
                    <h4>Whatsapp: 7008-6856</h4>
                    <h4>Direccion: 6ª calle oriente</h4>
                    <h4>lotif.Las Victorias, Sonsonate, El Salvador</h4>
                    <h4>Derechos Reservador 2024</h4>
                </div>
                <img src="img/logo ilustrator.png" id="i">
            </div> 
           </footer>   

           <script src="/js/javaScrip.js"></script>
    </body>
</html>


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="shortcut icon" href="/img/icono.png">
    <link rel="stylesheet" href="/css/estilo.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap" rel="stylesheet">
    <title>TRANMAS</title>
</head>
<body>
    <header id="cajonCabecera">
        <div class="cajonfoto">
            <img class="img" src="/img/logo ilustrator.png" alt="">
        </div>
        <div id="cajaNav">
          <!-- Botón de hamburguesa para dispositivos móviles -->
          <div class="menu-toggle" onclick="toggleMenu()">
            <span></span>
            <span></span>
            <span></span>
        </div>
        <!-- Barra de navegación -->
        <nav class="menu">
            <ul class="nav-list">
                <li><a href="/index.html">INICIO</a></li>
                <li><a href="/vistas/tours.html">TOURS</a></li>
                <li><a href="/vistas/viajesExpress.html">VIAJES EXPRESS</a></li>
                <li><a href="/vistas/Rutas.html">RUTAS</a></li>
                <li><a href="/vistas/Galeria.html">GALERIA</a></li>
            </ul>
        </nav>
    </header>

    <div class="video-container">
      <h2 id="expl">EXPLORA NUESTROS DESTINOS</h2>
      <div class="video">
          <iframe src="/videos/binaes.mp4" frameborder="0" allowfullscreen></iframe>
      </div>
      <div class="video">
          <iframe src="/videos/termos.mp4" frameborder="0" allowfullscreen></iframe>
      </div>
      <div class="video">
          <iframe src="/videos/rutas.mp4" frameborder="0" allowfullscreen></iframe>
      </div>
      <div class="video">
          <iframe src="/videos/puerta.mp4" frameborder="0" allowfullscreen></iframe>
      </div>
  </div>
  
  <div class="tour-container">
      <div class="tour-details">
          <h2 class="pt">PRÓXIMO TOUR</h2>
          <div class="tour-info">
              <p><strong>Fecha:</strong> 2024-05-12</p>
              <p><strong>Nombre:</strong> Excursión al Lago Coatepeque</p>
              <p><strong>Destino:</strong> Lago Coatepeque</p>
              <p><strong>Precio:</strong> $50</p>
          </div>
      </div>
      <div class="slider-box">
          <ul>
              <li>
                  <img src="../img/GUANACOS-LAGO-DE-COATEPEQUE-3-1024x648.jpg" alt="Lago Coatepeque">
              </li>
              <li>
                  <img src="../img/lago-de-coatepeque.jpg" alt="Lago Coatepeque">
              </li>
              <li>
                  <img src="../img/lake-coatepeque.jpg" alt="Lago Coatepeque">
              </li>
          </ul>
      </div>
  </div>
  
  <section id="ReservaCupo">
      <h2 id="em">RESERVA TU CUPO</h2>
      <div class="contenido">
          <form class="formTour" action="">
              <label for="name">Nombre:</label>
              <input type="text" id="name" placeholder="Nombre:" required><br>
              <label for="correo">Correo:</label>
              <input type="email" id="correo" placeholder="Correo:" required><br>
              <label for="phone">Teléfono:</label>
              <input type="tel" id="phone" placeholder="Teléfono" required><br>
              <label for="metodoPago">Método de pago:</label>
              <select id="metodoPago" required>
                  <option value="Tarjeta">Tarjeta</option>
                  <option value="Efectivo">Efectivo</option>
                  <option value="Bitcoin">Bitcoin</option>
              </select>
              <br>
              <input type="submit" value="Enviar" class="enviar">
          </form>
      </div>
  </section>
  
  <div class="voting-carousel">
      <h2 class="ot">OFERTAS TURÍSTICAS</h2>
      <div class="carousel-slide">
          <label for="option1"><img src="../img/GUANACOS-LAGO-DE-COATEPEQUE-3-1024x648.jpg" alt="Opción 1"></label>
      </div>
      <div class="carousel-slide">
          <label for="option2"><img src="../img/lago-de-coatepeque.jpg" alt="Opción 2"></label>
      </div>
      <div class="carousel-slide">
          <label for="option3"><img src="../img/lake-coatepeque.jpg" alt="Opción 3"></label>
      </div>
      <div class="carousel-slide">
          <label for="option4"><img src="../img/maxresdefault.jpg" alt="Opción 4"></label>
      </div>
      <button class="vote-btn">VOTAR</button>
  </div>


    <footer>
        <div class="lg">
            <div>
                <h4>Correo: <a href="tranmas252@yahoo.es" class="h">tranmas252@yahoo.es</a></h4>
                <h4>Tel: 2484-5620</h4>
                <h4>Whatsapp: 7008-6856</h4>
                <h4>Direccion: 6ª calle oriente</h4>
                <h4>lotif.Las Victorias, Sonsonate, El Salvador</h4>
                <h4>Derechos Reservador 2024</h4>
            </div>
            <img src="/img/logo ilustrator.png" id="i">
        </div> 
       </footer>   
       
       
       <script src="/js/javaScrip.js"></script>
</body>
</html>
