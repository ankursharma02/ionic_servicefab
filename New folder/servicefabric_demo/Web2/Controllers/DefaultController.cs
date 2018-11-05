using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace Web2.Controllers
{
    class Web2_ser
    {
        public string name { get; set; }
        public int ID { get; set; }
    }
    [Route("api/[Controller]")]
    public class DefaultController : Controller
    {
        List<Web2_ser> web2s = new List<Web2_ser>();
        public IActionResult Index()
        {
            web2s.Add(new Web2_ser() { ID = 1, name = "ankur" });
            web2s.Add(new Web2_ser() { ID = 1, name = "ankur" });

            return new  JsonResult(web2s);
        }
    }
}