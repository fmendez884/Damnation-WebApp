using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Damnation.Models
{
    using Newtonsoft.Json;

    public class LeaderBoard
    {
        [JsonProperty(PropertyName = "id")]
        public string Id { get; set; }

        [JsonProperty(PropertyName = "name")]
        public string Name { get; set; }

        [JsonProperty(PropertyName = "email")]
        public string Email { get; set; }

        [JsonProperty(PropertyName = "timeElapsed")]
        public string TimeElapsed { get; set; }

        [JsonProperty(PropertyName = "remainingHealth")]
        public int RemainingHealth { get; set; }

        [JsonProperty(PropertyName = "score")]
        public int Score { get; set; }
    }
}
