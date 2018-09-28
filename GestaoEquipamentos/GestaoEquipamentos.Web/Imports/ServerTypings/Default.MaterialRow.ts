
namespace GestaoEquipamentos.Default {
    export interface MaterialRow {
        Id?: number;
        Nome?: string;
    }

    export namespace MaterialRow {
        export const idProperty = 'Id';
        export const nameProperty = 'Nome';
        export const localTextPrefix = 'Default.Material';

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