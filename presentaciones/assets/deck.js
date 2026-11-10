const deck = document.getElementById('deck');
const slides = [...deck.querySelectorAll('.slide')];
const progreso = document.getElementById('progreso');
const panelNotas = document.getElementById('panelNotas');
let actual = 0;

slides.forEach((s, i) => { const n = s.querySelector('.num'); if (n) n.textContent = i + 1; });

function escalar() {
  const k = Math.min(window.innerWidth / 1280, window.innerHeight / 720);
  deck.style.transform = `translate(-50%, -50%) scale(${k})`;
}

function ir(i) {
  quitarFoco();
  actual = Math.max(0, Math.min(slides.length - 1, i));
  slides.forEach((s, j) => s.classList.toggle('active', j === actual));
  progreso.style.width = `${(actual + 1) / slides.length * 100}%`;
  const notas = slides[actual].querySelector('aside.notas');
  panelNotas.innerHTML = notas ? notas.innerHTML : '';
  history.replaceState(null, '', `#${actual + 1}`);
}

document.addEventListener('keydown', e => {
  if (['ArrowRight', 'PageDown', ' '].includes(e.key)) { e.preventDefault(); ir(actual + 1); }
  else if (['ArrowLeft', 'PageUp'].includes(e.key)) { e.preventDefault(); ir(actual - 1); }
  else if (e.key === 'Home') ir(0);
  else if (e.key === 'End') ir(slides.length - 1);
  else if (e.key.toLowerCase() === 'n') panelNotas.classList.toggle('visible');
  else if (e.key.toLowerCase() === 'f') pantallaCompleta();
  else if (e.key === 'Escape') quitarFoco();
});

function pantallaCompleta() {
  if (!document.fullscreenElement) document.documentElement.requestFullscreen?.();
  else document.exitFullscreen?.();
}

document.getElementById('prev').onclick = () => ir(actual - 1);
document.getElementById('next').onclick = () => ir(actual + 1);
document.getElementById('btnNotas').onclick = () => panelNotas.classList.toggle('visible');
document.getElementById('btnFull').onclick = pantallaCompleta;
window.addEventListener('resize', escalar);

// Tarjetas de repaso: clic para mostrar u ocultar la respuesta
document.querySelectorAll('.pregunta, .revelable').forEach(p => p.addEventListener('click', () => p.classList.toggle('abierta')));

// Foco: clic sobre un elemento para destacarlo y atenuar los demás; otro clic, Esc o cambiar de diapositiva lo quita
const DESTACABLES = [
  '.card', '.versus .lado', '.pregunta', '.error', '.nivel-card', '.nivel-card li', '.agenda .item',
  '.lista li', '.leyenda li', '.ideas li', '.pasos li', '.lenguaje', '.lenguaje li', '.casilla', '.tabla tr:has(td)',
  '.actividad', 'pre.code', '.dialogo', '.definicion', '.comun', '.tipo', '.caja', '.bloque', '.modulo',
  '.peldaño', '.flujo .paso', '.chip', '.colab .celda', '.consola', '.rstudio .pane', 'svg.diagrama', '.df tr:has(td)', '.escala > div', '.content > p:not(.subtitulo):not(.fuente)'
].join(', ');
let foco = null;

deck.querySelectorAll(DESTACABLES).forEach(el => el.classList.add('destacable'));

function quitarFoco() {
  if (!foco) return;
  const slide = foco.closest('.slide');
  slide.classList.remove('con-foco');
  slide.querySelectorAll('.foco, .atenuado').forEach(el => el.classList.remove('foco', 'atenuado'));
  foco = null;
}

function ponerFoco(el) {
  quitarFoco();
  foco = el;
  const slide = el.closest('.slide');
  slide.classList.add('con-foco');
  el.classList.add('foco');
  slide.querySelectorAll('.destacable').forEach(otro => {
    if (otro.contains(el) || el.contains(otro)) return;
    // Si un contenedor destacable ya se atenúa, sus hijos no se atenúan otra vez
    const padre = otro.parentElement.closest('.destacable');
    if (padre && !padre.contains(el)) return;
    otro.classList.add('atenuado');
  });
}

deck.addEventListener('click', e => {
  if (e.target.closest('button, a')) return;
  const el = e.target.closest('.destacable');
  if (!el || el === foco) quitarFoco();
  else ponerFoco(el);
});

// Temporizador de la pausa (solo si la presentación lo incluye)
const reloj = document.getElementById('reloj');
if (reloj) {
  const btnIniciar = document.getElementById('relojIniciar');
  let restante = 600, intervalo = null;
  function pintarReloj() {
    const m = String(Math.floor(restante / 60)).padStart(2, '0');
    const s = String(restante % 60).padStart(2, '0');
    reloj.textContent = `${m}:${s}`;
  }
  btnIniciar.onclick = () => {
    if (intervalo) { clearInterval(intervalo); intervalo = null; btnIniciar.textContent = 'Continuar'; return; }
    btnIniciar.textContent = 'Pausar';
    intervalo = setInterval(() => {
      restante = Math.max(0, restante - 1); pintarReloj();
      if (restante === 0) { clearInterval(intervalo); intervalo = null; btnIniciar.textContent = 'Iniciar'; }
    }, 1000);
  };
  document.getElementById('relojReiniciar').onclick = () => {
    clearInterval(intervalo); intervalo = null; restante = 600; pintarReloj(); btnIniciar.textContent = 'Iniciar';
  };
  [btnIniciar, document.getElementById('relojReiniciar')].forEach(b => b.addEventListener('keydown', e => e.stopPropagation()));
}

escalar();
ir((parseInt(location.hash.slice(1), 10) || 1) - 1);
