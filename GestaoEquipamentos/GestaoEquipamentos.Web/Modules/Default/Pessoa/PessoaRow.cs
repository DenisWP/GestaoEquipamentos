
namespace GestaoEquipamentos.Default.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("Default"), TableName("[dbo].[Pessoa]")]
    [DisplayName("Pessoa"), InstanceName("Pessoa")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    public sealed class PessoaRow : Row, IIdRow, INameRow
    {
        [DisplayName("Id"), Identity]
        public Int32? Id
        {
            get { return Fields.Id[this]; }
            set { Fields.Id[this] = value; }
        }

        [DisplayName("Nome"), Size(255), QuickSearch]
        public String Nome
        {
            get { return Fields.Nome[this]; }
            set { Fields.Nome[this] = value; }
        }

        [DisplayName("Cpf"), Column("CPF"), Size(255)]
        public String Cpf
        {
            get { return Fields.Cpf[this]; }
            set { Fields.Cpf[this] = value; }
        }

        [DisplayName("Rg"), Column("RG"), Size(255)]
        public String Rg
        {
            get { return Fields.Rg[this]; }
            set { Fields.Rg[this] = value; }
        }

        [DisplayName("Longradouro"), Size(255)]
        public String Longradouro
        {
            get { return Fields.Longradouro[this]; }
            set { Fields.Longradouro[this] = value; }
        }

        [DisplayName("Numero"), Size(255)]
        public String Numero
        {
            get { return Fields.Numero[this]; }
            set { Fields.Numero[this] = value; }
        }

        [DisplayName("Complemento"), Size(255)]
        public String Complemento
        {
            get { return Fields.Complemento[this]; }
            set { Fields.Complemento[this] = value; }
        }

        [DisplayName("Bairro"), Size(255)]
        public String Bairro
        {
            get { return Fields.Bairro[this]; }
            set { Fields.Bairro[this] = value; }
        }

        [DisplayName("Cidade"), Size(255)]
        public String Cidade
        {
            get { return Fields.Cidade[this]; }
            set { Fields.Cidade[this] = value; }
        }

        [DisplayName("Cep"), Column("CEP"), Size(255)]
        public String Cep
        {
            get { return Fields.Cep[this]; }
            set { Fields.Cep[this] = value; }
        }

        [DisplayName("Uf"), Column("UF"), Size(255)]
        public String Uf
        {
            get { return Fields.Uf[this]; }
            set { Fields.Uf[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.Id; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.Nome; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public PessoaRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field Id;
            public StringField Nome;
            public StringField Cpf;
            public StringField Rg;
            public StringField Longradouro;
            public StringField Numero;
            public StringField Complemento;
            public StringField Bairro;
            public StringField Cidade;
            public StringField Cep;
            public StringField Uf;
        }
    }
}
