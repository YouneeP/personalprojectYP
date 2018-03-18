using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace personal_projectYP.Models.Request
{
    public class PeopleUpdateRequest : PeopleAddRequest
    {
        [Required]
        public int Id { get; set; }
    }
}
