
namespace GestaoEquipamentos.Default {
    export class TipoEmprestimoForm extends Serenity.PrefixedContext {
        static formKey = 'Default.TipoEmprestimo';
    }

    export interface TipoEmprestimoForm {
        Nome: Serenity.StringEditor;
    }

    [,
        ['Nome', () => Serenity.StringEditor]
    ].forEach(x => Object.defineProperty(TipoEmprestimoForm.prototype, <string>x[0], {
        get: function () {
            return this.w(x[0], (x[1] as any)());
        },
        enumerable: true,
        configurable: true
    }));
}