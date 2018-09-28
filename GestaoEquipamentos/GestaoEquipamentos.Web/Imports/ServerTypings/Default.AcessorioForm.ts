
namespace GestaoEquipamentos.Default {
    export class AcessorioForm extends Serenity.PrefixedContext {
        static formKey = 'Default.Acessorio';
    }

    export interface AcessorioForm {
        Nome: Serenity.StringEditor;
    }

    [,
        ['Nome', () => Serenity.StringEditor]
    ].forEach(x => Object.defineProperty(AcessorioForm.prototype, <string>x[0], {
        get: function () {
            return this.w(x[0], (x[1] as any)());
        },
        enumerable: true,
        configurable: true
    }));
}