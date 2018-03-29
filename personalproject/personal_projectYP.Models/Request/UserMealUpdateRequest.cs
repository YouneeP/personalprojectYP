using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace personal_projectYP.Models.Request
{
    public class UserMealUpdateRequest : UserMealAddRequest
    {
        public int Id { get; set; }
    }
}
