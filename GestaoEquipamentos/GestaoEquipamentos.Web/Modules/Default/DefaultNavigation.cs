using Serenity.Navigation;
using MyPages = GestaoEquipamentos.Default.Pages;

[assembly: NavigationLink(int.MaxValue, "Default/Acessorio", typeof(MyPages.AcessorioController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "Default/Empresa", typeof(MyPages.EmpresaController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "Default/Emprestimo", typeof(MyPages.EmprestimoController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "Default/Emprestimo Acessorio", typeof(MyPages.EmprestimoAcessorioController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "Default/Equipamento", typeof(MyPages.EquipamentoController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "Default/Marca", typeof(MyPages.MarcaController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "Default/Material", typeof(MyPages.MaterialController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "Default/Modelo", typeof(MyPages.ModeloController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "Default/Pessoa", typeof(MyPages.PessoaController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "Default/Status", typeof(MyPages.StatusController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "Default/Status Historico", typeof(MyPages.StatusHistoricoController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "Default/Status Historico Anexo", typeof(MyPages.StatusHistoricoAnexoController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "Default/Tipo Emprestimo", typeof(MyPages.TipoEmprestimoController), icon: null)]