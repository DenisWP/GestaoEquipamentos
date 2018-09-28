
namespace GestaoEquipamentos.Default.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Default.Equipamento")]
    [BasedOnRow(typeof(Entities.EquipamentoRow), CheckNames = true)]
    public class EquipamentoColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 Id { get; set; }
        public String MaterialNome { get; set; }
        public String MarcaNome { get; set; }
        public String ModeloNome { get; set; }
        [EditLink]
        public String Serial { get; set; }
        public String Imei1 { get; set; }
        public String Imei2 { get; set; }
        public DateTime CompraData { get; set; }
        public String CompraNotaFiscal { get; set; }
        public Decimal CompraValor { get; set; }
        public String StatusNome { get; set; }
    }
}