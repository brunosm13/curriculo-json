import fs from 'fs';
import path from 'path';
import Util from '../util/Util.js';

class CurriculoService {
    constructor(dadosJSON = null) {
        if (dadosJSON) {
            this.dadosJSON = dadosJSON;
        } else {
            this.filePath = path.join(process.cwd(), 'server', 'data', 'curriculo.json');
        }

        // Cria validação por tipo de campo
        this.validacoesTipoMap = {
            'texto': {
                validar: Util.validarTexto,
                mensagem: (nome, min, max) => `O campo '${nome}' deve ter entre ${min} e ${max} caracteres.`
            },
            'data': {
                validar: Util.validarData,
                mensagem: (nome, min, max) => `O campo '${nome}' deve estar entre ${min} e ${max} dias a partir de hoje.`
            },
            'email': {
                validar: Util.validarEmail,
                mensagem: (nome) => `O campo '${nome}' deve ser um e-mail válido.`
            },
            'link': {
                validar: Util.validarLink,
                mensagem: (nome) => `O campo '${nome}' deve ser um link válido.`
            },
            'grupo': {
                validar: Util.validarGrupo,
                mensagem: (nome, min, max) => `A seção '${nome}' deve estar entre ${min} e ${max} registros.`
            }
        };

        // Configuração de validação de campos -- Informações Principais
        this.validacoes = {
            atualizadoEm: { id:'txtUltimaAtualizacao', nome:'Última atualização do Currículo', tipo: 'texto', min: 5, max: 150, obrigatorio: true},
            titulo: { id:'txtTitulo', nome:'Título', tipo: 'texto', min: 5, max: 150, obrigatorio: true},
            nome: { id:'txtNome', nome:'Nome Completo', tipo: 'texto', min: 5, max: 150, obrigatorio: true},
            dataNascimento: { id:'dtDataNascimento', nome:'Data de Nascimento', tipo: 'data', min: -73000, max: 0, obrigatorio: true},
            estadoCivil: { id:'cbEstadoCivil', nome:'Estado Cívil', tipo: 'lista', min: 5, max: 50, obrigatorio: true},
            emailPessoal: { id:'txtEmail', nome:'Email pessoal', tipo: 'email', min: 5, max: 150, obrigatorio: true},
            linkedIn: { id:'txtLinkedIn', nome:'LinkedIn', tipo: 'link', min: 5, max: 200, obrigatorio: false},
            formacoes: {id:'cardbodyFormacoes', nome:'FORMAÇÕES ACADÊMICAS', tipo: 'grupo', min: 1, max: 50, obrigatorio: true},
            experiencias: {id:'cardbodyExperiencias#', nome:'EXPERIÊNCIAS PROFISSIONAIS', tipo: 'grupo', min: 1, max: 50, obrigatorio: true},
            CursosTreinamentosCertificacoes: {id:'cardbodyCursosTreinamentosCertificacoes', nome:'CURSOS, TREINAMENTOS E CERTIFICAÇÕES', tipo: 'grupo', min: 1, max: 50, obrigatorio: true},
            InformacoesBasicas: {id:'cardbodyInformacoesBasicas', nome:'INFORMAÇÕES BÁSICAS', tipo: 'grupo', min: 1, max: 50, obrigatorio: true}
        };

        // Configuração de validação de campos -- Formações Acadêmicas
        this.validacoesFormacoes={
            instituto:{id:'', nome:'Instituto', tipo: 'texto', min: 5, max: 150, obrigatorio: true},
            area:{id:'', nome:'Área ou Curso', tipo: 'texto', min: 5, max: 50, obrigatorio: true},
            concluidoEm:{id:'', nome:'Conclusão ou previsão de conclusão', tipo: 'texto', min: 5, max: 50, obrigatorio: true},
            TCC:{id:'', nome:'TCC', tipo: 'texto', min: 5, max: 50, obrigatorio: false},
            TCClink:{id:'', nome:'Link do TCC', tipo: 'link', min: 5, max: 200, obrigatorio: false}
        };

        this.validacoesExperiencias={};
        this.validacoesCursosTreinamentosCertificacoes={};
        this.validacoesInformacoesBasicas={};

        // Faz a chamada da validação da lista que pertence o campo
        this.validacoesListaMap = {
            '': this.validacoes,
            'formacoes': this.validacoesFormacoes,
            'experiencias': this.validacoesExperiencias,
            'CursosTreinamentosCertificacoes': this.validacoesCursosTreinamentosCertificacoes,
            'InformacoesBasicas': this.validacoesInformacoesBasicas
        };
    }

    carregarDados() {
        return new Promise((resolve, reject) => {
            fs.readFile(this.filePath, 'utf-8', (err, data) => {
                if (err) {
                    reject(err);
                } else {
                    try {
                        const parsedData = JSON.parse(data);
                        this.dadosJSON = parsedData;
                        resolve(parsedData);
                    } catch (error) {
                        reject(error);
                    }
                }
            });
        });
    }

    validarDado(valor, campo, lista='') {
        let erros=[];
        const validacao = this.validacoesListaMap[lista];
        const {id, nome, tipo, min, max, obrigatorio} = validacao[campo];
        
        if (obrigatorio && (!valor || valor.length === 0)) {
            let campoErro={
                id: id,
                mensagem: `O campo '${nome}' é obrigatório.`
            };
            if (tipo=='grupo')
                campoErro.mensagem= `A seção '${nome}' é obrigatória.`;
            erros.push(campoErro);
        }   

        if (valor && valor.length > 0) {
            if (this.validacoesTipoMap[tipo] && !this.validacoesTipoMap[tipo].validar(valor, min, max)) {
                let campoErro = {
                    id: id,
                    mensagem: this.validacoesTipoMap[tipo].mensagem(nome, min, max)
                };
                erros.push(campoErro);
            }
        }

        return erros;
    }

    validarDados() {
        //Inicia lista de erros para armanezar o erro e id do campo
        let erros = [];

        if(this.dadosJSON){
            // Valida lista principal
            Object.keys(this.validacoes).forEach(campo => {
                const valor = this.dadosJSON[campo];
                const errosEncontrados= this.validarDado(valor, campo)

                if (errosEncontrados.length>0)
                    erros.push(...errosEncontrados);
            });

            // Valida lista de formações
            this.dadosJSON.formacoes.forEach(formacao =>{
                Object.keys(this.validacoesFormacoes).forEach(campo => {
                    const valor = formacao[campo];
                    const errosEncontrados= this.validarDado(valor, campo,'formacoes')
    
                    if (errosEncontrados.length>0)
                        erros.push(...errosEncontrados);
                });
            });

        }
        return erros;
    }
}
export default CurriculoService;
