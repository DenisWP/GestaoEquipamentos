
namespace GestaoEquipamentos.Default {
    export interface StatusRow {
        Id?: number;
        Nome?: string;
    }

    export namespace StatusRow {
        export const idProperty = 'Id';
        export const nameProperty = 'Nome';
        export const localTextPrefix = 'Default.Status';

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