class Util{
    static converteDataBR(dataTexto){
        const [day, month, year] = dataTexto.split('/').map(Number);
    			
		return new Date(year, month - 1, day); // O mês em JavaScript é indexado a partir de 0
    }

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

    static __validarArquivoPEM(conteudo) {
        // Verifica se o arquivo contém os cabeçalhos e rodapés necessários
        const hasChavePrivada = conteudo.includes('-----BEGIN RSA PRIVATE KEY-----') && conteudo.includes('-----END RSA PRIVATE KEY-----');
        const hasCertificado = conteudo.includes('-----BEGIN CERTIFICATE-----') && conteudo.includes('-----END CERTIFICATE-----');

        return hasChavePrivada && hasCertificado;
    }

}

export default Util;