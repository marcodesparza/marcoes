export function detectCssChange(element: HTMLElement, callback: () => void): void {
    // Creamos un nuevo MutationObserver
    const observer = new MutationObserver((mutations) => {
        // Iteramos sobre todas las mutaciones que ha observado
        for (const mutation of mutations) {
            // Si la mutación es un cambio de atributo
            if (mutation.type === 'attributes') {
                // Llamamos al callback
                callback();
            }
        }
    });

    // Configuramos el observer para observar cambios de atributos
    observer.observe(element, { attributes: true });
}