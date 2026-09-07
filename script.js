// FAQ Accordion Logic
document.querySelectorAll('.faq-trigger').forEach(trigger => {
  trigger.addEventListener('click', () => {
    const parent = trigger.parentElement;
    const isActive = parent.classList.contains('active');
    
    // Close all
    document.querySelectorAll('.faq-item').forEach(item => {
      item.classList.remove('active');
    });

    // Toggle current
    if (!isActive) {
      parent.classList.add('active');
    }
  });
});

// Terminal Ping Logic
let pingInterval;

function runPing(location, ip) {
  const terminal = document.getElementById('terminal-output');
  clearInterval(pingInterval);
  
  terminal.innerHTML = `> Iniciando diagnóstico de red...<br>`;
  terminal.innerHTML += `> Ping a nodo ${location} [${ip}] con 32 bytes de datos:<br><br>`;
  
  let count = 0;
  const maxPings = 5;
  const baseLatency = location === 'Colombia' ? 12 : 45;
  let sent = 0;
  let received = 0;
  let minTime = 999;
  let maxTime = 0;
  let sumTime = 0;

  pingInterval = setInterval(() => {
    if (count >= maxPings) {
      clearInterval(pingInterval);
      terminal.innerHTML += `<br>> Estadísticas de ping para ${ip}:<br>`;
      terminal.innerHTML += `    Paquetes: enviados = ${sent}, recibidos = ${received}, perdidos = 0 (0% perdidos)<br>`;
      terminal.innerHTML += `> Tiempos aproximados de ida y vuelta en milisegundos:<br>`;
      const avg = Math.round(sumTime / received);
      terminal.innerHTML += `    Mínimo = ${minTime}ms, Máximo = ${maxTime}ms, Media = ${avg}ms<br><br>`;
      terminal.innerHTML += `> Esperando comando...<br>`;
      terminal.scrollTop = terminal.scrollHeight;
      return;
    }

    const jitter = Math.floor(Math.random() * 4);
    const time = baseLatency + jitter;
    
    sent++;
    received++;
    if (time < minTime) minTime = time;
    if (time > maxTime) maxTime = time;
    sumTime += time;
    
    terminal.innerHTML += `Respuesta desde ${ip}: bytes=32 tiempo=${time}ms TTL=54<br>`;
    terminal.scrollTop = terminal.scrollHeight;
    
    count++;
  }, 800);
}

// Smooth scroll for nav links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});
