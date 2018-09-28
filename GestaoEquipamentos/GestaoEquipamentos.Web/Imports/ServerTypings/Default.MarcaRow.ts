
namespace GestaoEquipamentos.Default {
    export interface MarcaRow {
        Id?: number;
        Nome?: string;
    }

    export namespace MarcaRow {
        export const idProperty = 'Id';
        export const nameProperty = 'Nome';
        export const localTextPrefix = 'Default.Marca';

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