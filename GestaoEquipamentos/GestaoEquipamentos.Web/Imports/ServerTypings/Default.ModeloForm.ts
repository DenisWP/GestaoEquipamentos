
namespace GestaoEquipamentos.Default {
    export class ModeloForm extends Serenity.PrefixedContext {
        static formKey = 'Default.Modelo';
    }

    export interface ModeloForm {
        Nome: Serenity.StringEditor;
    }

    [,
        ['Nome', () => Serenity.StringEditor]
    ].forEach(x => Object.defineProperty(ModeloForm.prototype, <string>x[0], {
        get: function () {
            return this.w(x[0], (x[1] as any)());
        },
        enumerable: true,
        configurable: true
    }));
}