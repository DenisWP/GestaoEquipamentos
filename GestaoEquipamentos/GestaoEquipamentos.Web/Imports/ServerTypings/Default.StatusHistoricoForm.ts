
namespace GestaoEquipamentos.Default {
    export class StatusHistoricoForm extends Serenity.PrefixedContext {
        static formKey = 'Default.StatusHistorico';
    }

    export interface StatusHistoricoForm {
        Equipamento: Serenity.IntegerEditor;
        Status: Serenity.IntegerEditor;
        DataHora: Serenity.DateEditor;
        Observacao: Serenity.StringEditor;
    }

    [,
        ['Equipamento', () => Serenity.IntegerEditor],
        ['Status', () => Serenity.IntegerEditor],
        ['DataHora', () => Serenity.DateEditor],
        ['Observacao', () => Serenity.StringEditor]
    ].forEach(x => Object.defineProperty(StatusHistoricoForm.prototype, <string>x[0], {
        get: function () {
            return this.w(x[0], (x[1] as any)());
        },
        enumerable: true,
        configurable: true
    }));
}