
namespace GestaoEquipamentos.Default.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Default.TipoEmprestimo")]
    [BasedOnRow(typeof(Entities.TipoEmprestimoRow), CheckNames = true)]
    public class TipoEmprestimoColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 Id { get; set; }
        [EditLink]
        public String Nome { get; set; }
    }
}