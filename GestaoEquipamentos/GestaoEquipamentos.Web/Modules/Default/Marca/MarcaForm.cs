
namespace GestaoEquipamentos.Default.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Default.Marca")]
    [BasedOnRow(typeof(Entities.MarcaRow), CheckNames = true)]
    public class MarcaForm
    {
        public String Nome { get; set; }
    }
}