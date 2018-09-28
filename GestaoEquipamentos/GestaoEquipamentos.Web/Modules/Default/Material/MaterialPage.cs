
namespace GestaoEquipamentos.Default.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Default/Material"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.MaterialRow))]
    public class MaterialController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Default/Material/MaterialIndex.cshtml");
        }
    }
}