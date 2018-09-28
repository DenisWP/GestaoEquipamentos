
namespace GestaoEquipamentos.Default.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Default.Pessoa")]
    [BasedOnRow(typeof(Entities.PessoaRow), CheckNames = true)]
    public class PessoaForm
    {
        public String Nome { get; set; }
        public String Cpf { get; set; }
        public String Rg { get; set; }
        public String Longradouro { get; set; }
        public String Numero { get; set; }
        public String Complemento { get; set; }
        public String Bairro { get; set; }
        public String Cidade { get; set; }
        public String Cep { get; set; }
        public String Uf { get; set; }
    }
}