
namespace GestaoEquipamentos.Default.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Default.Emprestimo")]
    [BasedOnRow(typeof(Entities.EmprestimoRow), CheckNames = true)]
    public class EmprestimoColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 Id { get; set; }
        public String TipoNome { get; set; }
        public String EmpresaNome { get; set; }
        public String PessoaNome { get; set; }
        public String EquipamentoSerial { get; set; }
        public DateTime DataEmprestimo { get; set; }
        public DateTime DataDevolucao { get; set; }
        [EditLink]
        public String Observacao { get; set; }
    }
}