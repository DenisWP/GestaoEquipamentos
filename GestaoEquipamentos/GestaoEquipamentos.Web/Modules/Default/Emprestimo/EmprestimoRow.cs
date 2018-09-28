
namespace GestaoEquipamentos.Default.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("Default"), TableName("[dbo].[Emprestimo]")]
    [DisplayName("Emprestimo"), InstanceName("Emprestimo")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    public sealed class EmprestimoRow : Row, IIdRow, INameRow
    {
        [DisplayName("Id"), Identity]
        public Int32? Id
        {
            get { return Fields.Id[this]; }
            set { Fields.Id[this] = value; }
        }

        [DisplayName("Tipo"), NotNull, ForeignKey("[dbo].[TipoEmprestimo]", "Id"), LeftJoin("jTipo"), TextualField("TipoNome")]
        public Int32? Tipo
        {
            get { return Fields.Tipo[this]; }
            set { Fields.Tipo[this] = value; }
        }

        [DisplayName("Empresa"), NotNull, ForeignKey("[dbo].[Empresa]", "Id"), LeftJoin("jEmpresa"), TextualField("EmpresaNome")]
        public Int32? Empresa
        {
            get { return Fields.Empresa[this]; }
            set { Fields.Empresa[this] = value; }
        }

        [DisplayName("Pessoa"), NotNull, ForeignKey("[dbo].[Pessoa]", "Id"), LeftJoin("jPessoa"), TextualField("PessoaNome")]
        public Int32? Pessoa
        {
            get { return Fields.Pessoa[this]; }
            set { Fields.Pessoa[this] = value; }
        }

        [DisplayName("Equipamento"), NotNull, ForeignKey("[dbo].[Equipamento]", "Id"), LeftJoin("jEquipamento"), TextualField("EquipamentoSerial")]
        public Int32? Equipamento
        {
            get { return Fields.Equipamento[this]; }
            set { Fields.Equipamento[this] = value; }
        }

        [DisplayName("Data Emprestimo")]
        public DateTime? DataEmprestimo
        {
            get { return Fields.DataEmprestimo[this]; }
            set { Fields.DataEmprestimo[this] = value; }
        }

        [DisplayName("Data Devolucao")]
        public DateTime? DataDevolucao
        {
            get { return Fields.DataDevolucao[this]; }
            set { Fields.DataDevolucao[this] = value; }
        }

        [DisplayName("Observacao"), Size(255), QuickSearch]
        public String Observacao
        {
            get { return Fields.Observacao[this]; }
            set { Fields.Observacao[this] = value; }
        }

        [DisplayName("Tipo Nome"), Expression("jTipo.[Nome]")]
        public String TipoNome
        {
            get { return Fields.TipoNome[this]; }
            set { Fields.TipoNome[this] = value; }
        }

        [DisplayName("Empresa Nome"), Expression("jEmpresa.[Nome]")]
        public String EmpresaNome
        {
            get { return Fields.EmpresaNome[this]; }
            set { Fields.EmpresaNome[this] = value; }
        }

        [DisplayName("Empresa Cnpj"), Expression("jEmpresa.[CNPJ]")]
        public String EmpresaCnpj
        {
            get { return Fields.EmpresaCnpj[this]; }
            set { Fields.EmpresaCnpj[this] = value; }
        }

        [DisplayName("Empresa Longradouro"), Expression("jEmpresa.[Longradouro]")]
        public String EmpresaLongradouro
        {
            get { return Fields.EmpresaLongradouro[this]; }
            set { Fields.EmpresaLongradouro[this] = value; }
        }

        [DisplayName("Empresa Número"), Expression("jEmpresa.[Número]")]
        public String EmpresaNúmero
        {
            get { return Fields.EmpresaNúmero[this]; }
            set { Fields.EmpresaNúmero[this] = value; }
        }

        [DisplayName("Empresa Complemento"), Expression("jEmpresa.[Complemento]")]
        public String EmpresaComplemento
        {
            get { return Fields.EmpresaComplemento[this]; }
            set { Fields.EmpresaComplemento[this] = value; }
        }

        [DisplayName("Empresa Bairro"), Expression("jEmpresa.[Bairro]")]
        public String EmpresaBairro
        {
            get { return Fields.EmpresaBairro[this]; }
            set { Fields.EmpresaBairro[this] = value; }
        }

        [DisplayName("Empresa Cidade"), Expression("jEmpresa.[Cidade]")]
        public String EmpresaCidade
        {
            get { return Fields.EmpresaCidade[this]; }
            set { Fields.EmpresaCidade[this] = value; }
        }

        [DisplayName("Empresa Cep"), Expression("jEmpresa.[CEP]")]
        public String EmpresaCep
        {
            get { return Fields.EmpresaCep[this]; }
            set { Fields.EmpresaCep[this] = value; }
        }

        [DisplayName("Empresa Uf"), Expression("jEmpresa.[UF]")]
        public String EmpresaUf
        {
            get { return Fields.EmpresaUf[this]; }
            set { Fields.EmpresaUf[this] = value; }
        }

        [DisplayName("Empresa Ativa"), Expression("jEmpresa.[Ativa]")]
        public Boolean? EmpresaAtiva
        {
            get { return Fields.EmpresaAtiva[this]; }
            set { Fields.EmpresaAtiva[this] = value; }
        }

        [DisplayName("Pessoa Nome"), Expression("jPessoa.[Nome]")]
        public String PessoaNome
        {
            get { return Fields.PessoaNome[this]; }
            set { Fields.PessoaNome[this] = value; }
        }

        [DisplayName("Pessoa Cpf"), Expression("jPessoa.[CPF]")]
        public String PessoaCpf
        {
            get { return Fields.PessoaCpf[this]; }
            set { Fields.PessoaCpf[this] = value; }
        }

        [DisplayName("Pessoa Rg"), Expression("jPessoa.[RG]")]
        public String PessoaRg
        {
            get { return Fields.PessoaRg[this]; }
            set { Fields.PessoaRg[this] = value; }
        }

        [DisplayName("Pessoa Longradouro"), Expression("jPessoa.[Longradouro]")]
        public String PessoaLongradouro
        {
            get { return Fields.PessoaLongradouro[this]; }
            set { Fields.PessoaLongradouro[this] = value; }
        }

        [DisplayName("Pessoa Numero"), Expression("jPessoa.[Numero]")]
        public String PessoaNumero
        {
            get { return Fields.PessoaNumero[this]; }
            set { Fields.PessoaNumero[this] = value; }
        }

        [DisplayName("Pessoa Complemento"), Expression("jPessoa.[Complemento]")]
        public String PessoaComplemento
        {
            get { return Fields.PessoaComplemento[this]; }
            set { Fields.PessoaComplemento[this] = value; }
        }

        [DisplayName("Pessoa Bairro"), Expression("jPessoa.[Bairro]")]
        public String PessoaBairro
        {
            get { return Fields.PessoaBairro[this]; }
            set { Fields.PessoaBairro[this] = value; }
        }

        [DisplayName("Pessoa Cidade"), Expression("jPessoa.[Cidade]")]
        public String PessoaCidade
        {
            get { return Fields.PessoaCidade[this]; }
            set { Fields.PessoaCidade[this] = value; }
        }

        [DisplayName("Pessoa Cep"), Expression("jPessoa.[CEP]")]
        public String PessoaCep
        {
            get { return Fields.PessoaCep[this]; }
            set { Fields.PessoaCep[this] = value; }
        }

        [DisplayName("Pessoa Uf"), Expression("jPessoa.[UF]")]
        public String PessoaUf
        {
            get { return Fields.PessoaUf[this]; }
            set { Fields.PessoaUf[this] = value; }
        }

        [DisplayName("Equipamento Material"), Expression("jEquipamento.[Material]")]
        public Int32? EquipamentoMaterial
        {
            get { return Fields.EquipamentoMaterial[this]; }
            set { Fields.EquipamentoMaterial[this] = value; }
        }

        [DisplayName("Equipamento Marca"), Expression("jEquipamento.[Marca]")]
        public Int32? EquipamentoMarca
        {
            get { return Fields.EquipamentoMarca[this]; }
            set { Fields.EquipamentoMarca[this] = value; }
        }

        [DisplayName("Equipamento Modelo"), Expression("jEquipamento.[Modelo]")]
        public Int32? EquipamentoModelo
        {
            get { return Fields.EquipamentoModelo[this]; }
            set { Fields.EquipamentoModelo[this] = value; }
        }

        [DisplayName("Equipamento Serial"), Expression("jEquipamento.[Serial]")]
        public String EquipamentoSerial
        {
            get { return Fields.EquipamentoSerial[this]; }
            set { Fields.EquipamentoSerial[this] = value; }
        }

        [DisplayName("Equipamento Imei1"), Expression("jEquipamento.[IMEI1]")]
        public String EquipamentoImei1
        {
            get { return Fields.EquipamentoImei1[this]; }
            set { Fields.EquipamentoImei1[this] = value; }
        }

        [DisplayName("Equipamento Imei2"), Expression("jEquipamento.[IMEI2]")]
        public String EquipamentoImei2
        {
            get { return Fields.EquipamentoImei2[this]; }
            set { Fields.EquipamentoImei2[this] = value; }
        }

        [DisplayName("Equipamento Compra Data"), Expression("jEquipamento.[CompraData]")]
        public DateTime? EquipamentoCompraData
        {
            get { return Fields.EquipamentoCompraData[this]; }
            set { Fields.EquipamentoCompraData[this] = value; }
        }

        [DisplayName("Equipamento Compra Nota Fiscal"), Expression("jEquipamento.[CompraNotaFiscal]")]
        public String EquipamentoCompraNotaFiscal
        {
            get { return Fields.EquipamentoCompraNotaFiscal[this]; }
            set { Fields.EquipamentoCompraNotaFiscal[this] = value; }
        }

        [DisplayName("Equipamento Compra Valor"), Expression("jEquipamento.[CompraValor]")]
        public Decimal? EquipamentoCompraValor
        {
            get { return Fields.EquipamentoCompraValor[this]; }
            set { Fields.EquipamentoCompraValor[this] = value; }
        }

        [DisplayName("Equipamento Status"), Expression("jEquipamento.[Status]")]
        public Int32? EquipamentoStatus
        {
            get { return Fields.EquipamentoStatus[this]; }
            set { Fields.EquipamentoStatus[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.Id; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.Observacao; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public EmprestimoRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field Id;
            public Int32Field Tipo;
            public Int32Field Empresa;
            public Int32Field Pessoa;
            public Int32Field Equipamento;
            public DateTimeField DataEmprestimo;
            public DateTimeField DataDevolucao;
            public StringField Observacao;

            public StringField TipoNome;

            public StringField EmpresaNome;
            public StringField EmpresaCnpj;
            public StringField EmpresaLongradouro;
            public StringField EmpresaNúmero;
            public StringField EmpresaComplemento;
            public StringField EmpresaBairro;
            public StringField EmpresaCidade;
            public StringField EmpresaCep;
            public StringField EmpresaUf;
            public BooleanField EmpresaAtiva;

            public StringField PessoaNome;
            public StringField PessoaCpf;
            public StringField PessoaRg;
            public StringField PessoaLongradouro;
            public StringField PessoaNumero;
            public StringField PessoaComplemento;
            public StringField PessoaBairro;
            public StringField PessoaCidade;
            public StringField PessoaCep;
            public StringField PessoaUf;

            public Int32Field EquipamentoMaterial;
            public Int32Field EquipamentoMarca;
            public Int32Field EquipamentoModelo;
            public StringField EquipamentoSerial;
            public StringField EquipamentoImei1;
            public StringField EquipamentoImei2;
            public DateTimeField EquipamentoCompraData;
            public StringField EquipamentoCompraNotaFiscal;
            public DecimalField EquipamentoCompraValor;
            public Int32Field EquipamentoStatus;
        }
    }
}
