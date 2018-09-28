
namespace GestaoEquipamentos.Default {
    export interface StatusHistoricoAnexoRow {
        Id?: number;
        StatusHistorico?: number;
        Descricao?: string;
        Anexo?: number;
        StatusHistoricoEquipamento?: number;
        StatusHistoricoStatus?: number;
        StatusHistoricoDataHora?: string;
        StatusHistoricoObservacao?: string;
    }

    export namespace StatusHistoricoAnexoRow {
        export const idProperty = 'Id';
        export const nameProperty = 'Descricao';
        export const localTextPrefix = 'Default.StatusHistoricoAnexo';

        export namespace Fields {
            export declare const Id;
            export declare const StatusHistorico;
            export declare const Descricao;
            export declare const Anexo;
            export declare const StatusHistoricoEquipamento;
            export declare const StatusHistoricoStatus;
            export declare const StatusHistoricoDataHora;
            export declare const StatusHistoricoObservacao;
        }

        [
            'Id',
            'StatusHistorico',
            'Descricao',
            'Anexo',
            'StatusHistoricoEquipamento',
            'StatusHistoricoStatus',
            'StatusHistoricoDataHora',
            'StatusHistoricoObservacao'
        ].forEach(x => (<any>Fields)[x] = x);
    }
}