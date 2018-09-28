
namespace GestaoEquipamentos.Default {
    export interface EquipamentoRow {
        Id?: number;
        Material?: number;
        Marca?: number;
        Modelo?: number;
        Serial?: string;
        Imei1?: string;
        Imei2?: string;
        CompraData?: string;
        CompraNotaFiscal?: string;
        CompraValor?: number;
        Status?: number;
        MaterialNome?: string;
        MarcaNome?: string;
        ModeloNome?: string;
        StatusNome?: string;
    }

    export namespace EquipamentoRow {
        export const idProperty = 'Id';
        export const nameProperty = 'Serial';
        export const localTextPrefix = 'Default.Equipamento';

        export namespace Fields {
            export declare const Id;
            export declare const Material;
            export declare const Marca;
            export declare const Modelo;
            export declare const Serial;
            export declare const Imei1;
            export declare const Imei2;
            export declare const CompraData;
            export declare const CompraNotaFiscal;
            export declare const CompraValor;
            export declare const Status;
            export declare const MaterialNome;
            export declare const MarcaNome;
            export declare const ModeloNome;
            export declare const StatusNome;
        }

        [
            'Id',
            'Material',
            'Marca',
            'Modelo',
            'Serial',
            'Imei1',
            'Imei2',
            'CompraData',
            'CompraNotaFiscal',
            'CompraValor',
            'Status',
            'MaterialNome',
            'MarcaNome',
            'ModeloNome',
            'StatusNome'
        ].forEach(x => (<any>Fields)[x] = x);
    }
}