
namespace GestaoEquipamentos.Default {
    export interface EmprestimoAcessorioRow {
        Id?: number;
        Emprestimo?: number;
        Acessorio?: number;
        Descricao?: string;
        EmprestimoTipo?: number;
        EmprestimoEmpresa?: number;
        EmprestimoPessoa?: number;
        EmprestimoEquipamento?: number;
        EmprestimoDataEmprestimo?: string;
        EmprestimoDataDevolucao?: string;
        EmprestimoObservacao?: string;
        AcessorioNome?: string;
    }

    export namespace EmprestimoAcessorioRow {
        export const idProperty = 'Id';
        export const nameProperty = 'Descricao';
        export const localTextPrefix = 'Default.EmprestimoAcessorio';

        export namespace Fields {
            export declare const Id;
            export declare const Emprestimo;
            export declare const Acessorio;
            export declare const Descricao;
            export declare const EmprestimoTipo;
            export declare const EmprestimoEmpresa;
            export declare const EmprestimoPessoa;
            export declare const EmprestimoEquipamento;
            export declare const EmprestimoDataEmprestimo;
            export declare const EmprestimoDataDevolucao;
            export declare const EmprestimoObservacao;
            export declare const AcessorioNome;
        }

        [
            'Id',
            'Emprestimo',
            'Acessorio',
            'Descricao',
            'EmprestimoTipo',
            'EmprestimoEmpresa',
            'EmprestimoPessoa',
            'EmprestimoEquipamento',
            'EmprestimoDataEmprestimo',
            'EmprestimoDataDevolucao',
            'EmprestimoObservacao',
            'AcessorioNome'
        ].forEach(x => (<any>Fields)[x] = x);
    }
}