const phrases = {
    actions: {
        'alexCity': `
<b><u>Во все пакеты сьемки аренда НиноСтудио идет в подарок, все другие студии и локации оплачиваются отдельно</u></b>

📍 <b>Съемка “Экспресс”</b>
<i>(Сьемка проводится только в НиноСтудио)</i>

<code>✔️длительность сьемки - 30 минут 🕧;
✔️предварительная консультация по выбору образа; 
✔️до 50 фото в базовой обработке; 
✔️5 фото в авторской ретуши; 
✔️фотографии отдаются клиенту в электронном виде через файлообменник; 
✔️готовность фото — 21-28 дней.</code>

<u>💵 Стоимость 850 грн</u>

〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️

📍 <b>Съемка “Стандарт”</b>

<code>✔️длительность фотосессии - 1 час; 
✔️предварительная консультация по выбору студии (локации) и образов; 
✔️до 120 фото в базовой обработке; 
✔️10 фото в авторской ретуши; 
✔️фотографии отдаются клиенту в электронном виде через файлообменник; 
✔️готовность фото — 28 дней.</code>

💵 <u>Стоимость 1500 грн</u>

〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️

📍 <b>Съемка “Оптимальная”</b>

<code>✔️длительность фотосессии 1.5 часа; 
✔️предварительная консультация по выбору студии (локации) и образов; 
✔️до 200 фото в базовой обработке; 
✔️20 фото в авторской ретуши; 
✔️фотографии отдаются клиенту в электронном виде через файлообменник; 
✔️готовность фото — 28 дней.</code>

💵 <u>Стоимость 2200 грн</u>

〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️

📍 <b>Съемка “Без ретуши”</b>

<code>✔️длительность фотосессии - 1 час; 
✔️предварительная консультация по выбору студии (локации) и образов; 
✔️все лучшие фото с фотосъёмки; 
✔️фотографии отдаются клиенту в электронном виде через файлообменник; 
✔️готовность фото — 3-5 дней.</code>

💵 <u>Стоимость 1100 грн</u>

〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️

📍 <b>Фотоконтент для Вашего Бизнеса</b>

<code>✔️Предварительная консультация (онлайн или оффлайн); 
✔️полный индивидуальный подход к клиенту; 
✔️персонально созданный стиль обработки для Ваших фото; 
✔️лояльная система скидок для постоянных клиентов.</code>

💵 <u>Стоимость от 3000 грн/месяц</u>

〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️
 
📍 <b>Репортажная сьемка</b>

<code>✔️Предварительная консультация;
✔️полное фотосопровождение вашего мероприятия;
✔️все фото в цветокоррекции;
✔️фотографии отдаются клиенту в электронном виде через файлообменник;
✔️готовность фото - 14 дней.</code>

💵 <u>Стоимость 1300 грн/час</u>

〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️

📍 <b>Дополнительные услуги</b>

<code>✔️Срочная обработка фото 3-5 дня после дня съемки — 50% от стоимости выбранного Вами вида съемки; 
✔️дополнительная ретушь — 80 грн/фото; 
✔️стоимость сьемок за пределами города или страны просчитываются отдельно.</code>`,
        'greeting': `
Привет, Меня зовут Нино, я фотограф и преподаватель фотоискусства и ретуши.
За 5 лет работы уже более 777 довольных клиентов, работала в разных странах Европы и Азии.
Постоянно обучаюсь и развиваюсь в сфере фотографии и личного роста.
Открыла свою студию НиноСтудио и школу фотографии где обучаю фотографии и ретуши.
Буду рада видеть тебя у себя в кадре или на индивидуальном курсе.

И в этом меню я попрошу выбрать тебя интересующую информацию:
    `,
        'otherCity': `
<b><u>Во все пакеты сьемки аренда НиноСтудио идет в подарок, все другие студии и локации оплачиваются отдельно</u></b>

📍 <b>Съемка “Стандарт”</b>

<code>✔️длительность фотосессии - 1 час; 
✔️предварительная консультация по выбору студии (локации) и образов; 
✔️до 120 фото в базовой обработке; 
✔️10 фото в авторской ретуши; 
✔️фотографии отдаются клиенту в электронном виде через файлообменник; 
✔️готовность фото — 28 дней.</code>

💵 <u>Стоимость 1500 грн</u>

〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️

📍 <b>Съемка “Оптимальная”</b>

<code>✔️длительность фотосессии 1.5 часа; 
✔️предварительная консультация по выбору студии (локации) и образов; 
✔️до 200 фото в базовой обработке; 
✔️20 фото в авторской ретуши; 
✔️фотографии отдаются клиенту в электронном виде через файлообменник; 
✔️готовность фото — 28 дней.</code>

💵 <u>Стоимость 2200 грн</u>

〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️

📍 <b>Съемка “Без ретуши”</b>

<code>✔️длительность фотосессии - 1 час; 
✔️предварительная консультация по выбору студии (локации) и образов; 
✔️все лучшие фото с фотосъёмки; 
✔️фотографии отдаются клиенту в электронном виде через файлообменник; 
✔️готовность фото — 3-5 дней.</code>

💵 <u>Стоимость 1100 грн</u>

〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️

📍 <b>Фотоконтент для Вашего Бизнеса</b>

<code>✔️Предварительная консультация (онлайн или оффлайн); 
✔️полный индивидуальный подход к клиенту; 
✔️персонально созданный стиль обработки для Ваших фото; 
✔️лояльная система скидок для постоянных клиентов.</code>

💵 <u>Стоимость от 3000 грн/месяц</u>

〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️
 
📍 <b>Репортажная сьемка</b>

<code>✔️Предварительная консультация;
✔️полное фотосопровождение вашего мероприятия;
✔️все фото в цветокоррекции;
✔️фотографии отдаются клиенту в электронном виде через файлообменник;
✔️готовность фото - 14 дней.</code>

💵 <u>Стоимость 1300 грн/час</u>

〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️

📍 <b>Дополнительные услуги</b>

<code>✔️Срочная обработка фото 3-5 дня после дня съемки — 50% от стоимости выбранного Вами вида съемки; 
✔️дополнительная ретушь — 80 грн/фото; 
✔️стоимость сьемок за пределами города или страны просчитываются отдельно.</code>
    `,
        'retouch': `
<b><u>Курс по Ретуши</u></b>

<code>❗️ Длительность курса 8 занятий, 1,5 часа каждый. 
❗️ Занятие проводятся индивидуально 3 раза в неделю.
❗️ После завершения курса +1 месяц обратной связи и выполнение домашнего задания для закрепления знаний.
❗️ База фотографий для ретуши предоставляется. 
❗️ Обучение может проходить как онлайн так и оффлайн.</code>


<b>Программа курса:</b>

🔔 <u>1 урок:</u>

<code>✔️Знакомство с графическим редактором Lightroom. 
✔️Настройки программы
✔️Редактирование и работа с изображением. 
✔️Создание и сохрание индивидуального пресета.</code>

<i>+ домашнее задание.</i>


🔔 <u>2 урок:</u>

<code>✔️Знакомство с Photoshop.
✔️Разбор и настройка рабочей панели инструментов.
✔️Изучение каждого инструмента по отдельности.</code>

<i>+ домашнее задание.</i>


🔔 <u>3 урок:</u>

<code>✔️Кадрирование изображения.
✔️Пластика.
✔️Чистка изображения различными методами.</code>

<i>+ домашнее задание.</i>


🔔 <u>4 урок:</u>

<code>✔️Работа со слоями.
✔️Настройка и работа с кистями. 
✔️Маски.</code>

<i>+ домашнее задание.</i>


🔔 <u>5 урок:</u>

<code>✔️Обработка фотографии методом “Частотного разложения”.</code>

<i>+ домашнее задание.</i>


🔔 <u>6 урок:</u>

<code>✔️Техника “Dodge and burn”</code>

<i>+ домашнее задание.</i>


🔔 <u>7 урок:</u>

<code>✔️Полная ретушь портрета</code>

<i>+ домашнее задание.</i>


🔔 <u>8 урок:</u>

<code>✔️Экзамененационная ретушь фотографии.
✔️Вручение сертификата.</code>


<i>*Без выполнения домашнего задания курс будет приостановлен.</i>


💵 <u>Стоимость обучения 6400 грн</u>

<code>💲 После окончания курса у Вас уже будет минимальное портфолио и Вы сможете сразу же брать заказы на фотосьемки.
🎉 В подарок Вы получаете 1 час аренды фотостудии НиноСтудио а так же фиксированную скидку -50 грн на каждую аренду.</code>
    `,
        'photography': `
<b><u>Базовый курс фотографии</u></b>

<code>❗ Длительность курса -  9 занятий по 2 часа каждый.
❗ Занятия проводятся индивидуально 3 раза в неделю.
❗ После завершения курса +1 месяц обратной связи и проверка домашнего задания для закрепления знаний.
❗ Техника на время обучения предоставляется. Так же можно работать на своей технике.
❗ Обучение может проходить как онлайн так и оффлайн.</code>


<b>Программа курса:</b>

🔔 <u>1 урок:</u>

<code>✔️Фотограф, как востребованная профессия.
✔️Знакомство с фототехникой.
✔️Экспозиция кадра.
✔️Композиция кадра.</code>

<i>+ домашнее задание.</i>


🔔 <u>2 урок:</u>

<code>✔️Практическая работа с настройками фотоаппарата.
✔️Фотосъемка при естественном свете.
✔️Работа с моделью.</code>

<i>+ домашнее задание.</i>


🔔 <u>3 урок:</u>

<code>✔️Знакомство с графическим редактором Lightroom. 
✔️Настройки программы
✔️Редактирование и работа с изображением. 
✔️Создание и сохрание индивидуального пресета.</code>

<i>+ домашнее задание.</i>


🔔 <u>4 урок:</u>

<code>✔️Студийная сьемка. Работа с постоянным и импульсным светом.
✔️Работа с моделью.
✔️Базовые схемы постановки света.</code>


🔔 <u>5 урок:</u>

<code>✔️Знакомство с Photoshop.
✔️Разбор и настройка рабочей панели инструментов.
✔️Изучение каждого инструмента по отдельности.
✔️Кадрирование изображения.
✔️Пластика.
✔️Чистка изображения различными методами.</code>

<i>+ домашнее задание.</i>


🔔 <u>6 урок:</u>

<code>✔️Работа со слоями.
✔️Настройка и работа с кистями. 
✔️Маски.</code>

<i>+ домашнее задание.</i>


🔔 <u>7 урок:</u>

<code>✔️Обработка фотографии методом “Частотного разложения”.
✔️Техника “Dodge and burn”.</code>

<i>+ домашнее задание.</i>


🔔 <u>8 урок:</u>

<code>✔️Полная ретушь портрета. Закрепление знаний ретуши.</code>

<i>+ домашнее задание.</i>


🔔 <u>9 урок:</u>

<code>✔️Экзамененационная сьемка и ретушь фотографии.
✔️Вручение сертификата.</code>


<i>*Без выполнения домашнего задания курс будет приостановлен.</i>


💵 <u>Стоимость курса: 8400 грн</u>

<code>💲 После окончания курса у Вас уже будет минимальное портфолио и Вы сможете сразу же брать заказы на фотосьемки.
🎉 В подарок Вы получаете 1 час аренды фотостудии НиноСтудио а так же фиксированную скидку -50 грн на каждую аренду.</code>
        `
    },
    hears: {
        '⚙️ Подготовка к фотосессии': `
После того, как ты выбрала фотографа, определилась с видом съёмки и длительностью... пора приступать к подготовке образа. Это очень Важно! Пройдусь по многим пунктам. Читай и сохраняй...
⠀
<b>👗 Одежда.</b>

Не одевайте «все лучшее сразу», образ должен быть гармоничным. Зачастую, классика выглядит намного лучше самого «стильного» образа. Не перегружай себя модой.
Ни в коем случае не должно быть на тебе  одежды, которая мала (трусики которые врезаются в бёдра, платье которое трещит по швам). Это испортит фото и никакой фотошоп не поможет.

Никакой спортивной одежды на фото. Даже фотографировать не буду!😫
Аксессуары могут как дополнить, так и испортить образ. Ужасно смотрятся золотые кольца на каждом пальце, 3 цепочки на шее и парочку браслетов. 😫 Поверьте, это смотрится совсем не «дорого». Массивная бижутерия или аккуратный комплект украшений, зачастую смотрится дороже, чем все твое золото(конечно, все зависит от образа).
Головные уборы мне очень нравятся - их можно всячески обыграть.Стильные и уместные головные уборы.
⠀
Apple Watch, фитнес-браслеты, браслеты Pandora - только не на фото. Раньше не особо придавала значение,сейчас считаю-это лишнее.👌🏻
⠀
Чистая обувь, одежда наглаженная - обязательно❗️❗️❗️ Если ты думаешь,что фотошоп исправит все изъяны - ты заблуждаешься.

Советоваться с фотографом полезно. Ты можешь сбрасывать фото  и прислушиваться к рекомендациям. Я думаю каждый фотограф заинтересован в правильно подобранном образе. 👌🏻А мне лично, если будет что-то мешать в кадре - Я тебя раздену...😅

Ну и конечно, как вариант, можно воспользоваться услугами стилиста. Профессионал подберёт тебе самый удачный образ: под твой тип фигуры,типаж и пожелания.


<b>🌈 Цветовая гамма.</b>

Не больше 3-з цветов в образе. Может быть один яркий как акцент и два нейтральных. Но никак не 3 цвета «вырвиглаз». Я всем всегда рекомендую: белый, бежевый, чёрный. Джинс тоже хорошо смотрится в кадре.


<b>💅 Макияж, волосы, ногти</b>😉
⠀
И так, с одеждой мы определились, что же делать со всем остальным?!
⠀
💁🏻‍♀️ Начну пожалуй с лица:
Не делайте чистку лица у косметолога(минимум за 10 дней до съёмки)  и не давите прыщики перед съёмкой. Мне куда проще убрать маленькую точку, чем расчесанный на пол лица прыщ. И если Вы его замазали тональным кремом-это не значит, что его не видно. Камера, к сожалению, выдаст все изъяны и моя работа их убрать, но мне будет куда проще это сделать без Вашей «помощи» домашнего удаления.🙏🏻Да, я пишу не самый приятный текст, но честно и по факту.
⠀
🧏‍♀️ Макияж:
Это важно. Макияж должен быть выразительным и аккуратным, но он должен быть. Не умеете Вы, обратитесь к профессионалу. Не знаете где найти профи, обратитесь ко мне и я Вам порекомендую самых-самых. Но, если Вы думаете, что я Вам его «нафотошоплю» - неа😝... я фотограф-не визажист, не парикмахер, не утюг.😅 Ах, да! Макияж должен быть подходящий под образ и тип съёмки.Если у Вас легкий летящий образ - не стоит делать тяжелый Смоки🙏🏻(просто потому, что у визажиста на страничке красивая фоточка с таким макияжем).
⠀
💇‍♀️ Волосы:
Никаких! Повторяю! Никаких замудренных причёсок с тонной лака и шпильками в голове с цветочками.🙏🏻 Чистые ровные волосы, красивые объемные волны, легкие немного небрежные прически-вот то, что нам нужно. Играть с волосами на фото-это красиво.Конечно, если тип съёмки подразумевает что-то креативное-это имеет место быть.Играть с волосами один из лучших видов позирования, красота получается.А если Вы берёте в руки неподвижные волосы залитые лаком или ещё хуже - лаком в блесточках. Брррр...Я отведу Вас мыть голову, мокрый эффект смотрится куда эффектнее.😅
⠀
💅 Ногти:
Отросшее покрытие смотрится не очень.Перед съёмкой, желательно, сделать маникюр.И самый выигрышный вариант - это нюд...или же тот оттенок который подойдёт к Вашему образу.Я часто показываю позы где руки находятся у лица.
        `,
        '📷 Нино Студио': `
<u><b>Аренда Нино Студио - 350 грн/1 час (более 2х часов 300 грн/час).</b>
Если в студии более 6 человек + 100 грн.</u>


<b>В нашей студии есть все необходимое для Вашего творчества:</b>
<code>✔️ Студия разделена на различные интерьерные фотозоны.
✔️ 5 фотофонов (белый, черный, бежевый, красный, синий)
✔️ 3 источника импульсного света с софтами 120*80, 120*35, 90*60, шторки, конус, различные цветовые фильтры).
✔️ 2 источника постоянного света с софтами 90*60
✔️ Дым Машина 100 грн/час
✔️ Бесплатный гардероб для моделей.
✔️ Различная атрибутика и аксессуары для съемок.</code>


<b>Услуги нашей фотостудии:</b>
<code>✔️ Аренда студии.
✔️ Все виды фотосессий.
✔️ Фотошкола.
✔️ Предметная сьемка.
✔️ Создание контента для Вашего бизнеса.
✔️ Печать на холстах Ваших фото.</code>


<b>Правила бронирования:</b>
<code>✔️ Что бы зафиксировать свое время для бронирования фотостудии напишите нам или позвоните по номеру +380979979975, или в Директ нашего инстаграмм @nino_studio_
✔️ Для бронирования Вашего времени вносится предоплата в размере 150 грн, остальная сумма оплачивается в день сьемки.</code>


<b>Правила отмены бронирования:</b>
<code>✔️ Предупреждение за более 3х суток- переносим бронь или возвращаем предоплату.
✔️ Предупреждение за 2е суток - переносим бронь или возвращаем 50% предоплаты.
✔️ Предупреждение за 1 или менее суток - бронь не переносится, предоплата не возвращается.</code>
<i>*переносить сьемку можно только 1 раз.</i>


<b>Правила использования бумажных фонов:</b>
<code>✔️ Фоны выкатывает и сматывает только администратор.
✔️ На фонах находится босиком или в сменной, чистой обуви не оставляющей следов. На подошву можно наклеить скотч (попросите у администратора).
✔️ В случае повреждения фонов, если на поверхности остались следы, черные полосы или разрывы - предусматривается штраф - 300 грн/1 м</code>


<b>Расчет времени аренды:</b>
<code>✔️ Началом аренды студии считается заявленное время, которое Вы изначально забронировали.
✔️ Опаздывая Вы уменьшаете время сьемки.
✔️ Окончанием аренды студии считается время когда арендатор покидает зал.
✔️ Если после зарезервированного времени студия свободна, Вы можете продлить сьемочное время. Оплатив дополнительную аренду по факту проведенного в студии времени, шаг продления -30 минут.
✔️ При досрочном завершении сьемки, забронированное изначально время оплачивается полностью.</code>


<i>За порчу и поломку студийного оборудования, декора, аксессуаров арендатор несет полную материальную ответственность и возмещает убытки в размере 100% от рыночной стоимости, по согласованию с администрацией студии.
Арендуя зал Вы несете ответственность за его чистоту и сохранность реквизита, мебели и оборудования во время сьемки.
Курение, распитие спиртных напитков, употреблять пищу - только если это является частью сценического образа моделей (по согласованию с администрацией).
Благодарим за внимание и бережное отношение к нашей студии.</i>
        `
    }
}

module.exports.phrases = phrases;