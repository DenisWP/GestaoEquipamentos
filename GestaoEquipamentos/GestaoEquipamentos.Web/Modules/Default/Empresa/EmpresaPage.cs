
namespace GestaoEquipamentos.Default.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Default/Empresa"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.EmpresaRow))]
    public class EmpresaController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Default/Empresa/EmpresaIndex.cshtml");
        }
    }
}