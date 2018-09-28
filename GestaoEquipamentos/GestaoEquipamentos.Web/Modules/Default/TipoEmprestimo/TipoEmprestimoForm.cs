
namespace GestaoEquipamentos.Default.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Default.TipoEmprestimo")]
    [BasedOnRow(typeof(Entities.TipoEmprestimoRow), CheckNames = true)]
    public class TipoEmprestimoForm
    {
        public String Nome { get; set; }
    }
}