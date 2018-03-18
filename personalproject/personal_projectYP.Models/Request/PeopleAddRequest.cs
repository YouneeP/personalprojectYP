using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace personal_projectYP.Models.Request
{
   public  class PeopleAddRequest
    {
        [Required, MinLength(3), MaxLength(50)]
        public string FirstName { get; set; }

        public string MiddleInitial { get; set; }

        [Required, MaxLength(50)]
        public string LastName { get; set; }

        [Required]
        public DateTime DOB { get; set; }

        [MaxLength(128)]
        public string ModifiedBy { get; set; }
    }
}
