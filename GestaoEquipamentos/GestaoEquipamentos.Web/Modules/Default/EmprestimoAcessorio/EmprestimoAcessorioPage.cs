
namespace GestaoEquipamentos.Default.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Default/EmprestimoAcessorio"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.EmprestimoAcessorioRow))]
    public class EmprestimoAcessorioController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Default/EmprestimoAcessorio/EmprestimoAcessorioIndex.cshtml");
        }
    }
}