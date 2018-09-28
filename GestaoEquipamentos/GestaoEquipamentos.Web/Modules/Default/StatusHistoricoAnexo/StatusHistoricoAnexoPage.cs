
namespace GestaoEquipamentos.Default.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Default/StatusHistoricoAnexo"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.StatusHistoricoAnexoRow))]
    public class StatusHistoricoAnexoController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Default/StatusHistoricoAnexo/StatusHistoricoAnexoIndex.cshtml");
        }
    }
}