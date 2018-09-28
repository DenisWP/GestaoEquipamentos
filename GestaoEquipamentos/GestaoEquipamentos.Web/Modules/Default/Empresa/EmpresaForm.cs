
namespace GestaoEquipamentos.Default.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Default.Empresa")]
    [BasedOnRow(typeof(Entities.EmpresaRow), CheckNames = true)]
    public class EmpresaForm
    {
        public String Nome { get; set; }
        public String Cnpj { get; set; }
        public String Longradouro { get; set; }
        public String Número { get; set; }
        public String Complemento { get; set; }
        public String Bairro { get; set; }
        public String Cidade { get; set; }
        public String Cep { get; set; }
        public String Uf { get; set; }
        public Boolean Ativa { get; set; }
    }
}