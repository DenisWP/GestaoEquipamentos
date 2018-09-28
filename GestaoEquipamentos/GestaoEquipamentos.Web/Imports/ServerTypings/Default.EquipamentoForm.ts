
namespace GestaoEquipamentos.Default {
    export class EquipamentoForm extends Serenity.PrefixedContext {
        static formKey = 'Default.Equipamento';
    }

    export interface EquipamentoForm {
        Material: Serenity.IntegerEditor;
        Marca: Serenity.IntegerEditor;
        Modelo: Serenity.IntegerEditor;
        Serial: Serenity.StringEditor;
        Imei1: Serenity.StringEditor;
        Imei2: Serenity.StringEditor;
        CompraData: Serenity.DateEditor;
        CompraNotaFiscal: Serenity.StringEditor;
        CompraValor: Serenity.DecimalEditor;
        Status: Serenity.IntegerEditor;
    }

    [,
        ['Material', () => Serenity.IntegerEditor],
        ['Marca', () => Serenity.IntegerEditor],
        ['Modelo', () => Serenity.IntegerEditor],
        ['Serial', () => Serenity.StringEditor],
        ['Imei1', () => Serenity.StringEditor],
        ['Imei2', () => Serenity.StringEditor],
        ['CompraData', () => Serenity.DateEditor],
        ['CompraNotaFiscal', () => Serenity.StringEditor],
        ['CompraValor', () => Serenity.DecimalEditor],
        ['Status', () => Serenity.IntegerEditor]
    ].forEach(x => Object.defineProperty(EquipamentoForm.prototype, <string>x[0], {
        get: function () {
            return this.w(x[0], (x[1] as any)());
        },
        enumerable: true,
        configurable: true
    }));
}