
namespace GestaoEquipamentos.Default.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Default/Marca"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.MarcaRow))]
    public class MarcaController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Default/Marca/MarcaIndex.cshtml");
        }
    }
}