
namespace GestaoEquipamentos.Default.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Default/Emprestimo"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.EmprestimoRow))]
    public class EmprestimoController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Default/Emprestimo/EmprestimoIndex.cshtml");
        }
    }
}