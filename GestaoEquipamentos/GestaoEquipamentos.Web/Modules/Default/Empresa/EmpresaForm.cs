
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
        [Category("Dados da Empresa")]
        [DisplayName("Empresa"), Required]
        public String Nome { get; set; }
        [Required]
        public String Cnpj { get; set; }

        [Category("Endereço")]
        [Required]
        public String Longradouro { get; set; }
        [Required]
        public String Número { get; set; }
        public String Complemento { get; set; }
        [Required]
        public String Bairro { get; set; }
        [Required]
        public String Cidade { get; set; }
        [Required]
        public String Cep { get; set; }
        [Required]
        public String Uf { get; set; }

        [Category("Situação")]
        [Required]
        public Boolean Ativa { get; set; }
    }
}