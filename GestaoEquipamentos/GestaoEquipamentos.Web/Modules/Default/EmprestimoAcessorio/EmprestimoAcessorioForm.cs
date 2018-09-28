
namespace GestaoEquipamentos.Default.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Default.EmprestimoAcessorio")]
    [BasedOnRow(typeof(Entities.EmprestimoAcessorioRow), CheckNames = true)]
    public class EmprestimoAcessorioForm
    {
        public Int32 Emprestimo { get; set; }
        public Int32 Acessorio { get; set; }
        public String Descricao { get; set; }
    }
}