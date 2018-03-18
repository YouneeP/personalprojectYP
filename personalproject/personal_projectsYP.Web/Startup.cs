using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(personal_projectsYP.Web.Startup))]
namespace personal_projectsYP.Web
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
