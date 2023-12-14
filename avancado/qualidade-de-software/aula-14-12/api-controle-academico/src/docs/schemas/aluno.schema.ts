export const alunoSchema = {
  type: "object",
  properties: {
    id: {
      type: "string",
      format: "uuid",
      summary: "id do aluno",
      example: "fcf14690-9e08-407b-911c-12354409b9d7",
    },
    nome: {
      type: "string",
      summary: "Nome completo do aluno",
      example: "xablau da silva",
    },
    email: {
      type: "string",
      format: "email",
      summary: "Email do aluno",
      example: "xablau@teste.com",
    },
    idade: {
      type: "integer",
      format: "int32",
      summary: "Idade do aluno",
      example: 21,
    },
    endereco: {
      type: "object",
      properties: {
        id: {
          type: "string",
          format: "uuid",
          summary: "id do registro de endereço do aluno",
          example: "fcf14690-9e08-407b-911c-12354409b9d7",
        },
        logradouro: {
          type: "string",
          summary: "Nome da rua do aluno",
          example: "Rua 1",
        },
        cep: {
          type: "string",
          summary: "Cep do endereço do aluno",
          example: "99988-000",
        },
        numero: {
          type: "string",
          summary: "Numero do endereço do aluno",
          example: "casa 10 bloco c",
        },
        cidade: {
          type: "string",
          summary: "Cidade do endereço do aluno",
          example: "Parobé",
        },
        uf: {
          type: "string",
          summary: "UF do endereço do aluno",
          example: "RS",
        },
        complemento: {
          type: "string",
          summary: "Complemento do endereço do aluno",
          example: "Apartamento 02",
        },
      },
      required: [
        "id",
        "logradouro",
        "cep",
        "numero",
        "cidade",
        "uf",
        "complemento",
      ],
    },
  },
  required: ["id", "nome", "email"],
};
