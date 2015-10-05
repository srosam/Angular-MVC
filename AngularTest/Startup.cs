using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(AngularTest.Startup))]
namespace AngularTest
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
