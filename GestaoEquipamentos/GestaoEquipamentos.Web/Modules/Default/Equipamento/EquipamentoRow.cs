
namespace GestaoEquipamentos.Default.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("Default"), TableName("[dbo].[Equipamento]")]
    [DisplayName("Equipamento"), InstanceName("Equipamento")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    public sealed class EquipamentoRow : Row, IIdRow, INameRow
    {
        [DisplayName("Id"), Identity]
        public Int32? Id
        {
            get { return Fields.Id[this]; }
            set { Fields.Id[this] = value; }
        }

        [DisplayName("Material"), NotNull, ForeignKey("[dbo].[Material]", "Id"), LeftJoin("jMaterial"), TextualField("MaterialNome")]
        public Int32? Material
        {
            get { return Fields.Material[this]; }
            set { Fields.Material[this] = value; }
        }

        [DisplayName("Marca"), NotNull, ForeignKey("[dbo].[Marca]", "Id"), LeftJoin("jMarca"), TextualField("MarcaNome")]
        public Int32? Marca
        {
            get { return Fields.Marca[this]; }
            set { Fields.Marca[this] = value; }
        }

        [DisplayName("Modelo"), NotNull, ForeignKey("[dbo].[Modelo]", "Id"), LeftJoin("jModelo"), TextualField("ModeloNome")]
        public Int32? Modelo
        {
            get { return Fields.Modelo[this]; }
            set { Fields.Modelo[this] = value; }
        }

        [DisplayName("Serial"), Size(255), QuickSearch]
        public String Serial
        {
            get { return Fields.Serial[this]; }
            set { Fields.Serial[this] = value; }
        }

        [DisplayName("Imei1"), Column("IMEI1"), Size(255)]
        public String Imei1
        {
            get { return Fields.Imei1[this]; }
            set { Fields.Imei1[this] = value; }
        }

        [DisplayName("Imei2"), Column("IMEI2"), Size(255)]
        public String Imei2
        {
            get { return Fields.Imei2[this]; }
            set { Fields.Imei2[this] = value; }
        }

        [DisplayName("Compra Data")]
        public DateTime? CompraData
        {
            get { return Fields.CompraData[this]; }
            set { Fields.CompraData[this] = value; }
        }

        [DisplayName("Compra Nota Fiscal"), Size(255)]
        public String CompraNotaFiscal
        {
            get { return Fields.CompraNotaFiscal[this]; }
            set { Fields.CompraNotaFiscal[this] = value; }
        }

        [DisplayName("Compra Valor"), Size(19), Scale(5)]
        public Decimal? CompraValor
        {
            get { return Fields.CompraValor[this]; }
            set { Fields.CompraValor[this] = value; }
        }

        [DisplayName("Status"), ForeignKey("[dbo].[Status]", "Id"), LeftJoin("jStatus"), TextualField("StatusNome")]
        public Int32? Status
        {
            get { return Fields.Status[this]; }
            set { Fields.Status[this] = value; }
        }

        [DisplayName("Material Nome"), Expression("jMaterial.[Nome]")]
        public String MaterialNome
        {
            get { return Fields.MaterialNome[this]; }
            set { Fields.MaterialNome[this] = value; }
        }

        [DisplayName("Marca Nome"), Expression("jMarca.[Nome]")]
        public String MarcaNome
        {
            get { return Fields.MarcaNome[this]; }
            set { Fields.MarcaNome[this] = value; }
        }

        [DisplayName("Modelo Nome"), Expression("jModelo.[Nome]")]
        public String ModeloNome
        {
            get { return Fields.ModeloNome[this]; }
            set { Fields.ModeloNome[this] = value; }
        }

        [DisplayName("Status Nome"), Expression("jStatus.[Nome]")]
        public String StatusNome
        {
            get { return Fields.StatusNome[this]; }
            set { Fields.StatusNome[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.Id; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.Serial; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public EquipamentoRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field Id;
            public Int32Field Material;
            public Int32Field Marca;
            public Int32Field Modelo;
            public StringField Serial;
            public StringField Imei1;
            public StringField Imei2;
            public DateTimeField CompraData;
            public StringField CompraNotaFiscal;
            public DecimalField CompraValor;
            public Int32Field Status;

            public StringField MaterialNome;

            public StringField MarcaNome;

            public StringField ModeloNome;

            public StringField StatusNome;
        }
    }
}
