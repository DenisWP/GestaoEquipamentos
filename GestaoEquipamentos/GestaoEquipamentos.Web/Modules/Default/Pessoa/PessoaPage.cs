
namespace GestaoEquipamentos.Default.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Default/Pessoa"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.PessoaRow))]
    public class PessoaController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Default/Pessoa/PessoaIndex.cshtml");
        }
    }
}