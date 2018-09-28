
namespace GestaoEquipamentos.Default.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Default/Acessorio"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.AcessorioRow))]
    public class AcessorioController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Default/Acessorio/AcessorioIndex.cshtml");
        }
    }
}