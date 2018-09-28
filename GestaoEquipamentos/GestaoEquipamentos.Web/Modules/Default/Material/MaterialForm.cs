
namespace GestaoEquipamentos.Default.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Default.Material")]
    [BasedOnRow(typeof(Entities.MaterialRow), CheckNames = true)]
    public class MaterialForm
    {
        public String Nome { get; set; }
    }
}