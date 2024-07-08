// Classe para facilitar a criação de elementos HTML com classes bootstrap
class HtmlBootstrap{
    // Tags do HML que irão ser utilizadas
    static tag= {
        a: 'a',
        button: 'button',
        code: 'code',
        div: 'div',
        form: 'form',
        h1: 'h1',
        h2: 'h2',
        h3: 'h3',
        h4: 'h4',
        h5: 'h5',
        h6: 'h6',
        hgroup: 'hgroup',
        input: 'input',
        label:'label',
        li: 'li',
        option: 'option',
        p: 'p',
        path: 'path',
        pre: 'pre',
        select: 'select',
        span: 'span',
        svg: 'svg',
        ul: 'ul'
    };

    // Para identificar qual a função que vai utilizar no botão
    static funcao= {
        imprimir: 'imprimir',
        implementar:'implementar'
    };

    static tipoCampo={
        data:'data',
        email:'email',
        link: 'link',
        selecaoUnica:'selecaoUnica',
        textoNormal:'textoNormal'
    }

    // cria um elemento de acordo com o que é passado
    static criarElemento(tag, classes=null, texto=null, link=null, title=null, dataToggle=null, style=null){
        let elemento= document.createElement(tag);
        if(!this.validarArgumento(classes))
		    elemento.setAttribute('class',classes);
        if(!this.validarArgumento(texto))
            elemento.appendChild(document.createTextNode(texto));
        if(!this.validarArgumento(link))
            elemento.setAttribute('href',link);
        if(!this.validarArgumento(title))
            elemento.setAttribute('title',title);
        if(!this.validarArgumento(dataToggle))
            elemento.setAttribute('data-togle',dataToggle);
        if(!this.validarArgumento(style))
            elemento.setAttribute('style',style);
        return elemento;
    };

    // cria um elemento com ID
    static criarElementoId(tag, id, classes=null,  texto=null, link=null, title=null, dataToggle=null, style=null){
        let elemento= this.criarElemento(tag, classes, texto, link, title, dataToggle, style);
        elemento.setAttribute('id',id);

        return elemento;
    };

    // cria um botão bootstrap
    static criarButton(id, classes, texto, funcao=null){
        let button= this.criarElementoId(this.tag.button,id,'btn '+classes);
               
        switch(funcao){
            case this.funcao.imprimir:
                //ícone
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
                //função
                button.addEventListener('click', function() {
                    window.print();
                });
                break;
            case this.funcao.implementar:
                break;
            default:
                throw new Error("Função não encontrada. Por favor, configure a nova função.");
        };

        if(!this.validarArgumento(texto))
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
    static criarCardTitle(texto, classes=null, id=null){
        let cardtitle= this.criarElemento(this.tag.div, 'card-title '+classes, texto);
        if (!this.validarArgumento(id))
            cardtitle.setAttribute('id', id);

        return cardtitle;
    };

    // cria um campo para preencher
    static criarInput(tipoCampo, texto, tamanho, placeholder, id=null, valores=[] ,obrigatorio=false, somenteLeitura= false){
        let formgroupCampo= this.criarElemento(this.tag.div, 'form-group '+tamanho);

        let lblCampo= this.criarElemento(this.tag.label, 'form-label',texto);
        formgroupCampo.appendChild(lblCampo);

        let inputCampo;
        switch(tipoCampo){
            case this.tipoCampo.textoNormal:
            case this.tipoCampo.link:
                inputCampo= this.criarElemento(this.tag.input, 'form-control');
                inputCampo.setAttribute('type','text');
                valores.forEach(valor=>{
                    inputCampo.setAttribute('value',valor);
                });
                if(!this.validarArgumento(id))
                    inputCampo.setAttribute('id',id);
                if(!this.validarArgumento(placeholder))
                    inputCampo.setAttribute('placeholder',placeholder);
                if(somenteLeitura)
                    inputCampo.setAttribute('readonly','readonly');
                if(obrigatorio)
                    inputCampo.setAttribute('required','required');
                break;
            case this.tipoCampo.email:
                inputCampo= this.criarElemento(this.tag.input, 'form-control');
                inputCampo.setAttribute('type','email');
                valores.forEach(valor=>{
                    inputCampo.setAttribute('value',valor);
                });
                if(!this.validarArgumento(id))
                    inputCampo.setAttribute('id',id);
                if(!this.validarArgumento(placeholder))
                    inputCampo.setAttribute('placeholder',placeholder);
                if(somenteLeitura)
                    inputCampo.setAttribute('readonly','readonly');
                if(obrigatorio)
                    inputCampo.setAttribute('required','required');
                    break;
            case this.tipoCampo.data:
                inputCampo= this.criarElemento(this.tag.input, 'form-control');
                inputCampo.setAttribute('type','date');
                valores.forEach(valor=>{
                    inputCampo.setAttribute('value',valor);
                });
                if(!this.validarArgumento(id))
                    inputCampo.setAttribute('id',id);
                if(somenteLeitura)
                    inputCampo.setAttribute('readonly','readonly');
                if(obrigatorio)
                    inputCampo.setAttribute('required','required');  
                break;
            case this.tipoCampo.selecaoUnica:
                inputCampo= this.criarElemento(this.tag.select, 'custom-select');
                if(!this.validarArgumento(id))
                    inputCampo.setAttribute('id',id);
                if(!this.validarArgumento(placeholder))
                    inputCampo.setAttribute('placeholder',placeholder);
                if(somenteLeitura)
                    inputCampo.setAttribute('readonly','readonly');
                if(obrigatorio)
                    inputCampo.setAttribute('required','required');
                
                let contador=0;
                valores.forEach(valor=>{
                    let opcao= this.criarElemento(this.tag.option,'',valor);

                    let value= contador > 0 ? contador : '';
                    opcao.setAttribute('value',value);

                    if (contador== 0){
                        opcao.setAttribute('disabled','disabled');
                        opcao.setAttribute('selected','selected');
                    }
                    inputCampo.appendChild(opcao);
                    contador++;
                });
            break;

            default:
                throw new Error("Tipo de campo não encontrado. Por favor, configure o novo tipo de campo.");
        };

        formgroupCampo.appendChild(inputCampo);
        return formgroupCampo;
    }

    // criar uma alerta
    static criarAlert(classe, texto){
        let divAlert= this.criarElemento(this.tag.div,'alert alert-success alert-dismissible fade show mx-4 my-1 '+classe,texto);
        let btnFechar= this.criarButton('','close','',this.funcao.implementar);
        btnFechar.setAttribute('data-dismiss','alert');
        btnFechar.setAttribute('aria-label','Fechar');
        let spanFechar= this.criarElemento(this.tag.span);
        spanFechar.setAttribute('aria-hidden', 'true');
        spanFechar.innerHTML = '&times;';
        btnFechar.appendChild(spanFechar);
        divAlert.appendChild(btnFechar);

        return divAlert;
    }

    static newTabLi(id, texto, formulario, selecionado){
        return tabli= {
            id: id,
            texto: texto,
            formulario: formulario,
            selecionado: selecionado
        };
    }

    static newTab(aba, texto, painel, selecionado){
        return tabpane={
            aba: aba,
            texto: texto,
            painel: painel,
            selecionado: selecionado
        };
    }

    static criarTabHead(id,tabs){
        let nav= this.criarElementoId(this.tag.ul,id,'nav nav-tabs mb-3');
        nav.setAttribute('role','tablist');

        tabs.forEach(tab =>{
            let li= this.criarElemento(this.tag.li,'nav-item');
            let a= this.criarElementoId(this.tag.a, tab.aba,'nav-link',tab.texto)
            a.setAttribute('data-toggle','tab');
            a.setAttribute('href','#'+tab.painel);
            a.setAttribute('role','tab');
            a.setAttribute('aria-controls',tab.painel);
            a.setAttribute('aria-selected',tab.selecionado);
            li.appendChild(a);
            nav.appendChild(li);
        });

        return nav;
    }

    static criarTabContent(tabpanes){
        let div= this.criarElemento(this.tag.div,'tab-content');

        tabpanes.forEach(tabpane =>{
            let divTabPane= this.criarElementoId(this.tag.div,tabpane.painel,'tab-pane fade');
            divTabPane.setAttribute('role','tabpanel');
            divTabPane.setAttribute('aria-labelledby',tabpane.aba);
            if (tabpane.selecionado) 
                divTabPane.classList.add('show','active');
            div.appendChild(divTabPane);
        });

        return div;
    };

    // Verifica se o argumento está vazio, nulo ou em branco.
    static validarArgumento(argumento){
        return (argumento == null || argumento == undefined || argumento.trim().length == 0);
    };
}

export default HtmlBootstrap;