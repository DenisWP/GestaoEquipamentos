
namespace GestaoEquipamentos.Default.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Default.Empresa")]
    [BasedOnRow(typeof(Entities.EmpresaRow), CheckNames = true)]
    public class EmpresaColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 Id { get; set; }
        [EditLink, Width(200)]
        public String Nome { get; set; }
        [Width(90)]
        public String Cnpj { get; set; }
        [Width(200)]
        public String Longradouro { get; set; }
        [Width(90)]
        public String Número { get; set; }
        [Width(90)]
        public String Complemento { get; set; }
        [Width(150)]
        public String Bairro { get; set; }
        [Width(150)]
        public String Cidade { get; set; }
        [Width(90)]
        public String Cep { get; set; }
        [Width(50)]
        public String Uf { get; set; }
        [Width(50)]
        public Boolean Ativa { get; set; }
    }
}