
namespace GestaoEquipamentos.Default {
    export class EmprestimoAcessorioForm extends Serenity.PrefixedContext {
        static formKey = 'Default.EmprestimoAcessorio';
    }

    export interface EmprestimoAcessorioForm {
        Emprestimo: Serenity.IntegerEditor;
        Acessorio: Serenity.IntegerEditor;
        Descricao: Serenity.StringEditor;
    }

    [,
        ['Emprestimo', () => Serenity.IntegerEditor],
        ['Acessorio', () => Serenity.IntegerEditor],
        ['Descricao', () => Serenity.StringEditor]
    ].forEach(x => Object.defineProperty(EmprestimoAcessorioForm.prototype, <string>x[0], {
        get: function () {
            return this.w(x[0], (x[1] as any)());
        },
        enumerable: true,
        configurable: true
    }));
}