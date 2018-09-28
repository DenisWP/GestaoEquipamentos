
namespace GestaoEquipamentos.Default.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("Default"), TableName("[dbo].[StatusHistorico]")]
    [DisplayName("Status Historico"), InstanceName("Status Historico")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    public sealed class StatusHistoricoRow : Row, IIdRow, INameRow
    {
        [DisplayName("Id"), Identity]
        public Int32? Id
        {
            get { return Fields.Id[this]; }
            set { Fields.Id[this] = value; }
        }

        [DisplayName("Equipamento"), NotNull, ForeignKey("[dbo].[Equipamento]", "Id"), LeftJoin("jEquipamento"), TextualField("EquipamentoSerial")]
        public Int32? Equipamento
        {
            get { return Fields.Equipamento[this]; }
            set { Fields.Equipamento[this] = value; }
        }

        [DisplayName("Status"), NotNull, ForeignKey("[dbo].[Status]", "Id"), LeftJoin("jStatus"), TextualField("StatusNome")]
        public Int32? Status
        {
            get { return Fields.Status[this]; }
            set { Fields.Status[this] = value; }
        }

        [DisplayName("Data Hora")]
        public DateTime? DataHora
        {
            get { return Fields.DataHora[this]; }
            set { Fields.DataHora[this] = value; }
        }

        [DisplayName("Observacao"), Size(255), QuickSearch]
        public String Observacao
        {
            get { return Fields.Observacao[this]; }
            set { Fields.Observacao[this] = value; }
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
            get { return Fields.Observacao; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public StatusHistoricoRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field Id;
            public Int32Field Equipamento;
            public Int32Field Status;
            public DateTimeField DataHora;
            public StringField Observacao;

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

            public StringField StatusNome;
        }
    }
}
