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
    { tipo: 'Cine', n: 27, titulo: 'La peor persona del mundo', anio: '2021', nota: 5, texto: [
      "Ay cómo me gustan estas películas. Me encanta emocionarme y enamorarme con una historia. Sentir en la piel lo que los protagonistas viven.  Qué sentimiento tan lindo cuando una película te lleva por tantos lados: amor, tristeza y emoción. La protagonista, Julie, es un personaje tan tridimensional y complejo que para el final de la película sentís que la conocés de toda la vida.",
      "Su mitad final es desgarradora. Todo lo hermoso que viste construirse se desarma en dos soplidos. Hermosa película visualmente y narrativa. Tiene secuencias que me quedaron registradas en mi memoria. Como la de la escapada corriendo en el desayuno o la de sus miedos y sentimientos mientras experimenta con drogas.",
      "Hermosa película de un director que pinta con mucho futuro. Con una magnífica dirección y visuales. La película me conmovió y logró impactar gratamente. Recomendado para todos los amantes del cine romántico, pero no del tradicional chico conoce a chica. De las historias llenas de agujeros en el corazón. De emociones puras y hermosas. Totalmente recomendada."
    ] },
    { tipo: 'Cine', n: 28, titulo: 'Los tiburones', anio: '2018', nota: 4, texto: [
      "Lucía Garibaldi entrega una película que parece simple a primera vista, pero que esconde una metáfora y acercamiento distinto al pasaje adolescente de una uruguaya.",
      "Por momentos es muy visceral en la forma de representar nuestro dialecto, interacciones y modo de vida, que se vuelve raro ver representado nuestro país con tanta habilidad.",
      "El viaje de la protagonista es tan simple como crecer, descubrir tu despertar sexual y conocer un poco más de dónde venís y cómo quisieras ser."
    ] },
    { tipo: 'Cine', n: 29, titulo: 'La soga', anio: '1948', nota: 4, texto: [
      "Por algo se dice que Hitchcock es un genio del género del suspenso. En esta gran película, despliega toda su habilidad detrás de las cámaras para setear un espacio, pocos personajes y con ellos jugar al gato y al ratón.",
      "Los protagonistas caen por sus propios errores. Grandes actuaciones y gran guion para mostrar las costuras de una clase alta que se cree impune de hacer lo que quiere."
    ] },
    { tipo: 'Cine', n: 30, titulo: 'El asesinato de Jesse James por el cobarde Robert Ford', anio: '2007', nota: 5, texto: [
      "Gran película que nos retrata de una manera ejemplar la búsqueda de la idealización, los mitos y la tragedia de no ser recordado. Construye toda la película lentamente para retratar un Jesse James que se escapa del mito, que es real y que tiene fisuras. Y un Robert Ford que, engañado por su sed de convertirse en su ídolo, termina pudriéndose lentamente hasta que nadie lo recuerda.",
      "Lo bien que está filmada está película es impresionante. Es tan impactante visualmente que hasta Red Dead Redemption toma inspiración de grandes planos y secuencias para su juego.",
      "Brad Pitt, como siempre, la rompe. Muestra una actuación muy distinta a lo tradicional del actor. Muestra una faceta muy interesante de un forajido de la ley."
    ] },
    { tipo: 'Cine', n: 31, titulo: '3:10 to Yuma', anio: '2007', nota: 3, texto: [
      "Esperaba más de esta película. Por más que tiene buenos momentos y secuencias de tiroteos, se queda muy corta. La resolución final la siento simple y edulcorada.",
      "No es una mala película, pero creo que se siente como un blockbuster hollywoodense típico sin intenciones de brindar algo más que solo cumplir. Tiene muchas cosas buenas, como las escenas del protagonista, que lo da todo por su hijo."
    ] },
    { tipo: 'Cine', n: 32, titulo: 'Vestida para matar', anio: '1980', nota: 4, texto: [
      "Brian de Palma no decepciona. En esta película se destila estilo y homenaje a los grandes directores del suspense. La actriz protagónica la noté un poco floja en su actuación.",
      "Me gustó, cumplió y sorprendió con el final. Un plot twist muy interesante y más para la época en la que fue realizada la película."
    ] },
    { tipo: 'Cine', n: 33, titulo: 'Send Help', anio: '2026', nota: 4, texto: [
      "Sam Raimi vuelve al cine propio con una película sumamente divertida y que critica a todos por igual. Su protagonista tragicómica, con miles de defectos y virtudes. Pero a su vez con un viaje oscuro en su personaje. El jefe, te hace odiarlo desde el primer momento que sale en pantalla, pero hasta Raimi logra que empatices y sientas que el tipo debería escapar de esa isla.",
      "No decepciona el director que entrega una propuesta única donde la protagonista femenina es más que solo alguien \"ruda\". Es un personaje complejo y con muchas capas. Y lo importante es que la acción, el terror y el humor nunca fallan."
    ] },
    { tipo: 'Cine', n: 34, titulo: 'Darkman', anio: '1990', nota: 4, texto: [
      "Bueno, es un poco rara por momentos. Pero en general es un peliculón de superhéroes cuando el cine de superhéroes estaba comenzando a ser cool. Nuevamente, Raimi entrega una película con un protagonista complejo y con una trama ligera. Lo importante es el desarrollo de la película y sus personajes con varias caras.",
      "Grandes efectos especiales prácticos y CGI. Para ser de la época, funciona muy bien. Y más con la genialidad de la planeación de muchos de ellos. Los trucos de cámara y los momentos de edición más deslumbrantes de la película.",
      "Amé el final con el cameo de Bruce Campbell; fue hermoso ese momentazo."
    ] },
    { tipo: 'Cine', n: 35, titulo: 'Sentimental Value', anio: '2025', nota: 5, texto: [
      "Gran película de este director que no erra. Ahora, explora una relación padre e hija que ahonda en las cicatrices del pasado. Los miedos y las experiencias traumáticas no tratadas. Un retrato a una familia muy rota, con cosas para decirse que prefieren ser ocultadas.",
      "Un acercamiento a la vida de una hija que quiere ser feliz y encontrar su camino, lejos de la aprobación y dependencia de su padre. Un hombre que busca recomponer sus lazos rotos y ser mejor persona.",
      "Su final es emocional y fuerte al espíritu."
    ] },
    { tipo: 'Cine', n: 36, titulo: 'Y tu mamá también', anio: '2001', nota: 5, texto: [
      "Venía hace años esquivando esta película que todo el mundo me había recomendado. Sentía que tenía que ser buena, algo en mí igual me tiraba para atrás pensando en la posible decepción. Pero no fue así. Es una de las mejores películas mexicanas. Hecha con un nivel de guion excelente. Con unos personajes impecables. Fogosa y contestataria por momentos.",
      "Destaca más en sus diálogos en off, donde a través del relato muestran la cruda realidad de la situación. No la ensoñación de los jóvenes.",
      "Tiene un manejo de cámara impresionante y un golpe bajo al final que te deja frío."
    ] },
    { tipo: 'Cine', n: 37, titulo: 'Enter the Void', anio: '2009', nota: 3, texto: [
      "Gaspar Noé. Polémico, transgresor y por momentos pretencioso. En esta sentí que estaba bueno el experimento, pero dura mucho. Creo que la intención está buena. Pero con intenciones no se hacen buenas películas.",
      "Realmente se excede, es aburrida y cíclica. El mensaje lo podés entender a mitad de película, pero tenés que seguir viendo para ver lo espectacular que se vuelven sus planos. O eso pensaba el director. No es mala. Pero tampoco se puede considerar una obra maestra. Es pesada y aburrida. Entiendo todo su contexto del recurso de las drogas para enlentecer una muerte y recorrer la vida a través de luces. Pero aburre y llega a su punto."
    ] },
    { tipo: 'Cine', n: 38, titulo: 'Tron: Legacy', anio: '2010', nota: 4, texto: [
      "Hace tiempo no la veía completa. Reconozco que no es una joya infravalorada. Sino, más bien es una película que está buena y cumple con sus impresionantes visuales y soundtrack. No más que eso.",
      "A mí me encanta esta película por temas asociados a la nostalgia y la estética. Juega a favor que los compositores del soundtrack sean Daft Punk y que hagan hasta un cameo en la peli.",
      "La primera mitad, reconozco que me gusta mucho más que su tercio final. Es más dinámica, con acción y buen desarrollo de la trama. Su final se enlentece, se vuelve predecible y no avanza rápido. Hasta su secuencia final es bastante decepcionante, viendo lo que pasó en toda la película."
    ] },
    { tipo: 'Cine', n: 39, titulo: 'Street Fighter II: The Animated Movie', anio: '1994', nota: 4, texto: [
      "De chico amaba esta película. Verla de nuevo me chocó.",
      "Genuinamente, no creo que sea mala. Sin embargo, toda la trama de Ryu caminando de punto A a B me aburrió. No pasaba nada y sus escenas eran eternas.",
      "Por lo demás, las secuencias de pelea son impresionantes. Todas. El desarrollo de los protagonistas es muy bueno. Su villano es temible. Y su animación es impecable."
    ] },
    { tipo: 'Música', n: 39, titulo: 'Y después no hablamos más', autor: 'Balta', anio: '2021', nota: 4, texto: [
      "Cortito pero especial. Con solo 8 canciones, este disco deja en claro al joven uruguayo que tiene un tremendo futuro. Comienza con el temazo de \"NENA!\" con una mezcla de sonidos como la trompeta y la percusión que le dan vida a la cultura uruguaya vista a través de los ojos de un joven. Después de esa introducción, se baja el ritmo para escuchar canciones como \"Tuyo\", \"Nuestros ecos\" y \"Rita\" temas que se mueven en el eje de la guitarra y la voz. Con grandes letras y honestidad. Gran sonoridad que mezcla el pasado con los ritmos más modernos.",
      "En general, un gran disco que muestra en primera plana la identidad musical de este joven y lo presenta de una gran manera."
    ] },
    { tipo: 'Música', n: 40, titulo: 'Cuando me mires', autor: 'Balta', anio: '2022', nota: 4, texto: [
      "Las letras de este disco cobran una nueva vida. Mejoran ampliamente. La cultura del candombe tiene más presencia y embellece aún más un disco con una tonalidad tan hermosa. Temas como \"Lágrima\" demuestran esto con certeza. \"Veneno\" tiene un ritmo tan latino espectacular. \"Lo que tenga que ser!\" temazo.",
      "Algo que no suelo destacar son las portadas. Esta tiene una sencilla pero perfecta porque engloba en una sola toma la importancia de la música en Balta desde pequeño ya transpiraba la música y la vivía en carne propia."
    ] },
    { tipo: 'Música', n: 41, titulo: 'Todo antes de irme', autor: 'Balta', anio: '2023', nota: 3, texto: [
      "Balta regresa con un estilo menos personal y más movido. Suena un poco más digital y pop. Un sonido que tiene como inspiración la música como el trap y el reguetón. Un camino que veo válido pero disfruto más cuando lo entrelaza con sus raíces y con el candombe.",
      "Las letras realmente pierden la fuerza y se vuelven más genéricas y básicas."
    ] },
    { tipo: 'Música', n: 42, titulo: 'Ayer dijiste mañana', autor: 'Balta', anio: '2026', nota: 4, texto: [
      "Un disco que siento que fue muy influenciado por músicos como Ca7riel y Paco Amoroso. Una sonoridad que mezcla las letras jugadas, la sonoridad local y la influencia de la música como el trap y la electrónica.",
      "En este disco sí puedo visualizar un estilo más interesante con letras mejores y ritmos que varían de lo más movido a lo más personal.",
      "Hay temas como \"KIERO TO!\", \"TODA LA VIDA\" que suenan impresionantes. El primero, muy similar al tema \"Bad Bitch\" de Ca7riel y el segundo, la guitarra me recuerda a \"Díganselo\" del Kuelgue y una vibra a Michael Jackson bastante lejana. Eso no es malo, sino que es parte de esa identidad que se construye con buenas influencias.",
      "Obviamente, temas como \"CON QUIÉN??\" con Jorge Drexler y \"Desde el corazón\" con Rubén Rada son impresionantes."
    ] },
    { tipo: 'Música', n: 43, titulo: 'Moses and the Drones', autor: 'Tom Rowley', anio: '2026', nota: 4, texto: [
      "Parece una continuación (spin off) del último disco de los Arctic Monkeys. Por momentos me confundía con la voz de él y la de Turner. Es extraño, pero me encanta.",
      "Un disco único e interesante, con una sonoridad muy influenciada por la música de los 70s. Una guitarra muy presente que da vida a los temas de manera magistral.",
      "Destaco del disco: \"Tell me what you want\", \"Mor\" y \"Something strange\"; en la que sí tuvo implicación Alex Turner como coproductor."
    ] },
    { tipo: 'Cómics', n: 4, titulo: 'Los Tres Guerreros', autor: 'Colección de novelas gráficas de los héroes más poderosos de Marvel #9', anio: '1987-1988 y 2011', nota: 4, texto: [
      'Estos tres personajes son bastante desconocidos del universo de Marvel para el público general. Tienen una aventura divertida y heroica. No se achican a la hora de mostrar una faceta interesante del mundo de los cómics: la relación de la mitología y Marvel, que evidencia todo el aspecto fantástico de este universo.',
      'Divertida, pero no más. Tampoco es que sea una locura. No es mala, ni mucho menos. Pero sí es un poco secundaria dentro de todo el espectro de héroes de Marvel. Se queda como una historia de un episodio random dentro de un mundo muy grande. Destaco la relación de los personajes y su crecimiento mostrado a través de los flashbacks.',
      'En cuanto a la historia clásica, la siento también divertida, un poco confusa en su narración a través de varios puntos de vista y simple. Pero cumple con entretener.'
    ]},
  ]},

  { mes: 'Marzo 2026', items: [
    { tipo: 'Cine', n: 21, titulo: 'Marty Supreme', anio: '2025', nota: 5, texto: [
      "Tensión constante, excelente fotografía y gran actuación. Tres condimentos que hacen que la película sea casi perfecta. Timothée la rompe y su viaje como personaje es increíble. Ese plano final es espléndido."
    ] },
    { tipo: 'Cine', n: 22, titulo: 'No es otra tonta película americana', anio: '2001', nota: 3, texto: [
      "Me encantan las películas del estilo absurdo, sin embargo esta peca de ser muy básica por momentos y que sus chistes no se alejen de parodiar sin sumarle sustancia o intención crítica. Bastante mediocre. Lo bueno es Chris Evans."
    ] },
    { tipo: 'Cine', n: 23, titulo: 'Hamnet', anio: '2025', nota: 5, texto: [
      "Qué actuación de Jessie Buckley. La rompe y entrega una performance emotiva y desgarradora. Todos están bien, capaz por momentos peca de cursi, pero qué buen retrato ficcional-histórico de la historia de Shakespeare y su mujer Anne."
    ] },
    { tipo: 'Cine', n: 24, titulo: 'La Navidad de Harold y Kumar', anio: '2011', nota: 2, texto: [
      "Si la primera me pareció buenísima, la segunda un meh. Esta es pésima. No la salvo a pesar de tener en algunos momentos buenos chistes. Pero en general es mala, mala. Chistes demasiado infantiles y lo peor de todo que sea “3d”, que horrible cuando las películas se venden solo por una herramienta o técnica utilizada."
    ] },
    { tipo: 'Cine', n: 25, titulo: 'La noche de los muertos vivientes', anio: '1968', nota: 4, texto: [
      "Magnífica película que da origen al estilo de filmes zombies moderno. A pesar de ser una de las primeras parece que este realizada en el apogeo del género. Está todo acá. Destaco la manera de manejar la cámara que es impresionante y los personajes. La única que me chirría toda la película es la protagonista que actúa pésimo. El final lo mejor ya que abre el debate y plantea algo interesante que no se toca en toda la película."
    ] },
    { tipo: 'Cine', n: 26, titulo: 'Dragon Ball Z: El poder invencible', anio: '1993', nota: 4, texto: [
      "De las mejores películas de Dragon Ball Z, en este caso tenemos la presentación del temible Broly. Todos los guerreros z tienen su momento para brillar, Vegeta el personaje con el viaje interno más profundo. Lo único malo es su final que es muy malo y con una resolución digna de considerarse deus ex machina."
    ] },
    { tipo: 'Música', n: 19, titulo: 'Lata con Plata', autor: 'Tussiwarriors', anio: '2026', nota: 3, texto: [
      "Esperaba más de estos muchachos, sin embargo dejan un poco que desear. Su humor irreverente es divertido por momentos, pero me hubiera gustado más trabajo en el concepto del disco en el humor general y un camino de principio a fin. Que no quede en una recopilación de chistes de humor negro de 40 minutos."
    ] },
    { tipo: 'Música', n: 20, titulo: 'State of Euphoria', autor: 'Anthrax', anio: '1988', nota: 4, texto: [
      "Buen álbum de Metal. Nunca había escuchado Anthrax hasta este momento. Destacan esos impresionantes riff de guitarra. A su vez Charlie Benante en la batería la rompe en temas como \"Now It's Dark\". Me gusta mucho el inicio del disco con \"Be All, End All\"."
    ] },
    { tipo: 'Música', n: 21, titulo: 'La luz que sabe robar', autor: 'Jorge Drexler', anio: '1992', nota: 4, texto: [
      "Su primer disco es impresionante el nivel que tiene. Lo íntimo que suena donde se puede denotar su origen lírico perfecto junto con su gran técnica de guitarra. Destaco temas como: “Equipaje”, “Vaivén” y “La aparecida”. cierre con magnífico con “La luna del cabo”"
    ] },
    { tipo: 'Música', n: 22, titulo: 'Radar', autor: 'Jorge Drexler', anio: '1994', nota: 4, texto: [
      "Comienza el disco con “Radar” un temazo que da ritmo y comienza con fuerza. La guitarra en este disco agarra más fuerza que el anterior. Su punteo y rasgueo se siente con más presencia. “Tu voyeur” es un temazo también junto con “Cerca del mar” que denota esa influencia de Brasil en su forma de componer."
    ] },
    { tipo: 'Música', n: 23, titulo: 'Vaivén', autor: 'Jorge Drexler', anio: '1996', nota: 4, texto: [
      "Es el primer disco de Jorge fuera del país pero increíblemente se siente más local que nunca. Comenzar el disco así se siente que nunca hubiera viajado. “Zamba del olvido” hermosa pieza musical como también lo es “Dos colores: Blanco y negro” y “La luna de espejos”. Se siente como una reinvención pequeña de sus primeros discos, más su nuevo trabajo. Un comienzo fresco."
    ] },
    { tipo: 'Música', n: 24, titulo: 'Llueve', autor: 'Jorge Drexler', anio: '1998', nota: 4, texto: [
      "No descubro nada cuando digo que es uno de los más grandes compositores y letristas de nuestro país. Este disco vuelve a demostrar la facilidad con la que logra que sus letras sean tan perfectas. Canciones como “Cara B” y “La huella de tu mirada” muestran su lado más romántico y profundo. “Montevideo” uno de los temas más hermosos hasta ahora, dice tantas verdades que te llena el alma."
    ] },
    { tipo: 'Música', n: 25, titulo: 'Frontera', autor: 'Jorge Drexler', anio: '1999', nota: 5, texto: [
      "Por mucho tiempo este era uno de mis discos favoritos de principio a fin de Drexler. Ese sentimiento de nostalgia, amor y conexión con tu país desde la distancia. “La edad del cielo” es de mis canciones favoritas de él. “Frontera” y “Alto el fuego” se sienten como clásicos uruguayos instantáneos."
    ] },
    { tipo: 'Música', n: 26, titulo: 'Sea', autor: 'Jorge Drexler', anio: '2001', nota: 5, texto: [
      "Si el anterior era bueno, este es impresionantemente mejor. Se supera en todos los aspectos. Su cambio en el sonido a algo más moderno es recibido de una manera magistral. No siento que haya sacrificado nada, su sonido evoluciona y sus letras continúan perfectas.",
      "Todos son temazos, pero quiero destacar “Me haces bien” tiene algo que me lleva a la niñez, a sentirme bien, a ver Uruguay con ojos de nostalgia."
    ] },
    { tipo: 'Música', n: 27, titulo: 'Eco', autor: 'Jorge Drexler', anio: '2004', nota: 5, texto: [
      "Eco es perfecto en todo. Se siente redondo por todas partes. Otra vez Drexler lleva su música a un nuevo paso. Suma sonidos e instrumentos. “Ecos” también es nostálgica y hermosa. “Milonga del moro judio”, “Salvapantallas”, “Fusión”, “Deseo”, “Todo se transforma”, “Guitarra y vos”... Tantos temas hermosamente perfectos. Este es mi disco favorito de su etapa de los 2000."
    ] },
    { tipo: 'Música', n: 28, titulo: '12 segundos de oscuridad', autor: 'Jorge Drexler', anio: '2006', nota: 5, texto: [
      "Otra vez evoluciona. Otra vez demuestra que es el músico uruguayo más grande vivo. No me canso de decir que no sabemos el valor del gran artista que vive y comparte nuestra nacionalidad. Este disco es hermoso. El concepto es interesante y su exploración a través de estos temas destaca. Y el cover que se manda de Radiohead con “High and Dry” es sorpresivo pero lo amo. Hasta acá tiene una tetralogía intocable. Perfecta."
    ] },
    { tipo: 'Música', n: 29, titulo: 'Amar la trama', autor: 'Jorge Drexler', anio: '2010', nota: 4, texto: [
      "“La trama y el desenlace” temazo como también lo son “Mundo abisal” y “Una canción me trajo hasta aquí”. Este disco es para mí un paso atrás, un regreso a su estilo guitarra y voz, vuelve a un sonido más puro de él. No significa que sea malo. Es una locura de disco, pero venir de los anteriores le pesan un poco."
    ] },
    { tipo: 'Música', n: 30, titulo: 'Bailar en la cueva', autor: 'Jorge Drexler', anio: '2014', nota: 4, texto: [
      "Evolución define ahora a Jorge Drexler. Es una palabra que no significa rechazar lo anterior o perder lo que uno lo define sino aprender de lo anterior y probar cosas nuevas. En este caso Drexler experimenta con el baile, con la música que te hace mover el esqueleto. Destaco de este disco los temas: “Bailar en la cueva”, “Bolivia” y “Universos Paralelos”. Otra vez Drexler a otro nivel."
    ] },
    { tipo: 'Música', n: 31, titulo: 'Salvavidas de hielo', autor: 'Jorge Drexler', anio: '2017', nota: 4, texto: [
      "Volvemos a la guitarra como protagonista, sin embargo, Drexler demuestra que con ella se puede trasmitir tanto, sin ni siquiera necesitar tanto firulete ni fuegos artificiales. Solo hacer buena música bien escrita. Por mucho tiempo estaba obsesionado con la canción “La telefonía”, la escuchaba muchas veces seguidas."
    ] },
    { tipo: 'Música', n: 32, titulo: 'Tinta y tiempo', autor: 'Jorge Drexler', anio: '2022', nota: 5, texto: [
      "Una obra maestra. Drexler ganó la batalla contra la hoja en blanco y con eso nos trajo un disco perfecto de principio a fin. No voy a enlistar todos los temas porque todos están buenos. No hay uno que no me guste. Antes de la salida del último disco, este era el que más veces había escuchado constantemente. Una vez tras otra. Su sonido tan perfeccionado donde nada se le escapa. Su trabajo con gente tan grande y con gente tan joven. Una locura a dónde llegó Drexler."
    ] },
    { tipo: 'Música', n: 33, titulo: 'Taracá', autor: 'Jorge Drexler', anio: '2026', nota: 5, texto: [
      "Cuando me enteré de que Drexler iba a volver a las raíces uruguayas me pregunté: ¿cuándo las dejó? En todos sus discos Uruguay está presente, a través de sus mares, letras y sensaciones. Pero ahora trae a la mesa uno de los géneros locales que más me conmueve. El candombe. Hermoso disco. Al igual que Tinta y Tiempo, lo escuché tantas veces que no me sorprende que con el paso del tiempo se convierta en mi disco favorito. Dominio de letra, de música. Vuelvo a repetirlo, Drexler es el mejor músico uruguayo vivo. Tenemos que valorarlo. El valora a Uruguay como su fuente de vida musical. Nosotros debemos devolverle todo el amor que nos da."
    ] },
    { tipo: 'Música', n: 34, titulo: "Harry's House", autor: 'Harry Styles', anio: '2022', nota: 4, texto: [
      "Si el anterior disco era muy pop este es lo siguiente. Pero diferente a lo que opino del otro. Siento que acá Harry usa su maestría musical y compositiva para lograr un disco único dentro del pop. Suena bien, canta bien y tiene unos ritmos muy pegadizos. Temas como “Late night Talking”, “As it was” y “Cinema” me parecen lo mejor del disco."
    ] },
    { tipo: 'Música', n: 35, titulo: 'Free Spirits', autor: 'Ca7riel & Paco Amoroso', anio: '2026', nota: 4, texto: [
      "La primera escucha me dejó con una sensación fría. Pero después de darle otras oportunidades creo que es un gran álbum. Sus temas suenan ingeniosos, interesantes musicalmente. La variedad compositiva de los muchachos es impresionante. El trabajo conceptual y de marketing suma. Pero, centrándome en su música siguen siendo unos genios jóvenes. Su colaboración con Sting, Fred Again son perfectas, pero me quedo con “Himno del mediocre” un temazo con vibras de Miranda y temas de los 60-70s hispanos."
    ] },
    { tipo: 'Música', n: 36, titulo: 'Volcano', autor: 'Jungle', anio: '2023', nota: 4, texto: [
      "Por mucho tiempo había visto los maravillosos e impresionantes videoclips en youtube de este álbum. Cada vez que lo ponía me quedaba embobado con las grandes coreografías. Ahora bien. Su música también es impresionante. Discazo de principio a fin. Un sonido tan propio de Jungle que demuestra su gran habilidad para mezclar el Funk y volverlo actual."
    ] },
    { tipo: 'Música', n: 37, titulo: 'Mer de Noms', autor: 'A Perfect Circle', anio: '2000', nota: 4, texto: [
      "Conocía a su guitarrista Billy Howerdel por el soundtrack de Jak X. Acá tengo más de lo mismo pero con letra. Muy buena banda y buen disco. Un debut impresionante para una banda que suena muy 2000s pero con un estilo metal muy particular."
    ] },
    { tipo: 'Música', n: 38, titulo: 'Juniper', autor: 'Joy Crookes', anio: '2025', nota: 4, texto: [
      "Joy Crookes vuelve con un sonido más R&B y jazz. A falta de la gran Amy, Joy lo hace espectacular. Su voz es única y suena bien cante lo que cante. Pero quiero destacar que en este disco prueba con nuevas aproximaciones de su anterior trabajo. Busca nuevos sonidos, más pop o más personales.",
      "Destaco temas como: “I know you'd kill”, “Somebody to you”, “Forever” y “Carmen”. Tiene un gran futuro Joy como artista."
    ] },
    { tipo: 'Juegos', n: 5, titulo: 'Dragon Ball: Sparking! Zero', anio: '2024', nota: 4, texto: [
      "Se siente nostálgico regresar a este juego después de tantos años. Muchas horas le dediqué de niño a la versión de PS2 jugando con mi primo y mis amigos. El nuevo lo logra viéndose increíble en el proceso. El anime siempre estará en nuestro corazón por su importancia emocional en nuestra juventud. Este juego nos transporta a ese momento, de chocolatadas y jugar toda la tarde con amigos."
    ] },
    { tipo: 'Juegos', n: 6, titulo: 'Street Fighter 6', anio: '2023', nota: 5, texto: [
      "Antes de este Street Fighter los únicos que había disfrutado realmente eran el Third Strike y el 2 como todo el universo. Sin embargo, este juego me hizo amar la franquicia. Me jugué todos hasta probar este y puedo decir que es el paso correcto en la evolución de la saga. Es uno de los mejores juegos de pelea de los últimos años. Táctico, complejo pero a su vez simple. Gran estilo estético y diseño de personajes. Gameplay con cero problemas reales y con mucho contenido para jugar singleplayer. Excelente juego."
    ] },
    { tipo: 'Libros', n: 2, titulo: 'Messi es un perro y otros cuentos', autor: 'Hernán Casciari', anio: '2016', nota: 4, texto: [
      "Qué divertido es leer a Casciari. Sin dudarlo es uno de los únicos autores que realmente me saca una sonrisa genuina cuando lo leo. Por momentos puede emocionar con su relato y engancharte pegado al libro hasta no devorártelo de una sentada. Su humor que varía entre intelectual y picante, entre humillante y jugado. Entre honesto y crudo. Fascinante autor. Donde puedo destacar su relato en torno a la foto con su padre. Enternecedor."
    ] },
    { tipo: 'Cómics', n: 1, titulo: 'Dragon Ball Ultimate #04', autor: 'Akira Toriyama', nota: 4, texto: [
      "El torneo en su máximo esplendor, Muten Roshi es un personaje icónico por lejos. Amo la manera en que Toriyama disfruta de jugar con el humor y después pasar a escenas de acción impresionante donde el combate de artes marciales es lo primordial. La pelea con Goku es mítica."
    ] },
    { tipo: 'Cómics', n: 2, titulo: 'Fullmetal Alchemist #04', autor: 'Hiromu Arakawa', nota: 4, texto: [
      "Conocemos en profundidad el secreto de los hermanos. La trágica historia que los lleva a la aventura en la que están. Vemos la historia de su maestra y la importancia de su determinación en su camino. Impresionante narración y dibujo. Es un manga único."
    ] },
    { tipo: 'Cómics', n: 3, titulo: 'El Eternauta', anio: '1957-1959', nota: 4, texto: [
      "Después de ver la serie, fui recomendado a leer este cómic gracias a un amigo Argentino. Tremenda historia sci-fi muy cinematográfica en papel. Llena de momentazos y muy bien escrita y dibujada. Capaz en el medio se siente sin rumbo pero el último acto es lo que lo encamina. Me faltó un clímax más potente. Entiendo la intención del autor, jugar con lo meta de la historia, pero se siente un guionazo"
    ] },
  ]},

  { mes: 'Febrero 2026', items: [
    { tipo: 'Cine', n: 13, titulo: 'Moulin Rouge', anio: '2001', nota: 5, texto: [
      "Esta película logra transportarte de una manera muy convincente a un mundo mágico lleno de amor y grandes coreografías. Me encantó su estilo, sus actuaciones y su final."
    ] },
    { tipo: 'Cine', n: 14, titulo: 'El señor de los anillos: El retorno del rey', anio: '2003', nota: 5, texto: [
      "No hay dudas, tremenda película, repleta de momentos icónicos y constante emoción que no acaba. Sin embargo es la que menos me gusta de las tres. Emociona todo el camino de Frodo y ver su desenlace por todo lo alto."
    ] },
    { tipo: 'Cine', n: 15, titulo: 'La hermanastra fea', anio: '2025', nota: 4, texto: [
      "Gran retrato de este personaje que sufre las consecuencias de su contexto y que sufre con su búsqueda de ser elegida, de ser visible y tener la oportunidad de cumplir su sueño, aunque esto le cueste su salud."
    ] },
    { tipo: 'Cine', n: 16, titulo: 'Frankenstein', anio: '2025', nota: 5, texto: [
      "En este caso la narración, el tratamiento visual y las actuaciones posiciona a esta película como una de las mejores del año. Destaco el tratamiento de la imagen que tiene planos que parecen pinturas. Hermosos que muestran el poder del encuadre."
    ] },
    { tipo: 'Cine', n: 17, titulo: 'Los pecadores', anio: '2025', nota: 5, texto: [
      "Destaco su dirección de fotografía, diseño de producción, dirección y obviamente el apartado sonoro. Donde tiene escenas icónicas que cuentan muchísimo con poco. ¡Me encantó!"
    ] },
    { tipo: 'Cine', n: 18, titulo: 'Harold & Kumar Go to White Castle', anio: '2004', nota: 4, texto: [
      "Sé que es muy estúpida. Pero amo estas películas tontas que te sacan una risa con lo más absurdo que sucede. Soy hijo del cine de humor de Leslie Nielsen y las Scary Movie. Mi humor ya está roto desde antes. En resumen me cagué de risa."
    ] },
    { tipo: 'Cine', n: 19, titulo: 'Harold & Kumar Escape from Guantanamo Bay', anio: '2008', nota: 4, texto: [
      "Bueno, capaz esta es peor que la anterior. Me encanta el humor que maneja y más sabiendo que tocar temas como el terrorismo, xenofobia y racismo es un poco complicado, pero creo que lo hace bien."
    ] },
    { tipo: 'Cine', n: 20, titulo: 'Una batalla tras otra', anio: '2025', nota: 5, texto: [
      "Se puede resumir como un padrazo que hará hasta lo imposible para traer con vida a su hija, de las manos de Sean Penn que la rompe y te deja asustado por lo extraño que es. Tremenda película."
    ] },
    { tipo: 'Series', n: 1, titulo: 'Justice League', anio: '2001-2004', nota: 5, texto: [
      "Una de las mejores series animadas jamás hechas. Tramas complejas, personajes sólidos y gran animación. Su ritmo pausado permite mejores desarrollos, aunque dividir las historias en dos partes a veces le juega en contra."
    ] },
    { tipo: 'Series', n: 2, titulo: 'Justice League Unlimited', anio: '2004-2006', nota: 5, texto: [
      "Más personajes y guiones mejor condensados que su predecesora. Pierde algo de desarrollo individual, pero gana en acción y trama continua. Su segunda temporada es de lo mejor en animación, capaz de competir con muchas series live action."
    ] },
    { tipo: 'Música', n: 6, titulo: 'Queens of the Stone Age', autor: 'Queens of the Stone Age', anio: '1998', nota: 4, texto: [
      "Gran debut. Desde el arranque te pega con energía y actitud. Ya se nota la identidad de la banda y ese sonido denso que los iba a definir. Me encantó."
    ] },
    { tipo: 'Música', n: 7, titulo: 'Rated R', autor: 'Queens of the Stone Age', anio: '2000', nota: 4, texto: [
      "Subidón de calidad tremendo. Más sólido, más variado y con temazos como The Lost Art Of Keeping A Secret y Auto Pilot. Acá empiezan a jugar en otra liga."
    ] },
    { tipo: 'Música', n: 8, titulo: 'Songs for the Deaf', autor: 'Queens of the Stone Age', anio: '2002', nota: 5, texto: [
      "Mi favorito y el que más escuché. El concepto de viaje por EE.UU. funciona perfecto y el disco no baja nunca. Redondo de principio a fin. Obra maestra."
    ] },
    { tipo: 'Música', n: 9, titulo: 'Lullabies to Paralyze', autor: 'Queens of the Stone Age', anio: '2005', nota: 4, texto: [
      "Más oscuro, más pesado, pero sin perder esencia. Gran nivel sonoro en general. Little Sister se me pegó en la cabeza y es imposible sacármela."
    ] },
    { tipo: 'Música', n: 10, titulo: 'Era Vulgaris', autor: 'Queens of the Stone Age', anio: '2007', nota: 4, texto: [
      "El que menos me gusta. No es malo, pero siento que no tiene tantos temas que realmente se diferencien o destaquen como en los otros discos."
    ] },
    { tipo: 'Música', n: 11, titulo: '...Like Clockwork', autor: 'Queens of the Stone Age', anio: '2013', nota: 4, texto: [
      "Su etapa más oscura y madura. Muy sólido y emocional. Tengo debilidad por If I Had a Tail. Disco fino, trabajado y con mucha personalidad."
    ] },
    { tipo: 'Música', n: 12, titulo: 'Villains', autor: 'Queens of the Stone Age', anio: '2017', nota: 4, texto: [
      "Me gusta el cambio sonoro, pero es de los que menos me convence junto a Era Vulgaris. Destaco Head Like A Haunted House. Tiene cosas buenas, pero no me termina de cerrar."
    ] },
    { tipo: 'Música', n: 13, titulo: 'In Times New Roman...', autor: 'Queens of the Stone Age', anio: '2023', nota: 5, texto: [
      "Discazo. Regreso por todo lo alto, tono dark y temas distintos a lo anterior pero con ADN QOTSA intacto. Volvieron fuertes."
    ] },
    { tipo: 'Música', n: 14, titulo: 'Harry Styles', autor: 'Harry Styles', anio: '2017', nota: 4, texto: [
      "No pensé que me iba a gustar tanto. Íntimo, honesto y con identidad propia. Sign of the Times es un temazo icónico. Me sorprendió para bien."
    ] },
    { tipo: 'Música', n: 15, titulo: 'Fine Line', autor: 'Harry Styles', anio: '2019', nota: 4, texto: [
      "Más pop que el anterior, pero dentro del género destaca en calidad. No se queda solo en lo pegadizo: hay muy buenas canciones que elevan el conjunto."
    ] },
    { tipo: 'Música', n: 16, titulo: 'Peace, Love, Death Metal', autor: 'Eagles of Death Metal', anio: '2004', nota: 4, texto: [
      "Interesante propuesta paralela al mundo de Josh Homme, pero bastante repetitiva. Algunas me gustaron más que otras, aunque ninguna me quedó realmente grabada."
    ] },
    { tipo: 'Música', n: 17, titulo: 'Death by Sexy', autor: 'Eagles of Death Metal', anio: '2006', nota: 3, texto: [
      "Sentí más de lo mismo que el anterior. La repetitividad le juega en contra y termina pasando sin dejar demasiada marca."
    ] },
    { tipo: 'Música', n: 18, titulo: 'Términos y Condiciones', autor: 'Usted Señálemelo', anio: '2026', nota: 4, texto: [
      "Gran renovación de la banda, con más electrónica y riesgo. Los singles previos son lo mejor. En letras lo sentí básico y alguna canción demasiado pop y poco ingeniosa."
    ] },
    { tipo: 'Juegos', n: 4, titulo: 'Injustice 2', anio: '2017', nota: 4, texto: [
      "Perfecciona el gameplay del anterior y sigue siendo muy divertido, aunque algunos zoners están rotos. La historia cumple, pero es lo más flojo. Destacan el roster y la personalización. En los DLC hay joyas como las Tortugas Ninja y Hellboy."
    ] },
    { tipo: 'Libros', n: 1, titulo: 'El Señor de los Anillos: Las dos torres', autor: 'J. R. R. Tolkien', anio: '1954', nota: 5, texto: [
      "La narración de Tolkien alcanza un nivel impresionante.",
      "Si el primero era más introductorio y denso, acá el mundo ya respira solo. La comunidad dividida avanza hacia un final que deja todo preparado para el enfrentamiento épico."
    ] },
  ]},

  { mes: 'Enero 2026', items: [
    { tipo: 'Cine', n: 1, titulo: 'El cartero siempre llama dos veces', anio: '1981', nota: 3, texto: [
      "No es mala, tampoco es tan buena; el primer tercio me gustó por su tono de suspense. Sin embargo, su final deja muchísimo que desear, siendo muy aburrido el tono que alcanza a la mitad de la película."
    ] },
    { tipo: 'Cine', n: 2, titulo: 'The Naked Gun', anio: '2025', nota: 4, texto: [
      "Gran retorno del humor sin sentido clásico de The Naked Gun; sin embargo, se desinfla hacia el final. Liam Neeson la rompe, pero obviamente no alcanza para igualar al gran Leslie."
    ] },
    { tipo: 'Cine', n: 3, titulo: 'Los huéspedes', anio: '2015', nota: 2, texto: [
      "Con un plot Twist muy obvio y una trama muy estúpida, la película se queda en un meh y no muestra las virtudes del director, que está en sus años oscuros."
    ] },
    { tipo: 'Cine', n: 4, titulo: '28 semanas después', anio: '2007', nota: 3, texto: [
      "No es mala, pero tampoco destaca. Se siente como una secuela más del montón que no busca innovar con nada nuevo."
    ] },
    { tipo: 'Cine', n: 5, titulo: 'Decision to Leave', anio: '2022', nota: 5, texto: [
      "Excelentes actuaciones, gran guion y edición. Pero lo que más puedo destacar de toda esta película es su apartado visual, hace tiempo no veía una película que comunicara tanto con tan poco. \"Show me, don't tell\" en estado puro."
    ] },
    { tipo: 'Cine', n: 6, titulo: 'The Running Man', anio: '2025', nota: 3, texto: [
      "No es mala, tiene muchísimas cosas buenas. La acción es impresionante. Sin embargo, si no supiera que la hizo Edgar Wright no pensaría que estaba para más. Siento que se queda corta para él. Termina siendo una película genérica de otro director."
    ] },
    { tipo: 'Cine', n: 7, titulo: 'La invención de Hugo', anio: '2011', nota: 3, texto: [
      "Es increíble que el director de Goodfellas acá logra realizarle un homenaje a una de las figuras más importantes de la industria del cine. Todo aderezado de una película mágica y hermosa."
    ] },
    { tipo: 'Cine', n: 8, titulo: 'The Jester', anio: '2023', nota: 1, texto: [
      "Valoro el intento igual, no es una superproducción de Hollywood, solo un grupo de cineastas que con poco querían hacer algo que cuanto mínimo tenga la profundidad básica necesaria."
    ] },
    { tipo: 'Cine', n: 9, titulo: 'Las colinas tienen ojos', anio: '1977', nota: 4, texto: [
      "Está bien, tampoco es la gran cosa. Siento que el desarrollo de todo lo que tiene que ver con el mundo aislado podría trabajarse mejor. Pero no es una mala película, cumple con producir suspense."
    ] },
    { tipo: 'Cine', n: 10, titulo: 'Cinema Paradiso', anio: '1988', nota: 5, texto: [
      "Hermosa película con la que conecto de una manera impresionante. Es que lo es, es impresionante, es linda y emocional. La música de Ennio Morricone me pone la piel de gallina, de sus mejores trabajos."
    ] },
    { tipo: 'Cine', n: 11, titulo: '8½', anio: '1963', nota: 5, texto: [
      "Me gustó, tal vez no tengo claro todo lo que sucede. Pero disfruto esa suerte de cuento entreverado que nos cuenta las peripecias de este director estancado. Onírico y muy personal, me gusta."
    ] },
    { tipo: 'Cine', n: 12, titulo: 'Solo Dios perdona', anio: '2013', nota: 5, texto: [
      "Bueno... silenciosa, confusa y muy bien grabada. Eso puede definir la película a la perfección. Disfruté de verla, pero no tengo claro por qué, pero sigo pensando que tal vez la estética se come lo narrativo."
    ] },
    { tipo: 'Música', n: 1, titulo: '¿Dónde es el after?', autor: 'Rawayana', anio: '2026', nota: 4, texto: [
      "Sorpresa total porque parecía imposible superar el disco anterior. Aun así lo logra en lo bailable. Hay grandes temazos con letras picantes. Eso sí, el concepto se diluye y el disco se pierde un poco hacia el final."
    ] },
    { tipo: 'Música', n: 2, titulo: 'Homework', autor: 'Daft Punk', anio: '1997', nota: 5, texto: [
      "Electrónica para vivirla en una fiesta de electrónica a todo lo que da. Repetición usada con maestría y sonidos que parecen inventados. No busca complacer: te hipnotiza. Es una obra maestra sin discusión."
    ] },
    { tipo: 'Música', n: 3, titulo: 'The New Abnormal', autor: 'The Strokes', anio: '2020', nota: 5, texto: [
      "Para mí, el mejor disco de los Strokes. Todos los temas tienen algo memorable: himnos, riffs, melodías y una producción impecable. Madurez sin perder alma."
    ] },
    { tipo: 'Música', n: 4, titulo: 'Suck It and See', autor: 'Arctic Monkeys', anio: '2011', nota: 5, texto: [
      "Cada escucha me genera una nostalgia muy particular. Melodías románticas, letras escritas de una manera impresionante. Para mí, contrastándolo con los demás de la carrera, es el “menos bueno” de los Arctic."
    ] },
    { tipo: 'Música', n: 5, titulo: "Whatever People Say I Am, That's What I'm Not", autor: 'Arctic Monkeys', anio: '2006', nota: 5, texto: [
      "10 años después sigue siendo una locura la energía que maneja. Tiene de los mejores finales de disco que escuché. Obra maestra que demuestra el espíritu joven y rebelde de estos muchachos de Sheffield."
    ] },
    { tipo: 'Juegos', n: 1, titulo: 'Yakuza', anio: '2005', nota: 5, texto: [
      "Al iniciarlo esperé decepcionarme. Pero la verdad lo disfruté al completo. La trama está muy bien construida y el gameplay es muy bueno. Tal vez, las interacciones espontáneas en las calles son muy molestas. Y las misiones secundarias son poco llamativas."
    ] },
    { tipo: 'Juegos', n: 2, titulo: 'Red Dead Revolver', anio: '2004', nota: 4, texto: [
      "Es increíble pensar que este juego es el predecesor de la mejor saga de Rockstar. Gameplay tosco con bugs que arruinan ciertas partes, mi caso el boss final que desapareció del mapa, apareciendo cinemática final. Red icónico, lo demás olvidable."
    ] },
    { tipo: 'Juegos', n: 3, titulo: 'Injustice: Gods Among Us', anio: '2013', nota: 5, texto: [
      "Ya pasaron años de este juego, la que nos mostró a Superman como un héroe manipulable. Me encantó en su momento y me sigue gustando. Gran juego que realmente me divierte. Muy completo con las misiones de Star Labs. ¡Aguante Green Arrow!"
    ] },
  ]},
];
