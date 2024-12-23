using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using EnumerationRegisterWebAPI.Service;

namespace EnumerationRegisterWebAPI.Controllers
{
   
    [Route("api/[controller]")]
    [ApiController]
    public class AuthenticationController : Controller
    {
        //private readonly IMyAuthenticationService _authenticationService;
        private readonly IJwtUtils _jwtUtils;
        public AuthenticationController(IJwtUtils jwtUtils)
        {
            _jwtUtils = jwtUtils;
        }
        
        [AllowAnonymous]
        [HttpPost (Name = "Authenticate")]
        public async Task<IActionResult>  Authenticate(AuthenitcationRequest authenitcationRequest)
        {
          
            string token = await _jwtUtils.Authenticate(authenitcationRequest);
            if (string.IsNullOrEmpty(token))
                return Unauthorized();


            return Ok(token);
        }
    }
}
