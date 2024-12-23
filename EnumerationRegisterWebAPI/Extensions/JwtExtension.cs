using EnumerationRegisterWebAPI.Request;
using Microsoft.AspNetCore.Authentication.OAuth;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using System.Net.Http.Headers;

namespace EnumerationRegisterWebAPI.Extensions
{
    public static class JwtExtension
    {
        public static string GetUserId(this HttpContext httpContext)
        {
            if (httpContext.User == null)
            {
                return string.Empty;
            }

            return httpContext.User.Claims.Single(e => e.Type == "id").Value;
        }
        public static string GetUserName(this HttpContext httpContext)
        {
            if (httpContext.User == null)
            {
                return string.Empty;
            }

            return httpContext.User.Claims.Single(e => e.Type == "username").Value;
        }
        public async static Task<UserInfoResponse> GetUserInfo(this HttpContext httpContext)
        {
            var authResponse = new UserInfoResponse();
            using (var client = new HttpClient())
            {
                string authHeader = httpContext.Request.Headers["Authorization"];
                string token = string.Empty;
                if (authHeader != null && authHeader.StartsWith("Bearer "))
                {
                    token = authHeader.Substring("Bearer ".Length);
                    // Use the token for further processing
                }
                var configuration = new ConfigurationBuilder()
                                     .AddJsonFile("appsettings.json") 
                                     .Build();
                var domain = configuration.GetValue<string>("Domain");

                string endpoint = $"{domain}/auth/api/Auth/validate";
                client.DefaultRequestHeaders.Authorization = new AuthenticationHeaderValue("Bearer", token);
                client.BaseAddress = new Uri(endpoint);
                var response = await client.GetAsync(endpoint);
                response.EnsureSuccessStatusCode();



                if (response.IsSuccessStatusCode)
                {
                    var content = await response.Content.ReadAsStringAsync();
                    authResponse = JsonConvert.DeserializeObject<UserInfoResponse>(content);

                }
            }
            return authResponse;
        }
    }
}
