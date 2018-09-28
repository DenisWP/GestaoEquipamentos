
namespace GestaoEquipamentos.Default {
    export interface AcessorioRow {
        Id?: number;
        Nome?: string;
    }

    export namespace AcessorioRow {
        export const idProperty = 'Id';
        export const nameProperty = 'Nome';
        export const localTextPrefix = 'Default.Acessorio';

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