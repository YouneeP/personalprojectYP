using System;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using personal_projectYP.Models.Request;
using personal_pojectYP.Services;
using System.Collections.Generic;
using personal_projectYP.Models.Domain;

namespace personal_projectYP.UnitTest
{
    [TestClass]
    public class PeopleTest
    {
        [TestMethod]
        public void Insert_Test()
        {
            PeopleAddRequest model = new PeopleAddRequest
            {
                FirstName = "Ronald",
                MiddleInitial = "J",
                LastName = "McDonalds",
                DOB = DateTime.Now.AddYears(-30),
                ModifiedBy = "Me"
            };
            PeopleService svc = new PeopleService();
            int result = svc.Insert(model);

            Assert.IsTrue(result > 0, "The insert Failed");
        }

        [TestMethod]
        public void SelectAll_Test()
        {
            PeopleService svc = new PeopleService();
            List<People> result = svc.GetAll();
            Assert.IsTrue(result.Count > 0, "Select All has Failed");
        }
    }
}
