const mobileNavBar = () =>{
    let nav = document.querySelector('.nav__links')
    nav.classList.toggle('open')
    let btn = document.querySelector('.mobile__menu')
    btn.classList.toggle('open')
    document.querySelector('.hero__section .nav__container').classList.add('fixed__nav')
}

window.onscroll = () =>{
    if(window.scrollY > 0){
        document.querySelector('.hero__section .nav__container').classList.add('fixed__nav')
    }else{
        document.querySelector('.hero__section .nav__container').classList.remove('fixed__nav')
    }
}

//xml
/* importando o xml e colocando a lista na variavel textsArray*/
/*const putTexts = async () =>{
    let textsArray;
    await fetch('../xml/texts.xml')
    .then(response => response.text())
    .then(xml => {
        let xmlContent = xml;
        let parser = new DOMParser();
        let xmlDOM = parser.parseFromString(xmlContent, 'application/xml');
        let texts = xmlDOM.querySelectorAll('title');
    
        
        textsArray = texts
    })

    console.log(textsArray)
    let divsXml = document.querySelectorAll('[data-text]')
    divsXml.forEach((item, index) =>{
        console.log(textsArray[index].attributes)
        if(item.dataset.text == textsArray[index].attributes[0].value){
            item.innerHTML = textsArray[index].innerHTML
        }
    })
}

putTexts()*/