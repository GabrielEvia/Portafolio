const projects = [
  {
    id: 1,
    title: "Cot-Pro WEB",
    description:
      "Landing Page profesional que presenta las funciones, beneficios y planes del sistema SaaS Cot‑Pro, diseñada para atraer clientes.",
    descriptionDeep: `Sitio web informativo orientado a promocionar Cot‑Pro, un servicio SaaS de gestión de cotizaciones empresariales. Incluye secciones sobre funcionalidades, comparativas de planes, beneficios competitivos y formularios de contacto. Desarrollado en WordPress, alojado en un entorno escalable con AWS, nginx y Ubuntu.`,
    imageHero: "src/img/projects/COTPRO WEB/1.png",
    images: [
      "src/img/projects/COTPRO WEB/1.png",
      "src/img/projects/COTPRO WEB/2.png",
      "src/img/projects/COTPRO WEB/3.png",
      "src/img/projects/COTPRO WEB/4.png",
    ],
    tecnologies: ["WordPress", "AWS", "nginx", "Ubuntu"],
    enterprise: "Kamafil",
    related: "COT-PRO",
    plataforms: ["Web"],
  },
  {
    id: 2,
    title: "Cot-Pro",
    description:
      "Sistema web para crear, gestionar y enviar cotizaciones profesionales, optimizando la operación comercial de las empresas.",
    descriptionDeep: `Aplicación web que automatiza la generación y gestión de cotizaciones empresariales. Permite registrar productos o servicios, generar documentos PDF, realizar seguimiento de clientes y mantener un historial completo. Incluye autenticación por roles y almacenamiento en SQL Server. Desarrollado con ASP.NET, C#, Bootstrap y desplegado en AWS.`,
    imageHero: "src/img/projects/COTPRO/1.png",
    images: [
      "src/img/projects/COTPRO/1.png",
      "src/img/projects/COTPRO/2.png",
      "src/img/projects/COTPRO/3.png",
      "src/img/projects/COTPRO/4.png",
      "src/img/projects/COTPRO/5.png",
      "src/img/projects/COTPRO/6.png",
    ],
    tecnologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "Bootstrap",
      "asp.net",
      "C#",
      ".Net",
      "SQLServer",
      "AWS",
    ],
    enterprise: "Kamafil",
    related: "COT-PRO",
    plataforms: ["Web"],
  },
  {
    id: 3,
    title: "Zeler CRM",
    description:
      "CRM web para gestionar clientes, tareas y proyectos, mejorando la organización y eficiencia de equipos.",
    descriptionDeep: `Aplicación web tipo CRM para administrar contactos, asignar tareas y monitorear proyectos. Ofrece panel de control, gestión por usuario, alertas de vencimientos y autenticación. Desarrollado con PHP, JavaScript y SQLite, con interfaz responsive usando Bootstrap.`,
    imageHero: "src/img/projects/ZELER crm/1.png",
    images: [
      "src/img/projects/ZELER crm/1.png",
      "src/img/projects/ZELER crm/2.png",
    ],
    tecnologies: ["HTML", "CSS", "JavaScript", "Bootstrap", "PHP", "SQLite"],
    enterprise: "Aiko",
    related: "Zeler",
    plataforms: ["Web"],
  },
  {
    id: 4,
    title: "Zeler Tienda (e‑commerce)",
    description:
      "Tienda online desarrollada en WordPress/WooCommerce para ecommerce completo con catálogo, carrito y pagos.",
    descriptionDeep: `Plataforma de comercio electrónico con WordPress y WooCommerce, que incluye catálogo, carrito, pagos y gestión de inventario. La web usa MySQL para contenido y operaciones, mientras que los datos centrales provienen del CRM basado en SQLite. Funciona en servidor Apache, ofreciendo una experiencia segura y eficiente para usuarios y administradores.`,
    imageHero: "src/img/projects/ZELER tienda/1.png",
    images: [
      "src/img/projects/ZELER tienda/1.png",
      "src/img/projects/ZELER tienda/2.png",
      "src/img/projects/ZELER tienda/3.png",
      "src/img/projects/ZELER tienda/4.png",
      "src/img/projects/ZELER tienda/5.png",
    ],
    tecnologies: [
      "WordPress",
      "Woo Commerce",
      "SQLite",
      "MySQL",
      "PHP",
      "JavaScript",
      "Apache",
    ],
    enterprise: "Aiko",
    related: "Zeler",
    plataforms: ["android"],
  },
  {
    id: 5,
    title: "Zeler App (mobile)",
    description:
      "Aplicación móvil para la gestión de tareas y proyectos sincronizada con el ecosistema Zeler.",
    descriptionDeep: `App móvil multiplataforma desarrollada con Xamarin para facilitar la gestión y seguimiento de ventas, tareas y alertas desde dispositivos móviles. Incluye notificaciones en tiempo real, sincronización con servicios en la nube (Azure), almacenamiento local con SQLite y comunicación directa con la app central. Interfaz optimizada para una experiencia ágil y fluida en Android.`,
    imageHero: "src/img/projects/zeler app/1.png",
    images: [
      "src/img/projects/zeler app/1.png",
      "src/img/projects/zeler app/2.png",
      "src/img/projects/zeler app/3.png",
    ],
    tecnologies: ["Xamarin", "C#", ".Net", "SQLite", "Azure"],
    enterprise: "Aiko",
    related: "Zeler",
    plataforms: ["android"],
  },

  {
    id: 7,
    title: "Xona en alerta APP",
    description:
      "App móvil para reportar alertas de seguridad en tiempo real, mejorando la respuesta ante emergencias.",
    descriptionDeep: `App móvil desarrollada con .NET MAUI para reportar incidentes, notificaciones y alertas en tiempo real. Con conexión a MySQL y Azure, está diseñada para seguridad comunitaria.
    Disponible para Android e iOS, en fase de lanzamiento privado sin acceso público ni usuarios, con apertura próxima.`,
    imageHero: "src/img/projects/xonapp/1.png",
    images: [
      "src/img/projects/xonapp/1.png",
      "src/img/projects/xonapp/2.png",
      "src/img/projects/xonapp/3.png",
    ],
    tecnologies: ["MAUI", "MySQL", "C#", ".Net", "Azure"],
    enterprise: "Aiko",
    related: "XonaenAlerta",
    plataforms: ["android", "iOS"],
  },
  {
    id: 8,
    title: "JuliaTours",
    description:
      "Sitio web corporativo para una agencia de viajes, con gestión de tours y formulario de contacto.",
    descriptionDeep: `Página institucional para JuliaTours con catálogo de viajes, testimonios, mapa y contacto vía formulario. Construida en WordPress, reforzada con HTML, PHP y MySQL, con diseño responsivo para móviles. Permite comprar viajes directamente, con pagos calculados según el tipo de cambio oficial del dólar vinculado a un banco.`,
    imageHero: "src/img/projects/JuliaTours/1.png",
    images: [
      "src/img/projects/JuliaTours/1.png",
      "src/img/projects/JuliaTours/2.png",
      "src/img/projects/JuliaTours/3.png",
      "src/img/projects/JuliaTours/4.png",
    ],
    tecnologies: ["WordPress", "HTML", "CSS", "PHP", "MySQL", "Apache"],
    enterprise: "Aiko",
    related: "JuliaTours",
    plataforms: ["Web"],
  },
  {
    id: 9,
    title: "JuliaTours FACTURAS",
    description:
      "Módulo de facturación en línea vinculado al sistema de reservas de JuliaTours.",
    descriptionDeep: `Este sistema permite a los usuarios descargar facturas electrónicas tras completar una compra de viaje. Incluye validación RFC, consulta de folios, almacenamiento y administración de archivos XML y PDF. Construido con PHP, MySQL y Bootstrap sobre Apache.`,
    imageHero: "src/img/projects/JuliaTours crm/1.png",
    images: ["src/img/projects/JuliaTours crm/1.png"],
    tecnologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "Bootstrap",
      "PHP",
      "MySQL",
      "Apache",
    ],
    enterprise: "Aiko",
    related: "JuliaTours",
    plataforms: ["Web"],
  },
  {
    id: 10,
    title: "Afactura",
    description:
      "Sistema de facturación electrónica adaptable para empresas con múltiples sucursales.",
    descriptionDeep: `Afactura es una plataforma que automatiza la generación, timbrado y consulta de facturas electrónicas. Incluye gestión de clientes, control de series, visualización de CFDI y descarga en PDF/XML. Desarrollado en PHP con Bootstrap, base de datos MySQL y servidores Apache.`,
    imageHero: "src/img/projects/Afactura/1.png",
    images: [
      "src/img/projects/Afactura/1.png",
      "src/img/projects/Afactura/2.png",
      "src/img/projects/Afactura/3.png",
      "src/img/projects/Afactura/4.png",
      "src/img/projects/Afactura/5.png",
    ],
    tecnologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "Bootstrap",
      "PHP",
      "MySQL",
      "Apache",
    ],
    enterprise: "Aiko",
    related: "Afactura",
    plataforms: ["Web"],
  },
  {
    id: 11,
    title: "SisVen Reportes",
    description:
      "Extensión moderna de SisVen, sistema legacy de ventas, con interfaz actualizada y análisis mejorados.",
    descriptionDeep: `Aplicación complementaria de SisVen, sistema legacy de gestión de ventas, que permite visualizar datos actualizados con una interfaz moderna y mejores opciones de análisis. Integra bases de datos Access y PHP con CodeIgniter, utiliza Visual Basic para componentes específicos y cuenta con diseño responsive basado en Tailwind CSS para una experiencia óptima.`,
    imageHero: "src/img/projects/SisvenReportes/1.png",
    images: [
      "src/img/projects/SisvenReportes/1.png",
      "src/img/projects/SisvenReportes/2.png",
      "src/img/projects/SisvenReportes/3.png",
      "src/img/projects/SisvenReportes/4.png",
      "src/img/projects/SisvenReportes/5.png",
    ],
    tecnologies: [
      "Visual Basic",
      "HTML",
      "CSS",
      "JavaScript",
      "Tailwind CSS",
      "PHP",
      "CodeIgniter",
      "Access",
    ],
    enterprise: "Jivra",
    related: "SisVen",
    plataforms: ["Web"],
  },
  {
    id: 12,
    title: "Cot-Pro CRM",
    description:
      "CRM para gestión avanzada de clientes y procesos comerciales dentro de Cot-Pro.",
    descriptionDeep: `Módulo CRM integrado al ecosistema Cot-Pro, permitiendo administrar clientes, registrar interacciones y gestionar oportunidades comerciales. Construido con PHP, Laravel, MySQL y SQL Server, con diseño frontend responsivo en Tailwind CSS, proporciona autenticación segura y paneles personalizados por usuario.`,
    imageHero: "src/img/projects/CRM COTPRO/1.png",
    images: ["src/img/projects/CRM COTPRO/1.png"],
    tecnologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "Tailwind CSS",
      "PHP",
      "Laravel",
      "MySQL",
      "SQLServer",
    ],
    enterprise: "Kamafil",
    related: "COT-PRO",
    plataforms: ["Web"],
  },
  {
    id: 13,
    title: "APortal",
    description:
      "Portal web corporativo para gestión interna y recursos compartidos en Aiko.",
    descriptionDeep: `Plataforma interna desarrollada en PHP y MySQL, con interfaz Bootstrap, para administrar recursos, documentos y comunicaciones corporativas. Incluye módulos de usuario, roles y permisos, con navegación intuitiva y diseño adaptativo para dispositivos móviles.`,
    imageHero: "src/img/projects/Aportal/1.png",
    images: ["src/img/projects/Aportal/1.png"],
    tecnologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "Bootstrap",
      "PHP",
      "MySQL",
      "Apache",
    ],
    enterprise: "Aiko",
    related: "Afactura",
    plataforms: ["Web"],
  },
  {
    id: 14,
    title: "ARecover",
    description:
      "Aplicación para gestión y recuperación de datos en sistemas afectados o caídos.",
    descriptionDeep: `Herramienta desarrollada para recuperar información crítica en bases de datos y sistemas de producción. Construida con PHP, MySQL y Apache, ofrece interfaces para restaurar archivos, logs y respaldos, con controles de usuario y seguridad para evitar pérdidas de datos.`,
    imageHero: "src/img/projects/ARECOVER/1.png",
    images: ["src/img/projects/ARECOVER/1.png"],
    tecnologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "Bootstrap",
      "PHP",
      "MySQL",
      "Apache",
    ],
    enterprise: "Aiko",
    related: "Afactura",
    plataforms: ["Web"],
  },
  {
    id: 15,
    title: "ACloud",
    description:
      "Sistema de almacenamiento y gestión de archivos en la nube para empresas pequeñas.",
    descriptionDeep: `Aplicación web que permite subir, organizar y compartir documentos empresariales con seguridad y acceso controlado. Basada en PHP, MySQL y Apache, con frontend Bootstrap para experiencia de usuario optimizada, facilita colaboración y respaldo remoto.`,
    imageHero: "src/img/projects/ACLOUD/1.png",
    images: [
      "src/img/projects/ACLOUD/1.png",
      "src/img/projects/ACLOUD/2.png",
      "src/img/projects/ACLOUD/3.png",
      "src/img/projects/ACLOUD/4.png",
      "src/img/projects/ACLOUD/5.png",
      "src/img/projects/ACLOUD/6.png",
      "src/img/projects/ACLOUD/7.png",
    ],
    tecnologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "Bootstrap",
      "PHP",
      "MySQL",
      "Apache",
    ],
    enterprise: "Aiko",
    related: "Afactura",
    plataforms: ["Web"],
  },
  {
    id: 16,
    title: "AspeedRestaurant",
    description:
      "Sistema web para administración de restaurante con control de mesas, pedidos y facturación.",
    descriptionDeep: `Aplicación para la gestión completa de un restaurante, incluyendo reservas, control de mesas, toma de pedidos y generación de cuentas. Desarrollado con PHP, MySQL y Apache, cuenta con interfaz Bootstrap, permitiendo a empleados gestionar procesos y optimizar tiempos de atención.`,
    imageHero: "src/img/projects/Aresturant/1.png",
    images: [
      "src/img/projects/Aresturant/1.png",
      "src/img/projects/Aresturant/2.png",
      "src/img/projects/Aresturant/3.png",
      "src/img/projects/Aresturant/4.png",
      "src/img/projects/Aresturant/5.png",
    ],
    tecnologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "Bootstrap",
      "PHP",
      "MySQL",
      "Apache",
    ],
    enterprise: "Aiko",
    related: "Afactura",
    plataforms: ["Web"],
  },
  {
    id: 17,
    title: "Autessa app",
    description:
      "API en .NET Core y app móvil en Flutter para gestión integral de Autessa (privada).",
    descriptionDeep: `Sistema privado para Autessa con API REST en .NET Core que gestiona envíos, rastreo, rutas y logística. Incluye app móvil multiplataforma en Flutter para monitorear entregas en tiempo real y optimizar procesos. Usa SQL Server y Azure para almacenamiento seguro y servicios en la nube.`,
    imageHero: "src/img/projects/autessa app/1.png",
    images: ["src/img/projects/autessa app/1.png"],
    tecnologies: ["Flutter", "C#", ".Net", "SQLServer", "Azure"],
    enterprise: "Aiko",
    related: "Autessa",
    plataforms: ["Web"],
  },
  {
    id: 18,
    title: "VillaTours Proveedores",
    description:
      "Portal web para proveedores de VillaTours con gestión de inventario y pedidos.",
    descriptionDeep: `Aplicación desarrollada para facilitar la comunicación entre proveedores y VillaTours, permitiendo gestión de inventarios, órdenes y reportes. Construido con PHP, MySQL y Apache, con interfaz responsiva en Bootstrap, facilita el seguimiento de productos y pedidos.`,
    imageHero: "src/img/projects/VillaTours/1.png",
    images: ["src/img/projects/VillaTours/1.png"],
    tecnologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "Bootstrap",
      "PHP",
      "MySQL",
      "Apache",
    ],
    enterprise: "Aiko",
    related: "JuliaTours",
    plataforms: ["Web"],
  },
  {
    id: 6,
    title: "Xona en alerta CRM",
    description:
      "Plataforma web para gestionar reportes, usuarios y notificaciones de la app Xona en Alerta.",
    descriptionDeep: `Sistema administrativo que complementa la app móvil Xona en Alerta, permitiendo visualizar reportes de usuarios, asignar prioridades y generar respuestas inmediatas. Incluye autenticación, panel de administración, filtros avanzados y almacenamiento en MySQL. Diseñado con PHP y Bootstrap.`,
    imageHero: "src/img/projects/xonacrm/1.png",
    images: ["src/img/projects/xonacrm/1.png"],
    tecnologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "Bootstrap",
      "PHP",
      "MySQL",
      "Apache",
    ],
    enterprise: "Aiko",
    related: "XonaenAlerta",
    plataforms: ["Web"],
  },
  {
    id: 19,
    title: "SisVen Farmacias Dermocutánea Reportes",
    description:
      "Nuevos módulos para el sistema legacy SisVen y reporteador para Democuánea basado en una variación de SisVen.",
    descriptionDeep: `Este proyecto incluye dos componentes: nuevos módulos para el sistema legacy SisVen en farmacias Dermocutánea y una plataforma de reporte especializada para Democuánea, basada en una versión modificada de SisVen, que permite generación y análisis.`,
    imageHero: "src/img/projects/sisven1/1.png",
    images: [
      "src/img/projects/sisven1/1.png",
      "src/img/projects/sisven1/2.png",
    ],
    tecnologies: [
      "Visual Basic",
      "HTML",
      "CSS",
      "JavaScript",
      "Bootstrap",
      "PHP",
      "Access",
      "SQLServer",
    ],
    enterprise: "Jivra",
    related: "SisVen",
    plataforms: ["Web"],
  },
];

const projectsHero = [
  {
    id: 1,
    title: "Cot-Pro",
    description:
      "Un sistema de cotización online en tiempo real, integrado con HubSpot y Salesforce, diseñado para optimizar ventas y operaciones en el sector inmobiliario.",
    imageHero: "src/img/projects/cotpro_web.png",
    images: [
      "src/img/projects/COTPROtheme/1.png",
      "src/img/projects/COTPROtheme/2.png",
      "src/img/projects/COTPROtheme/3.png",
      "src/img/projects/COTPROtheme/4.png",
    ],
    descriptionDeep: `Lideré el desarrollo de un entorno digital completo para el sector inmobiliario, compuesto por una plataforma SaaS robusta que integra una herramienta de cotización en línea en tiempo real, un CRM personalizado y una página web adaptable. Todo el sistema se comunica con HubSpot y Salesforce, permitiendo una gestión centralizada de prospectos, automatización de procesos comerciales y análisis en tiempo real para equipos de venta.

Actualmente en fase de lanzamiento, esta solución ha sido validada por 25 desarrolladoras clave, quienes destacaron su eficiencia, facilidad de uso y potencial de impacto en sus operaciones diarias. La integración de sus componentes en un solo ambiente tecnológico lo posiciona como un producto altamente competitivo y con capacidad para liderar el mercado inmobiliario en México.`,
    tecnologies: [
      "PHP",
      "Laravel",
      "WordPress",
      "MySQL",
      "SQLServer",
      ".Net",
      "C#",
      "ASP.NET",
      "Bootstrap",
      "AWS",
    ],
    enterprise: "Kamafil",
    related: "COT-PRO",
    plataforms: ["Web"],
  },
  {
    id: 2,
    title: "Zeler",
    description:
      "Un ecosistema de ventas integrado por una tienda online, un CRM, un Panel de control y una app móvil, diseñado para mejorar la eficiencia operativa y comercial.",
    imageHero: "src/img/projects/zeler.png",
    images: [
      "src/img/projects/ZELERtheme/1.png",
      "src/img/projects/ZELERtheme/2.png",
      "src/img/projects/ZELERtheme/3.png",
      "src/img/projects/ZELERtheme/4.png",
      "src/img/projects/ZELERtheme/5.png",
      "src/img/projects/ZELERtheme/6.png",
    ],
    descriptionDeep: `Diseñé y desarrollé un entorno tecnológico integral llamado Zeler, orientado a mejorar la productividad comercial de equipos de venta. Este ecosistema incluye un CRM web que permite gestionar contactos, tareas, proyectos y alertas de vencimientos; una tienda en línea basada en WordPress y WooCommerce, integrada con el CRM mediante bases de datos compartidas; y una app móvil multiplataforma desarrollada en Xamarin, que extiende todas las funcionalidades a dispositivos Android. Todo el sistema utiliza tecnologías como PHP, JavaScript, SQLite, MySQL y Azure, y ha sido optimizado para ofrecer una experiencia fluida tanto en escritorio como en móviles.

Este ambiente ha sido adoptado por más de 500 vendedores, impactando directamente en la eficiencia operativa y la gestión comercial de distintas organizaciones. La sincronización en tiempo real entre plataformas, la automatización de tareas clave y la accesibilidad desde cualquier dispositivo han convertido a Zeler en una solución versátil y escalable, capaz de adaptarse a diferentes modelos de negocio en el mercado hispanoamericano.`,
    tecnologies: [
      "PHP",
      "Laravel",
      "WordPress",
      "SQLite",
      "Xamarin",
      "C#",
      ".Net",
      "Bootstrap",
      "Azure",
    ],
    enterprise: "Aiko",
    related: "Zeler",
    plataforms: ["Web", "android"],
  },
  {
    id: 3,
    title: "Xona en alerta",
    description:
      "Una app móvil que permite a los usuarios reportar alertas de seguridad en tiempo real, mejorando la respuesta ante situaciones de emergencia.",
    imageHero: "src/img/projects/xona.png",
    images: [
      "src/img/projects/xonatheme/1.png",
      "src/img/projects/xonatheme/2.png",
      "src/img/projects/xonatheme/3.png",
      "src/img/projects/xonatheme/4.png",
    ],
    descriptionDeep: `Lideré el desarrollo de “Xona en Alerta”, un entorno digital integral de seguridad ciudadana, compuesto por una app móvil multiplataforma y un sistema CRM administrativo. La aplicación, desarrollada con .NET MAUI y conectada a MySQL y Azure, permite a los ciudadanos reportar incidentes, recibir notificaciones y emitir alertas en tiempo real. Disponible para Android e iOS, está orientada a fortalecer la vigilancia comunitaria en Xonacatlán y municipios vecinos, con un enfoque accesible y moderno. Actualmente en fase de lanzamiento controlado, se estima que la adopción podría superar las 5,000 descargas, dada su utilidad, alcance geográfico y respaldo institucional.

El ecosistema incluye un CRM web desarrollado en PHP y Bootstrap, que permite a las autoridades visualizar reportes, asignar prioridades, responder de forma inmediata y generar estadísticas operativas. Este panel de administración centralizado garantiza una atención ágil y segmentada, con filtros avanzados y autenticación de usuarios. El proyecto ofrece un entorno unificado de gestión de alertas y respuestas, diseñado para escalar a nivel municipal o estatal. “Xona en Alerta” representa una solución tecnológica clave para la coordinación ciudadana y la respuesta rápida ante emergencias locales.`,
    tecnologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "PHP",
      "MySQL",
      "C#",
      ".Net",
      "MAUI",
      "Azure",
    ],
    enterprise: "Aiko",
    related: "XonaenAlerta",
    plataforms: ["Web", "android", "iOS"],
  },
  {
    id: 4,
    title: "JuliaTours",
    description:
      "Una plataforma de turismo que ofrece una experiencia personalizada para los viajeros, con opciones de reserva y gestión de itinerarios.",
    imageHero: "src/img/projects/juliatours.png",
    images: [
      "src/img/projects/JuliaTours/1.png",
      "src/img/projects/JuliaTours/2.png",
      "src/img/projects/JuliaTours/3.png",
      "src/img/projects/JuliaTours/4.png",
    ],
    descriptionDeep: `Diseñé y desarrollé un entorno digital integral para JuliaTours y VillaTours, orientado a optimizar la experiencia del cliente y la gestión operativa del negocio turístico. El ecosistema incluye una página institucional en WordPress con catálogo de viajes, testimonios, mapas interactivos y formularios de contacto, además de permitir compras en línea con cálculo automático de pagos según el tipo de cambio oficial vinculado a entidades bancarias. La interfaz es totalmente responsiva y ofrece una experiencia fluida desde móviles o escritorios, facilitando el proceso de reserva y compra directa para los usuarios.

Como parte de este entorno, desarrollé un sistema de facturación electrónica que permite a los clientes descargar sus comprobantes fiscales en XML y PDF tras completar una compra. El sistema valida RFCs, consulta folios y organiza automáticamente los archivos, todo construido con PHP, MySQL y Bootstrap sobre Apache. Además, implementé una aplicación para proveedores de VillaTours que mejora la gestión de inventario, órdenes y reportes, agilizando la comunicación entre proveedores y el equipo administrativo. Este ecosistema digital no solo facilita la operación diaria, sino que también mejora la trazabilidad, eficiencia y profesionalismo de las agencias ante sus clientes y socios.`,
    tecnologies: ["HTML", "CSS", "JavaScript", "PHP", "WordPress", "MySQL"],
    enterprise: "Aiko",
    related: "JuliaTours",
    plataforms: ["Web"],
  },
  {
    id: 5,
    title: "Afactura",
    description:
      "Un SaaS de facturación electrónica que permite a las empresas gestionar sus procesos de facturación de manera eficiente y segura.",
    imageHero: "src/img/projects/afactura.png",
    images: [
      "src/img/projects/Afactura/1.png",
      "src/img/projects/Afactura/2.png",
      "src/img/projects/Afactura/3.png",
      "src/img/projects/Afactura/4.png",
      "src/img/projects/Afactura/5.png",
    ],
    descriptionDeep: `Afactura es una plataforma integral diseñada para automatizar la emisión y administración de facturas electrónicas, cumpliendo con los lineamientos del SAT en México. El sistema permite generar, timbrar y consultar CFDI de forma sencilla y segura, con funciones clave como gestión de clientes, control de series y folios, y visualización interactiva de facturas emitidas. Todo ello a través de una interfaz moderna y responsiva construida con PHP, Bootstrap y respaldada por una base de datos en MySQL sobre servidores Apache.

El entorno está pensado para optimizar procesos fiscales en empresas y despachos contables, ofreciendo descarga inmediata de documentos en formatos PDF y XML, así como acceso organizado al historial de transacciones. Esta solución SaaS ha sido implementada con un enfoque modular, facilitando su integración con otros sistemas y adaptándose a distintos volúmenes de operación, desde pequeñas empresas hasta corporativos que requieren un control fiscal automatizado y centralizado.`,
    tecnologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "PHP",
      "Laravel",
      "SQLite",
      "Bootstrap",
      "Apache",
    ],
    enterprise: "Aiko",
    related: "Afactura",
    plataforms: ["Web"],
  },
  {
    id: 6,
    title: "SisVen Reportes",
    description:
      "Una extension para SisVen que permite generar reportes personalizados y visualizaciones de datos, mejorando la experiencia de un sistema legacy.",
    imageHero: "src/img/projects/sisvenReportes.png",
    images: [
      "src/img/projects/SisvenReportes/1.png",
      "src/img/projects/SisvenReportes/2.png",
      "src/img/projects/SisvenReportes/3.png",
      "src/img/projects/SisvenReportes/4.png",
      "src/img/projects/SisvenReportes/5.png",
    ],
    descriptionDeep: `Desarrollé una aplicación complementaria para SisVen, un sistema legacy de gestión de ventas, con el objetivo de modernizar la visualización de datos y ofrecer mejores capacidades analíticas. Esta herramienta actúa como un puente entre tecnologías heredadas y modernas, permitiendo acceder a información actualizada mediante una interfaz intuitiva y responsiva. El sistema está construido con PHP utilizando el framework CodeIgniter, conectado a bases de datos en formato Access, e incorpora componentes específicos desarrollados en Visual Basic.

El entorno ofrece una experiencia de usuario optimizada gracias a su diseño basado en Tailwind CSS, adaptándose fluidamente a distintos dispositivos. Esta solución ha facilitado una transición tecnológica progresiva para empresas que dependen aún de sistemas antiguos, permitiendo aprovechar sus datos sin comprometer funcionalidad ni rendimiento. Representa una evolución importante hacia una plataforma híbrida más accesible, funcional y visualmente moderna.`,
    tecnologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "PHP",
      "CodeIgniter",
      "MySQL",
      "Tailwind CSS",
      "IIS",
    ],
    enterprise: "Jivra",
    related: "SisVen",
    plataforms: ["Web"],
  },
];

(function () {
  // Renderiza los cards de proyectos
  function renderProjects() {
    const container = document.querySelector(".projects .row");
    container.innerHTML = "";

    projectsHero.forEach((project) => {
      const col = document.createElement("div");
      col.className = "col-12 col-md-6 mb-4";

      const card = document.createElement("div");
      card.className = "card h-100";

      const img = document.createElement("img");
      img.src = project.imageHero;
      img.alt = project.title;
      img.className = "card-img";

      const content = document.createElement("div");
      content.className = "card-content";

      const contenticons = document.createElement("div");
      contenticons.className = "card-content-icons";

      project.tecnologies.forEach((name) => {
        const tech = tecnologias.find((t) => t.name === name);
        if (tech) {
          const wrapper = document.createElement("span");
          wrapper.innerHTML = tech.icon;
          contenticons.appendChild(wrapper.firstChild);
        }
      });

      content.appendChild(contenticons);

      const title = document.createElement("h3");
      title.textContent = project.title;

      const desc = document.createElement("p");
      desc.textContent = project.description;

      // ✅ ÚNICO botón que abre el modal
      const btn = document.createElement("a");
      btn.textContent = "Ver más";
      btn.className = "btn btn-outline-primary mt-3";
      btn.addEventListener("click", () => openProjectModal(project.id));
      card.addEventListener("click", (e) => openProjectModal(project.id));
      content.append(title, desc, btn);
      card.append(img, content);
      col.append(card);
      container.append(col);
    });
  }
  // ... el resto del código (openProjectModal, moveSlide, etc.) permanece igual ...

  // Abre modal y construye carrusel completo
  window.openProjectModal = function (projectId) {
    const project = projectsHero.find((p) => p.id === projectId);
    const modal = document.getElementById("projectModal");
    const carouselContainer = modal.querySelector(".carousel-container");
    const relatedContainer = modal.querySelector(".related-cards");
    const titleEl = modal.querySelector("#modalProjectTitle");
    const descEl = modal.querySelector("#modalProjectDesc");
    const platformsEl = modal.querySelector(".plattaforms-icons");
    const techEl = modal.querySelector(".project-icons:nth-of-type(2)");

    // Título y descripción
    titleEl.textContent = project.title;
    descEl.innerHTML = project.descriptionDeep.replace(/\n/g, "<br>");

    // Construye carrusel
    carouselContainer.innerHTML = "";
    project.images.forEach((src, idx) => {
      const slide = document.createElement("div");
      slide.className = "carousel-slide" + (idx === 0 ? " active" : "");
      const img = document.createElement("img");
      img.src = src;
      img.alt = `${project.title} - imagen ${idx + 1}`;
      slide.append(img);
      carouselContainer.append(slide);
    });

    const prevBtn = document.createElement("button");
    prevBtn.className = "carousel-btn prev";
    prevBtn.innerHTML = "&lsaquo;";
    prevBtn.addEventListener("click", () => moveSlide(-1));

    const nextBtn = document.createElement("button");
    nextBtn.className = "carousel-btn next";
    nextBtn.innerHTML = "&rsaquo;";
    nextBtn.addEventListener("click", () => moveSlide(1));

    carouselContainer.append(prevBtn, nextBtn);
    currentSlide = 0;

    // Plataformas
    platformsEl.innerHTML = "";
    project.plataforms.forEach((name) => {
      const plat = plataforms.find(
        (p) => p.name.toLowerCase() === name.toLowerCase()
      );
      if (plat) {
        const img = document.createElement("img");
        img.src = `src/img/tecnologies/${plat.icon}.svg`;
        img.alt = plat.name;
        platformsEl.append(img);
      }
    });

    // Tecnologías
    techEl.innerHTML = "";
    project.tecnologies.forEach((name) => {
      const tech = tecnologias.find((t) => t.name === name);
      if (tech) {
        techEl.innerHTML += tech.icon;
      }
    });

    // Proyectos relacionados
    // Proyectos relacionados
    relatedContainer.innerHTML = "";
    // Proyectos relacionados
    // Proyectos relacionados desde el array "projects"
    relatedContainer.innerHTML = "";
    projects
      .filter((p) => p.related === project.related && p.id !== project.id)
      .forEach((rel) => {
        const card = document.createElement("div");
        card.className = "card";

        const img = document.createElement("img");
        img.src = rel.imageHero;
        img.alt = rel.title;
        img.className = "card-img";

        card.append(img);

        // Abrir la misma página pero con nuevo ID
        card.addEventListener("click", () => {
          window.location.href = `projects.html?id=${rel.id}`;
        });

        relatedContainer.append(card);
      });

    modal.style.display = "flex";
  };

  // Carrusel
  window.moveSlide = function (delta) {
    const slides = document.querySelectorAll(".carousel-slide");
    slides.forEach((s) => s.classList.remove("active"));
    currentSlide = (currentSlide + delta + slides.length) % slides.length;
    slides[currentSlide].classList.add("active");
  };

  // Cerrar modal
  window.closeModal = function (event) {
    event.currentTarget.style.display = "none";
  };

  // Inicializar
  document.addEventListener("DOMContentLoaded", () => {
    renderProjects();
  });
})();
