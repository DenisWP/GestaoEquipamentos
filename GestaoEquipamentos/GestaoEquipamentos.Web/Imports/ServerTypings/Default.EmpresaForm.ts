
namespace GestaoEquipamentos.Default {
    export class EmpresaForm extends Serenity.PrefixedContext {
        static formKey = 'Default.Empresa';
    }

    export interface EmpresaForm {
        Nome: Serenity.StringEditor;
        Cnpj: Serenity.StringEditor;
        Longradouro: Serenity.StringEditor;
        Número: Serenity.StringEditor;
        Complemento: Serenity.StringEditor;
        Bairro: Serenity.StringEditor;
        Cidade: Serenity.StringEditor;
        Cep: Serenity.StringEditor;
        Uf: Serenity.StringEditor;
        Ativa: Serenity.BooleanEditor;
    }

    [,
        ['Nome', () => Serenity.StringEditor],
        ['Cnpj', () => Serenity.StringEditor],
        ['Longradouro', () => Serenity.StringEditor],
        ['Número', () => Serenity.StringEditor],
        ['Complemento', () => Serenity.StringEditor],
        ['Bairro', () => Serenity.StringEditor],
        ['Cidade', () => Serenity.StringEditor],
        ['Cep', () => Serenity.StringEditor],
        ['Uf', () => Serenity.StringEditor],
        ['Ativa', () => Serenity.BooleanEditor]
    ].forEach(x => Object.defineProperty(EmpresaForm.prototype, <string>x[0], {
        get: function () {
            return this.w(x[0], (x[1] as any)());
        },
        enumerable: true,
        configurable: true
    }));
}