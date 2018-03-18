﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace personal_projectYP.Models.Response
{
    public class ItemListResponse<T> : SuccessResponse
    {
        public List<T> Items { get; set; }
    }
}
