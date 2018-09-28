
namespace GestaoEquipamentos.Default {
    export class StatusHistoricoAnexoForm extends Serenity.PrefixedContext {
        static formKey = 'Default.StatusHistoricoAnexo';
    }

    export interface StatusHistoricoAnexoForm {
        StatusHistorico: Serenity.IntegerEditor;
        Descricao: Serenity.StringEditor;
        Anexo: Serenity.IntegerEditor;
    }

    [,
        ['StatusHistorico', () => Serenity.IntegerEditor],
        ['Descricao', () => Serenity.StringEditor],
        ['Anexo', () => Serenity.IntegerEditor]
    ].forEach(x => Object.defineProperty(StatusHistoricoAnexoForm.prototype, <string>x[0], {
        get: function () {
            return this.w(x[0], (x[1] as any)());
        },
        enumerable: true,
        configurable: true
    }));
}