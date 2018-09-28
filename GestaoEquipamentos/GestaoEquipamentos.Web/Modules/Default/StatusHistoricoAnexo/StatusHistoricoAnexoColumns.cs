
namespace GestaoEquipamentos.Default.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Default.StatusHistoricoAnexo")]
    [BasedOnRow(typeof(Entities.StatusHistoricoAnexoRow), CheckNames = true)]
    public class StatusHistoricoAnexoColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 Id { get; set; }
        public String StatusHistoricoObservacao { get; set; }
        [EditLink]
        public String Descricao { get; set; }
        public Int16 Anexo { get; set; }
    }
}