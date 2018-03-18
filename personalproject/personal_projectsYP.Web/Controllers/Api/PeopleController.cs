using personal_pojectYP.Services;
using personal_projectYP.Models.Domain;
using personal_projectYP.Models.Request;
using personal_projectYP.Models.Response;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace personal_projectsYP.Web.Controllers.Api
{
    [RoutePrefix("api/people")]
    public class PeopleController : ApiController
    {
        // GET api/<controller>
        [Route("getall")]
        public HttpResponseMessage GetAll()
        {
            try
            {
                PeopleService svc = new PeopleService();
                ItemListResponse<People> response = new ItemListResponse<People>();
                response.Items = svc.GetAll();
                return Request.CreateResponse(HttpStatusCode.OK, response);
            }
            catch(Exception ex)
            {
                return Request.CreateErrorResponse(HttpStatusCode.BadRequest, ex.Message);
            }
            
        }

        public HttpResponseMessage GetById()
        {
            return Request.CreateResponse(HttpStatusCode.OK, "you called gey by id");
        }

        // GET api/<controller>/5
        public string Get(int id)
        {
            return "value";
        }

        // POST api/<controller>
        [Route]
        public HttpResponseMessage Post(PeopleAddRequest model)
        {
            try
            {
                if (ModelState.IsValid)
                {
                    PeopleService svc = new PeopleService();
                    ItemResponse<int> response = new ItemResponse<int>();
                    response.Item = svc.Insert(model);
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

        // PUT api/<controller>/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/<controller>/5
        public void Delete(int id)
        {
        }
    }
}