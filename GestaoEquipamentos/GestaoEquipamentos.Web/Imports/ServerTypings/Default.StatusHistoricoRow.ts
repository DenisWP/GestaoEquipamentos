
namespace GestaoEquipamentos.Default {
    export interface StatusHistoricoRow {
        Id?: number;
        Equipamento?: number;
        Status?: number;
        DataHora?: string;
        Observacao?: string;
        EquipamentoMaterial?: number;
        EquipamentoMarca?: number;
        EquipamentoModelo?: number;
        EquipamentoSerial?: string;
        EquipamentoImei1?: string;
        EquipamentoImei2?: string;
        EquipamentoCompraData?: string;
        EquipamentoCompraNotaFiscal?: string;
        EquipamentoCompraValor?: number;
        EquipamentoStatus?: number;
        StatusNome?: string;
    }

    export namespace StatusHistoricoRow {
        export const idProperty = 'Id';
        export const nameProperty = 'Observacao';
        export const localTextPrefix = 'Default.StatusHistorico';

        export namespace Fields {
            export declare const Id;
            export declare const Equipamento;
            export declare const Status;
            export declare const DataHora;
            export declare const Observacao;
            export declare const EquipamentoMaterial;
            export declare const EquipamentoMarca;
            export declare const EquipamentoModelo;
            export declare const EquipamentoSerial;
            export declare const EquipamentoImei1;
            export declare const EquipamentoImei2;
            export declare const EquipamentoCompraData;
            export declare const EquipamentoCompraNotaFiscal;
            export declare const EquipamentoCompraValor;
            export declare const EquipamentoStatus;
            export declare const StatusNome;
        }

        [
            'Id',
            'Equipamento',
            'Status',
            'DataHora',
            'Observacao',
            'EquipamentoMaterial',
            'EquipamentoMarca',
            'EquipamentoModelo',
            'EquipamentoSerial',
            'EquipamentoImei1',
            'EquipamentoImei2',
            'EquipamentoCompraData',
            'EquipamentoCompraNotaFiscal',
            'EquipamentoCompraValor',
            'EquipamentoStatus',
            'StatusNome'
        ].forEach(x => (<any>Fields)[x] = x);
    }
}