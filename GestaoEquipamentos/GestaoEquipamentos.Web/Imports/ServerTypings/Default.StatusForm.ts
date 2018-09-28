
namespace GestaoEquipamentos.Default {
    export class StatusForm extends Serenity.PrefixedContext {
        static formKey = 'Default.Status';
    }

    export interface StatusForm {
        Nome: Serenity.StringEditor;
    }

    [,
        ['Nome', () => Serenity.StringEditor]
    ].forEach(x => Object.defineProperty(StatusForm.prototype, <string>x[0], {
        get: function () {
            return this.w(x[0], (x[1] as any)());
        },
        enumerable: true,
        configurable: true
    }));
}