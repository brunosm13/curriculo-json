# curriculo.json

<details>

Este JSON é utilizado para carregar as informações do currículo. Os atributos disponíveis são:
- **atualizadoEm**: Data da última atualização das informações no formato "Última atualização em maio de 2024".
- **titulo**: Título principal, por exemplo, "CURRICULUM VITAE".
- **nome**: Nome completo da pessoa.
- **dataNascimento**: Data de nascimento no formato "DD/MM/AAAA".
- **estadoCivil**: Estado civil da pessoa.
- **emailPessoal**: Endereço de e-mail pessoal.
- **linkedIn**: Link para o perfil do LinkedIn da pessoa.
- **formacoes**: Lista de formações acadêmicas e profissionais, cada uma contendo:
  - **instituto**: Instituição onde foi realizada a formação.
  - **area**: Área de estudo ou curso realizado.
  - **concluidoEm**: Ano de conclusão.
  - **TCC**: (opcional) Título do Trabalho de Conclusão de Curso.
  - **TCClink**: (opcional) Link para acesso ao TCC.
- **experiencias**: Lista de experiências profissionais, cada uma contendo:
  - **empresa**: Nome da empresa.
  - **cargo**: Cargo ocupado.
  - **modalidade**: Modalidade de trabalho (presencial, home office, etc.).
  - **periodo**: Período de atuação na empresa.
  - **atividades**: Descrição das principais atividades realizadas.
- **CursosTreinamentosCertificacoes**: Lista de cursos, treinamentos e certificações obtidas, cada um contendo:
  - **tipo**: Curso, Treinamento ou Certificado.
  - **nome**: Nome do curso, treinamento ou certificação.
  - **link**: (opcional) Link para mais informações sobre o curso, treinamento ou certificado.
  - **onde**: Local onde o curso ou treinamento foi realizado ou certificado foi emitido.
  - **quando**: Ano em que o curso ou treinamento foi concluído ou certificado foi obtido.
- **InformacoesBasicas**: Informações adicionais sobre habilidades, interesses ou atividades relevantes.
- **rodapeSite**: Informação sobre quem desenvolveu o site, incluindo tecnologias utilizadas.

Este JSON pode ser editado manualmente por quem possui acesso ao projeto para atualizar as informações conforme necessário.
</details>

# fonte-config.json

<details>
Este JSON define as configurações de fontes e cores utilizadas no currículo, incorporando informações do Bootstrap, HTML e CSS.

- **tituloSite**: Fonte utilizada para o título do site.
- **tituloSiteCor**: Classe do Bootstrap ou estilo CSS aplicado ao título do site para cor.
- **tituloPrincipal**: Fonte utilizada para os títulos principais, como "CURRICULUM VITAE".
- **tituloPrincipalCor**: Classe do Bootstrap ou estilo CSS aplicado aos títulos principais para cor.
- **tituloSecundario**: Fonte utilizada para títulos secundários.
- **tituloSecundarioCor**: Classe do Bootstrap ou estilo CSS aplicado aos títulos secundários para cor.
- **textoDestaque**: Fonte utilizada para textos em destaque.
- **textoDestaqueCor**: Classe do Bootstrap ou estilo CSS aplicado aos textos em destaque para cor.
- **textoPadrao**: Fonte padrão para o texto principal do currículo.
- **textoPadraoCor**: Classe do Bootstrap ou estilo CSS aplicado ao texto padrão para cor.
- **textoPadraoLink**: Fonte utilizada para links no texto padrão.
- **textoPadraoLinkCor**: Classe do Bootstrap ou estilo CSS aplicado aos links no texto padrão para cor.

Essas definições são aplicadas no currículo para garantir consistência visual e estilística utilizando as tecnologias mencionadas.

Este JSON pode ser ajustado conforme necessário para modificar as fontes e cores do currículo conforme especificado.
</details>
