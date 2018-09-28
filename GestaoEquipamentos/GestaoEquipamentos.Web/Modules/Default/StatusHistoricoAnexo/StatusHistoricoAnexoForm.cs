
namespace GestaoEquipamentos.Default.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Default.StatusHistoricoAnexo")]
    [BasedOnRow(typeof(Entities.StatusHistoricoAnexoRow), CheckNames = true)]
    public class StatusHistoricoAnexoForm
    {
        public Int32 StatusHistorico { get; set; }
        public String Descricao { get; set; }
        public Int16 Anexo { get; set; }
    }
}