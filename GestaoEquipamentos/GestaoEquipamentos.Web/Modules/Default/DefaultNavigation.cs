using Serenity.Navigation;
using MyPages = GestaoEquipamentos.Default.Pages;

[assembly: NavigationMenu(7000, "Gestão de Equipamentos", icon: "fa-archive")]

[assembly: NavigationMenu(7100, "Gestão de Equipamentos/Cadastros", icon: "fa-laptop")]
[assembly: NavigationLink(7110, "Gestão de Equipamentos/Cadastros/Equipamento", typeof(MyPages.EquipamentoController), icon: "fa-mobile")]
[assembly: NavigationLink(7120, "Gestão de Equipamentos/Cadastros/Acessorio", typeof(MyPages.AcessorioController), icon: "fa-headphones")]

[assembly: NavigationMenu(7200, "Gestão de Equipamentos/Empresa", icon: "fa-envelope")]
[assembly: NavigationLink(7210, "Gestão de Equipamentos/Empresa/Cadastrar Pessoa", typeof(MyPages.PessoaController), icon: "fa-user")]
[assembly: NavigationLink(7220, "Gestão de Equipamentos/Empresa/Cadastrar Empresa", typeof(MyPages.EmpresaController), icon: "fa-building")]

[assembly: NavigationMenu(7300, "Gestão de Equipamentos/Registros", icon: "fa-folder")]
[assembly: NavigationLink(7310, "Gestão de Equipamentos/Registros/Histórico de Empréstimos", typeof(MyPages.EmprestimoController), icon: "fa-arrow-up")]


/*
[assembly: NavigationLink(1215, "Gestão de Telefonia/Registro de Devoluções/Devoluções", typeof(MyPages.DevolucaoController), icon: "fa-arrow-down")]
[assembly: NavigationLink(1216, "Gestão de Telefonia/Empréstimo/Status/Cadastrar Status", typeof(MyPages.StatusController), icon: "fa-check")]
[assembly: NavigationLink(1217, "Gestão de Telefonia/Empréstimo/Status/Status Historico", typeof(MyPages.StatusHistoricoController), icon: "fa-history")]
[assembly: NavigationLink(1218, "Gestão de Telefonia/Empréstimo/Status/Status Historico Anexo", typeof(MyPages.StatusHistoricoAnexoController), icon: "fa-history")]

[assembly: NavigationLink(1216, "Default/Motivo", typeof(MyPages.MotivoController), icon: null)]

[assembly: NavigationLink(int.MaxValue, "Gestão de Telefonia/Modelo", typeof(MyPages.ModeloController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "Default/Marca", typeof(MyPages.MarcaController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "Default/Tipo Emprestimo", typeof(MyPages.TipoEmprestimoController), icon: null)]
*/
