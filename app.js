// ================================
//  CASA VICTORIA — app.js v3
//  ⬇️ Cambia este número
// ================================
const NUMERO_WHATSAPP = "50495616113"; 

// Comprar por WhatsApp
function comprar(producto, precio) {
  const msg = `¡Hola Casa Victoria! 👋 Me interesa este producto:\n\n*${producto}* — ${precio}\n\n¿Está disponible?`;
  window.open(`https://wa.me/${NUMERO_WHATSAPP}?text=${encodeURIComponent(msg)}`, "_blank");
}

// Filtro de catálogo
function filtrar(btn, cat) {
  document.querySelectorAll('.filtro').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  document.querySelectorAll('.card').forEach(card => {
    if (cat === 'todos' || card.dataset.cat === cat) {
      card.classList.remove('hidden');
    } else {
      card.classList.add('hidden');
    }
  });
}

// Menú móvil
function toggleMenu() {
  document.getElementById('navMobile').classList.toggle('open');
}
function closeMenu() {
  document.getElementById('navMobile').classList.remove('open');
}

// Navbar scroll effect
window.addEventListener('scroll', () => {
  const nav = document.getElementById('navbar');
  if (window.scrollY > 40) {
    nav.style.boxShadow = '0 4px 24px rgba(0,0,0,0.4)';
  } else {
    nav.style.boxShadow = 'none';
  }
  // Cerrar menú al hacer scroll
  document.getElementById('navMobile').classList.remove('open');
});
