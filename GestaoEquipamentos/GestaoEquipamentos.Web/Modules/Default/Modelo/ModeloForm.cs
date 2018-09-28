
namespace GestaoEquipamentos.Default.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Default.Modelo")]
    [BasedOnRow(typeof(Entities.ModeloRow), CheckNames = true)]
    public class ModeloForm
    {
        public String Nome { get; set; }
    }
}