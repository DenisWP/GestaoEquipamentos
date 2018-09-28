
namespace GestaoEquipamentos.Default.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Default.Equipamento")]
    [BasedOnRow(typeof(Entities.EquipamentoRow), CheckNames = true)]
    public class EquipamentoForm
    {
        public Int32 Material { get; set; }
        public Int32 Marca { get; set; }
        public Int32 Modelo { get; set; }
        public String Serial { get; set; }
        public String Imei1 { get; set; }
        public String Imei2 { get; set; }
        public DateTime CompraData { get; set; }
        public String CompraNotaFiscal { get; set; }
        public Decimal CompraValor { get; set; }
        public Int32 Status { get; set; }
    }
}