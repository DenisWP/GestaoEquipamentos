
namespace GestaoEquipamentos.Default {
    export interface PessoaRow {
        Id?: number;
        Nome?: string;
        Cpf?: string;
        Rg?: string;
        Longradouro?: string;
        Numero?: string;
        Complemento?: string;
        Bairro?: string;
        Cidade?: string;
        Cep?: string;
        Uf?: string;
    }

    export namespace PessoaRow {
        export const idProperty = 'Id';
        export const nameProperty = 'Nome';
        export const localTextPrefix = 'Default.Pessoa';

        export namespace Fields {
            export declare const Id;
            export declare const Nome;
            export declare const Cpf;
            export declare const Rg;
            export declare const Longradouro;
            export declare const Numero;
            export declare const Complemento;
            export declare const Bairro;
            export declare const Cidade;
            export declare const Cep;
            export declare const Uf;
        }

        [
            'Id',
            'Nome',
            'Cpf',
            'Rg',
            'Longradouro',
            'Numero',
            'Complemento',
            'Bairro',
            'Cidade',
            'Cep',
            'Uf'
        ].forEach(x => (<any>Fields)[x] = x);
    }
}