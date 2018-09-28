
namespace GestaoEquipamentos.Default.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("Default"), TableName("[dbo].[Acessorio]")]
    [DisplayName("Acessorio"), InstanceName("Acessorio")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    public sealed class AcessorioRow : Row, IIdRow, INameRow
    {
        #region Id
        [DisplayName("Id"), Identity]
        public Int32? Id
        {
            get { return Fields.Id[this]; }
            set { Fields.Id[this] = value; }
        }
        #endregion

        #region Nome do Acessório
        [DisplayName("Nome do Acessório"), Size(255), QuickSearch]
        public String Nome
        {
            get { return Fields.Nome[this]; }
            set { Fields.Nome[this] = value; }
        }
        #endregion

        IIdField IIdRow.IdField
        {
            get { return Fields.Id; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.Nome; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public AcessorioRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field Id;
            public StringField Nome;
        }
    }
}
