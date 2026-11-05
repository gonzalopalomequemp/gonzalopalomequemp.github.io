// =============================================================
//  QUÉ ESTUVE DESCUBRIENDO
//  Para sumar un mes nuevo: copiá un bloque { mes: ..., items: [...] }
//  y pegalo ARRIBA de todo (el más reciente va primero).
//
//  tipo:  'Cine' | 'Series' | 'Juegos' | 'Música' | 'Libros' | 'Cómics'
//  nota:  5 = 🎖️ Obra maestra   4 = 👍 Está buena   3 = 😅 Meh
//         2 = 👎 Mala            1 = 💀 Pésima       null = sin valorar
//  texto: lista de párrafos de la reseña ([] si todavía no hay reseña)
// =============================================================
window.DESCUBRIMIENTOS = [

  { mes: 'Noviembre 2026', items: [
    { tipo: 'Cine', n: 75, titulo: 'Chinatown', anio: '1974', nota: 4, texto: [] },
    { tipo: 'Música', n: 55, titulo: 'Perfect', autor: 'Queens of the Stone Age', nota: 4, texto: [] },
    { tipo: 'Cómics', n: 20, titulo: 'Dragon Ball vol. 9', autor: 'Akira Toriyama', nota: 4, texto: [] },
  ]},

  { mes: 'Octubre 2026', items: [
    { tipo: 'Cine', n: 69, titulo: 'Coyote vs. Acme', nota: 4, texto: [] },
    { tipo: 'Cine', n: 70, titulo: 'Ponyo', anio: '2008', nota: 4, texto: [] },
    { tipo: 'Cine', n: 71, titulo: 'La La Land (revisión)', anio: '2016', nota: 5, texto: [] },
    { tipo: 'Cine', n: 72, titulo: 'The Wicker Man', nota: 4, texto: [] },
    { tipo: 'Cine', n: 73, titulo: 'Street Fighter', nota: 4, texto: [] },
    { tipo: 'Cine', n: 74, titulo: 'Bastardos sin gloria', anio: '2009', nota: 5, texto: [] },
    { tipo: 'Cómics', n: 17, titulo: 'Zatch Bell vol. 5', nota: 4, texto: [] },
    { tipo: 'Cómics', n: 18, titulo: 'Zatch Bell vol. 6', nota: 4, texto: [] },
    { tipo: 'Cómics', n: 19, titulo: 'Berserk vol. 1', autor: 'Kentaro Miura', nota: 5, texto: [] },
  ]},

  { mes: 'Setiembre 2026', items: [
    { tipo: 'Cine', n: 67, titulo: 'El viaje de Chihiro', anio: '2001', nota: 4, texto: [] },
    { tipo: 'Cine', n: 68, titulo: 'Evil Dead Burn', nota: 4, texto: [] },
    { tipo: 'Juegos', n: 11, titulo: 'Dragon Ball FighterZ', anio: '2018', nota: 5, texto: [] },
    { tipo: 'Cómics', n: 15, titulo: 'Fullmetal Alchemist vol. 6', autor: 'Hiromu Arakawa', nota: 4, texto: [] },
    { tipo: 'Cómics', n: 16, titulo: 'Absolute Batman vol. 1', nota: 4, texto: [] },
  ]},

  { mes: 'Agosto 2026', items: [
    { tipo: 'Cine', n: 56, titulo: 'Obsesión', nota: 5, texto: [] },
    { tipo: 'Cine', n: 57, titulo: 'Spider-Man: Brand New Day', anio: '2026', nota: 4, texto: [] },
    { tipo: 'Cine', n: 58, titulo: 'Before Sunrise', anio: '1995', nota: 5, texto: [] },
    { tipo: 'Cine', n: 59, titulo: 'Full Metal Jacket', anio: '1987', nota: 5, texto: [] },
    { tipo: 'Cine', n: 60, titulo: 'Training Day', anio: '2001', nota: 4, texto: [] },
    { tipo: 'Cine', n: 61, titulo: 'Paprika', anio: '2006', nota: 4, texto: [] },
    { tipo: 'Cine', n: 62, titulo: 'Eterno resplandor de una mente sin recuerdos', anio: '2004', nota: 5, texto: [] },
    { tipo: 'Cine', n: 63, titulo: 'Jackass: la última', nota: 2, texto: [] },
    { tipo: 'Cine', n: 64, titulo: 'Dragon Ball Super: Broly', anio: '2018', nota: 4, texto: [] },
    { tipo: 'Cine', n: 65, titulo: 'Fullmetal Alchemist', nota: 1, texto: [] },
    { tipo: 'Cine', n: 66, titulo: 'Dragon Ball Super: Super Hero', anio: '2022', nota: 4, texto: [] },
    { tipo: 'Música', n: 54, titulo: 'Born in the U.S.A.', autor: 'Bruce Springsteen', anio: '1984', nota: 5, texto: [] },
    { tipo: 'Juegos', n: 10, titulo: 'Marvel Tōkon', nota: 4, texto: [] },
    { tipo: 'Cómics', n: 11, titulo: 'Batman: Caballero maldito', nota: 4, texto: [] },
    { tipo: 'Cómics', n: 12, titulo: 'Fullmetal Alchemist vol. 5', autor: 'Hiromu Arakawa', nota: 4, texto: [] },
    { tipo: 'Cómics', n: 13, titulo: 'Dragon Ball vol. 8', autor: 'Akira Toriyama', nota: 4, texto: [] },
    { tipo: 'Cómics', n: 14, titulo: 'Marvel Classic vol. 1: Spider-Man', nota: 4, texto: [] },
    { tipo: 'Libros', n: 3, titulo: 'Errores infalibles', autor: 'Neil Gaiman', nota: null, texto: [] },
  ]},

  { mes: 'Julio 2026', items: [
    { tipo: 'Cine', n: 51, titulo: 'Batman: El regreso del Joker', anio: '2000', nota: null, texto: [] },
    { tipo: 'Cine', n: 52, titulo: 'Michael', anio: '2026', nota: null, texto: [] },
    { tipo: 'Cine', n: 53, titulo: 'Heartstopper Forever', nota: null, texto: [] },
    { tipo: 'Cine', n: 54, titulo: 'KPop Demon Hunters', anio: '2025', nota: null, texto: [] },
    { tipo: 'Cine', n: 55, titulo: 'La odisea', anio: '2026', nota: null, texto: [] },
    { tipo: 'Series', n: 7, titulo: 'Batman Beyond (temporadas 2 y 3)', nota: 4, texto: [] },
    { tipo: 'Series', n: 8, titulo: 'Spider-Noir', nota: 4, texto: [] },
    { tipo: 'Música', n: 52, titulo: 'Reality Awaits', autor: 'The Strokes', nota: 4, texto: [] },
    { tipo: 'Música', n: 53, titulo: 'Chega de Saudade', autor: 'João Gilberto', anio: '1959', nota: 4, texto: [] },
    { tipo: 'Cómics', n: 7, titulo: 'Universo Araña: Guerreros Araña', nota: 3, texto: [] },
    { tipo: 'Cómics', n: 8, titulo: 'Universo Araña: Spider-Man Dinastía M', nota: 4, texto: [] },
    { tipo: 'Cómics', n: 9, titulo: 'Universo Araña: Spider-Man Noir', nota: 4, texto: [] },
    { tipo: 'Cómics', n: 10, titulo: 'Marvel Red T24: Los Defensores', nota: 4, texto: [] },
  ]},


  { mes: 'Junio 2026', items: [
    { tipo: 'Cine', n: 48, titulo: 'El hombre sin sombra', anio: '2000', nota: 3, texto: [
      'Tengo el leve recuerdo de que esta fue la primera película que me generó pesadillas. Esa escena en la que el protagonista se vuelve invisible siempre me impactó cuando era chico. Hoy, al volver a verla, la miro con otros ojos. Unos que me hacen notar que, si bien la idea es muy buena, la película no termina de estar a la altura de su propio concepto.',
      'La premisa tiene muchísimo potencial. La historia plantea una pregunta muy interesante: ¿qué haría una persona si pudiera volverse completamente invisible? En lugar de centrarse únicamente en la ciencia ficción, la película intenta explorar cómo el poder puede sacar a relucir los peores impulsos del ser humano. Lamentablemente, siento que nunca termina de profundizar del todo en esa idea y prefiere quedarse en una propuesta mucho más convencional.',
      'Kevin Bacon está muy bien en su papel. Su personaje es completamente despreciable y la película nunca intenta justificarlo. Desde el principio resulta arrogante, egoísta y cada vez más perturbador. Es difícil empatizar con él, pero justamente ahí radica parte del acierto de la interpretación: consigue que cada una de sus decisiones resulte inquietante y que su descenso hacia la locura sea creíble.',
      'En líneas generales me parece una película correcta. Tiene una premisa muy atractiva, buenos efectos especiales para su época y algunos momentos realmente memorables. Sin embargo, siento que se queda a mitad de camino. El desenlace termina apostando por un clímax demasiado hollywoodense, cuando la historia tenía el potencial de cerrar de una forma mucho más original y acorde a los temas que venía planteando.',
      'No me pareció una mala película, pero sí una oportunidad desaprovechada. Con una idea tan potente, esperaba una reflexión mucho más profunda sobre la naturaleza humana y el abuso del poder.'
    ]},
    { tipo: 'Cine', n: 49, titulo: 'La La Land', anio: '2016', nota: 5, texto: [
      'Tantas veces hablé de esta película que ya perdí la cuenta, pero nunca me voy a cansar de recomendarla. Sin ninguna duda sigue siendo mi película favorita. Una obra que me conmueve de principio a fin y con la que conecto cada vez que la vuelvo a ver.',
      'Su banda sonora es simplemente extraordinaria. Cada canción tiene identidad propia, acompaña perfectamente la historia y permanece en la memoria mucho después de terminar la película. No recuerdo una sola que me parezca fuera de lugar; todas cumplen un papel fundamental en la construcción emocional del relato.',
      'Siempre siento que hay un antes y un después de ver La La Land. Su desenlace es uno de los finales más emocionantes que vi. Ese último tramo, donde la música y la narrativa se fusionan para mostrar todo lo que pudo haber sido, es de una belleza difícil de describir. Es un cierre que emociona sin necesidad de recurrir a grandes discursos, dejando que la música y las imágenes hablen por sí solas.',
      'Emma Stone y Ryan Gosling están magníficos. La química entre ambos es absoluta y consiguen que cada alegría, cada duda y cada frustración se sientan completamente reales. Es imposible no creer en la historia de Mia y Sebastian gracias a la naturalidad con la que interpretan a sus personajes.',
      'Y si todo eso funciona es porque Damien Chazelle demuestra un dominio absoluto de la dirección. Cada plano, cada movimiento de cámara y cada decisión estética parecen estar pensados para transmitir una emoción específica. La fotografía es impecable, el uso del color tiene una intención constante y hay escenas que cuentan muchísimo más con la puesta en escena que con los diálogos.',
      'Para mí, eso es La La Land: una película donde la música, la actuación, la dirección y la fotografía trabajan en perfecta armonía para crear una experiencia que trasciende la pantalla. Una auténtica obra maestra que, por más veces que la vea, nunca deja de emocionarme.'
    ]},
    { tipo: 'Cine', n: 50, titulo: 'Supergirl', anio: '2026', nota: 3, texto: [
      'Segunda película del nuevo universo cinematográfico de DC de la mano de James Gunn. Fui con muy pocas expectativas y, al terminarla, me quedó una sensación bastante extraña. No me pareció ni buena ni mala. Se queda en un punto intermedio donde casi nada destaca para bien, pero tampoco hay algo que la convierta en un desastre.',
      'Lo que más me chocó fue la falta de un tono definido. La película intenta abordar temas bastante oscuros y presentar personajes marcados por tragedias personales, pero nunca termina de profundizar en ellos. Todo queda planteado, aunque de manera muy superficial, sin darle el tiempo necesario para que realmente impacte.',
      'Esto se nota especialmente en el conflicto de fondo. La historia muestra personajes retenidos por los villanos, mujeres sometidas a la esclavitud y víctimas de distintos abusos. Son temas muy duros que podrían haber aportado muchísimo peso emocional a la trama, pero la película apenas los menciona y sigue adelante. En consecuencia, terminan sintiéndose como simples elementos del escenario en lugar de formar parte del verdadero corazón de la historia.',
      'El villano tampoco ayuda. Me pareció, por lejos, el aspecto más flojo de la película. Nunca logra transmitir una amenaza real ni despertar el más mínimo interés. Su construcción es muy pobre y cada vez que aparece en pantalla la historia pierde fuerza.',
      'En definitiva, Supergirl me dejó una sensación de oportunidad desaprovechada. Tenía varios elementos interesantes para construir una historia mucho más potente, pero prefiere quedarse en la superficie.'
    ]},
    { tipo: 'Juegos', n: 9, titulo: 'Horizon Zero Dawn', anio: '2017', nota: 4, texto: [
      'Me costó bastante engancharme con Horizon Zero Dawn. Debo admitir que su mundo, al menos durante las primeras horas, no despertaba demasiado mi interés. Aloy me parece un personaje muy bien construido y con una evolución sólida, aunque nunca terminé de sentir el mismo carisma que transmiten otros protagonistas de PlayStation.',
      'No fue hasta el tramo final cuando el juego realmente terminó de conquistarme. Tanto la historia como el gameplay van creciendo misión tras misión y la experiencia mejora a medida que se descubren nuevos enemigos. La acción se vuelve cada vez más divertida y estratégica, haciendo que los combates contra las máquinas sean uno de los puntos más fuertes del juego.',
      'El mundo está construido con muchísimo detalle y resulta impresionante desde el punto de vista artístico. Cada región tiene identidad propia y transmite la sensación de formar parte de un universo cuidadosamente diseñado. Sin embargo, nunca terminé de disfrutar demasiado la exploración. Una vez que descubrí el viaje rápido, se convirtió en mi forma habitual de moverme por el mapa, algo que no suele pasarme en otros mundos abiertos donde simplemente recorrer el escenario ya resulta entretenido.',
      'Las misiones secundarias cumplen y algunas aportan buenos momentos, pero siento que están un escalón por debajo de las que ofrecen otros como God of War o Ghost of Tsushima, donde muchas veces llegan a sentirse tan importantes como la historia principal.',
      'Lo que más me terminó atrapando fue el trasfondo de la historia. La forma en que aborda las consecuencias de la guerra, el agotamiento de los recursos naturales y cómo las malas decisiones de la humanidad pueden condenar el futuro del planeta me pareció realmente interesante. Es una ciencia ficción con ideas muy potentes. Mi única crítica es que, por momentos, la narrativa se vuelve demasiado explicativa. Hay muchos diálogos estáticos y una gran cantidad de información que ralentiza el ritmo cuando la historia podría confiar un poco más en el jugador para descubrir las respuestas por su cuenta.',
      'En definitiva, Horizon Zero Dawn terminó gustándome mucho más de lo que esperaba. Me costó entrar en su propuesta, pero una vez que la historia encuentra su ritmo y revela el misterio detrás de su mundo, consigue convertirse en una experiencia muy recomendable. Quizás no esté entre mis exclusivos favoritos de PlayStation, pero sí es una saga con muchísimo potencial y una protagonista que merece seguir creciendo.'
    ]},
    { tipo: 'Música', n: 51, titulo: 'The Boys of Dungeon Lane', autor: 'Paul McCartney', nota: 4, texto: [] },
  ]},

  { mes: 'Mayo 2026', items: [
    { tipo: 'Cine', n: 40, titulo: 'No Other Choice', anio: '2025', nota: 4, texto: [
      'Genial película de la mano del gran Park Chan-wook. Una dura crítica al sistema laboral moderno y al creciente problema de los despidos, que expone cómo una sociedad cada vez más deshumanizada puede llevar a una persona común al límite.',
      'El dilema moral con el que juega la película es excelente. El protagonista inicia un viaje cada vez más oscuro que lo lleva a cometer actos atroces. Sin embargo, gracias a un humor negro muy bien dosificado, la película consigue generar cierta empatía e incluso identificación con él. Todo el contexto que lo rodea lo empuja constantemente hacia ese abismo, haciendo que, por momentos, uno llegue a comprender sus decisiones, aunque nunca pueda justificar las atrocidades que comete.',
      'Otro aspecto que me encantó de esta dicotomía entre el bien y el mal es el tratamiento de su familia. Ninguno de sus integrantes es completamente inocente: todos esconden errores, contradicciones o decisiones cuestionables que los alejan de una visión simplista de "buenos" y "malos". Son personajes profundamente humanos, llenos de matices. La hija es prácticamente la única figura que parece mantenerse al margen de esa corrupción moral. Por otro lado, la esposa del protagonista resulta uno de los personajes más complejos e interesantes de toda la película. Su evolución está construida con mucha sutileza y el giro final funciona precisamente porque nace de un desarrollo muy bien trabajado.',
      'En el apartado visual, Park Chan-wook vuelve a demostrar por qué es uno de los directores más talentosos de la actualidad. La fotografía es impresionante, con planos cuidadosamente compuestos que transmiten mucho más de lo que los personajes dicen de forma explícita. Cada encuadre aporta información, emociones o simbolismos sin necesidad de subrayarlos.',
      'Una película con una premisa sencilla, pero ejecutada con una precisión extraordinaria. Personajes complejos, una crítica social muy vigente y un equilibrio brillante entre humor negro, tensión y drama hacen que Park Chan-wook vuelva a demostrar que rara vez falla.'
    ]},
    { tipo: 'Cine', n: 41, titulo: 'Te van a matar', anio: '2026', nota: 4, texto: [
      'Llegué a ver la peli en el cine habiendo visto únicamente el tráiler y fue la mejor decisión que pude tomar. La disfruté de principio a fin.',
      'Me encantó la protagonista, una especie de versión moderna de The Bride de Kill Bill. Es una auténtica máquina de matar, con un estilo de pelea espectacular y un carisma que sostiene la película en todo momento. Uno de los aspectos que más destaco es lo ingeniosa que resulta la acción en los combates. Las coreografías están llenas de creatividad. La acción está dosificada de manera excelente. Además, las peleas están muy bien filmadas. En varios momentos me recordó al estilo de montaje de Edgar Wright, combinado con la brutalidad y precisión de las coreografías de la saga The Raid.',
      'El tercer acto se vuelve completamente delirante, y eso me encantó. Disfruto mucho cuando una película se anima a crecer en su propio concepto en lugar de quedarse anclada en un tono excesivamente serio. Ese riesgo termina dándole mucha personalidad y hace que el desenlace sea tan inesperado como entretenido. Una propuesta original, con una protagonista memorable y una acción espectacularmente ejecutada. De esas películas que simplemente te sentás a disfrutar y no aflojan el ritmo hasta el último minuto.'
    ]},
    { tipo: 'Cine', n: 42, titulo: 'Minority Report', anio: '2002', nota: 5, texto: [
      'Me habían inflado bastante esta película, como suele pasar con muchas obras de directores tan consagrados. Aun así, terminó sorprendiéndome gratamente. La construcción de su universo es fantástica. Todo el concepto del sistema de predicción de crímenes está muy bien desarrollado y da lugar a una trama que no deja de plantear preguntas interesantes sobre el libre albedrío, la justicia y el destino.',
      'También quiero destacar a Tom Cruise, que como de costumbre lo deja todo en pantalla. Su interpretación transmite muy bien la desesperación del personaje, especialmente durante las escenas de mayor tensión y en un tramo final donde sostiene gran parte del peso emocional de la película.',
      'Me encantó cómo Spielberg juega constantemente con el espectador. La historia subvierte las expectativas en más de una ocasión y construye giros de guion que funcionan porque están bien preparados desde el principio, manteniendo el suspenso hasta el final.',
      'Otra gran película de Spielberg que demuestra por qué es considerado uno de los mejores directores de la historia. Una ciencia ficción inteligente, entretenida y con mucho más para decir de lo que parece a simple vista.'
    ]},
    { tipo: 'Cine', n: 43, titulo: 'Mortal Kombat 2', anio: '2026', nota: 4, texto: [
      'Bueno... no superó mis expectativas. Tampoco me parece una pésima adaptación. Se nota que tomaron nota de prácticamente todas las críticas que recibió la película anterior y fueron corrigiéndolas una por una, como si siguieran un checklist. El resultado es una secuela claramente mejor, aunque todavía lejos de ser una gran película.',
      'Las escenas de pelea mejoran muchísimo y, al fin y al cabo, eso es lo más importante en una adaptación de Mortal Kombat. Destaco especialmente el enfrentamiento entre Liu Kang y Kung Lao, que me pareció espectacular tanto por su puesta en escena como por la dirección de la acción. Hay varias secuencias muy bien coreografiadas y mucho más disfrutables que las de la primera entrega.',
      'Aun así, siento que le sigue faltando sustancia. Entiendo que no se le puede exigir la profundidad de un gran drama a una película basada en una saga de videojuegos de peleas, pero sí esperaba un poco más de trabajo en el guion. Los diálogos son bastante flojos y la mayoría de los personajes resultan demasiado planos, sin una evolución que realmente los haga memorables.',
      'Lo que menos puedo bancar es cómo termina tratando la película a su propio protagonista. Después de dedicar toda la entrega anterior a desarrollar a Cole Young, aunque el personaje nunca terminara de convencer, esperaba que esta secuela intentara mejorarlo y darle un papel realmente importante. En cambio, termina siendo prácticamente desplazado de la historia. Si la intención era sacarlo del centro de la trama, al menos me hubiera gustado que su sacrificio tuviera un mayor peso emocional y consecuencias mucho más impactantes.',
      'En definitiva, una secuela entretenida que mejora varios aspectos de la anterior, especialmente la acción, pero que sigue arrastrando los mismos problemas a la hora de construir personajes y contar una historia con verdadero peso.'
    ]},
    { tipo: 'Cine', n: 44, titulo: 'Stan Helsing', anio: '2009', nota: 1, texto: [
      'Esta review va a ser corta porque la película no merece mucho más. Es un bochorno.',
      'Y eso que soy de los que disfrutan las comedias malas, el humor absurdo, las stoner movies y todo ese tipo de películas que muchas veces son un placer culposo. Pero esta no tiene gracia alguna.',
      'Prácticamente ningún chiste me sacó una sonrisa. El humor se siente forzado, sin ritmo y, en muchos momentos, directamente no tiene sentido. Cuanto más avanzaba la película, más perdía la esperanza de que remontara.',
      'A falta de diez minutos para que terminara, ya no daba más. La corté ahí. Infumable.'
    ]},
    { tipo: 'Cine', n: 45, titulo: 'Cabo del miedo', anio: '1991', nota: 4, texto: [
      'Qué grande es Scorsese. Una vez más demuestra su enorme capacidad para construir personajes inolvidables. Max Cady es un antagonista verdaderamente aterrador, y gran parte de eso se debe a la impresionante actuación de Robert De Niro. Su transformación física y la intensidad que transmite en cada escena hacen que sea imposible apartar la vista de la pantalla.',
      'Nick Nolte también entrega un trabajo muy sólido, interpretando a un hombre que se desmorona a medida que la presión aumenta. Pero quien me sorprendió especialmente fue Juliette Lewis. Su personaje aporta una perspectiva muy interesante y su actuación refleja de manera muy convincente esa etapa de transición entre la niñez y la adolescencia, con toda la vulnerabilidad y confusión que eso implica.',
      'En general, me pareció una muy buena película. Quizás no la pondría entre las mejores de la filmografía de Scorsese, pero sigue siendo un thriller muy efectivo, con grandes actuaciones y una tensión que se mantiene durante casi toda la peli. Mi única crítica es que el clímax se extiende un poco más de la cuenta y pierde algo de la fuerza que había construido hasta ese momento.'
    ]},
    { tipo: 'Cine', n: 46, titulo: 'Tres colores: Azul', anio: '1993', nota: 5, texto: [
      'Hermosa película que trabaja sobre el concepto de la libertad. Teniendo en cuenta que esta trilogía representa los tres valores de Francia a través de los colores de su bandera, era fácil imaginar una historia donde la libertad se interpretara de forma literal: una prisión, un secuestro o alguien intentando escapar físicamente. Sin embargo, Kieślowski decide abordar el tema desde un lugar mucho más profundo e interesante.',
      'La protagonista vive atrapada en un pozo de melancolía y dolor tras la pérdida de su marido y su hija. Su verdadera prisión no tiene barrotes, sino que es completamente emocional. Incluso la obra musical inconclusa de su esposo termina convirtiéndose en otra de sus cadenas, un vínculo constante con un pasado del que no consigue desprenderse. Recién cuando comienza a romper esas ataduras puede recuperar el control de su vida y encontrar la fuerza para seguir adelante.',
      'La interpretación de Juliette Binoche es simplemente impresionante. Consigue transmitir el duelo y el vacío con una sutileza que pone la piel de gallina, incluso en los momentos donde apenas habla.',
      'Y si hay otro aspecto que me dejó maravillado es la fotografía. La estética visual de la película es extraordinaria. Cada plano está cuidadosamente compuesto y parece pensado para transmitir el estado emocional de los personajes más que para simplemente mostrar la acción. Es una de esas películas en las que tranquilamente podrías detener cualquier fotograma, enmarcarlo y colgarlo en un museo.',
      'Una obra delicada, profundamente humana y visualmente hermosa, que demuestra que la verdadera libertad muchas veces no consiste en escapar de un lugar, sino en aprender a liberarse del peso que uno lleva por dentro.'
    ]},
    { tipo: 'Cine', n: 47, titulo: '¡Átame!', anio: '1989', nota: 4, texto: [
      'Ay, Almodóvar... Es increíble cómo cada vez que empiezo una película suya tengo dudas de si realmente me va a atrapar. Nunca sé si lo que voy a ver me va a parecer interesante, divertido o incluso si voy a conectar con la historia. Y, sin embargo, casi nunca decepciona.',
      'Qué divertida es esta película. Tiene ese humor ácido tan característico de Almodóvar, que logra hacerte reír incluso en las situaciones más incómodas. La protagonista es un personaje complejo, lleno de contradicciones, y eso hace que sea imposible dejar de seguirla.',
      'Antonio Banderas está fantástico y entrega una actuación llena de carisma. Pero lo más potente vuelve a ser la historia. Como suele hacer Almodóvar, pone el foco en personajes grises, imperfectos y muchas veces marginados por la sociedad. En este caso, un hombre con graves problemas psicológicos que, tras salir de un centro de rehabilitación, secuestra a una actriz porno reconvertida en actriz de cine. Es una premisa completamente disparatada, pero el director consigue que funcione gracias a la humanidad con la que trata a sus personajes.',
      'Lo que más me gustó es cómo evoluciona la relación entre ellos y, especialmente, su desenlace. Es una película que nunca intenta decirte qué está bien o qué está mal. Simplemente presenta personajes que toman decisiones desde sus propios deseos, contradicciones y necesidades, por más polémicas que puedan resultar. Es incómoda, provocadora y, justamente por eso, muy honesta.',
      'Otra gran película de Almodóvar, que vuelve a demostrar su capacidad para convertir historias completamente inverosímiles en relatos profundamente humanos y entretenidos.'
    ]},
    { tipo: 'Series', n: 3, titulo: 'Daredevil: Born Again (temporada 2)', anio: '2025-', nota: 4, texto: [
      'La temporada mejora ampliamente en el tratamiento de sus personajes. Matt vuelve a sentirse como un protagonista realmente interesante y la serie recupera parte de la esencia que tanto me gustaba. Aun así, sigue teniendo problemas de ritmo bastante marcados. Hay episodios que frenan demasiado la historia y terminan perjudicando la experiencia general.',
      'Hay personajes con los que directamente no logré conectar. Tanto BB como Daniel Blake me resultaron bastante aburridos y cada vez que aparecían en pantalla sentía que la serie perdía fuerza. En cambio, el episodio flashback me pareció de lo mejor de la temporada. Aporta mucho al desarrollo de la historia y me alegró muchísimo volver a ver a Moore.',
      'También creo que la inclusión de algunos personajes nuevos termina jugando un poco en contra. No porque Krysten Ritter o Matthew Lillard sean malos actores, sino porque sus personajes, aunque importantes, por momentos desvían demasiado la atención de la trama principal y le quitan protagonismo a los conflictos que realmente me interesaban.',
      'Las escenas de acción y los combates mejoran notablemente respecto a la primera temporada. Están mejor coreografiados y se sienten más contundentes. Sin embargo, todavía están lejos de alcanzar la espectacularidad y el nivel de dirección que tenía la serie original de Netflix, especialmente en sus secuencias de pelea más icónicas.',
      'En definitiva, es una temporada claramente superior a la anterior y un paso en la dirección correcta. Recupera parte de la identidad de Daredevil, mejora a su protagonista y ofrece momentos realmente buenos, aunque todavía le falta encontrar un ritmo más consistente para estar a la altura de la etapa de Netflix.'
    ]},
    { tipo: 'Series', n: 4, titulo: 'Punisher: La última muerte (episodio especial)', anio: '2026', nota: 4, texto: [
      'Este episodio especial me sorprendió muchísimo porque se siente como algo completamente distinto a lo que suele ofrecer Marvel.',
      'Más que enfocarse únicamente en la acción, busca contar una historia íntima sobre un hombre completamente roto, atormentado por los fantasmas de su pasado y por la violencia que define su vida. Todo el planteamiento inicial del conflicto interno de Frank Castle está muy bien construido y consigue que el personaje tenga un peso dramático enorme.',
      'Jon Bernthal vuelve a demostrar por qué nació para interpretar a Punisher. Su actuación transmite toda la rabia, el dolor y la culpa que carga Frank, mostrando las facetas más complejas y humanas del personaje sin perder nunca esa presencia intimidante que lo caracteriza.',
      'Y cuando llega la acción, el episodio tampoco decepciona. Las coreografías son brutales, violentas y están filmadas con una claridad que permite disfrutar cada golpe. En varios momentos me recordó al estilo de The Raid y John Wick: combates crudos, intensos y perfectamente ejecutados, donde cada enfrentamiento transmite una sensación real de peligro.',
      'El único problema es que termina justo cuando parece que todo está por explotar. El desenlace deja muchísimas ganas de seguir viendo más de Frank Castle, y eso habla de lo bien que funciona este especial.',
      'Ojalá Marvel siga apostando por proyectos de este estilo. Cuando se anima a dejar de lado la fórmula y pone el foco en personajes tan complejos como Punisher, demuestra que todavía puede contar historias realmente memorables.'
    ]},
    { tipo: 'Series', n: 5, titulo: 'Dragon Ball Super', anio: '2015-2018', nota: 4, texto: [
      'Durante muchos años evité ver esta serie. Ya estaba conforme con el cierre que me habían dejado Dragon Ball y, en cierta medida, Dragon Ball GT. Sin embargo, los videos de YouTube, las redes sociales y toda la repercusión que generaban las nuevas transformaciones y peleas despertaban cada vez más mi curiosidad. No fue hasta que jugué Dragon Ball: Sparking! ZERO que finalmente me decidí a darle una oportunidad.',
      'En líneas generales me gustó. Creo que es mejor que GT y que la mayoría de las pseudo secuelas que tuvo la franquicia. Aun así, también siento que tarda demasiado en encontrar su identidad. No es hasta sus últimos arcos cuando realmente mejora el ritmo, la construcción de los personajes, la escritura de las escenas y el desarrollo del mundo.',
      'Las primeras sagas me parecieron bastante flojas. Muchos acontecimientos se sienten apresurados y la narrativa solo termina de despegar cuando llegan los clímax de cada historia. Afortunadamente, esos momentos suelen estar muy bien logrados y hacen que el balance final sea positivo. También me gustó la incorporación de nuevos personajes y la expansión del universo de Dragon Ball. Banco también que en la última temporada, a pesar de tanto personaje del multiverso, los protagonistas clásicos (Ten, Muten Roshi, Krilin, los androides, Piccolo) sean relevantes y tengan su merecido lugar en la gran batalla.',
      'Lo que nunca terminé de comprar fue la inclusión de los múltiples universos. Es un recurso que siento que tanto Marvel como los cómics popularizaron hasta el cansancio y que, muchas veces, termina restándole peso a las historias. En Dragon Ball Super me pasó algo parecido. Personalmente, habría preferido que toda la trama siguiera desarrollándose dentro de un único universo y que las nuevas amenazas provinieran de distintos planetas. Paradójicamente, la existencia de tantos universos hace que todo parezca más grande, pero al mismo tiempo mucho más pequeño, porque los personajes pueden viajar entre ellos con demasiada facilidad.',
      'En cuanto a las transformaciones, tengo sentimientos encontrados. Me gustó mucho todo lo relacionado con las doctrinas y el desarrollo del Ultra Instinto, porque aportan una evolución basada en la filosofía de combate de cada personaje (si contamos la posible incorporación futura del Ultra Ego del manga). En cambio, las transformaciones divinas como el Super Saiyan God y el Super Saiyan Blue nunca terminaron de convencerme. Siento que llegaron demasiado rápido, le quitaron relevancia al Super Saiyan 3 y, de alguna manera, cerraron la puerta a una evolución del Super Saiyan 4, que siempre me pareció uno de los mejores aportes de GT.',
      'En definitiva, Dragon Ball Super me parece una buena continuación del universo creado por Akira Toriyama. Tiene decisiones muy discutibles y tarda bastante en despegar, pero cuando encuentra el rumbo ofrece momentos realmente memorables. No está a la altura de la serie original, pero sí logra modernizar la franquicia y dejar varias ideas interesantes para el futuro.'
    ]},
    { tipo: 'Juegos', n: 7, titulo: 'God of War Ragnarök', anio: '2022', nota: 5, texto: [
      'Todavía necesito tiempo para decidir si es el mejor juego de la saga o no. Lo que sí tengo claro es que estamos ante una obra excelente. Una historia que habla sobre el perdón, el crecimiento, la capacidad de avanzar y la importancia de abrirse emocionalmente, incluso cuando toda una vida estuvo marcada por la violencia.',
      'Creo que su predecesor exploraba mejor la relación entre padre e hijo desde la perspectiva de Kratos. En cambio, Ragnarök invierte ese enfoque y pone el foco en la evolución de Atreus. Vemos cómo comienza a tomar sus propias decisiones, a cuestionar las enseñanzas de su padre y a recorrer un camino propio. Me gustó mucho cómo representa ese momento en el que los hijos crecen, buscan construir su identidad y dejan de vivir únicamente bajo la sombra de sus padres, aprendiendo tanto de sus aciertos como de sus errores.',
      'En lo jugable, el salto de calidad también es evidente. El gameplay es exquisito y mejora prácticamente todos los sistemas del juego anterior. El combate se siente más dinámico, variado y satisfactorio, hasta el punto de que completar el juego al 100 % nunca se volvió una tarea pesada, sino una experiencia realmente entretenida.',
      'Los mapas también me parecieron espectaculares. Cada reino tiene una identidad visual muy marcada y consigue diferenciarse del resto. Mi única pega es que me hubiera gustado pasar más tiempo en algunos escenarios, como Svartalfheim o Helheim, que sentí que tenían muchísimo más potencial del que finalmente se aprovechó.',
      'Uno de los mayores aciertos del juego es dividir la narrativa entre Kratos y Atreus. Esto permite conocer la visión del mundo de ambos personajes y seguir su crecimiento de manera independiente, enriqueciendo muchísimo la historia. También quiero destacar al antagonista, que me pareció uno de los mejores de toda la saga. Su papel dentro de la trama está muy bien construido y demuestra el enorme cuidado que tuvo el equipo a la hora de escribir a sus personajes. Además, la incorporación de la nueva arma de Kratos aporta una variedad muy bienvenida al sistema de combate y hace que cada enfrentamiento se sienta aún más completo.',
      'Si tengo que señalar un punto flojo, sería el desenlace. No porque sea malo, sino porque me dio la sensación de estar un poco apresurado. El Ragnarök, el acontecimiento que da nombre al juego, termina funcionando más como el escenario del combate final que como el evento cataclísmico capaz de cambiar para siempre el destino de los Nueve Reinos. Esperaba una escala mucho mayor y un impacto más profundo en el mundo.',
      'Aun con esa pequeña decepción en su tramo final, God of War Ragnarök es un juego sobresaliente. Mejora prácticamente todos los aspectos de su predecesor, ofrece una historia muy emotiva y un apartado jugable espectacular. Quizás no sea la obra maestra definitiva de PlayStation, pero sí uno de los mejores juegos que ha publicado Sony y una dignísima continuación para la historia de Kratos.'
    ]},
    { tipo: 'Juegos', n: 8, titulo: "Marvel's Spider-Man 2", anio: '2023', nota: 5, texto: [
      "El primer Marvel's Spider-Man dejó la vara altísima. Insomniac construyó uno de los mejores universos de Spider-Man en los videojuegos, con una historia sólida, grandes villanos y una versión de Peter Parker que logra sentirse fresca sin perder la esencia del personaje. Luego, Miles Morales continuó ese camino con una historia más pequeña, pero igual de efectiva para desarrollar a su nuevo protagonista. Este juego llega con la difícil tarea de demostrar que Insomniac todavía tiene mucho para ofrecer, y creo que lo consigue.",
      'El gameplay fue pulido prácticamente en todos sus aspectos. Balancearse por la ciudad sigue siendo una de las mejores sensaciones que puede ofrecer un videojuego de superhéroes y el combate ahora resulta mucho más dinámico. Mantener los combos es más sencillo, las habilidades amplían muchísimo las posibilidades y el desafío ya no pasa tanto por tocar muchos botones, sino por los reflejos y la capacidad de reaccionar a todo lo que ocurre durante las peleas. La sensación de poder es excelente.',
      'La historia también está a la altura. La incorporación de Harry Osborn me pareció uno de los mayores aciertos del juego. Su presencia convierte la trama en algo mucho más personal para Peter Parker y consigue que los conflictos tengan un peso emocional muy fuerte. Sin embargo, siento que eso termina jugando un poco en contra de Miles Morales. Su enfrentamiento con Martin Li tenía muchísimo potencial y me hubiera gustado que el juego dedicara más tiempo a explorar esa relación y las consecuencias emocionales que tiene para ambos personajes.',
      'También me gustó que el juego siga sorprendiendo. Tiene varios momentos y giros que funcionan mucho mejor cuando llegás sin saber absolutamente nada.',
      'En cuanto a Kraven, me pareció un villano espectacular. Tiene una presencia imponente y una construcción narrativa excelente que lo convierte en una amenaza constante durante gran parte de la aventura. Es cierto que, hacia el tramo final, la historia divide un poco la atención y su protagonismo se diluye, pero aun así deja una impresión enorme y termina siendo uno de los mejores antagonistas que tuvo esta saga.',
      "En definitiva, estamos ante un juegazo. Mejora prácticamente todos los sistemas del título anterior y ofrece una aventura espectacular tanto en lo jugable como en lo narrativo. A día de hoy sigo prefiriendo el primer Marvel's Spider-Man por el impacto que tuvo y por lo redonda que me parece su historia. Pero quién sabe... quizás con el paso del tiempo sea este el que termine ocupando el lugar del mejor juego de Spider-Man."
    ]},
    { tipo: 'Música', n: 44, titulo: 'Rubber Soul', autor: 'The Beatles', anio: '1965', nota: 5, texto: [
      'Para mí, Rubber Soul marca el verdadero comienzo del gran despegue de The Beatles. Es cierto que en los discos anteriores ya quedaba claro que eran una banda extraordinaria, pero siento que es acá donde empiezan a romper con su propia fórmula. Comienzan a jugar mucho más con los ritmos, a experimentar con nuevos sonidos y a buscar una identidad artística mucho más ambiciosa.',
      'Todavía se percibe la influencia de sus primeros trabajos. Siguen presentes el rock clásico y algunos elementos del folk, pero la diferencia está en la manera en que todas esas influencias se integran para construir un álbum mucho más cohesionado y con una personalidad propia. Se nota una banda que ya no solo quiere escribir grandes canciones, sino también crear discos con una identidad muy marcada.',
      'Mis temas favoritos son "Drive My Car", "Norwegian Wood (This Bird Has Flown)", "Nowhere Man" y, por supuesto, la maravillosa "In My Life". Son canciones que no solo destacan dentro del álbum, sino que terminaron convirtiéndose en clásicos absolutos de la historia de la música.',
      "Rubber Soul es un disco bisagra. El punto donde The Beatles dejan de ser únicamente una enorme banda de rock para empezar a convertirse en un grupo dispuesto a reinventarse constantemente. Sin este álbum, sería muy difícil imaginar todo lo que vendría después con Revolver, Sgt. Pepper's Lonely Hearts Club Band y el resto de su etapa más experimental."
    ]},
    { tipo: 'Música', n: 45, titulo: 'Revolver', autor: 'The Beatles', anio: '1966', nota: 4, texto: [] },
    { tipo: 'Música', n: 46, titulo: "Sgt. Pepper's Lonely Hearts Club Band", autor: 'The Beatles', anio: '1967', nota: 5, texto: [] },
    { tipo: 'Música', n: 47, titulo: 'Magical Mystery Tour', autor: 'The Beatles', anio: '1967', nota: 4, texto: [] },
    { tipo: 'Música', n: 48, titulo: 'The Beatles (White Album)', autor: 'The Beatles', anio: '1968', nota: 5, texto: [] },
    { tipo: 'Música', n: 49, titulo: 'Abbey Road', autor: 'The Beatles', anio: '1969', nota: 5, texto: [] },
    { tipo: 'Música', n: 50, titulo: 'Let It Be', autor: 'The Beatles', anio: '1970', nota: 5, texto: [] },
    { tipo: 'Cómics', n: 5, titulo: 'Luke Cage', autor: 'Colección de novelas gráficas de los héroes más poderosos de Marvel #7', anio: '1978 y 2010', nota: 4, texto: [
      'Luke Cage no es un personaje que me parezca sumamente interesante. Sin embargo, la oportunidad que me brinda esta colección de Marvel para conocer historias nuevas me gusta. En el primer arco, un tanto más simple y clásico, vemos las aventuras de Luke junto a Danny Rand. Es divertida y el trabajo del magnífico Chris Claremont nunca decepciona. De ahí en adelante no me pareció algo sumamente interesante. Es más, días después de la lectura me cuesta recordar qué es lo que pasaba en la trama.',
      'En cuanto a la segunda historia, esta sí trata algo que me parece que representa mejor al personaje: su cercanía con lo urbano, con las familias del barrio. Me gusta que Luke se sienta como un personaje que pertenece a su barrio. Un día está salvando la Tierra junto a los Avengers y al otro está ayudando a un vecino. En este caso la historia está bien. Me gusta mucho el tratamiento del protagonista con su pasado y el posible camino que cualquier joven puede seguir por la delincuencia.'
    ]},
    { tipo: 'Cómics', n: 6, titulo: 'Venom: Planeta de simbiontes', autor: 'Universo Araña #9', anio: '1995', nota: 4, texto: [
      'La relación entre el simbionte, Eddie Brock y Peter Parker siempre fue interesante. En este caso se le suman Ben Reilly y el mundo de los simbiontes. Creo que el acierto de este cómic recae en eso, en mostrar el mundo de donde provienen los simbiontes, antes de toda la nueva interpretación de Knull que le dio Marvel en la actualidad.',
      'La historia no es compleja, pero destaco la intención de analizar la bondad o maldad detrás de Venom, un personaje que actualmente ya estamos acostumbrados a ver como un antihéroe. Tiene la virtud de presentarlo como aliado de Spider-Man. La acción en el planeta me parece trepidante.',
      'No es una locura, pero es una historia interesante, cuanto menos.'
    ]},
  ]},

  { mes: 'Abril 2026', items: [
    { tipo: 'Cine', n: 27, titulo: 'La peor persona del mundo', anio: '2021', nota: 5, texto: [] },
    { tipo: 'Cine', n: 28, titulo: 'Los tiburones', anio: '2018', nota: 4, texto: [] },
    { tipo: 'Cine', n: 29, titulo: 'La soga', anio: '1948', nota: 4, texto: [] },
    { tipo: 'Cine', n: 30, titulo: 'El asesinato de Jesse James por el cobarde Robert Ford', anio: '2007', nota: 5, texto: [] },
    { tipo: 'Cine', n: 31, titulo: '3:10 to Yuma', anio: '2007', nota: 3, texto: [] },
    { tipo: 'Cine', n: 32, titulo: 'Vestida para matar', anio: '1980', nota: 4, texto: [] },
    { tipo: 'Cine', n: 33, titulo: 'Send Help', anio: '2026', nota: 4, texto: [] },
    { tipo: 'Cine', n: 34, titulo: 'Darkman', anio: '1990', nota: 4, texto: [] },
    { tipo: 'Cine', n: 35, titulo: 'Sentimental Value', anio: '2025', nota: 5, texto: [] },
    { tipo: 'Cine', n: 36, titulo: 'Y tu mamá también', anio: '2001', nota: 5, texto: [] },
    { tipo: 'Cine', n: 37, titulo: 'Enter the Void', anio: '2009', nota: 3, texto: [] },
    { tipo: 'Cine', n: 38, titulo: 'Tron: Legacy', anio: '2010', nota: 4, texto: [] },
    { tipo: 'Cine', n: 39, titulo: 'Street Fighter II: The Animated Movie', anio: '1994', nota: 4, texto: [] },
    { tipo: 'Música', n: 39, titulo: 'Y después no hablamos más', autor: 'Balta', anio: '2021', nota: 4, texto: [] },
    { tipo: 'Música', n: 40, titulo: 'Cuando me mires', autor: 'Balta', anio: '2022', nota: 4, texto: [] },
    { tipo: 'Música', n: 41, titulo: 'Todo antes de irme', autor: 'Balta', anio: '2023', nota: 3, texto: [] },
    { tipo: 'Música', n: 42, titulo: 'Ayer dijiste mañana', autor: 'Balta', anio: '2026', nota: 4, texto: [] },
    { tipo: 'Música', n: 43, titulo: 'Moses and the Drones', autor: 'Tom Rowley', anio: '2026', nota: 4, texto: [] },
    { tipo: 'Cómics', n: 4, titulo: 'Los Tres Guerreros', autor: 'Colección de novelas gráficas de los héroes más poderosos de Marvel #9', anio: '1987-1988 y 2011', nota: 4, texto: [
      'Estos tres personajes son bastante desconocidos del universo de Marvel para el público general. Tienen una aventura divertida y heroica. No se achican a la hora de mostrar una faceta interesante del mundo de los cómics: la relación de la mitología y Marvel, que evidencia todo el aspecto fantástico de este universo.',
      'Divertida, pero no más. Tampoco es que sea una locura. No es mala, ni mucho menos. Pero sí es un poco secundaria dentro de todo el espectro de héroes de Marvel. Se queda como una historia de un episodio random dentro de un mundo muy grande. Destaco la relación de los personajes y su crecimiento mostrado a través de los flashbacks.',
      'En cuanto a la historia clásica, la siento también divertida, un poco confusa en su narración a través de varios puntos de vista y simple. Pero cumple con entretener.'
    ]},
  ]},

  { mes: 'Marzo 2026', items: [
    { tipo: 'Cine', n: 21, titulo: 'Marty Supreme', anio: '2025', nota: 5, texto: [] },
    { tipo: 'Cine', n: 22, titulo: 'No es otra tonta película americana', anio: '2001', nota: 3, texto: [] },
    { tipo: 'Cine', n: 23, titulo: 'Hamnet', anio: '2025', nota: 5, texto: [] },
    { tipo: 'Cine', n: 24, titulo: 'La Navidad de Harold y Kumar', anio: '2011', nota: 2, texto: [] },
    { tipo: 'Cine', n: 25, titulo: 'La noche de los muertos vivientes', anio: '1968', nota: 4, texto: [] },
    { tipo: 'Cine', n: 26, titulo: 'Dragon Ball Z: El poder invencible', anio: '1993', nota: 4, texto: [] },
    { tipo: 'Música', n: 19, titulo: 'Lata con Plata', autor: 'Tussiwarriors', anio: '2026', nota: 3, texto: [] },
    { tipo: 'Música', n: 20, titulo: 'State of Euphoria', autor: 'Anthrax', anio: '1988', nota: 4, texto: [] },
    { tipo: 'Música', n: 21, titulo: 'La luz que sabe robar', autor: 'Jorge Drexler', anio: '1992', nota: 4, texto: [] },
    { tipo: 'Música', n: 22, titulo: 'Radar', autor: 'Jorge Drexler', anio: '1994', nota: 4, texto: [] },
    { tipo: 'Música', n: 23, titulo: 'Vaivén', autor: 'Jorge Drexler', anio: '1996', nota: 4, texto: [] },
    { tipo: 'Música', n: 24, titulo: 'Llueve', autor: 'Jorge Drexler', anio: '1998', nota: 4, texto: [] },
    { tipo: 'Música', n: 25, titulo: 'Frontera', autor: 'Jorge Drexler', anio: '1999', nota: 5, texto: [] },
    { tipo: 'Música', n: 26, titulo: 'Sea', autor: 'Jorge Drexler', anio: '2001', nota: 5, texto: [] },
    { tipo: 'Música', n: 27, titulo: 'Eco', autor: 'Jorge Drexler', anio: '2004', nota: 5, texto: [] },
    { tipo: 'Música', n: 28, titulo: '12 segundos de oscuridad', autor: 'Jorge Drexler', anio: '2006', nota: 5, texto: [] },
    { tipo: 'Música', n: 29, titulo: 'Amar la trama', autor: 'Jorge Drexler', anio: '2010', nota: 4, texto: [] },
    { tipo: 'Música', n: 30, titulo: 'Bailar en la cueva', autor: 'Jorge Drexler', anio: '2014', nota: 4, texto: [] },
    { tipo: 'Música', n: 31, titulo: 'Salvavidas de hielo', autor: 'Jorge Drexler', anio: '2017', nota: 4, texto: [] },
    { tipo: 'Música', n: 32, titulo: 'Tinta y tiempo', autor: 'Jorge Drexler', anio: '2022', nota: 5, texto: [] },
    { tipo: 'Música', n: 33, titulo: 'Taracá', autor: 'Jorge Drexler', anio: '2026', nota: 5, texto: [] },
    { tipo: 'Música', n: 34, titulo: "Harry's House", autor: 'Harry Styles', anio: '2022', nota: 4, texto: [] },
    { tipo: 'Música', n: 35, titulo: 'Free Spirits', autor: 'Ca7riel & Paco Amoroso', anio: '2026', nota: 4, texto: [] },
    { tipo: 'Música', n: 36, titulo: 'Volcano', autor: 'Jungle', anio: '2023', nota: 4, texto: [] },
    { tipo: 'Música', n: 37, titulo: 'Mer de Noms', autor: 'A Perfect Circle', anio: '2000', nota: 4, texto: [] },
    { tipo: 'Música', n: 38, titulo: 'Juniper', autor: 'Joy Crookes', anio: '2025', nota: 4, texto: [] },
    { tipo: 'Juegos', n: 5, titulo: 'Dragon Ball: Sparking! Zero', anio: '2024', nota: 4, texto: [] },
    { tipo: 'Juegos', n: 6, titulo: 'Street Fighter 6', anio: '2023', nota: 5, texto: [] },
    { tipo: 'Libros', n: 2, titulo: 'Messi es un perro y otros cuentos', autor: 'Hernán Casciari', anio: '2016', nota: 4, texto: [] },
    { tipo: 'Cómics', n: 1, titulo: 'Dragon Ball Ultimate #04', autor: 'Akira Toriyama', nota: 4, texto: [] },
    { tipo: 'Cómics', n: 2, titulo: 'Fullmetal Alchemist #04', autor: 'Hiromu Arakawa', nota: 4, texto: [] },
    { tipo: 'Cómics', n: 3, titulo: 'El Eternauta', anio: '1957-1959', nota: 4, texto: [] },
  ]},

  { mes: 'Febrero 2026', items: [
    { tipo: 'Cine', n: 13, titulo: 'Moulin Rouge', anio: '2001', nota: 5, texto: [] },
    { tipo: 'Cine', n: 14, titulo: 'El señor de los anillos: El retorno del rey', anio: '2003', nota: 5, texto: [] },
    { tipo: 'Cine', n: 15, titulo: 'La hermanastra fea', anio: '2025', nota: 4, texto: [] },
    { tipo: 'Cine', n: 16, titulo: 'Frankenstein', anio: '2025', nota: 5, texto: [] },
    { tipo: 'Cine', n: 17, titulo: 'Los pecadores', anio: '2025', nota: 5, texto: [] },
    { tipo: 'Cine', n: 18, titulo: 'Harold & Kumar Go to White Castle', anio: '2004', nota: 4, texto: [] },
    { tipo: 'Cine', n: 19, titulo: 'Harold & Kumar Escape from Guantanamo Bay', anio: '2008', nota: 4, texto: [] },
    { tipo: 'Cine', n: 20, titulo: 'Una batalla tras otra', anio: '2025', nota: 5, texto: [] },
    { tipo: 'Series', n: 1, titulo: 'Justice League', anio: '2001-2004', nota: 5, texto: [] },
    { tipo: 'Series', n: 2, titulo: 'Justice League Unlimited', anio: '2004-2006', nota: 5, texto: [] },
    { tipo: 'Música', n: 6, titulo: 'Queens of the Stone Age', autor: 'Queens of the Stone Age', anio: '1998', nota: 4, texto: [] },
    { tipo: 'Música', n: 7, titulo: 'Rated R', autor: 'Queens of the Stone Age', anio: '2000', nota: 4, texto: [] },
    { tipo: 'Música', n: 8, titulo: 'Songs for the Deaf', autor: 'Queens of the Stone Age', anio: '2002', nota: 5, texto: [] },
    { tipo: 'Música', n: 9, titulo: 'Lullabies to Paralyze', autor: 'Queens of the Stone Age', anio: '2005', nota: 4, texto: [] },
    { tipo: 'Música', n: 10, titulo: 'Era Vulgaris', autor: 'Queens of the Stone Age', anio: '2007', nota: 4, texto: [] },
    { tipo: 'Música', n: 11, titulo: '...Like Clockwork', autor: 'Queens of the Stone Age', anio: '2013', nota: 4, texto: [] },
    { tipo: 'Música', n: 12, titulo: 'Villains', autor: 'Queens of the Stone Age', anio: '2017', nota: 4, texto: [] },
    { tipo: 'Música', n: 13, titulo: 'In Times New Roman...', autor: 'Queens of the Stone Age', anio: '2023', nota: 5, texto: [] },
    { tipo: 'Música', n: 14, titulo: 'Harry Styles', autor: 'Harry Styles', anio: '2017', nota: 4, texto: [] },
    { tipo: 'Música', n: 15, titulo: 'Fine Line', autor: 'Harry Styles', anio: '2019', nota: 4, texto: [] },
    { tipo: 'Música', n: 16, titulo: 'Peace, Love, Death Metal', autor: 'Eagles of Death Metal', anio: '2004', nota: 4, texto: [] },
    { tipo: 'Música', n: 17, titulo: 'Death by Sexy', autor: 'Eagles of Death Metal', anio: '2006', nota: 3, texto: [] },
    { tipo: 'Música', n: 18, titulo: 'Términos y Condiciones', autor: 'Usted Señálemelo', anio: '2026', nota: 4, texto: [] },
    { tipo: 'Juegos', n: 4, titulo: 'Injustice 2', anio: '2017', nota: 4, texto: [] },
    { tipo: 'Libros', n: 1, titulo: 'El Señor de los Anillos: Las dos torres', autor: 'J. R. R. Tolkien', anio: '1954', nota: 5, texto: [] },
  ]},

  { mes: 'Enero 2026', items: [
    { tipo: 'Cine', n: 1, titulo: 'El cartero siempre llama dos veces', anio: '1981', nota: 3, texto: [] },
    { tipo: 'Cine', n: 2, titulo: 'The Naked Gun', anio: '2025', nota: 4, texto: [] },
    { tipo: 'Cine', n: 3, titulo: 'Los huéspedes', anio: '2015', nota: 2, texto: [] },
    { tipo: 'Cine', n: 4, titulo: '28 semanas después', anio: '2007', nota: 3, texto: [] },
    { tipo: 'Cine', n: 5, titulo: 'Decision to Leave', anio: '2022', nota: 5, texto: [] },
    { tipo: 'Cine', n: 6, titulo: 'The Running Man', anio: '2025', nota: 3, texto: [] },
    { tipo: 'Cine', n: 7, titulo: 'La invención de Hugo', anio: '2011', nota: 3, texto: [] },
    { tipo: 'Cine', n: 8, titulo: 'The Jester', anio: '2023', nota: 1, texto: [] },
    { tipo: 'Cine', n: 9, titulo: 'Las colinas tienen ojos', anio: '1977', nota: 4, texto: [] },
    { tipo: 'Cine', n: 10, titulo: 'Cinema Paradiso', anio: '1988', nota: 5, texto: [] },
    { tipo: 'Cine', n: 11, titulo: '8½', anio: '1963', nota: 5, texto: [] },
    { tipo: 'Cine', n: 12, titulo: 'Solo Dios perdona', anio: '2013', nota: 5, texto: [] },
    { tipo: 'Música', n: 1, titulo: '¿Dónde es el after?', autor: 'Rawayana', anio: '2026', nota: 4, texto: [] },
    { tipo: 'Música', n: 2, titulo: 'Homework', autor: 'Daft Punk', anio: '1997', nota: 5, texto: [] },
    { tipo: 'Música', n: 3, titulo: 'The New Abnormal', autor: 'The Strokes', anio: '2020', nota: 5, texto: [] },
    { tipo: 'Música', n: 4, titulo: 'Suck It and See', autor: 'Arctic Monkeys', anio: '2011', nota: 5, texto: [] },
    { tipo: 'Música', n: 5, titulo: "Whatever People Say I Am, That's What I'm Not", autor: 'Arctic Monkeys', anio: '2006', nota: 5, texto: [] },
    { tipo: 'Juegos', n: 1, titulo: 'Yakuza', anio: '2005', nota: 5, texto: [] },
    { tipo: 'Juegos', n: 2, titulo: 'Red Dead Revolver', anio: '2004', nota: 4, texto: [] },
    { tipo: 'Juegos', n: 3, titulo: 'Injustice: Gods Among Us', anio: '2013', nota: 5, texto: [] },
  ]},
];
