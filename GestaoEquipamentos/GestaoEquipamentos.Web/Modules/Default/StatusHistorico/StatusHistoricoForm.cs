
namespace GestaoEquipamentos.Default.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Default.StatusHistorico")]
    [BasedOnRow(typeof(Entities.StatusHistoricoRow), CheckNames = true)]
    public class StatusHistoricoForm
    {
        public Int32 Equipamento { get; set; }
        public Int32 Status { get; set; }
        public DateTime DataHora { get; set; }
        public String Observacao { get; set; }
    }
}