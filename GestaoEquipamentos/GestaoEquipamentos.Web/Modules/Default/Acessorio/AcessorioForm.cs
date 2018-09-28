
namespace GestaoEquipamentos.Default.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Default.Acessorio")]
    [BasedOnRow(typeof(Entities.AcessorioRow), CheckNames = true)]
    public class AcessorioForm
    {        
        public String Nome { get; set; }
    }
}