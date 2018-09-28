
namespace GestaoEquipamentos.Default {
    export interface ModeloRow {
        Id?: number;
        Nome?: string;
    }

    export namespace ModeloRow {
        export const idProperty = 'Id';
        export const nameProperty = 'Nome';
        export const localTextPrefix = 'Default.Modelo';

        export namespace Fields {
            export declare const Id;
            export declare const Nome;
        }

        [
            'Id',
            'Nome'
        ].forEach(x => (<any>Fields)[x] = x);
    }
}