
namespace GestaoEquipamentos.Default.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Default/Equipamento"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.EquipamentoRow))]
    public class EquipamentoController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Default/Equipamento/EquipamentoIndex.cshtml");
        }
    }
}