namespace Damnation
{
    using Damnation.Models;
    using Newtonsoft.Json.Linq;
    using System.Collections.Generic;
    using System.Threading.Tasks;

    public interface ICosmosDbService
    {
        Task<IEnumerable<Item>> GetItemsAsync(string query);
        Task<Item> GetItemAsync(string id);
        Task AddItemAsync(Item item);
        Task UpdateItemAsync(string id, Item item);
        Task DeleteItemAsync(string id);

        //Task<JArray> GetItemsAsync(string collectionName, JArray items);
        //Task<JObject> GetItemAsync(string collectionName, JObject item);
        //Task AddItemAsync(string collectionName, JObject item);
        //Task UpdateItemAsync(string id, string collectionName, JObject item);
        //Task DeleteItemAsync(string id, string collectionName, JObject item);
    }
}