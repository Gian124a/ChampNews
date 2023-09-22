function Datos(Jugadorito, Datosito) {
    const Datos = document.getElementById(Datosito);
    const Jugador = document.getElementById(Jugadorito);
    if (Datos.style.bottom == '-100px') {
        Datos.style.bottom = '15px';
        Jugador.style.bottom = '70px';
    } else {
        Datos.style.bottom = '-100px';
        Jugador.style.bottom = '20px';
    }
}
function scrollToSection(Jugadores) {
    const section = document.getElementById(Jugadores);
    section.scrollIntoView({ behavior: 'smooth' });
  }