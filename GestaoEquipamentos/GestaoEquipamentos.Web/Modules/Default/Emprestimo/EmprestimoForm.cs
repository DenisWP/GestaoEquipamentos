
namespace GestaoEquipamentos.Default.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Default.Emprestimo")]
    [BasedOnRow(typeof(Entities.EmprestimoRow), CheckNames = true)]
    public class EmprestimoForm
    {
        public Int32 Tipo { get; set; }
        public Int32 Empresa { get; set; }
        public Int32 Pessoa { get; set; }
        public Int32 Equipamento { get; set; }
        public DateTime DataEmprestimo { get; set; }
        public DateTime DataDevolucao { get; set; }
        public String Observacao { get; set; }
    }
}