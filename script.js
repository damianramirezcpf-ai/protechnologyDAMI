/* ===== ProTecHnology · scripts compartidos ===== */

// Banners automáticos
function iniciarSlideshow(containerId, intervalo) {
  const slides = document.querySelectorAll('#' + containerId + ' .slides');
  if (slides.length === 0) return;
  let indice = 0;
  function mostrar() {
    slides.forEach(s => { s.style.display = 'none'; s.classList.remove('active'); });
    indice = (indice % slides.length) + 1;
    slides[indice - 1].style.display = 'block';
    slides[indice - 1].classList.add('active');
    setTimeout(mostrar, intervalo);
  }
  mostrar();
}
iniciarSlideshow('banner-slideshow', 3500);

// Pestañas (Servicios)
function mostrarPanel(n) {
  const paneles = document.querySelectorAll('.panel');
  const botones = document.querySelectorAll('.tabs button');
  paneles.forEach(p => p.classList.remove('active'));
  botones.forEach(b => b.classList.remove('active'));
  if (paneles[n]) paneles[n].classList.add('active');
  if (botones[n]) botones[n].classList.add('active');
}

// Filtro de productos (Repuestos / Accesorios)
function filtrar(categoria, boton) {
  document.querySelectorAll('.filtros button').forEach(b => b.classList.remove('active'));
  boton.classList.add('active');
  document.querySelectorAll('.producto').forEach(p => {
    const ok = categoria === 'todos' || p.dataset.cat === categoria;
    p.style.display = ok ? '' : 'none';
  });
}

// Formulario de contacto → WhatsApp
const NUMERO_WHATSAPP = '573213184454'; // CAMBIAR por el número real del local
function enviarWhatsApp(e) {
  e.preventDefault();
  const f = e.target;
  const texto =
    'Hola ProTecHnology, soy ' + f.nombre.value +
    '. Dispositivo: ' + f.equipo.value +
    '. Marca/modelo: ' + f.modelo.value +
    '. Falla: ' + f.falla.value;
  window.open('https://wa.me/' + NUMERO_WHATSAPP + '?text=' + encodeURIComponent(texto), '_blank');
}

/* ===== Estado de reparación ===== */
const ETAPAS = ['Recibido', 'En diagnóstico', 'En reparación', 'Listo para entrega', 'Entregado'];

function buscarOrden(e) {
  e.preventDefault();
  const caja = document.getElementById('resultado-orden');
  caja.textContent = '';
  const clave = document.getElementById('orden').value.trim().toUpperCase();
  const o = (typeof ORDENES !== 'undefined') ? ORDENES[clave] : null;
  if (!o) {
    const aviso = document.createElement('div');
    aviso.className = 'aviso';
    aviso.textContent = 'No encontramos esa orden. Revisa el número o escríbenos por WhatsApp.';
    caja.appendChild(aviso);
    return;
  }
  const tarjeta = document.createElement('div');
  tarjeta.className = 'resultado';
  const titulo = document.createElement('h3');
  titulo.textContent = 'Orden ' + clave + ' · ' + o.equipo;
  const detalle = document.createElement('p');
  detalle.textContent = o.trabajo + ' · Actualizado: ' + o.fecha;
  const pasos = document.createElement('ol');
  pasos.className = 'pasos';
  ETAS_RENDER(pasos, o.estado);
  const nota = document.createElement('p');
  nota.className = 'nota';
  nota.textContent = o.nota || '';
  tarjeta.append(titulo, detalle, pasos, nota);
  caja.appendChild(tarjeta);
}
function ETAS_RENDER(ol, actual) {
  ETAPAS.forEach((nombre, i) => {
    const li = document.createElement('li');
    li.textContent = nombre;
    if (i < actual) li.className = 'hecho';
    if (i === actual) li.className = 'actual';
    ol.appendChild(li);
  });
}

/* ===== Catálogo ===== */
let categoriaCatalogo = 'todos';
function filtrarCatalogo(cat, boton) {
  categoriaCatalogo = cat;
  document.querySelectorAll('#filtros-catalogo button').forEach(b => b.classList.remove('active'));
  boton.classList.add('active');
  renderCatalogo();
}
function renderCatalogo() {
  const cuerpo = document.getElementById('tabla-catalogo');
  if (!cuerpo || typeof CATALOGO === 'undefined') return;
  const q = document.getElementById('buscar-catalogo').value.trim().toLowerCase();
  cuerpo.textContent = '';
  let n = 0;
  CATALOGO.forEach(item => {
    const texto = (item.modelo + ' ' + item.servicio).toLowerCase();
    if ((categoriaCatalogo === 'todos' || item.categoria === categoriaCatalogo) && texto.includes(q)) {
      const tr = document.createElement('tr');
      [item.modelo, item.servicio, '$' + item.precio.toLocaleString('es-CO')].forEach((t, i) => {
        const td = document.createElement('td');
        td.textContent = t;
        if (i === 2) td.style.fontWeight = '700';
        tr.appendChild(td);
      });
      cuerpo.appendChild(tr);
      n++;
    }
  });
  document.getElementById('vacio-catalogo').style.display = n === 0 ? '' : 'none';
}
if (document.getElementById('tabla-catalogo')) {
  if (typeof MOSTRAR_AVISO_EJEMPLO !== 'undefined' && MOSTRAR_AVISO_EJEMPLO) {
    const av = document.getElementById('aviso-catalogo');
    av.className = 'aviso';
    av.textContent = 'Precios de ejemplo: aún no son los valores oficiales del local. Confirma por WhatsApp.';
  }
  renderCatalogo();
}

/* ===== Galería de equipos (Compra y Venta) ===== */
if (document.getElementById('galeria-equipos') && typeof EQUIPOS !== 'undefined') {
  const cont = document.getElementById('galeria-equipos');
  EQUIPOS.forEach(eq => {
    const card = document.createElement('div');
    card.className = 'tarjeta';
    const enlace = document.createElement('a');
    enlace.href = eq.foto; enlace.target = '_blank';
    const img = document.createElement('img');
    img.src = eq.foto; img.alt = eq.titulo;
    img.onerror = () => { img.onerror = null; img.src = 'Imagenes/venta-cel1.svg'; };
    enlace.appendChild(img);
    const cuerpo = document.createElement('div');
    cuerpo.className = 'cuerpo';
    if (eq.ejemplo) {
      const et = document.createElement('span');
      et.className = 'etiqueta'; et.textContent = 'Foto ilustrativa';
      cuerpo.appendChild(et);
    }
    const h = document.createElement('h3'); h.textContent = eq.titulo;
    const p = document.createElement('p'); p.textContent = eq.detalle;
    const pr = document.createElement('div'); pr.className = 'precio'; pr.textContent = eq.precio;
    cuerpo.append(h, p, pr);
    card.append(enlace, cuerpo);
    cont.appendChild(card);
  });
}
