
namespace GestaoEquipamentos.Default {
    export interface EmprestimoRow {
        Id?: number;
        Tipo?: number;
        Empresa?: number;
        Pessoa?: number;
        Equipamento?: number;
        DataEmprestimo?: string;
        DataDevolucao?: string;
        Observacao?: string;
        TipoNome?: string;
        EmpresaNome?: string;
        EmpresaCnpj?: string;
        EmpresaLongradouro?: string;
        EmpresaNúmero?: string;
        EmpresaComplemento?: string;
        EmpresaBairro?: string;
        EmpresaCidade?: string;
        EmpresaCep?: string;
        EmpresaUf?: string;
        EmpresaAtiva?: boolean;
        PessoaNome?: string;
        PessoaCpf?: string;
        PessoaRg?: string;
        PessoaLongradouro?: string;
        PessoaNumero?: string;
        PessoaComplemento?: string;
        PessoaBairro?: string;
        PessoaCidade?: string;
        PessoaCep?: string;
        PessoaUf?: string;
        EquipamentoMaterial?: number;
        EquipamentoMarca?: number;
        EquipamentoModelo?: number;
        EquipamentoSerial?: string;
        EquipamentoImei1?: string;
        EquipamentoImei2?: string;
        EquipamentoCompraData?: string;
        EquipamentoCompraNotaFiscal?: string;
        EquipamentoCompraValor?: number;
        EquipamentoStatus?: number;
    }

    export namespace EmprestimoRow {
        export const idProperty = 'Id';
        export const nameProperty = 'Observacao';
        export const localTextPrefix = 'Default.Emprestimo';

        export namespace Fields {
            export declare const Id;
            export declare const Tipo;
            export declare const Empresa;
            export declare const Pessoa;
            export declare const Equipamento;
            export declare const DataEmprestimo;
            export declare const DataDevolucao;
            export declare const Observacao;
            export declare const TipoNome;
            export declare const EmpresaNome;
            export declare const EmpresaCnpj;
            export declare const EmpresaLongradouro;
            export declare const EmpresaNúmero;
            export declare const EmpresaComplemento;
            export declare const EmpresaBairro;
            export declare const EmpresaCidade;
            export declare const EmpresaCep;
            export declare const EmpresaUf;
            export declare const EmpresaAtiva;
            export declare const PessoaNome;
            export declare const PessoaCpf;
            export declare const PessoaRg;
            export declare const PessoaLongradouro;
            export declare const PessoaNumero;
            export declare const PessoaComplemento;
            export declare const PessoaBairro;
            export declare const PessoaCidade;
            export declare const PessoaCep;
            export declare const PessoaUf;
            export declare const EquipamentoMaterial;
            export declare const EquipamentoMarca;
            export declare const EquipamentoModelo;
            export declare const EquipamentoSerial;
            export declare const EquipamentoImei1;
            export declare const EquipamentoImei2;
            export declare const EquipamentoCompraData;
            export declare const EquipamentoCompraNotaFiscal;
            export declare const EquipamentoCompraValor;
            export declare const EquipamentoStatus;
        }

        [
            'Id',
            'Tipo',
            'Empresa',
            'Pessoa',
            'Equipamento',
            'DataEmprestimo',
            'DataDevolucao',
            'Observacao',
            'TipoNome',
            'EmpresaNome',
            'EmpresaCnpj',
            'EmpresaLongradouro',
            'EmpresaNúmero',
            'EmpresaComplemento',
            'EmpresaBairro',
            'EmpresaCidade',
            'EmpresaCep',
            'EmpresaUf',
            'EmpresaAtiva',
            'PessoaNome',
            'PessoaCpf',
            'PessoaRg',
            'PessoaLongradouro',
            'PessoaNumero',
            'PessoaComplemento',
            'PessoaBairro',
            'PessoaCidade',
            'PessoaCep',
            'PessoaUf',
            'EquipamentoMaterial',
            'EquipamentoMarca',
            'EquipamentoModelo',
            'EquipamentoSerial',
            'EquipamentoImei1',
            'EquipamentoImei2',
            'EquipamentoCompraData',
            'EquipamentoCompraNotaFiscal',
            'EquipamentoCompraValor',
            'EquipamentoStatus'
        ].forEach(x => (<any>Fields)[x] = x);
    }
}