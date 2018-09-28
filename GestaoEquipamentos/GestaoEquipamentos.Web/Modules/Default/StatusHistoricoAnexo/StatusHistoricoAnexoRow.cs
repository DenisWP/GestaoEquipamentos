
namespace GestaoEquipamentos.Default.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("Default"), TableName("[dbo].[StatusHistoricoAnexo]")]
    [DisplayName("Status Historico Anexo"), InstanceName("Status Historico Anexo")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    public sealed class StatusHistoricoAnexoRow : Row, IIdRow, INameRow
    {
        [DisplayName("Id"), NotNull]
        public Int32? Id
        {
            get { return Fields.Id[this]; }
            set { Fields.Id[this] = value; }
        }

        [DisplayName("Status Historico"), NotNull, ForeignKey("[dbo].[StatusHistorico]", "Id"), LeftJoin("jStatusHistorico"), TextualField("StatusHistoricoObservacao")]
        public Int32? StatusHistorico
        {
            get { return Fields.StatusHistorico[this]; }
            set { Fields.StatusHistorico[this] = value; }
        }

        [DisplayName("Descricao"), Size(255), QuickSearch]
        public String Descricao
        {
            get { return Fields.Descricao[this]; }
            set { Fields.Descricao[this] = value; }
        }

        [DisplayName("Anexo")]
        public Int16? Anexo
        {
            get { return Fields.Anexo[this]; }
            set { Fields.Anexo[this] = value; }
        }

        [DisplayName("Status Historico Equipamento"), Expression("jStatusHistorico.[Equipamento]")]
        public Int32? StatusHistoricoEquipamento
        {
            get { return Fields.StatusHistoricoEquipamento[this]; }
            set { Fields.StatusHistoricoEquipamento[this] = value; }
        }

        [DisplayName("Status Historico Status"), Expression("jStatusHistorico.[Status]")]
        public Int32? StatusHistoricoStatus
        {
            get { return Fields.StatusHistoricoStatus[this]; }
            set { Fields.StatusHistoricoStatus[this] = value; }
        }

        [DisplayName("Status Historico Data Hora"), Expression("jStatusHistorico.[DataHora]")]
        public DateTime? StatusHistoricoDataHora
        {
            get { return Fields.StatusHistoricoDataHora[this]; }
            set { Fields.StatusHistoricoDataHora[this] = value; }
        }

        [DisplayName("Status Historico Observacao"), Expression("jStatusHistorico.[Observacao]")]
        public String StatusHistoricoObservacao
        {
            get { return Fields.StatusHistoricoObservacao[this]; }
            set { Fields.StatusHistoricoObservacao[this] = value; }
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

        public StatusHistoricoAnexoRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field Id;
            public Int32Field StatusHistorico;
            public StringField Descricao;
            public Int16Field Anexo;

            public Int32Field StatusHistoricoEquipamento;
            public Int32Field StatusHistoricoStatus;
            public DateTimeField StatusHistoricoDataHora;
            public StringField StatusHistoricoObservacao;
        }
    }
}
