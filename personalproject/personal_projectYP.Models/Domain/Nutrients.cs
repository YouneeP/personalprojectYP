using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace personal_projectYP.Models.Domain
{
    public class Nutrients
    {
        public int AccountId { get; set; }
        public int Energy { get; set; }
        public int Protein { get; set; }
        public int Fat { get; set; }
        public int Carbohydrates { get; set; }
        public int Sodium { get; set; }
        public int Fibre { get; set; }
    }
}
