
namespace GestaoEquipamentos.Default {
    export interface EmpresaRow {
        Id?: number;
        Nome?: string;
        Cnpj?: string;
        Longradouro?: string;
        Número?: string;
        Complemento?: string;
        Bairro?: string;
        Cidade?: string;
        Cep?: string;
        Uf?: string;
        Ativa?: boolean;
    }

    export namespace EmpresaRow {
        export const idProperty = 'Id';
        export const nameProperty = 'Nome';
        export const localTextPrefix = 'Default.Empresa';

        export namespace Fields {
            export declare const Id;
            export declare const Nome;
            export declare const Cnpj;
            export declare const Longradouro;
            export declare const Número;
            export declare const Complemento;
            export declare const Bairro;
            export declare const Cidade;
            export declare const Cep;
            export declare const Uf;
            export declare const Ativa;
        }

        [
            'Id',
            'Nome',
            'Cnpj',
            'Longradouro',
            'Número',
            'Complemento',
            'Bairro',
            'Cidade',
            'Cep',
            'Uf',
            'Ativa'
        ].forEach(x => (<any>Fields)[x] = x);
    }
}