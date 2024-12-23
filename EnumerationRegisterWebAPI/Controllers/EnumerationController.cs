using EnumerationRegisterWebAPI.Extensions;
using EnumerationRegisterWebAPI.Models;
using EnumerationRegisterWebAPI.Request;
using EnumerationRegisterWebAPI.Response;
using EnumerationRegisterWebAPI.Service;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System.Net;

namespace EnumerationRegisterWebAPI.Controllers
{

    [Route("api/[controller]")]
    [ApiController]
    [Authorize]
    public class EnumerationController : Controller
    {
        private readonly IEnumerateService _ienumerateService;

        public EnumerationController(IEnumerateService enumerateService)
        {


            _ienumerateService = enumerateService;

        }

        [HttpPost("GetEnumerate")]
        public async Task<ActionResult<ResponseDTO>> GetEnumerate(EnumerateSearchRequest enumerate)
        {
            try
            {
                UserInfoResponse userInfo = await HttpContext.GetUserInfo();
                //string userId = HttpContext.GetUserName();

                var response = await _ienumerateService.GetEnumerateList(enumerate, userInfo);

                return Ok(response);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }

        }

        [HttpPost("GetEnumerateChecking")]
        public async Task<ActionResult<ResponseDTO>> GetEnumerateChecking(EnumerateSearchRequest enumerate)
        {
            try
            {
                UserInfoResponse userInfo = await HttpContext.GetUserInfo();
                //string userId = HttpContext.GetUserName();

                var response = await _ienumerateService.GetEnumerateCheckingList(enumerate, userInfo);

                return Ok(response);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }

        }
        [AllowAnonymous]
        [HttpGet("GetBankName")]
        public async Task<ActionResult<List<BankNameMaster>>> GetBankNameMaster()
        {
            try
            {

                var bankNameResponse = await _ienumerateService.GetBankNameMaster();
                return Ok(bankNameResponse);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [AllowAnonymous]
        [HttpGet("GetEducationLevel")]
        public async Task<ActionResult> GetEducationLevel()
        {
            try
            {
                var educationLevelResponse = await _ienumerateService.GetEducationLevel();
                return Ok(educationLevelResponse);
            }
            catch (Exception ex)
            {
                return BadRequest($"Create User Fail {ex.Message}");
            }
        }

        [HttpGet("GetEnumerateRegisterById")]
        public async Task<ActionResult> GetEnumerateRegisterById(string enumerateid)
        {
            try
            {
                var enumerateResponse = await _ienumerateService.GetEnumerateRegisterById(enumerateid);
                return Ok(enumerateResponse);
            }
            catch (Exception ex)
            {
                return BadRequest($"Create User Fail {ex.Message}");
            }

        }
        [HttpPatch("CancelEnumerateChecked")]
        public async Task<ActionResult> CancelEnumerateChecked(int enumerateid)
        {
            try
            {
                var userInfo = await HttpContext.GetUserInfo();
                var enumerateResponse = await _ienumerateService.CancelChecked(enumerateid, userInfo.UserId);
                return Ok(enumerateResponse);
            
            }
            catch (Exception ex)
            {
                return BadRequest($"Create User Fail {ex.Message}");
            }
        }
        [HttpPatch("UpdateEnumerateChecking")]
        public async Task<ActionResult> UpdateEnumerateChecking(int enumerateid)
        {
            try
            {
                var enumerateResponse = await _ienumerateService.UpdateEnumerateChecking(enumerateid);
                return Ok(enumerateResponse);
            }
            catch (Exception ex)
            {
                return BadRequest($"Create User Fail {ex.Message}");
            }
        }

        [HttpPatch("ImportEnumerator")]
        public async Task<ActionResult<string>> ImportEnumerator(int?[] enumerateId)
        {
            try
            {
                var userInfo = await HttpContext.GetUserInfo();
                var importResponse = await _ienumerateService.ImportEnumerator(enumerateId, userInfo.UserId);
                return Ok(importResponse);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpPatch("UpdateEnumerate")]
        public async Task<ActionResult<ResponseDTO>> UpdateEnumerate(EnumerateRequest enumerateRequest)
        {

            try
            {
                var userInfo = await HttpContext.GetUserInfo();
                var updateEnumerateResponse = await _ienumerateService.UpdateEnumerateDetail(enumerateRequest, userInfo.UserId);
                return Ok(updateEnumerateResponse);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }

        }

        [AllowAnonymous]
        [HttpGet("GetPositionEnumurate")]
        public async Task<ActionResult<List<PositionResponse>>> GetPositionEnumurate(int isvolunteer)
        {

            try
            {

                var munTypeResponse = await _ienumerateService.GetPositionEnumerate(isvolunteer);
                return Ok(munTypeResponse);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }

        }
        [AllowAnonymous]
        [HttpPost("RegisterEnumerate")]
        public async Task<ActionResult<ResponseDTO>> RegisterEnumerate(EnumerateRequest enumerate)
        {
            try
            {
                var response = await _ienumerateService.RegisterEnumerate(enumerate);

                return Ok(response);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }


        }
    }
}
