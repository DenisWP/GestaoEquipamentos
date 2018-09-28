
namespace GestaoEquipamentos.Default.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Default.StatusHistorico")]
    [BasedOnRow(typeof(Entities.StatusHistoricoRow), CheckNames = true)]
    public class StatusHistoricoColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 Id { get; set; }
        public String EquipamentoSerial { get; set; }
        public String StatusNome { get; set; }
        public DateTime DataHora { get; set; }
        [EditLink]
        public String Observacao { get; set; }
    }
}