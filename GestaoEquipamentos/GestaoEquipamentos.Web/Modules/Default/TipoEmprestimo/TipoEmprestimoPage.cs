
namespace GestaoEquipamentos.Default.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Default/TipoEmprestimo"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.TipoEmprestimoRow))]
    public class TipoEmprestimoController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Default/TipoEmprestimo/TipoEmprestimoIndex.cshtml");
        }
    }
}