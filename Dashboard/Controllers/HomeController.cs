using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Dashboard.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            ViewBag.Title = "Home Page";

            return View();
        }


        public ActionResult MakeAjaxCall()
        {
            return new JsonResult()
            {
                JsonRequestBehavior = JsonRequestBehavior.AllowGet,
                MaxJsonLength = Int32.MaxValue,
                Data = new
                {
                    key = "On Time Supplies",
                    value = "800",
                    EfficiencyPercentage = Enumerable.Range(1, 2).Select(x => new { value = x == 1 ? 800 : 200 }).ToList()
                }
            };
        }

        public ActionResult DragDrop()
        {
            return View();
        }
    }
}
