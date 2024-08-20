class Util{
    // Converte data em texto no formato dd/mm/aaaa para date
    static converteDataBR(dataTexto){
        const [day, month, year] = dataTexto.split('/').map(Number);
    			
		return new Date(year, month - 1, day); // O mês em JavaScript é indexado a partir de 0
    }

    // Converte date para data texto no formato dd/mm/aaaa
    static converteParaDataBR(dataDate) {
        // Divide a data ISO (yyyy-mm-dd) em partes
        const partes = dataDate.split("-");
        const ano = partes[0];
        const mes = partes[1];
        const dia = partes[2];
    
        //Retorna a data no formato brasileiro (dd/mm/yyyy)
        return `${dia}/${mes}/${ano}`;
    }

    //Calcula a idade da pessoa
    static calcularIdade(dataNascimento){
        const hoje = new Date();
		let idade = hoje.getFullYear() - dataNascimento.getFullYear();
		const mesDiferente = hoje.getMonth() - dataNascimento.getMonth();

		// Se o mês atual é anterior ao mês de nascimento ou se estamos no mês de nascimento
		// mas o dia atual é anterior ao dia de nascimento, subtrai um ano da idade.
		if (mesDiferente < 0 || (mesDiferente === 0 && hoje.getDate() < idade.getDate())) {
			idade--;}

    	return idade;
    }

    // Efetua a leitura do PEM responsável pela validação do SSL
	static lerArquivoPEM(fs, caminho) {
        try {
            const conteudo = fs.readFileSync(caminho, 'utf8');

            if (this.__validarArquivoPEM(conteudo)) {
                // Extraia a chave privada e o certificado do conteúdo do arquivo PEM
                const chavePrivada = conteudo.match(/-----BEGIN RSA PRIVATE KEY-----[\s\S]+?-----END RSA PRIVATE KEY-----/g)?.[0];
                const certificado = conteudo.match(/-----BEGIN CERTIFICATE-----[\s\S]+?-----END CERTIFICATE-----/g)?.[0];
                
                let certificadoCA;
                const certificados = conteudo.match(/-----BEGIN CERTIFICATE-----[\s\S]+?-----END CERTIFICATE-----/g);
                
                if (certificados && certificados.length > 1) {
                    // O arquivo PEM pode conter a cadeia de certificados
                    certificadoCA = certificados.slice(1).join('\n');
                }
                
                return {
                    key: chavePrivada,
                    cert: certificado,
                    ca: certificadoCA // Se necessário
                };
            } else {
                console.error('O arquivo PEM não é válido');
                return null;
            }
        } catch (err) {
            console.error('Erro ao ler o arquivo PEM:', err);
            return null;
        }
    }

    // Valida o arquivo PEM para efetuar a leitura
    static __validarArquivoPEM(conteudo) {
        // Verifica se o arquivo contém os cabeçalhos e rodapés necessários
        const hasChavePrivada = conteudo.includes('-----BEGIN RSA PRIVATE KEY-----') && conteudo.includes('-----END RSA PRIVATE KEY-----');
        const hasCertificado = conteudo.includes('-----BEGIN CERTIFICATE-----') && conteudo.includes('-----END CERTIFICATE-----');

        return hasChavePrivada && hasCertificado;
    }

    static validarTexto(texto, minimo, maximo) {
        const tamanho = texto.trim().length;
        return tamanho >= minimo && tamanho <= maximo;
    }

    static validarData(dataString, minDias, maxDias) {
        // Converte a string de data no formato dd/mm/aaaa para um objeto Date
        const data = this.converteDataBR(dataString);

        // Calcula as datas mínima e máxima com base na quantidade de dias
        const hoje = new Date();
        const min = new Date(hoje);
        min.setDate(hoje.getDate() + minDias);

        const max = new Date(hoje);
        max.setDate(hoje.getDate() + maxDias);

        // Verifica se a data é válida e está dentro do intervalo
        return !isNaN(data.getTime()) && data >= min && data <= max;
    }

    static validarEmail(email, minimo, maximo) {
        const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regexEmail.test(email) && email.length >= minimo && email.length <= maximo;
    }

    static validarLink(link, minimo, maximo) {
        // Adiciona "http://" ao link se ele não começar com "http://" ou "https://"
        if (!/^https?:\/\//i.test(link))
            link = 'http://' + link;
        const urlRegex = /^(https?):\/\/[^\s/$.?#].[^\s]*$/i;
    
        // Verifica se o link está dentro dos limites de comprimento e se corresponde ao regex de URL
        return link.length >= minimo && link.length <= maximo && urlRegex.test(link);
    }

    static validarGrupo(valor, minimo, maximo) {
        return valor.length >= minimo && valor.length <= maximo;
    }
}

export default Util;