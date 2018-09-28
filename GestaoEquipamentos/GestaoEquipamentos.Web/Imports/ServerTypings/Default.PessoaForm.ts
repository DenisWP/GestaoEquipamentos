
namespace GestaoEquipamentos.Default {
    export class PessoaForm extends Serenity.PrefixedContext {
        static formKey = 'Default.Pessoa';
    }

    export interface PessoaForm {
        Nome: Serenity.StringEditor;
        Cpf: Serenity.StringEditor;
        Rg: Serenity.StringEditor;
        Longradouro: Serenity.StringEditor;
        Numero: Serenity.StringEditor;
        Complemento: Serenity.StringEditor;
        Bairro: Serenity.StringEditor;
        Cidade: Serenity.StringEditor;
        Cep: Serenity.StringEditor;
        Uf: Serenity.StringEditor;
    }

    [,
        ['Nome', () => Serenity.StringEditor],
        ['Cpf', () => Serenity.StringEditor],
        ['Rg', () => Serenity.StringEditor],
        ['Longradouro', () => Serenity.StringEditor],
        ['Numero', () => Serenity.StringEditor],
        ['Complemento', () => Serenity.StringEditor],
        ['Bairro', () => Serenity.StringEditor],
        ['Cidade', () => Serenity.StringEditor],
        ['Cep', () => Serenity.StringEditor],
        ['Uf', () => Serenity.StringEditor]
    ].forEach(x => Object.defineProperty(PessoaForm.prototype, <string>x[0], {
        get: function () {
            return this.w(x[0], (x[1] as any)());
        },
        enumerable: true,
        configurable: true
    }));
}