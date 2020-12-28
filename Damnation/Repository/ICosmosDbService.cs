namespace Damnation
{
    using Damnation.Models;
    using Newtonsoft.Json.Linq;
    using System.Collections.Generic;
    using System.Threading.Tasks;

    public interface ICosmosDbService
    {
        Task<IEnumerable<LeaderBoard>> GetItemsAsync(string query);
        Task<LeaderBoard> GetItemAsync(string id);
        Task AddItemAsync(LeaderBoard item);
        Task UpdateItemAsync(string id, LeaderBoard item);
        Task DeleteItemAsync(string id);

        //Task<JArray> GetItemsAsync(string collectionName, JArray items);
        //Task<JObject> GetItemAsync(string collectionName, JObject item);
        //Task AddItemAsync(string collectionName, JObject item);
        //Task UpdateItemAsync(string id, string collectionName, JObject item);
        //Task DeleteItemAsync(string id, string collectionName, JObject item);
    }
}