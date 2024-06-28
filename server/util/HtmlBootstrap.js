// Classe para facilitar a criação de elementos HTML com classes bootstrap
class HtmlBootstrap{
    // Tags do HML que irão ser utilizadas
    static tag= {
        a: 'a',
        button: 'button',
        div: 'div',
        h6: 'h6',
        hgroup: 'hgroup',
        li: 'li',
        p: 'p',
        path: 'path',
        span: 'span',
        svg: 'svg',
        ul: 'ul'
    };

    // Para identificar qual o SVG que vai utilizar no botão
    static icone= {
        imprimir: 'imprimir'
    };

    // cria um elemento de acordo com o que é passado
    static criarElemento(tag, classes=null, texto=null, link=null){
        let elemento= document.createElement(tag);
        if(!this.validarArgumento(classes))
		    elemento.setAttribute('class',classes);
        if(!this.validarArgumento(texto))
            elemento.appendChild(document.createTextNode(texto));
        if(!this.validarArgumento(link))
            elemento.setAttribute('href',link);

        return elemento;
    };

    // cria um elemento com ID
    static criarElementoId(tag, classes, id, texto=null, link=null){
        let elemento= this.criarElemento(tag, classes, texto, link);
        elemento.setAttribute('id',id);

        return elemento;
    };

    // cria um botão bootstrap
    static criarButton(id, classes, texto, icone=null){
        let button= this.criarElementoId(this.tag.button,'btn '+classes, id);
               
        switch(icone){
            case this.icone.imprimir:
                let span= this.criarElemento(this.tag.span);
                let iconImprimir = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    			iconImprimir.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
    			iconImprimir.setAttribute('width', '16');
    			iconImprimir.setAttribute('height', '16');
    			iconImprimir.setAttribute('fill', 'currentColor');
    			iconImprimir.setAttribute('class', 'bi bi-printer-fill');
    			iconImprimir.setAttribute('viewBox', '0 0 16 16');
				let path1 = document.createElementNS("http://www.w3.org/2000/svg", "path");
				path1.setAttribute('d', 'M5 1a2 2 0 0 0-2 2v1h10V3a2 2 0 0 0-2-2zm6 8H5a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1');
				let path2 = document.createElementNS("http://www.w3.org/2000/svg", "path");
				path2.setAttribute('d', 'M0 7a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2h-1v-2a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v2H2a2 2 0 0 1-2-2zm2.5 1a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1');
				iconImprimir.appendChild(path1);
				iconImprimir.appendChild(path2);
                span.appendChild(iconImprimir);
                button.appendChild(span);
                break;

            default:
                throw new Error("Ícone não encontrado.");
        };

        if(!this._validaArgumento(texto))
            button.appendChild(document.createTextNode(texto));

        return button;  
    };

    // Cria um card bootstrap
    static criarCard(classes=null){
        let card = this.criarElemento(this.tag.div, 'card '+classes);
        return card;
    };

    // Cria um card body bootstrap
    static criarCardBody(classes=null){
        let cardbdody= this.criarElemento(this.tag.div, 'card-body '+classes);
        return cardbdody;
    };

    // Cria um card title
    static criarCardTitle(texto, classes=null){
        let cardtitle= this.criarElemento(this.tag.div, 'card-title '+classes, texto);
        return cardtitle;
    };

    // Verifica se o argumento está vazio, nulo ou em branco.
    static validarArgumento(argumento){
        return (argumento == null || argumento == undefined || argumento.trim().length == 0);
    };  
}

export default HtmlBootstrap;