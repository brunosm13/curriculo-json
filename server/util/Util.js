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
}

export default Util;