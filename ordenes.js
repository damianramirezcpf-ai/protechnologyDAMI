/* ===== Órdenes de reparación (página "Mi reparación") =====
   Para cada equipo que recibas, agrega una línea con su número de orden.
   estado: 0 Recibido · 1 En diagnóstico · 2 En reparación · 3 Listo para entrega · 4 Entregado
   Para cambiar el estado, edita el número y sube de nuevo este archivo.
   No escribas aquí nombres, cédulas ni teléfonos de clientes: la página es pública.
   Las órdenes PT-0001 a PT-0003 son de EJEMPLO: bórralas cuando empieces a usar el sistema. */
const ORDENES = {
  "PT-0001": { equipo: "Celular", trabajo: "Cambio de pantalla", estado: 2, fecha: "2026-11-19", nota: "Estamos instalando el repuesto." },
  "PT-0002": { equipo: "Televisor", trabajo: "Revisión de fuente de poder", estado: 1, fecha: "2026-11-18", nota: "En diagnóstico; te avisaremos el valor." },
  "PT-0003": { equipo: "Portátil", trabajo: "Mantenimiento y formateo", estado: 3, fecha: "2026-11-17", nota: "¡Listo! Puedes pasar a recogerlo." }
};
