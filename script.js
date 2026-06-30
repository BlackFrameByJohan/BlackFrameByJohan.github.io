// Protección: Desactiva el clic derecho en todo el sitio web
document.addEventListener('contextmenu', event => event.preventDefault());

// Protección adicional por si intentan usar combinaciones de teclado para copiar
document.addEventListener('keydown', function(e) {
    if (e.ctrlKey && (e.key === 'u' || e.key === 's' || e.key === 'c')) {
        e.preventDefault();
    }
});
