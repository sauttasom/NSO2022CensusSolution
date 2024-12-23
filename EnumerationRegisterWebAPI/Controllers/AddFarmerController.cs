using EnumerationRegisterWebAPI.Extensions;
using EnumerationRegisterWebAPI.Request;
using EnumerationRegisterWebAPI.Service;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Security.Cryptography;

namespace EnumerationRegisterWebAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [Authorize]
    public class AddFarmerController : Controller
    {
        private readonly IAddFarmerService _iaddFarmerService;
        public AddFarmerController(IAddFarmerService addFarmerService)
        {
            _iaddFarmerService = addFarmerService;
        }
        [AllowAnonymous]
        [HttpGet("GenerateFarmerUserName")]
        public IActionResult GenerateFarmerUserName(string pid)
        {
            try
            {
                var response =  _iaddFarmerService.GenerateFarmerUserName(pid);
                return Ok(response);
            }catch(Exception ex)
            { 
                return BadRequest(ex.Message);
            }
  
        }
        [HttpGet("GetFarmerById")]
        public async Task<IActionResult> GetFarmerById(int farmerId)
        {
            try
            {
                var response = await _iaddFarmerService.GetFarmerById(farmerId);
                return Ok(response);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
        [HttpPatch("DeleteFarmer")]
        public async Task<IActionResult> DeleteFarmer(int  rowId)
        {
            try
            {
                var response = await _iaddFarmerService.DeleteFarmer(rowId);
                return Ok(response);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
        [HttpPost("GetFarmerSearchList")]
        public async Task<IActionResult> GetFarmerSearchList(AddFarmerSearchRequest addFarmerSearch)
        {
            try
            {
                var userInfo = await HttpContext.GetUserInfo();
                var response = await _iaddFarmerService.GetFarmerSearchList(addFarmerSearch, userInfo.UserId);
                return Ok(response);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
        [HttpPost("AddFarmer")]
        public async Task<IActionResult> AddFarmer(AddFarmerRequest addFarmerRequest)
        {
            try
            {
                var userInfo = await HttpContext.GetUserInfo();
                var response = await _iaddFarmerService.AddFarmer(addFarmerRequest, userInfo.UserId);
                return Ok(response);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
        [HttpPatch("UpdateFarmer")]
        public async Task<IActionResult> UpdateFarmer(AddFarmerRequest addFarmerRequest)
        {
            try
            {
                var userInfo = await HttpContext.GetUserInfo();
                var response = await _iaddFarmerService.UpdateFarmer(addFarmerRequest, userInfo.UserId);
                return Ok(response);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
    }
}
