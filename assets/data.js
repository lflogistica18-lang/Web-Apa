// Datos editables por defecto para APA Soluciones Gastronómicas
// Estos se exponen vía Tweaks y se pueden editar en vivo.

window.APA_DEFAULTS = {
  // Hero
  heroEyebrow: "Eficiencia profesional con sabor artesanal",
  heroTitle: "Soluciones Gastronómicas que Potencian tu Día",
  heroSubtitle: "Viandas para empresas, productos listos para cocinar en casa e insumos para restaurantes. Un solo aliado, control total de calidad.",
  ctaPrimary: "Presupuesto Empresas",
  ctaSecondary: "Tienda Minorista",

  // Servicios
  servicioAEyebrow: "Viandas Empresas",
  servicioATitle: "Alimentamos a tu equipo, todos los días",
  servicioADesc: "Gestión integral de comedores y viandas corporativas. Menús balanceados, entrega puntual y reportes nutricionales para RRHH.",
  servicioBEyebrow: "Market Hogar",
  servicioBTitle: "Sabor casero, listo en minutos",
  servicioBDesc: "Productos artesanales ready-to-cook. Las albóndigas de carne y pollo que prepara tu familia, ahora en tu freezer.",

  // Diferenciales
  diff1Title: "Higiene Certificada",
  diff1Desc: "Procesos auditados bajo normas SENASA y trazabilidad por lote.",
  diff2Title: "Materia Prima de Primera",
  diff2Desc: "Proveedores seleccionados, carnes premium y vegetales frescos del día.",
  diff3Title: "Logística Propia Puntual",
  diff3Desc: "Flota refrigerada propia. Entregas en franjas horarias, no en ventanas amplias.",

  // Cierre
  closingHook: "En APA, no solo entregamos comida; alimentamos tu crecimiento y la calidez de tu mesa.",

  // HoReCa
  horecaTitle: "Para Restaurantes y HoReCa",
  horecaDesc: "Insumos refrigerados y semielaborados por volumen. Ahorrá horas de cocina manteniendo el estándar de tu carta.",

  // Productos — 4 categorías × 4 platos
  catCarnes: {
    name: "Carnes Rojas",
    desc: "Albóndigas premium, medallones y estofados caseros.",
    items: [
      { name: "Albóndigas en salsa", desc: "Carne vacuna premium, salsa de tomate casera.", price: "$ 4.800 / kg" },
      { name: "Medallones caseros", desc: "Hechos a mano, listos para sellar.", price: "$ 5.200 / kg" },
      { name: "Estofado de ternera", desc: "Cocción lenta, papas y zanahorias.", price: "$ 6.100 / kg" },
      { name: "Bondiola desmenuzada", desc: "Cerdo braseado, lista para sandwich.", price: "$ 5.900 / kg" },
    ],
  },
  catAves: {
    name: "Aves",
    desc: "Albóndigas de pollo artesanales y supremas rellenas.",
    items: [
      { name: "Albóndigas de pollo", desc: "Pollo y hierbas frescas, salsa blanca.", price: "$ 4.300 / kg" },
      { name: "Suprema rellena jamón y queso", desc: "Empanada crocante, lista al horno.", price: "$ 5.600 / kg" },
      { name: "Suprema rellena espinaca", desc: "Versión liviana, ricota y nuez moscada.", price: "$ 5.600 / kg" },
      { name: "Pollo al verdeo", desc: "Trozos en salsa de cebolla de verdeo.", price: "$ 4.900 / kg" },
    ],
  },
  catPastas: {
    name: "Pastas y Harinas",
    desc: "Sorrentinos, lasañas y canelones con sabor artesanal.",
    items: [
      { name: "Sorrentinos jamón y queso", desc: "Masa fina, relleno generoso.", price: "$ 3.800 / kg" },
      { name: "Lasaña bolognesa", desc: "5 capas, salsa scarparo, mozzarella.", price: "$ 4.200 / kg" },
      { name: "Canelones de verdura", desc: "Espinaca, ricota y salsa rosa.", price: "$ 3.900 / kg" },
      { name: "Ñoquis de papa", desc: "Receta tradicional, papa noble.", price: "$ 3.200 / kg" },
    ],
  },
  catSaludable: {
    name: "Línea Saludable / Veggie",
    desc: "Menús equilibrados, vegetales frescos y opciones nutritivas.",
    items: [
      { name: "Bowl mediterráneo", desc: "Quinoa, vegetales asados y hummus.", price: "$ 3.600 / un" },
      { name: "Tarta integral de verduras", desc: "Masa de avena, vegetales de estación.", price: "$ 3.400 / un" },
      { name: "Wok de vegetales", desc: "Salteado oriental, salsa teriyaki suave.", price: "$ 3.500 / un" },
      { name: "Hamburguesa de lentejas", desc: "Vegana, lentejas y especias.", price: "$ 3.100 / un" },
    ],
  },

  // Contacto
  contactTitle: "Pedinos un presupuesto",
  contactDesc: "Contanos qué necesitás. Respondemos en menos de 24 hs hábiles.",
  contactEmail: "hola@apa-gastronomicas.com.ar",
  contactPhone: "+54 11 5555 0123",
  contactAddress: "Av. Siempre Viva 1234, CABA",

  // Webhooks
  formWebhook: "",   // pegar URL de webhook (n8n / Make / Zapier) para el formulario
  chatWebhook: "",   // pegar URL del agente de chat (responde con {reply: "..."})
  chatGreeting: "¡Hola! Soy el asistente de APA. ¿En qué te ayudo hoy? Puedo orientarte sobre viandas para empresas, productos para tu hogar o pedidos para restaurantes.",
};
