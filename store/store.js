import { defineStore } from "pinia";

/* ===============================================================

    DEFINICION DE LA STORE PARA LA APLICACION WEB

    toda la informacion se carga desde aqui. 
    y sirve para proporcionar los datos a los demas componentes
    y distintos index. 

=============================================================== */

export const useInstitucionStore = defineStore("Institucion", {
  state: () => ({
    //URL de la API
    url_api: process.env.APP_ROOT_API,
    
    //informacion primordial para la carrera los datos de la institucion se almacenan aqui.
    institucion: null,
    
    //informacion del texto a mostrarse en el banner principal editable desde aqui.
    text_banner: 'La educación universitaria es la llave que abre las puertas hacia un futuro lleno de oportunidades y conocimiento.',
    
    //informacion acerca de la carrera que se este cargando.
    carrera_links_externos: null,
    carrera_convocatorias: null,
    carrera_avisos: null,
    carrera_comunicados: null,
    carrera_cursos: null,
    carrera_seminarios: null,
    carrera_autoridades: null,
    carrera_servicios: null,
    carrera_ofertasacademicas: null,
    carrera_publicaciones: null,
    carrera_gacetas: null,
    carrera_horario: null,
    carrera_eventos: null,
    carrera_videos: null,

    // almacena las fotos para el banner principal.
    fotosPagina: null,

    //almacena las fotos internas para la pagina -> se crean a partir de las fotosPagina.
    fotosPortada: null,

    /* ===============================================================

        PAGINA INDEX - PAGINA PRINCIPAL

        toda la informacion sobre la aplicacion web se carga desde aqui 
        tanto la dinamica como la statica

    =============================================================== */    

    // INDEX - SERVICES - INFORMATION 
    title_index_services: 'Informacion sobre la carrera',

    // INDEX - FUNFACT - INFORMACION 
    title_funfact: 'Todos los comunicados de la Carrera',

    // INDEX - BLOG - CONVOCATORIAS 
    pretitle_convocatorias: 'Lo ultimo de ...',
    title_convocatorias : 'Convocatorias, Comunicados y Avisos',
    content_convocatorias: 'estas son las convocatorias de la carrera ',

    // INDEX - BLOG - CURSOS 
    pretitle_cursos : 'Lo ultimo de ...',
    title_cursos: 'Curso y Seminarios',

    // INDEX - BLOG - AUTORIDADES 
    pretitle_autoridades : 'Nuestras',
    title_autoridades: 'Autoridades',

    // INDEX - CALL - ORGANIGRAMA 
    title_index_organigrama: 'Organigrama de la carrera de',

    /* ===============================================================

        CATEGORIES

        toda la informacion referente al layout para categorias 
        ubicada en el boton principal del banner

    =============================================================== */

    title_categories: 'Categorias',
    text_categories: 'Estudiar en la Universidad Pública de El Alto es un privilegio que implica responsabilidad y entrega, pero también es una oportunidad para crecer y alcanzar nuestros sueños.',
    textBackground_categories: 'Upea',

    /* ===============================================================

        CONTACTO

        toda la informacion sobre el layout de contact.

    =============================================================== */  

    title_contacto: 'Contacto',
    pretitle_contacto: 'contactate con la universidad para mas informacion sobre la carrera.',

    /* ===============================================================

        ABOUT   

        toda la informacon sobre el layout para about 

    =============================================================== */

    title_about : 'Historia de la carrera',

    /* ===============================================================

        INSTITUCION

        toda la informacion sobre el layout de institucion.

    =============================================================== */

    // calendario academico
    title_calendario_academico: 'Calendarios de la Institucion',
    content_calendario_academico: 'El calendario académico de la Universidad Pública de El Alto está diseñado para ofrecer a los estudiantes una estructura clara de fechas importantes, como el inicio y finalización de semestres, períodos de inscripción, exámenes parciales y finales, vacaciones y otros eventos relevantes. Los calendarios se publican con anticipación para que los estudiantes puedan planificar sus actividades académicas con tiempo suficiente.',
    
    // horario academico
    title_horario_academico: 'Horario Académico',
    content_horario_academico: 'El horario académico de la carrera está diseñado para proporcionar a los estudiantes un equilibrio entre clases teóricas y prácticas. Las asignaturas se distribuyen a lo largo de la semana, permitiendo a los estudiantes participar en diversas actividades educativas. Los horarios son flexibles y se adaptan a las necesidades de los estudiantes y la disponibilidad de profesores.',
    
    // plan de estudio
    title_plan_de_estudio: 'Plan de Estudio',
    content_plan_de_estudio: 'El plan de estudio de la carrera ofrece una sólida formación en las áreas fundamentales de la disciplina, así como opciones de especialización. Los estudiantes cursarán materias obligatorias y electivas que les permitirán adquirir conocimientos y habilidades necesarios para su desarrollo profesional. El plan se actualiza periódicamente para reflejar los avances en la materia y las demandas del mercado laboral.',
    
    // reglamento para le modo de graduacion.
    title_reglamento_mod_graduacion: 'Reglamento de Mod. y Graduación',
    content_reglamento_mod_graduacion: 'El reglamento establece los requisitos para la modificación de la matrícula, transferencias entre carreras y procesos de graduación. Describe los criterios de aprobación de asignaturas, la realización de pasantías, trabajos dirigidos y otros requisitos necesarios para obtener el título. Además, proporciona pautas claras sobre los plazos y procedimientos administrativos.',
    
    // convenios institucionales
    title_convenios_institucionales: 'Convenios Institucionales',
    content_convenios_institucionales: 'La Universidad Pública de El Alto mantiene una red de convenios con instituciones y empresas relevantes en el ámbito local y nacional. Estos convenios brindan a los estudiantes oportunidades de pasantías, intercambios académicos y colaboraciones en proyectos de investigación. Los estudiantes tienen la posibilidad de aplicar sus conocimientos en contextos reales y establecer conexiones valiosas.',
    
    // pasantias
    title_pasantias: 'Pasantías',
    content_pasantias: 'Las pasantías son parte integral del programa académico de la carrera. Los estudiantes tienen la posibilidad de realizar prácticas profesionales en organizaciones públicas y privadas relacionadas con su campo de estudio. Las pasantías les permiten aplicar sus conocimientos en situaciones reales, adquirir experiencia laboral y desarrollar habilidades prácticas que complementan su formación teórica.',
    
    // trabajos dirigidos.
    title_trabajos_dirigidos: 'Trabajos Dirigidos',
    content_trabajos_dirigidos: 'Los trabajos dirigidos ofrecen a los estudiantes la oportunidad de realizar investigaciones y proyectos individuales o en grupos reducidos. Bajo la orientación de profesores expertos, los estudiantes pueden explorar áreas específicas de interés, profundizar en temas relevantes y presentar resultados originales. Los trabajos dirigidos fomentan la creatividad y el pensamiento crítico.',

    // instituto de investigacion
    title_instituto_de_investigacion: 'Instituto De Investigacion',
    content_instituto_de_investigacion: 'El instituto de investigación es una organización dedicada a la exploración sistemática y la generación de conocimiento en diversos campos del saber. Estas instituciones se centran en la investigación científica, tecnológica, social o humanística, y su objetivo principal es avanzar en la comprensión de fenómenos, resolver problemas o desarrollar nuevas tecnologías. Los institutos de investigación suelen contar con equipos multidisciplinarios de investigadores, laboratorios especializados, financiamiento para proyectos y colaboraciones con otras instituciones académicas y empresas. Su contribución a la sociedad radica en la generación de innovaciones, la promoción del avance científico y la mejora de la calidad de vida a través de descubrimientos y desarrollos relevantes.',

  }),

  /* ===============================================================

    METODOS PARA INGRESAR LA INFORMACION Y ALMACENAR LAS MISMAS 
    EN LAS VARIABLES ANTERIORMENTE MOSTRADAS

    contienen los metodos para cambiar el valor de las variables de la store.

  =============================================================== */
  
  actions:{
    asignarInstitucion(colection){
        this.institucion = colection
    },
    asignarCarreraLinksExternos(colection){
        this.carrera_links_externos = colection
    },
    asignarConvocatorias(colection){
        this.carrera_convocatorias = colection
    },
    asignarComunicados(colection){
        this.carrera_comunicados = colection
    },
    asignarAvisos(colection){
        this.carrera_avisos = colection
    },
    asignarCursos(colection){
        this.carrera_cursos = colection
    },
    asignarSeminarios(colection){
        this.carrera_seminarios = colection
    },
    asignarFotosPagina(colection){
        this.fotosPagina = colection
    },
    asignarFotosPortada(colection){
        this.fotosPortada = colection
    },
    asignarServicios(colection){
        this.carrera_servicios = colection
    },
    asignarOfertasAcademicas(colection){
        this.carrera_ofertasacademicas = colection
    },
    asignarPublicaciones(colection){
        this.carrera_publicaciones = colection
    },
    asignarGacetas(colection){
        this.carrera_gacetas = colection
    },
    asignarHorario(colection){
        this.carrera_horario = colection
    },
    asignarEventos(colection){
        this.carrera_eventos = colection
    },
    asignarVideos(colection){
        this.carrera_videos = colection
    },
  }
});
