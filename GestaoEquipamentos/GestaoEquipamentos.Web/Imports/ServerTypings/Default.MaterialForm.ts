
namespace GestaoEquipamentos.Default {
    export class MaterialForm extends Serenity.PrefixedContext {
        static formKey = 'Default.Material';
    }

    export interface MaterialForm {
        Nome: Serenity.StringEditor;
    }

    [,
        ['Nome', () => Serenity.StringEditor]
    ].forEach(x => Object.defineProperty(MaterialForm.prototype, <string>x[0], {
        get: function () {
            return this.w(x[0], (x[1] as any)());
        },
        enumerable: true,
        configurable: true
    }));
}