
namespace GestaoEquipamentos.Default {
    export class EmprestimoForm extends Serenity.PrefixedContext {
        static formKey = 'Default.Emprestimo';
    }

    export interface EmprestimoForm {
        Tipo: Serenity.IntegerEditor;
        Empresa: Serenity.IntegerEditor;
        Pessoa: Serenity.IntegerEditor;
        Equipamento: Serenity.IntegerEditor;
        DataEmprestimo: Serenity.DateEditor;
        DataDevolucao: Serenity.DateEditor;
        Observacao: Serenity.StringEditor;
    }

    [,
        ['Tipo', () => Serenity.IntegerEditor],
        ['Empresa', () => Serenity.IntegerEditor],
        ['Pessoa', () => Serenity.IntegerEditor],
        ['Equipamento', () => Serenity.IntegerEditor],
        ['DataEmprestimo', () => Serenity.DateEditor],
        ['DataDevolucao', () => Serenity.DateEditor],
        ['Observacao', () => Serenity.StringEditor]
    ].forEach(x => Object.defineProperty(EmprestimoForm.prototype, <string>x[0], {
        get: function () {
            return this.w(x[0], (x[1] as any)());
        },
        enumerable: true,
        configurable: true
    }));
}