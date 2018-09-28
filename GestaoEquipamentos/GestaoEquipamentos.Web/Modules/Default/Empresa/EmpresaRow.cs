
namespace GestaoEquipamentos.Default.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("Default"), TableName("[dbo].[Empresa]")]
    [DisplayName("Empresa"), InstanceName("Empresa")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    public sealed class EmpresaRow : Row, IIdRow, INameRow
    {
        [DisplayName("Id"), Identity]
        public Int32? Id
        {
            get { return Fields.Id[this]; }
            set { Fields.Id[this] = value; }
        }

        [DisplayName("EMPRESA"), Size(255), QuickSearch]
        public String Nome
        {
            get { return Fields.Nome[this]; }
            set { Fields.Nome[this] = value; }
        }

        [DisplayName("CNPJ"), Column("CNPJ"), Size(255)]
        public String Cnpj
        {
            get { return Fields.Cnpj[this]; }
            set { Fields.Cnpj[this] = value; }
        }

        [DisplayName("Longradouro"), Size(255)]
        public String Longradouro
        {
            get { return Fields.Longradouro[this]; }
            set { Fields.Longradouro[this] = value; }
        }

        [DisplayName("Número"), Size(255)]
        public String Número
        {
            get { return Fields.Número[this]; }
            set { Fields.Número[this] = value; }
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

        [DisplayName("CEP"), Column("CEP"), Size(255)]
        public String Cep
        {
            get { return Fields.Cep[this]; }
            set { Fields.Cep[this] = value; }
        }

        [DisplayName("UF"), Column("UF"), Size(255)]
        public String Uf
        {
            get { return Fields.Uf[this]; }
            set { Fields.Uf[this] = value; }
        }

        [DisplayName("Ativa"), NotNull]
        public Boolean? Ativa
        {
            get { return Fields.Ativa[this]; }
            set { Fields.Ativa[this] = value; }
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

        public EmpresaRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field Id;
            public StringField Nome;
            public StringField Cnpj;
            public StringField Longradouro;
            public StringField Número;
            public StringField Complemento;
            public StringField Bairro;
            public StringField Cidade;
            public StringField Cep;
            public StringField Uf;
            public BooleanField Ativa;
        }
    }
}
