
namespace GestaoEquipamentos.Default.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("Default"), TableName("[dbo].[EmprestimoAcessorio]")]
    [DisplayName("Emprestimo Acessorio"), InstanceName("Emprestimo Acessorio")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    public sealed class EmprestimoAcessorioRow : Row, IIdRow, INameRow
    {
        [DisplayName("Id"), Identity]
        public Int32? Id
        {
            get { return Fields.Id[this]; }
            set { Fields.Id[this] = value; }
        }

        [DisplayName("Emprestimo"), NotNull, ForeignKey("[dbo].[Emprestimo]", "Id"), LeftJoin("jEmprestimo"), TextualField("EmprestimoObservacao")]
        public Int32? Emprestimo
        {
            get { return Fields.Emprestimo[this]; }
            set { Fields.Emprestimo[this] = value; }
        }

        [DisplayName("Acessorio"), NotNull, ForeignKey("[dbo].[Acessorio]", "Id"), LeftJoin("jAcessorio"), TextualField("AcessorioNome")]
        public Int32? Acessorio
        {
            get { return Fields.Acessorio[this]; }
            set { Fields.Acessorio[this] = value; }
        }

        [DisplayName("Descricao"), Size(255), QuickSearch]
        public String Descricao
        {
            get { return Fields.Descricao[this]; }
            set { Fields.Descricao[this] = value; }
        }

        [DisplayName("Emprestimo Tipo"), Expression("jEmprestimo.[Tipo]")]
        public Int32? EmprestimoTipo
        {
            get { return Fields.EmprestimoTipo[this]; }
            set { Fields.EmprestimoTipo[this] = value; }
        }

        [DisplayName("Emprestimo Empresa"), Expression("jEmprestimo.[Empresa]")]
        public Int32? EmprestimoEmpresa
        {
            get { return Fields.EmprestimoEmpresa[this]; }
            set { Fields.EmprestimoEmpresa[this] = value; }
        }

        [DisplayName("Emprestimo Pessoa"), Expression("jEmprestimo.[Pessoa]")]
        public Int32? EmprestimoPessoa
        {
            get { return Fields.EmprestimoPessoa[this]; }
            set { Fields.EmprestimoPessoa[this] = value; }
        }

        [DisplayName("Emprestimo Equipamento"), Expression("jEmprestimo.[Equipamento]")]
        public Int32? EmprestimoEquipamento
        {
            get { return Fields.EmprestimoEquipamento[this]; }
            set { Fields.EmprestimoEquipamento[this] = value; }
        }

        [DisplayName("Emprestimo Data Emprestimo"), Expression("jEmprestimo.[DataEmprestimo]")]
        public DateTime? EmprestimoDataEmprestimo
        {
            get { return Fields.EmprestimoDataEmprestimo[this]; }
            set { Fields.EmprestimoDataEmprestimo[this] = value; }
        }

        [DisplayName("Emprestimo Data Devolucao"), Expression("jEmprestimo.[DataDevolucao]")]
        public DateTime? EmprestimoDataDevolucao
        {
            get { return Fields.EmprestimoDataDevolucao[this]; }
            set { Fields.EmprestimoDataDevolucao[this] = value; }
        }

        [DisplayName("Emprestimo Observacao"), Expression("jEmprestimo.[Observacao]")]
        public String EmprestimoObservacao
        {
            get { return Fields.EmprestimoObservacao[this]; }
            set { Fields.EmprestimoObservacao[this] = value; }
        }

        [DisplayName("Acessorio Nome"), Expression("jAcessorio.[Nome]")]
        public String AcessorioNome
        {
            get { return Fields.AcessorioNome[this]; }
            set { Fields.AcessorioNome[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.Id; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.Descricao; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public EmprestimoAcessorioRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field Id;
            public Int32Field Emprestimo;
            public Int32Field Acessorio;
            public StringField Descricao;

            public Int32Field EmprestimoTipo;
            public Int32Field EmprestimoEmpresa;
            public Int32Field EmprestimoPessoa;
            public Int32Field EmprestimoEquipamento;
            public DateTimeField EmprestimoDataEmprestimo;
            public DateTimeField EmprestimoDataDevolucao;
            public StringField EmprestimoObservacao;

            public StringField AcessorioNome;
        }
    }
}
