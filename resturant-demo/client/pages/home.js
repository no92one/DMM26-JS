export default function home() {
    const startText = [
        "På Restaurang Java's möts italienska smaker och en varm, avslappnad atmosfär. Vår historia började med en enkel idé – att skapa en plats där god mat får människor att samlas, umgås och njuta av stunden.",
        "I vårt kök hämtar vi inspiration från det italienska köket, där enkla råvaror och klassiska smaker står i centrum. Här serverar vi allt från krispig bruschetta och nygräddade pizzor till krämig carbonara och söta italienska desserter.",
        "Oavsett om du kommer för en snabb lunch, en middag med familjen eller bara en kopp kaffe och något sött vill vi att Restaurang Java's ska kännas som en plats du gärna återvänder till.",
        "Slå dig ner, upptäck vår meny och låt oss bjuda på en liten smak av Italien."
    ];
    const menuList = [
        {
            "title": "Förrätter",
            "descriptions": "Börja måltiden med något gott. Här hittar du våra mindre rätter och klassiska italienska favoriter.",
            "image": "./images/appetizer.jpg"
        },
        {
            "title": "Huvudrätter",
            "descriptions": "Upptäck våra huvudrätter med allt från klassiska pizzor och pasta till andra mättande favoriter.",
            "image": "./images/main-course.jpg"
        },
        {
            "title": "Efterrätter",
            "descriptions": "Avsluta måltiden med något sött. Välj bland våra klassiska italienska desserter och andra godsaker.",
            "image": "./images/dessert.jpg"
        },
        {
            "title": "Dricka",
            "descriptions": "Något gott att dricka till maten? Här hittar du både kalla och varma drycker.",
            "image": "./images/drincks.jpg"
        }
    ];

    let html = `
        <section>
            <h2>Välkommen till Resturant Java's</h2> 
            <div id="introText">
                <p>${startText[0]}</p>
                <p>${startText[1]}</p>
                <p>${startText[2]}</p>
                <p>${startText[3]}</p>
            </div>

            <section id="introText">
                <>${menuList[0]}</p>
                <p>${menuList[1]}</p>
                <p>${menuList[2]}</p>
                <p>${menuList[3]}</p>
            </section>
        </section>
    `;

    return html;

} 