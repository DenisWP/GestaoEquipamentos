
namespace GestaoEquipamentos.Default.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Default.EmprestimoAcessorio")]
    [BasedOnRow(typeof(Entities.EmprestimoAcessorioRow), CheckNames = true)]
    public class EmprestimoAcessorioColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 Id { get; set; }
        public String EmprestimoObservacao { get; set; }
        public String AcessorioNome { get; set; }
        [EditLink]
        public String Descricao { get; set; }
    }
}