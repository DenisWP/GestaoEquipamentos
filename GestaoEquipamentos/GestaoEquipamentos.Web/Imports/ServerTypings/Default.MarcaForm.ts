
namespace GestaoEquipamentos.Default {
    export class MarcaForm extends Serenity.PrefixedContext {
        static formKey = 'Default.Marca';
    }

    export interface MarcaForm {
        Nome: Serenity.StringEditor;
    }

    [,
        ['Nome', () => Serenity.StringEditor]
    ].forEach(x => Object.defineProperty(MarcaForm.prototype, <string>x[0], {
        get: function () {
            return this.w(x[0], (x[1] as any)());
        },
        enumerable: true,
        configurable: true
    }));
}