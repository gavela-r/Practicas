let listas = document.getElementsByTagName('li');




let urls = {
    Google: "https://google.com",
    DuckDuckGo: "https://duckduckgo.com",
    Bing: "https://www.bing.com",
    Ecosia: "https://www.ecosia.org/",
    WolframAlpha: "https://www.wolframalpha.com"

}

Array.from(listas).forEach(element => {
    let texto = element.textContent;        // google
    element.innerHTML = `<a href="${urls[texto]}">${texto}</a>`;
    // <a href="www.google.com">Googhle</a>
    
});

            
