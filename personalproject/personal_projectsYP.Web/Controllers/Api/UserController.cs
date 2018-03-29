using personal_pojectYP.Services;
using personal_projectYP.Models.Domain;
using personal_projectYP.Models.Request;
using personal_projectYP.Models.Response;
using System;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using System.Web.Http;

namespace personal_projectsYP.Web.Controllers.Api
{
    [RoutePrefix("api/user")]
    public class UserController : ApiController
    {

        [Route]
        public HttpResponseMessage Post(UserAddRequest model)
        {
            try
            {
                if (ModelState.IsValid)
                {
                    UserService svc = new UserService();
                    ItemResponse<int> response = new ItemResponse<int>();
                    response.Item = svc.Registration(model);
                    return Request.CreateResponse(HttpStatusCode.OK, response);
                }
                else
                {
                    return Request.CreateErrorResponse(HttpStatusCode.BadRequest, ModelState);
                }

            }
            catch (Exception ex)
            {
                return Request.CreateResponse(HttpStatusCode.BadRequest, ex.Message);
            }
        }

        [Route("login")]
        public HttpResponseMessage Login(UserLogin model)
        {
            try
            {
                if (ModelState.IsValid)
                {
                    UserService svc = new UserService();
                    ItemResponse<User> response = new ItemResponse<User>();
                    response.Item = svc.Login(model);
                    return Request.CreateResponse(HttpStatusCode.OK, response);
                }
                else
                {
                    return Request.CreateErrorResponse(HttpStatusCode.BadRequest, ModelState);
                }
            }
            catch (Exception ex)
            {
                return Request.CreateResponse(HttpStatusCode.BadRequest, ex.Message);
            }
        }

        [Route("{id:int}")]
        public HttpResponseMessage GetById(int id)
        {
            try
            {
                if (ModelState.IsValid)
                {
                    UserService svc = new UserService();
                    ItemResponse<User> response = new ItemResponse<User>();
                    response.Item = svc.GetById(id);
                    return Request.CreateResponse(HttpStatusCode.OK, response);
                }
                else
                {
                    return Request.CreateErrorResponse(HttpStatusCode.BadRequest, ModelState);
                }
            }
            catch (Exception ex)
            {
                return Request.CreateResponse(HttpStatusCode.BadRequest, ex.Message);
            }
        }

        [Route("meal"), HttpPost]
        public HttpResponseMessage PostMeal(UserMealAddRequest model)
        {
            try
            {
                if (ModelState.IsValid)
                {
                    UserService svc = new UserService();
                    ItemResponse<int> response = new ItemResponse<int>();
                    response.Item = svc.PostMeal(model);
                    return Request.CreateResponse(HttpStatusCode.OK, response);
                }
                else
                {
                    return Request.CreateErrorResponse(HttpStatusCode.BadRequest, ModelState);
                }

            }
            catch (Exception ex)
            {
                return Request.CreateResponse(HttpStatusCode.BadRequest, ex.Message);
            }

        }

        [Route("update/{Id:int}"), HttpPut]
        public HttpResponseMessage UpdateMeal(UserMealUpdateRequest model)
        {
            try
            {
                if (ModelState.IsValid)
                {
                    UserService svc = new UserService();
                    SuccessResponse response = new SuccessResponse();
                    svc.Update(model);
                    return Request.CreateResponse(HttpStatusCode.OK, response);
                }
                else
                {
                    return Request.CreateErrorResponse(HttpStatusCode.BadRequest, ModelState);
                }
            }
            catch (Exception ex)
            {
                return Request.CreateResponse(HttpStatusCode.BadRequest, ex.Message);
            }
        }

        [Route("delete/{Id:int}"), HttpDelete]
        public HttpResponseMessage DeleteMeal(int Id)
        {
            try
            {
                if (ModelState.IsValid)
                {
                    UserService svc = new UserService();
                    SuccessResponse response = new SuccessResponse();
                    svc.Delete(Id);
                    return Request.CreateResponse(HttpStatusCode.OK, response);
                }
                else
                {
                    return Request.CreateErrorResponse(HttpStatusCode.BadRequest, ModelState);
                }
            }
            catch (Exception ex)
            {
                return Request.CreateResponse(HttpStatusCode.BadRequest, ex.Message);
            }
        }

        [Route("meal/{accountId:int}")]
        public HttpResponseMessage GetByAccountId(int accountId)
        {
            try
            {
                if (ModelState.IsValid)
                {
                    UserService svc = new UserService();
                    ItemListResponse<UserMeal> response = new ItemListResponse<UserMeal>();
                    response.Items = svc.SelectByAccountId(accountId);
                    return Request.CreateResponse(HttpStatusCode.OK, response);
                }
                else
                {
                    return Request.CreateErrorResponse(HttpStatusCode.BadRequest, ModelState);
                }
            }
            catch (Exception ex)
            {
                return Request.CreateResponse(HttpStatusCode.BadRequest, ex.Message);
            }
        }

        [Route("todaymeal/{accountId:int}")]
        public HttpResponseMessage GetByDate(int accountId)
        {
            try
            {
                if (ModelState.IsValid)
                {
                    UserService svc = new UserService();
                    ItemListResponse<UserMeal> response = new ItemListResponse<UserMeal>();
                    response.Items = svc.SelectByDate(accountId);
                    return Request.CreateResponse(HttpStatusCode.OK, response);
                }
                else
                {
                    return Request.CreateErrorResponse(HttpStatusCode.BadRequest, ModelState);
                }
            }
            catch (Exception ex)
            {
                return Request.CreateResponse(HttpStatusCode.BadRequest, ex.Message);
            }
        }

        [Route("singlemeal/{Id:int}")]
        public HttpResponseMessage GetMealById(int Id)
        {
            try
            {
                if (ModelState.IsValid)
                {
                    UserService svc = new UserService();
                    ItemResponse<UserMeal> response = new ItemResponse<UserMeal>();
                    response.Item = svc.SelectById(Id);
                    return Request.CreateResponse(HttpStatusCode.OK, response);
                }
                else
                {
                    return Request.CreateErrorResponse(HttpStatusCode.BadRequest, ModelState);
                }
            }
            catch (Exception ex)
            {
                return Request.CreateResponse(HttpStatusCode.BadRequest, ex.Message);
            }
        }

        [Route("recipe"), HttpPost]
        public HttpResponseMessage GetRecipes(Recipe model)
        {
            var url = model.Url;
            var webGet = new HtmlAgilityPack.HtmlWeb();
            HtmlAgilityPack.HtmlDocument doc = webGet.Load(url);
            HtmlWeb web = new HtmlWeb(url);
            string titleNodes = doc.DocumentNode.SelectSingleNode("//head/title").InnerText;
            var descriptionNodes = doc.DocumentNode.SelectSingleNode("//head/meta[@name='description']").Attributes["content"].Value;
            model.Title = titleNodes;
            model.Description = descriptionNodes;

            try
            {
                if (ModelState.IsValid)
                {
                    ItemResponse<Recipe> response = new ItemResponse<Recipe>();
                    response.Item = model;
                    return Request.CreateResponse(HttpStatusCode.OK, response);
                }
                else
                {
                    return Request.CreateErrorResponse(HttpStatusCode.BadRequest, ModelState);
                }
            }
            catch (Exception ex)
            {
                return Request.CreateResponse(HttpStatusCode.BadRequest, ex.Message);
            }
        }

    }

    internal class HtmlWeb
    {
        private string url;

        public HtmlWeb(string url)
        {
            this.url = url;
        }

        internal object Load(string url)
        {
            throw new NotImplementedException();
        }
    }
}
