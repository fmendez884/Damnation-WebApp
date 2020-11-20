namespace Damnation.Controllers
{
    using System;
    using System.Threading.Tasks;
    using Microsoft.AspNetCore.Mvc;
    using Damnation.Models;
    using Newtonsoft.Json.Linq;
    using System.Net;

    [Route("api/[controller]")]
    public class ItemsController : Controller
    {

        private readonly ICosmosDbService _cosmosDbService;
        public ItemsController(ICosmosDbService cosmosDbService)
        {
            _cosmosDbService = cosmosDbService;
        }

        [HttpGet]
        [ActionName("Index")]
        public async Task<IActionResult> Index()
        {
            return Ok(await _cosmosDbService.GetItemsAsync("SELECT * FROM c"));
        }

        [HttpGet("{controller}/{id}")]
        [ActionName("Details")]
        public async Task<ActionResult> DetailsAsync(string id)
        {
            return Ok(await _cosmosDbService.GetItemAsync(id));
        }

        [HttpPost]
        [ActionName("Create")]
        public IActionResult Create()
        {
            return Ok();
        }

        [HttpPost("Create")]
        [ActionName("Create")]
        //[ValidateAntiForgeryToken]
        public async Task<ActionResult> CreateAsync([FromBody] Item item)
        {
            if (ModelState.IsValid)
            {
                item.Id = Guid.NewGuid().ToString();
                await _cosmosDbService.AddItemAsync(item);
            }

            return Ok(item);
        }

        [HttpPatch("Edit/{id}")]
        [ActionName("Edit")]
        //[ValidateAntiForgeryToken]
        public async Task<ActionResult> EditAsync([FromBody] Item item)
        {
            if (ModelState.IsValid)
            {
                await _cosmosDbService.UpdateItemAsync(item.Id, item);
                return RedirectToAction("Index");
            }

            return Ok(item);
        }

        [HttpPatch]
        [ActionName("Edit")]
        public async Task<ActionResult> EditAsync(string id)
        {
            if (id == null)
            {
                return BadRequest();
            }

            Item item = await _cosmosDbService.GetItemAsync(id);
            if (item == null)
            {
                return NotFound();
            }

            return Ok(item);
        }

        [HttpDelete]
        [ActionName("Delete")]
        public async Task<ActionResult> DeleteAsync(string id)
        {
            if (id == null)
            {
                return BadRequest();
            }

            Item item = await _cosmosDbService.GetItemAsync(id);
            if (item == null)
            {
                return NotFound();
            }

            return Ok(item);
        }

        [HttpDelete("Delete/{id}")]
        [ActionName("Delete")]
        //[ValidateAntiForgeryToken]
        public async Task<ActionResult> DeleteConfirmedAsync(string id)
        {
            await _cosmosDbService.DeleteItemAsync(id);
            return RedirectToAction("Index");
        }

        

    }

}
