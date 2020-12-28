using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Damnation.Models;
using Microsoft.Azure.Cosmos;
using Microsoft.Azure.Cosmos.Fluent;
using Microsoft.Extensions.Configuration;
using Newtonsoft.Json.Linq;

namespace Damnation.Repository
{
    public class CosmosDbService : ICosmosDbService
    {
        private Container _container;
        public CosmosDbService(
            CosmosClient dbClient,
            string databaseName,
            string containerName)
        {
            this._container = dbClient.GetContainer(databaseName, containerName);
        }

        public async Task AddItemAsync(LeaderBoard item)
        {
            await this._container.CreateItemAsync<LeaderBoard>(item, new PartitionKey(item.Id));
        }

        public async Task DeleteItemAsync(string id)
        {
            await this._container.DeleteItemAsync<LeaderBoard>(id, new PartitionKey(id));
        }

        public async Task<LeaderBoard> GetItemAsync(string id)
        {
            try
            {
                ItemResponse<LeaderBoard> response = await this._container.ReadItemAsync<LeaderBoard>(id, new PartitionKey(id));
                return response.Resource;
            }
            catch (CosmosException ex) when (ex.StatusCode == System.Net.HttpStatusCode.NotFound)
            {
                return null;
            }

        }

        public async Task<IEnumerable<LeaderBoard>> GetItemsAsync(string queryString)
        {
            var query = this._container.GetItemQueryIterator<LeaderBoard>(new QueryDefinition(queryString));
            List<LeaderBoard> results = new List<LeaderBoard>();
            while (query.HasMoreResults)
            {
                var response = await query.ReadNextAsync();

                results.AddRange(response.ToList());
            }

            return results;
        }

        public async Task UpdateItemAsync(string id, LeaderBoard item)
        {
            await this._container.UpsertItemAsync<LeaderBoard>(item, new PartitionKey(id));
        }
    }

}
