import HtmlBootstrap from '/util/HtmlBootstrap.js';
import Util from '/util/Util.js';

class CurriculoView {
    constructor() {
        // ----  HEADER ----- Cabeçalho do Site
        let header = document.getElementById('cabecalhoSite');

        // Botão Imprimir
        let btnImprimir = HtmlBootstrap.criarButton('imprimir', 'btn-outline-secondary btn-lg btn-block',' Imprimir', HtmlBootstrap.funcao.imprimir);	
        header.appendChild(btnImprimir);

        // ----  MAIN ----- Conteúdo do Site
        let main = document.getElementById('conteudoSite');

        // Grupo do cabeçalho
        let hgroupSite = HtmlBootstrap.criarElemento(HtmlBootstrap.tag.hgroup,'clearfix mx-5 mt-3');
        let h6AtualizadoEm= HtmlBootstrap.criarElementoId(HtmlBootstrap.tag.h6,'atualizadoEm','ml-3 float-left');
        let h1AtualizadoEm = HtmlBootstrap.criarElementoId(HtmlBootstrap.tag.p,'titulo','titulo-site float-right text-right h1 mr-4 font-weight-normal font-italic');
        hgroupSite.appendChild(h6AtualizadoEm);
        hgroupSite.appendChild(h1AtualizadoEm); // hgroup não aceita 2 cabeçalho dentro da tag.

        // DADOS PRINCIPAIS
        let cardDadosPrincipais= HtmlBootstrap.criarCard('mx-5 border-top-0 border-right-0 border-left-0');
        let cardbodyDadosPrincipais=HtmlBootstrap.criarCardBody();
        cardDadosPrincipais.appendChild(cardbodyDadosPrincipais);

        //Nome
        let lblNome= HtmlBootstrap.criarCardTitle('','titulo-principal h1 w-auto border-bottom border-secondary','nome')
        cardbodyDadosPrincipais.appendChild(lblNome);

        //Idade
        let lblIdade= HtmlBootstrap.criarElemento(HtmlBootstrap.tag.p,'m-0 p-0');
        let txtIdade= HtmlBootstrap.criarElemento(HtmlBootstrap.tag.span,'font-weight-bold','Idade: ');
        let valIdade= HtmlBootstrap.criarElementoId(HtmlBootstrap.tag.span,'idade');
        lblIdade.appendChild(txtIdade);
        lblIdade.appendChild(valIdade);
        cardbodyDadosPrincipais.appendChild(lblIdade);

        //Estado Cívil
        let lblEstadoCivil= HtmlBootstrap.criarElemento(HtmlBootstrap.tag.p,'m-0 p-0');
        let txtEstadoCivil= HtmlBootstrap.criarElemento(HtmlBootstrap.tag.span,'font-weight-bold','Estado Cívil: ');
        let valEstadoCivil= HtmlBootstrap.criarElementoId(HtmlBootstrap.tag.span,'estadoCivil')
        lblEstadoCivil.appendChild(txtEstadoCivil);
        lblEstadoCivil.appendChild(valEstadoCivil);
        cardbodyDadosPrincipais.appendChild(lblEstadoCivil);

        //E-mail Pessoal
        let lblEmail= HtmlBootstrap.criarElemento(HtmlBootstrap.tag.p,'m-0 p-0');
        let txtEmail= HtmlBootstrap.criarElemento(HtmlBootstrap.tag.span,'font-weight-bold','E-mail Pessoal: ');
        let valEmail= HtmlBootstrap.criarElementoId(HtmlBootstrap.tag.a,'email','texto-padrao-link','','E-mail pessoal','tooltip');
        lblEmail.appendChild(txtEmail);
        lblEmail.appendChild(valEmail);
        cardbodyDadosPrincipais.appendChild(lblEmail);

        //LinkedIn
        let lblLinkedIn= HtmlBootstrap.criarElemento(HtmlBootstrap.tag.p,'m-0 p-0');
        let txtLinkedIn= HtmlBootstrap.criarElemento(HtmlBootstrap.tag.span,'font-weight-bold','LinkedIn: ');
        let valLinkedIn= HtmlBootstrap.criarElementoId(HtmlBootstrap.tag.a,'linkedIn','texto-padrao-link','','LinkedIn','tooltip');
        lblLinkedIn.appendChild(txtLinkedIn);
        lblLinkedIn.appendChild(valLinkedIn);
        cardbodyDadosPrincipais.appendChild(lblLinkedIn);

        // FORMAÇÃO ACADÊMICA
        // Card
        let cardFormacoes= HtmlBootstrap.criarCard('mx-5 border-top-0 border-right-0 border-left-0');
        let cardbodyFormacoes= HtmlBootstrap.criarCardBody();
        cardFormacoes.appendChild(cardbodyFormacoes);

        //Título e Dados
        let lblFormacoes= HtmlBootstrap.criarCardTitle('FORMAÇÃO ACADÊMICA','titulo-secundario h4 font-weight-bold');
        let listaFormacoes= HtmlBootstrap.criarElementoId(HtmlBootstrap.tag.ul,'formacoes','','','','','list-style-type: square;');
        cardbodyFormacoes.appendChild(lblFormacoes);
        cardbodyFormacoes.appendChild(listaFormacoes);

        // EXPERIÊNCIAS PROFISSIONAIS
        // Card
        let cardExperiencias= HtmlBootstrap.criarCard('mx-5 border-top-0 border-right-0 border-left-0');
        let cardbodyExperiencias= HtmlBootstrap.criarCardBody();

        cardExperiencias.appendChild(cardbodyExperiencias);

        //Título e Dados
        let lblExperiencias= HtmlBootstrap.criarCardTitle('EXPERIÊNCIAS PROFISSIONAIS','titulo-secundario h4 font-weight-bold');
        let listaExperiencias= HtmlBootstrap.criarElementoId(HtmlBootstrap.tag.ul,'experiencias','','','','','list-style-type: square;');
        cardbodyExperiencias.appendChild(lblExperiencias);
        cardbodyExperiencias.appendChild(listaExperiencias);

        // CURSOS, TREINAMENTOS E CERTIFICAÇÕES
        // Card
        let cardCursosTreinamentosCertificacoes= HtmlBootstrap.criarCard('mx-5 border-top-0 border-right-0 border-left-0');
        let cardbodyCursosTreinamentosCertificacoes= HtmlBootstrap.criarCardBody();
        cardCursosTreinamentosCertificacoes.appendChild(cardbodyCursosTreinamentosCertificacoes);

        //Título e Dados
        let lblCursosTreinamentosCertificacoes= HtmlBootstrap.criarCardTitle('CURSOS, TREINAMENTOS E CERTIFICAÇÕES','titulo-secundario h4 font-weight-bold');
        let listaExperlistaCursosTreinamentosCertificacoes= HtmlBootstrap.criarElementoId(HtmlBootstrap.tag.ul,'CursosTreinamentosCertificacoes','','','','','list-style-type: square;');
        cardbodyCursosTreinamentosCertificacoes.appendChild(lblCursosTreinamentosCertificacoes);
        cardbodyCursosTreinamentosCertificacoes.appendChild(listaExperlistaCursosTreinamentosCertificacoes);

        // INFORMAÇÕES BÁSICAS
        // Card
        let cardInformacoesBasicas= HtmlBootstrap.criarCard('mx-5 border-top-0 border-right-0 border-left-0');
        let cardbodyInformacoesBasicas= HtmlBootstrap.criarCardBody();
        cardInformacoesBasicas.appendChild(cardbodyInformacoesBasicas);

        //Título e Dados
        let lblInformacoesBasicas= HtmlBootstrap.criarCardTitle('INFORMAÇÕES BÁSICAS','titulo-secundario h4 font-weight-bold');
        let listaInformacoesBasicas= HtmlBootstrap.criarElementoId(HtmlBootstrap.tag.ul,'InformacoesBasicas','','','','','list-style-type: square;');
        cardInformacoesBasicas.appendChild(lblInformacoesBasicas);
        cardInformacoesBasicas.appendChild(listaInformacoesBasicas);

        // Incluir informações no main
        main.appendChild(hgroupSite);
        main.appendChild(cardDadosPrincipais);
        main.appendChild(cardFormacoes);
        main.appendChild(cardExperiencias);
        main.appendChild(cardCursosTreinamentosCertificacoes);
        main.appendChild(cardInformacoesBasicas);

        // FOOTER - Rodapé do Site
        // let footer = document.getElementById('rodapeSite');
    }

    // Carrega os dados do JSON na página
    carregarCurriculo(data){
        document.getElementById("atualizadoEm").appendChild(document.createTextNode(data.atualizadoEm));
        document.getElementById("nome").appendChild(document.createTextNode(data.nome));
        document.getElementById("titulo").appendChild(document.createTextNode(data.titulo));
        document.getElementById("idade").appendChild(document.createTextNode(Util.calcularIdade(Util.converteDataBR(data.dataNascimento))+' anos'));	
        document.getElementById("estadoCivil").appendChild(document.createTextNode(data.estadoCivil));
        document.getElementById("email").appendChild(document.createTextNode(data.emailPessoal));
        document.getElementById("email").setAttribute('href',`mailto:${data.emailPessoal}`);
        document.getElementById("linkedIn").appendChild(document.createTextNode(data.linkedIn));
        document.getElementById("linkedIn").setAttribute('href',data.linkedIn);
            
        // Carrega Lista de Formação Acadêmica com suas tags de exibição 
        const formacoesList = document.getElementById('formacoes');
        var dnone= "";
        data.formacoes.forEach(formacao => {
            //const li = document.createElement('li');
            const li= HtmlBootstrap.criarElemento(HtmlBootstrap.tag.li);

            if (HtmlBootstrap.validarArgumento(formacao.TCC) ||
                HtmlBootstrap.validarArgumento(formacao.TCClink))
                dnone= "d-none";

            // Nome da Instituto
            let spanInstituto= HtmlBootstrap.criarElemento(HtmlBootstrap.tag.span, 'font-weight-bold border-bottom border-secondary', formacao.instituto);
            // Dados
            let ulInstituto= HtmlBootstrap.criarElemento(HtmlBootstrap.tag.ul);
            spanInstituto.appendChild(ulInstituto);
            //Área	
            let lblArea= HtmlBootstrap.criarElemento(HtmlBootstrap.tag.li);
            let txtArea= HtmlBootstrap.criarElemento(HtmlBootstrap.tag.span,'font-weight-bold','Área: ');
            let valArea= HtmlBootstrap.criarElemento(HtmlBootstrap.tag.span,'texto-destaque',formacao.area)
            lblArea.appendChild(txtArea);
            lblArea.appendChild(valArea);
            ulInstituto.appendChild(lblArea);
            //Concluído em	
            let lblConcluidoEm= HtmlBootstrap.criarElemento(HtmlBootstrap.tag.li);
            let txtConcluidoEm= HtmlBootstrap.criarElemento(HtmlBootstrap.tag.span,'font-weight-bold','Concluído em: ');
            let valConcluidoEm= HtmlBootstrap.criarElemento(HtmlBootstrap.tag.span,'texto-destaque',formacao.concluidoEm);
            lblConcluidoEm.appendChild(txtConcluidoEm);
            lblConcluidoEm.appendChild(valConcluidoEm);
            ulInstituto.appendChild(lblConcluidoEm);
            
            //TCC	
            let lblTCC= HtmlBootstrap.criarElemento(HtmlBootstrap.tag.li,dnone);
            let txtTCC= HtmlBootstrap.criarElemento(HtmlBootstrap.tag.span,'font-weight-bold','TCC: ');
            let valTCC= HtmlBootstrap.criarElemento(HtmlBootstrap.tag.a,'texto-padrao-link',formacao.TCC,formacao.TCClink,'TCC','tooltip');
            lblTCC.appendChild(txtTCC);
            lblTCC.appendChild(valTCC);
            ulInstituto.appendChild(lblTCC);

            li.appendChild(spanInstituto);
            li.appendChild(ulInstituto);

            formacoesList.appendChild(li);});
        
        // Carrega Lista de Experiências com suas tags de exibição 
        const experienciasList = document.getElementById('experiencias');
        data.experiencias.forEach(experiencia => {
            const li = HtmlBootstrap.criarElemento(HtmlBootstrap.tag.li);

            // Nome da Empresa
            let spanEmpresa= HtmlBootstrap.criarElemento(HtmlBootstrap.tag.span,'font-weight-bold border-bottom border-secondary',experiencia.empresa);
            // Dados
            let ulEmpresa= HtmlBootstrap.criarElemento(HtmlBootstrap.tag.ul);
            spanEmpresa.appendChild(ulEmpresa);
            //Cargo
            let lblCargo= HtmlBootstrap.criarElemento(HtmlBootstrap.tag.li);
            let txtCargo= HtmlBootstrap.criarElemento(HtmlBootstrap.tag.span,'font-weight-bold','Cargo: ');
            let valCargo= HtmlBootstrap.criarElemento(HtmlBootstrap.tag.span,'texto-destaque',experiencia.cargo)
            lblCargo.appendChild(txtCargo);
            lblCargo.appendChild(valCargo);
            ulEmpresa.appendChild(lblCargo);
            //Modalidade
            let lblModalidade= HtmlBootstrap.criarElemento(HtmlBootstrap.tag.li);
            let txtModalidade= HtmlBootstrap.criarElemento(HtmlBootstrap.tag.span,'font-weight-bold','Modalidade: ');
            let valModalidade= HtmlBootstrap.criarElemento(HtmlBootstrap.tag.span,'',experiencia.modalidade);
            lblModalidade.appendChild(txtModalidade);
            lblModalidade.appendChild(valModalidade);
            ulEmpresa.appendChild(lblModalidade);
            
            //Período
            let lblPeriodo= HtmlBootstrap.criarElemento(HtmlBootstrap.tag.li);
            let txtPeriodo= HtmlBootstrap.criarElemento(HtmlBootstrap.tag.span,'font-weight-bold','Período: ')
            let valPeriodo= HtmlBootstrap.criarElemento(HtmlBootstrap.tag.span,'',experiencia.periodo);
            lblPeriodo.appendChild(txtPeriodo);
            lblPeriodo.appendChild(valPeriodo);
            ulEmpresa.appendChild(lblPeriodo);

            //Atividades
            let lblAtividades= HtmlBootstrap.criarElemento(HtmlBootstrap.tag.li);
            let txtAtividades= HtmlBootstrap.criarElemento(HtmlBootstrap.tag.span,'font-weight-bold','Atividades: ');
            let valAtividades= HtmlBootstrap.criarElemento(HtmlBootstrap.tag.span,'',experiencia.atividades);
            lblAtividades.appendChild(txtAtividades);
            lblAtividades.appendChild(valAtividades);
            ulEmpresa.appendChild(lblAtividades);
            
            li.appendChild(spanEmpresa);
            li.appendChild(ulEmpresa);
            experienciasList.appendChild(li);});
        
        // Carrega Lista de Cursos Treinamentos Certificações com suas tags de exibição 
        const CursosTreinamentosCertificacoesList = document.getElementById('CursosTreinamentosCertificacoes');
        data.CursosTreinamentosCertificacoes.forEach(item => {
            const li = HtmlBootstrap.criarElemento(HtmlBootstrap.tag.li);

            // Tipo
            let lblTipo= HtmlBootstrap.criarElemento(HtmlBootstrap.tag.span,'font-weight-bold',item.tipo+': ');
            li.appendChild(lblTipo);
            // Nome
            let lblNome= HtmlBootstrap.criarElemento(HtmlBootstrap.tag.a,'texto-destaque',item.nome,item.link,item.nome);
            li.appendChild(lblNome);
            // Onde
            li.appendChild(document.createTextNode(', '+item.onde));
            // Quando
            let lblQuando= HtmlBootstrap.criarElemento(HtmlBootstrap.tag.span,'font-weight-bold',item.quando);
            li.appendChild(lblQuando);

            CursosTreinamentosCertificacoesList.appendChild(li);});
                
        // Carrega Lista de Informações com suas tags de exibição 
        const InformacoesBasicasList = document.getElementById('InformacoesBasicas');
        data.InformacoesBasicas.forEach(item => {
            const li= HtmlBootstrap.criarElemento(HtmlBootstrap.tag.li);

            // Informação
            li.appendChild(document.createTextNode(item));

            InformacoesBasicasList.appendChild(li);});	
        
        const rodapeSite = document.getElementById('rodapeSite');
        rodapeSite.appendChild(document.createTextNode(data.rodapeSite + ' (v20240630)'));
    }

    alterarEstilo(dados) {
        var elementos= document.querySelectorAll(".titulo-site");
     
        elementos.forEach(function(elemento){
            elemento.style.fontFamily = dados.tituloSite;
            elemento.classList.add(dados.tituloSiteCor);
            });

        elementos = document.querySelectorAll(".titulo-principal");
        elementos.forEach(function(elemento){
            elemento.style.fontFamily = dados.tituloPrincipal;
            elemento.classList.add(dados.tituloPrincipalCor);
            });

        elementos = document.querySelectorAll(".titulo-secundario");
        elementos.forEach(function(elemento){
            elemento.style.fontFamily = dados.tituloSecundario;
            elemento.classList.add(dados.tituloSecundarioCor);
            });

        elementos = document.querySelectorAll(".texto-destaque");
        elementos.forEach(function(elemento){
            elemento.style.fontFamily = dados.textoDestaque;
            elemento.classList.add(dados.textoDestaqueCor);
            });

        elementos = document.querySelectorAll(".texto-padrao");
        elementos.forEach(function(elemento){
            elemento.style.fontFamily = dados.textoPadrao;
            elemento.classList.add(dados.textoPadraoCor);
            });	

        elementos = document.querySelectorAll(".texto-padrao-link");
        elementos.forEach(function(elemento){
            elemento.style.fontFamily = dados.textoPadraoLink;
            elemento.classList.add(dados.textoPadraoLinkCor);
            });	
     
 }
}

export default CurriculoView;