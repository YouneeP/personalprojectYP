using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace personal_projectYP.Models.Request
{
    public class UserMealAddRequest
    {
        public int AccountId { get; set; }

        public string Meal { get; set; }

        public string Quantity { get; set; }
    }
}
