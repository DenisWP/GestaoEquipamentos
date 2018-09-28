
namespace GestaoEquipamentos.Default {
    export interface TipoEmprestimoRow {
        Id?: number;
        Nome?: string;
    }

    export namespace TipoEmprestimoRow {
        export const idProperty = 'Id';
        export const nameProperty = 'Nome';
        export const localTextPrefix = 'Default.TipoEmprestimo';

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