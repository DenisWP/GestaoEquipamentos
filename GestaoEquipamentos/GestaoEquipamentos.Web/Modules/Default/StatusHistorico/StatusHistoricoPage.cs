
namespace GestaoEquipamentos.Default.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Default/StatusHistorico"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.StatusHistoricoRow))]
    public class StatusHistoricoController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Default/StatusHistorico/StatusHistoricoIndex.cshtml");
        }
    }
}