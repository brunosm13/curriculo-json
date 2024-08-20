import HtmlBootstrap from '/util/HtmlBootstrap.js';
import Util from '/util/Util.js';
import CurriculoView from '/view/curriculo/';

class CurriculoFormView {
    constructor(dadosJSON) {
        // --- ABAS -------
        this.abas = [
            { aba: 'tab-form', texto: 'Formulário', painel: 'pane-form', selecionado: true},
            { aba: 'tab-json', texto: 'JSON', painel: 'pane-json', selecionado: false},
            { aba: 'tab-print', texto: 'Imprimir', painel: 'pane-print', selecionado: false}
        ];

        // --- CAMPOS ----
        this.campos = [
            {txtTitulo: {texto:'Título:', campo:'titulo', lista: '', aba:'tab-form'}},
            {txtUltimaAtualizacao: {texto:'Última atualização do Currículo:', campo:'atualizadoEm', lista: '', aba:'tab-form'}},
            {txtNome: {texto:'Nome Completo:', campo:'nome', lista: '', aba:'tab-form'}},
            {dtDataNascimento: {texto:'Data de Nascimento:', campo:'dataNascimento', lista: '', aba:'tab-form'}},
            {cbEstadoCivil: {texto:'Estado Cívil:', campo:'estadoCivil', lista: '', aba:'tab-form'}},
            {txtEmail: {texto:'Email pessoal:', campo:'emailPessoal', lista: '', aba:'tab-form'}},
            {txtLinkedIn: {texto:'LinkedIn:', campo:'linkedIn', lista: '', aba:'tab-form'}},
        ];

        this.criarAbasPaineis();
        this.criarAbaFormulario(dadosJSON);
        this.criarAbaJSON(dadosJSON);
        this.criarAbaCurriculo(dadosJSON);
    }

    criarAbasPaineis(){
        // ----  MAIN ----- Conteúdo do Site
        let main = document.getElementById('conteudoSite');

        let tabheadCurriculoForm= HtmlBootstrap.criarTabHead('curriculo-edit',this.abas);
        tabheadCurriculoForm.classList.add('d-print-none');
        let tabpanesCurriculoForm= HtmlBootstrap.criarTabContent(this.abas);
        main.appendChild(tabheadCurriculoForm);
        main.appendChild(tabpanesCurriculoForm);
        
        //Ajustar estilo da Aba Currículo
        let panePrint= document.getElementById("pane-print");
        panePrint.classList.add('text-justify', 'texto-padrao');
    }

    criarAbaFormulario(dadosJSON){
        let paneForm= document.getElementById("pane-form");
        // ----- FORMULÁRIO ------
        // DADOS PRINCIPAIS
        // Form
        let cardformCurriculo= HtmlBootstrap.criarElemento(HtmlBootstrap.tag.form,'card p-2');
        let cardtitleH5= HtmlBootstrap.criarElemento(HtmlBootstrap.tag.h5,'card-title','DADOS PRINCIPAIS:');
        cardtitleH5.setAttribute('style','font-family:Alata, sans-serif;');
        cardformCurriculo.appendChild(cardtitleH5);
        
        // Grupo de Campos
        let cardbodyCurriculo= HtmlBootstrap.criarElemento(HtmlBootstrap.tag.div,'card-body row cardbodyCurriculo');
        cardformCurriculo.appendChild(cardbodyCurriculo);
        
        //Titulo do Curriculo
        let titulo= this.campos.find(campo => campo.txtTitulo).txtTitulo;
        let txtTitulo= HtmlBootstrap.criarInput(HtmlBootstrap.tipoCampo.textoNormal,titulo.texto,'col-12','',Object.keys(titulo)[0],['CURRICULUM VITAE'],false,true);
        cardbodyCurriculo.appendChild(txtTitulo);

        //Última atualização
        let atualizadoEm= this.campos.find(campo => campo.txtUltimaAtualizacao).txtUltimaAtualizacao;
        let txtUltimaAtualizacao= HtmlBootstrap.criarInput(HtmlBootstrap.tipoCampo.textoNormal,atualizadoEm.texto,'col-12','Ex: Última atualização em maio de 2024',Object.keys(atualizadoEm)[0],[],true);
        cardbodyCurriculo.appendChild(txtUltimaAtualizacao);
        const _txtUltimaAtualizacao= txtUltimaAtualizacao.querySelector("#"+Object.keys(atualizadoEm)[0])
        this.validarCampo(_txtUltimaAtualizacao, atualizadoEm.campo);
        
        //Nome Completo
        let nome = this.campos.find(campo => campo.txtNome).txtNome;
        let txtNome = HtmlBootstrap.criarInput(HtmlBootstrap.tipoCampo.textoNormal, nome.texto, 'col-12', 'Ex: Maria Martins de Andrade', Object.keys(nome)[0], [], true);
        cardbodyCurriculo.appendChild(txtNome);
        const _txtNome = txtNome.querySelector("#" + Object.keys(nome)[0]);
        this.validarCampo(_txtNome, nome.campo);

        //Data de Nascimento
        let dataNascimento = this.campos.find(campo => campo.dtDataNascimento).dtDataNascimento;
        let dtDataNascimento = HtmlBootstrap.criarInput(HtmlBootstrap.tipoCampo.data, dataNascimento.texto, 'col-sm-6', '', Object.keys(dataNascimento)[0], [], true);
        cardbodyCurriculo.appendChild(dtDataNascimento);
        const _dtDataNascimento = dtDataNascimento.querySelector("#" + Object.keys(dataNascimento)[0]);
        this.validarCampo(_dtDataNascimento, dataNascimento.campo);

        //Estado Cívil 
        let estadoCivil = this.campos.find(campo => campo.cbEstadoCivil).cbEstadoCivil;
        let cbEstadoCivil = HtmlBootstrap.criarInput(HtmlBootstrap.tipoCampo.selecaoUnica, estadoCivil.texto, 'col-sm-6', '', Object.keys(estadoCivil)[0], ['Selecione seu estado cívil...', 'Solteiro(a)', 'Casado(a)', 'Divorciado(a)', 'Viúvo(a)', 'Separado(a)'], true);
        cardbodyCurriculo.appendChild(cbEstadoCivil);
        const _cbEstadoCivil = cbEstadoCivil.querySelector("#" + Object.keys(estadoCivil)[0]);
        this.validarCampo(_cbEstadoCivil, estadoCivil.campo);

        //E-mail 
        let emailPessoal = this.campos.find(campo => campo.txtEmail).txtEmail;
        let txtEmail = HtmlBootstrap.criarInput(HtmlBootstrap.tipoCampo.email, emailPessoal.texto, 'col-12', 'Ex: maria.andrade@gmail.com', Object.keys(emailPessoal)[0], [], true);
        cardbodyCurriculo.appendChild(txtEmail);
        const _txtEmail = txtEmail.querySelector("#" + Object.keys(emailPessoal)[0]);
        this.validarCampo(_txtEmail, emailPessoal.campo);

        //LinkedIn
        let linkedIn = this.campos.find(campo => campo.txtLinkedIn).txtLinkedIn;
        let txtLinkedIn = HtmlBootstrap.criarInput(HtmlBootstrap.tipoCampo.link, linkedIn.texto, 'col-12', 'Ex: https://www.linkedin.com/in/mariandra/', Object.keys(linkedIn)[0]);
        cardbodyCurriculo.appendChild(txtLinkedIn);
        const _txtLinkedIn = txtLinkedIn.querySelector("#" + Object.keys(linkedIn)[0]);
        this.validarCampo(_txtLinkedIn, linkedIn.campo);

        // FORMAÇÃO ACADÊMICA
        // Card
        let cardFormacoes= HtmlBootstrap.criarCard('container-fluid card col-12 p-2 mb-2');
        cardformCurriculo.appendChild(cardFormacoes);
        //Título e Dados
        let lblFormacoes= HtmlBootstrap.criarCardTitle('FORMAÇÃO ACADÊMICA','titulo-secundario h6 font-weight-bold');
        lblFormacoes.setAttribute('style','font-family:Alata, sans-serif;');
        let cardbodyFormacoes= HtmlBootstrap.criarCardBody('row cardbodyFormacoes');
        cardFormacoes.appendChild(lblFormacoes);
        cardFormacoes.appendChild(cardbodyFormacoes);
        //Nova Linha
        let btnNovaFormacao = HtmlBootstrap.criarButton('btnNovaFormacao', 'btn btn-secondary col-12','Nova Formação',HtmlBootstrap.funcao.implementar);	
        btnNovaFormacao.addEventListener('click', function() {
            event.preventDefault();
            //Grupo de Informações da Formação
            let divFormacao= HtmlBootstrap.criarElemento(HtmlBootstrap.tag.div,'linha border-bottom mb-2 row mx-1 col-12');
            // Instituto
            let txtInstituto= HtmlBootstrap.criarInput(HtmlBootstrap.tipoCampo.textoNormal,'Instituto:','col-12','Ex: Universidade de Pedra Leão','txtInstituto',[],true);
            const _txtInstituto= txtInstituto.querySelector("#txtInstituto")
            this.validarCampo(_txtInstituto, 'instituto');
            divFormacao.appendChild(txtInstituto);
            // Área ou Curso:
            let txtArea= HtmlBootstrap.criarInput(HtmlBootstrap.tipoCampo.textoNormal,'Área ou Curso:','col-sm-6','Ex: Bachalerado em Economia','txtArea',[],true);
            const _txtArea= txtInstituto.querySelector("#txtArea")
            this.validarCampo(_txtArea, 'area');
            divFormacao.appendChild(txtArea);
            // Conclusão ou previsão de conclusão:
            let txtConcluidoEm= HtmlBootstrap.criarInput(HtmlBootstrap.tipoCampo.textoNormal,'Conclusão ou previsão de conclusão:','col-sm-6','Ex: 2022','txtConcluidoEm',[],true);
            divFormacao.appendChild(txtConcluidoEm);
            // TCC:
            let txtTCC= HtmlBootstrap.criarInput(HtmlBootstrap.tipoCampo.textoNormal,'TCC:','col-sm-6','Ex: Ensino de Economia aplicada em Jogos de RPG','txtTCC');
            divFormacao.appendChild(txtTCC);
            // Link do TCC:
            let txtTCCLink= HtmlBootstrap.criarInput(HtmlBootstrap.tipoCampo.link,'Link do TCC:','col-sm-6','Ex: https://www.doc.com.br/tcc-maria.pdf','txtTCCLink');
            divFormacao.appendChild(txtTCCLink);
             
            // Apagar Linha
            let btnApagarFormacao = HtmlBootstrap.criarButton('', 'form-group btn btn-danger col-12','Apagar',HtmlBootstrap.funcao.implementar);
            btnApagarFormacao.addEventListener('click', function() { divFormacao.remove()});
            divFormacao.appendChild(btnApagarFormacao);
            cardbodyFormacoes.appendChild(divFormacao);
        });
        cardFormacoes.appendChild(btnNovaFormacao);
        // EXPERIÊNCIAS PROFISSIONAIS
        // Card
        let cardExperiencias= HtmlBootstrap.criarCard('container-fluid card col-12 p-2 mb-2');
        cardformCurriculo.appendChild(cardExperiencias);
        //Título e Dados
        let lblExperiencias= HtmlBootstrap.criarCardTitle('EXPERIÊNCIAS PROFISSIONAIS','h6 font-weight-bold');
        lblExperiencias.setAttribute('style','font-family:Alata, sans-serif;');
        let cardbodyExperiencias= HtmlBootstrap.criarCardBody('row cardbodyExperiencias');
        cardExperiencias.appendChild(lblExperiencias);
        cardExperiencias.appendChild(cardbodyExperiencias);
        //Nova Linha
        let btnNovaExperiencia = HtmlBootstrap.criarButton('btnNovaExperiencia', 'btn btn-secondary col-12','Nova Experiência',HtmlBootstrap.funcao.implementar);	
        btnNovaExperiencia.addEventListener('click', function() {
            event.preventDefault();
            //Grupo de Informações da Experiência
            let divExperiencia= HtmlBootstrap.criarElemento(HtmlBootstrap.tag.div,'linha border-bottom mb-2 row mx-1 col-12');
            // Empresa:
            let txtEmpresa= HtmlBootstrap.criarInput(HtmlBootstrap.tipoCampo.textoNormal,'Empresa:','col-12','Ex: Seu Jorge Associados','txtEmpresa',[],true);
            divExperiencia.appendChild(txtEmpresa);
            // Cargo:
            let txtCargo= HtmlBootstrap.criarInput(HtmlBootstrap.tipoCampo.textoNormal,'Cargo:','col-sm-6','Ex: Analista Financeiro','txtCargo',[],true);
            divExperiencia.appendChild(txtCargo);
            // Modalidade:
            let cbModalidade= HtmlBootstrap.criarInput(HtmlBootstrap.tipoCampo.selecaoUnica,'Modalidade:','col-sm-6','','cbModalidade',['Selecione  onde trabalhava...','Presencial','Homeoffice','Híbrido'],true);
            divExperiencia.appendChild(cbModalidade);
            // Período:
            let txtPeriodo= HtmlBootstrap.criarInput(HtmlBootstrap.tipoCampo.textoNormal,'Período:','col-sm-6','Ex: janeiro de 2021 até o momento','txtPeriodo',[],true);
            divExperiencia.appendChild(txtPeriodo);
            // Atividades:
            let txtAtividades= HtmlBootstrap.criarInput(HtmlBootstrap.tipoCampo.textoNormal,'Atividades:','col-sm-6','Ex: Fechamento de folha, pagamentos de serviço e controle de balanço.','txtAtividades',[],true);
            divExperiencia.appendChild(txtAtividades);
            // Apagar Linha
            let btnApagarExperiencia = HtmlBootstrap.criarButton('', 'form-group btn btn-danger col-12','Apagar',HtmlBootstrap.funcao.implementar);
            btnApagarExperiencia.addEventListener('click', function() {  divExperiencia.remove()});
            divExperiencia.appendChild(btnApagarExperiencia);
            cardbodyExperiencias.appendChild(divExperiencia);
        });
        cardExperiencias.appendChild(btnNovaExperiencia);
        // CURSOS, TREINAMENTOS E CERTIFICAÇÕES
        // Card
        let cardCursosTreinamentosCertificacoes= HtmlBootstrap.criarCard('container-fluid card col-12 p-2 mb-2');
        cardformCurriculo.appendChild(cardCursosTreinamentosCertificacoes);
        //Título e Dados
        let lblCursosTreinamentosCertificacoes= HtmlBootstrap.criarCardTitle('CURSOS, TREINAMENTOS E CERTIFICAÇÕES','titulo-secundario h6 font-weight-bold');
        lblCursosTreinamentosCertificacoes.setAttribute('style','font-family:Alata, sans-serif;');
        let cardbodyCursosTreinamentosCertificacoes= HtmlBootstrap.criarCardBody('row cardbodyCursosTreinamentosCertificacoes');
        cardCursosTreinamentosCertificacoes.appendChild(lblCursosTreinamentosCertificacoes);
        cardCursosTreinamentosCertificacoes.appendChild(cardbodyCursosTreinamentosCertificacoes);
        
        //Nova Linha
        let btnNovoTipo = HtmlBootstrap.criarButton('btnNovoTipo', 'btn btn-secondary col-12','Novo Tipo',HtmlBootstrap.funcao.implementar);	
        btnNovoTipo.addEventListener('click', function() {
            event.preventDefault();
            //Grupo de Informações da Tipo
            let divTipo= HtmlBootstrap.criarElemento(HtmlBootstrap.tag.div,'linha border-bottom mb-2 row mx-1 col-12');
            // Tipo:
            let cbTipo= HtmlBootstrap.criarInput(HtmlBootstrap.tipoCampo.selecaoUnica,'Tipo:','col-sm-4','','cbTipo',['Selecione um tipo...','Curso','Treinamento','Certificado'],true);
            divTipo.appendChild(cbTipo);
            // Nome:
            let txtNomeTipo= HtmlBootstrap.criarInput(HtmlBootstrap.tipoCampo.textoNormal,'Nome:','col-sm-8','Ex: Excel Avançado','txtNomeTipo',[],true);
            divTipo.appendChild(txtNomeTipo);
            // Link de Comprovante:
            let txtLink= HtmlBootstrap.criarInput(HtmlBootstrap.tipoCampo.link,'Link de Comprovante:','col-sm-12','Ex: http://www.doc.com.br/certificado-excel.pdf','txtLink',[]);
            divTipo.appendChild(txtLink);
            // Onde:
            let txtOnde= HtmlBootstrap.criarInput(HtmlBootstrap.tipoCampo.textoNormal,'Onde:','col-sm-6','Ex: efetuado na Microlins','txtOnde',[],true);
            divTipo.appendChild(txtOnde);
            // Onde:
            let txtQuando= HtmlBootstrap.criarInput(HtmlBootstrap.tipoCampo.textoNormal,'Quando:','col-sm-6','Ex: em 2021','txtQuando',[],true);
            divTipo.appendChild(txtQuando);
            // Apagar Linha
            let btnApagarTipo = HtmlBootstrap.criarButton('', 'form-group btn btn-danger col-12','Apagar',HtmlBootstrap.funcao.implementar);
            btnApagarTipo.addEventListener('click', function() {divTipo.remove()});
            divTipo.appendChild(btnApagarTipo);
            cardbodyCursosTreinamentosCertificacoes.appendChild(divTipo);
        });
        cardCursosTreinamentosCertificacoes.appendChild(btnNovoTipo);
        // INFORMAÇÕES BÁSICAS
        // Card
        let cardInformacoesBasicas= HtmlBootstrap.criarCard('container-fluid card col-12 p-2 mb-2');
        cardformCurriculo.appendChild(cardInformacoesBasicas);
        //Título e Dados
        let lblInformacoesBasicas= HtmlBootstrap.criarCardTitle('INFORMAÇÕES BÁSICAS','titulo-secundario h6 font-weight-bold');
        lblInformacoesBasicas.setAttribute('style','font-family:Alata, sans-serif;');
        let cardbodyInformacoesBasicas= HtmlBootstrap.criarCardBody('row cardbodyInformacoesBasicas');
        cardInformacoesBasicas.appendChild(lblInformacoesBasicas);
        cardInformacoesBasicas.appendChild(cardbodyInformacoesBasicas);
        //Nova Linha
        let btnNovaInformacao = HtmlBootstrap.criarButton('btnNovaInformacao', 'btn btn-secondary col-12','Nova Informação',HtmlBootstrap.funcao.implementar);	
        btnNovaInformacao.addEventListener('click', function() {
            event.preventDefault();
            //Grupo de Informações da Informação
            let divInformacao= HtmlBootstrap.criarElemento(HtmlBootstrap.tag.div,'linha border-bottom mb-2 row mx-1 col-12');
            // Informação:
            let txtInformacao= HtmlBootstrap.criarInput(HtmlBootstrap.tipoCampo.textoNormal,'Informação:','col-sm-12','Ex: Possui noções intermediárias em Pacote Office (Word e PowerPoint)','txtInformacao',[]);
            divInformacao.appendChild(txtInformacao);
            // Apagar Linha
            let btnApagarInformacao = HtmlBootstrap.criarButton('', 'form-group btn btn-danger col-12','Apagar',HtmlBootstrap.funcao.implementar);
            btnApagarInformacao.addEventListener('click', function() {divInformacao.remove()});
            divInformacao.appendChild(btnApagarInformacao);
            cardbodyInformacoesBasicas.appendChild(divInformacao);
        });
        cardInformacoesBasicas.appendChild(btnNovaInformacao);
        
        let btnSubmit=HtmlBootstrap.criarButton('btnSubmit', 'btn btn-secondary col-12 my-4','SALVAR',HtmlBootstrap.funcao.implementar);
        
        btnSubmit.addEventListener('click',function(){
            event.preventDefault();
            this.salvarCurriculo(dadosJSON);
        }.bind(this));
        
        paneForm.appendChild(cardformCurriculo);
        paneForm.appendChild(btnSubmit);
    }

    validarCampo(campo, nomeJSON){
        campo.addEventListener('blur',function(){
            let validar={
                campo: nomeJSON, // Nome do campo no JSON
                valor: campo.value // Valor preenchido no campo
            }
        
            // Promise.all é utilizado quando há mais de duas chamadas ao mesmo tempo
            Promise.all([
                fetch('/api/curriculo/validar', {
                    method: 'POST',
                    headers: {'Content-Type': 'application/json'},
                    body: JSON.stringify({...validar})
                }).then(response => response.json())
            ])
            
            .then(([errosJSON]) => {
                //limpar classe de validação
                campo.classList.remove('is-invalid');
                campo.classList.remove('is-valid');

                if(errosJSON.length==0)
                    campo.classList.add('is-valid')
                else
                    campo.classList.add('is-invalid');

                errosJSON.forEach(erro => {
                    HtmlBootstrap.exibirAlerta('alert-danger',erro.mensagem);
                });
            })
            .catch(error => {
                console.error('Erro:', error);
            });
        }.bind(this));
    }

    salvarCurriculo(dadosJSON){ 
        let cardbodyFormacoes= document.querySelector('.cardbodyFormacoes');
        let cardbodyExperiencias= document.querySelector('.cardbodyExperiencias');
        let cardbodyCursosTreinamentosCertificacoes= document.querySelector('.cardbodyCursosTreinamentosCertificacoes');
        let cardbodyInformacoesBasicas= document.querySelector('.cardbodyInformacoesBasicas');
    
        let jsonBody= {
            "atualizadoEm": document.getElementById('txtUltimaAtualizacao').value,
            "titulo": document.getElementById('txtTitulo').value,
            "nome": document.getElementById('txtNome').value,
            "dataNascimento": Util.converteParaDataBR(document.getElementById('dtDataNascimento').value),
            "estadoCivil": document.getElementById('cbEstadoCivil').options[document.getElementById('cbEstadoCivil').selectedIndex].text, 
            "emailPessoal": document.getElementById('txtEmail').value,
            "linkedIn": document.getElementById('txtLinkedIn').value,
            "formacoes": [],
            "experiencias": [],
            "CursosTreinamentosCertificacoes": [],
            "InformacoesBasicas": [],
            "rodapeSite": "Desenvolvido por Bruno Silva Macário utilizando Bootstrap v4.1.3 + Javascript + JSON"
        };
        let formacoes= [];
        cardbodyFormacoes.querySelectorAll('.linha').forEach(formacaoDiv => {
            let formacao={
                "instituto": formacaoDiv.querySelector('#txtInstituto').value,
		        "area": formacaoDiv.querySelector('#txtArea').value,
		        "concluidoEm": formacaoDiv.querySelector('#txtConcluidoEm').value,
		        "TCC": formacaoDiv.querySelector('#txtTCC').value, 
		        "TCClink": formacaoDiv.querySelector('#txtTCCLink').value
            }
            formacoes.push(formacao);
        });
        jsonBody['formacoes']=formacoes;
        let experiencias= [];
        cardbodyExperiencias.querySelectorAll('.linha').forEach(formacaoDiv => {
            let experiencia={
                "empresa": formacaoDiv.querySelector('#txtEmpresa').value,
		        "cargo": formacaoDiv.querySelector('#txtCargo').value,
		        "modalidade": formacaoDiv.querySelector('#cbModalidade option:checked').textContent,
		        "periodo": formacaoDiv.querySelector('#txtPeriodo').value,
		        "atividades": formacaoDiv.querySelector('#txtAtividades').value
            }
            experiencias.push(experiencia);
        });
        jsonBody['experiencias']=experiencias;
        let tipos= [];
        cardbodyCursosTreinamentosCertificacoes.querySelectorAll('.linha').forEach(formacaoDiv => {
            let tipo={
                "tipo": formacaoDiv.querySelector('#cbTipo option:checked').textContent,
		        "nome": formacaoDiv.querySelector('#txtNomeTipo').value,
		        "link": formacaoDiv.querySelector('#txtLink').value,
		        "onde": formacaoDiv.querySelector('#txtOnde').value,
		        "quando": formacaoDiv.querySelector('#txtQuando').value
            }
            tipos.push(tipo);
        });
        jsonBody['CursosTreinamentosCertificacoes']=tipos;
        let informacoes= [];
        cardbodyInformacoesBasicas.querySelectorAll('.linha').forEach(formacaoDiv => {
            informacoes.push(formacaoDiv.querySelector('#txtInformacao').value);
        });
        jsonBody['InformacoesBasicas']=informacoes;
        
        //validar todos os campos
        this.validarCampos(jsonBody);

        //Salvar os dados
        dadosJSON = jsonBody;
    
        //Exibir novo JSON do currículo
        document.querySelector('#codedata').textContent = JSON.stringify(dadosJSON, null, 4);
        
        this.carregarAbaImprimir(dadosJSON, true);

        HtmlBootstrap.exibirAlerta('alert-success','Dados do currículo foram salvos com sucesso. Efetue o donwload para utilizar novamente.');
    }

    validarCampos(jsonBody){
        Promise.all([
            fetch('/api/curriculo/validar/todos', {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({...jsonBody})
            }).then(response => response.json())
        ])
        .then(([errosJSON]) => {
            errosJSON.forEach(erro => {
                HtmlBootstrap.exibirAlerta('alert-danger',erro.mensagem);
                document.querySelector('#'+erro.id).classList.add('is-invalid');
            });

            //Focar lentamente no primeiro campo com erro
            let opcoes = {
                behavior: 'smooth', // Scroll suave
                block: 'start'      // Alinha o topo do elemento com o topo da viewport
            };
            document.querySelector('#'+errosJSON[0].id).scrollIntoView(opcoes);
        })
        .catch(error => {
            console.error('Erro:', error);
        });   
    }

    criarAbaJSON(dadosJSON){
        let paneJSON= document.getElementById("pane-json");
        // CARD
        //Título e Dados
        let cardJSON= HtmlBootstrap.criarCard();
        let cardtitleJSON= HtmlBootstrap.criarCardTitle('', 'd-flex justify-content-between align-items-center');
        let h5JSON= HtmlBootstrap.criarElemento(HtmlBootstrap.tag.h5, 'm-2', 'Dados cadastrados no JSON');
        h5JSON.setAttribute('style','font-family:Alata, sans-serif;');

        // Botão para download
        let btnDownloadJSON= HtmlBootstrap.criarButton('btnDownloadJSON', 'btn-outline-secondary m-1', 'Fazer Donwload', HtmlBootstrap.funcao.implementar);
        btnDownloadJSON.addEventListener('click',function(){
            this.fazerDownloadJSON(dadosJSON);
        }.bind(this));
        cardtitleJSON.appendChild(h5JSON);
        cardtitleJSON.appendChild(btnDownloadJSON);
        cardJSON.appendChild(cardtitleJSON);

        // Exibição de JSON
        let cardbodyJSON= HtmlBootstrap.criarCardBody();
        let preJSON= HtmlBootstrap.criarElementoId(HtmlBootstrap.tag.pre,'jsonData','pre-scrollable text-light bg-dark p-3');
        let codeJSON=HtmlBootstrap.criarElementoId(HtmlBootstrap.tag.code,'codedata');
        codeJSON.innerHTML= JSON.stringify(dadosJSON, null, 4);
        preJSON.appendChild(codeJSON);
        cardbodyJSON.appendChild(preJSON);
        
        cardJSON.appendChild(cardbodyJSON);
        paneJSON.appendChild(cardJSON);
    }

    fazerDownloadJSON(dadosJSON){
        const jsonString = JSON.stringify(dadosJSON, null, 4);
        const blob = new Blob([jsonString], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        //Preparar arquivo para download
        const arquivo= HtmlBootstrap.criarElemento(HtmlBootstrap.tag.a,'','', url,);
        arquivo.download= 'meu-curriculo.json'
        arquivo.click();
        URL.revokeObjectURL(url);

        HtmlBootstrap.exibirAlerta('alert-success','Download efetuado com sucesso.');
    }

    criarAbaCurriculo(dadosJSON){
        let panePrint= document.getElementById("pane-print");
        // -- Estrutura de painel para exibição de currículo utilizando o CurriculoView
        let printHeader= HtmlBootstrap.criarElementoId(HtmlBootstrap.tag.div,'printHeader','m-3 d-print-none');
        let printMain= HtmlBootstrap.criarElementoId(HtmlBootstrap.tag.div,'printMain','mr-0 ml-0 mt-0');
        let printFooter= HtmlBootstrap.criarElementoId(HtmlBootstrap.tag.div,'printFooter','ml-3 text-center d-print-none');
        
        panePrint.appendChild(printHeader);
        panePrint.appendChild(printMain);
        panePrint.appendChild(printFooter);

        this.carregarAbaImprimir(dadosJSON)
    }

    carregarAbaImprimir(dadosJSON, limpar=false){
        let panePrint= document.getElementById("pane-print");
        let printHeader= document.getElementById("printHeader");
        let printMain= document.getElementById("printMain");
        let printFooter= document.getElementById("printFooter");    
        // limpa o painel
        if (limpar)
            HtmlBootstrap.limparPainel(printHeader,printMain,printFooter);
        let curriculoView= new CurriculoView(printHeader, printMain, true);

        // Promise.all é utilizado quando há mais de duas chamadas ao mesmo tempo
		Promise.all([
			fetch('/api/fonte').then(response => response.json())
		])
		.then(([fonteConfig]) => {	
            // carrega os dados do curriculo.json
			curriculoView.carregarCurriculo(dadosJSON, printFooter);
			// carrega as configurações do fonte-config.json
			curriculoView.alterarEstilo(fonteConfig, panePrint);
		});
    }
}
export default CurriculoFormView;