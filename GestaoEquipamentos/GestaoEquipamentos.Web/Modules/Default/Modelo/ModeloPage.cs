
namespace GestaoEquipamentos.Default.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Default/Modelo"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.ModeloRow))]
    public class ModeloController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Default/Modelo/ModeloIndex.cshtml");
        }
    }
}