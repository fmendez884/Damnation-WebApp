using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Damnation.Models
{
    public class User
    {
        [Required]
        public string Email { get; set; }


    }
}
