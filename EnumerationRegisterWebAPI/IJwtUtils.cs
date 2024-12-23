using EnumerationRegisterWebAPI.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using System.ComponentModel.DataAnnotations;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Security.Cryptography;
using System.Text;

namespace EnumerationRegisterWebAPI
{
    public class AuthenitcationRequest
    {
        [Required]
        public string Username { get; set; } = string.Empty;

        [Required]
        public string Password { get; set; } = string.Empty;
    }
    public interface IJwtUtils
    {

        public int? ValidateToken(string token);
        public Task<string> Authenticate(AuthenitcationRequest authenitcationRequest);

    }
    public class JwtUtils : IJwtUtils
    {
        private readonly string _key = "R2zhan8um8HQWnVr9g85fQ0SQJ7NW8ez";
        private readonly IConfiguration _configuration;
        private readonly Agrc66Context _context;
        public JwtUtils(IConfiguration configuration, Agrc66Context context)
        {
            _configuration = configuration;
            _context = context;
        }

        public string EncryptString(string plainText)
        {

            byte[] iv = new byte[16];
            byte[] array;

            using (Aes aes = Aes.Create())
            {
                aes.Key = Encoding.UTF8.GetBytes(_key);
                aes.IV = iv;
                ICryptoTransform encryptor = aes.CreateEncryptor(aes.Key, aes.IV);

                using (MemoryStream memoryStream = new MemoryStream())
                {
                    using (CryptoStream cryptoStream = new CryptoStream((Stream)memoryStream, encryptor, CryptoStreamMode.Write))
                    {
                        using (StreamWriter streamWriter = new StreamWriter((Stream)cryptoStream))
                        {
                            streamWriter.Write(plainText);
                        }

                        array = memoryStream.ToArray();
                    }
                }
            }

            return Convert.ToBase64String(array).Replace("+", "-").Replace("/", "_").Replace("=", "|");
        }
        public async Task<string> Authenticate(AuthenitcationRequest authenitcationRequest)
        {
            var userLogin = await _context.Users
                                        .SingleOrDefaultAsync(x => x.Username.Equals(authenitcationRequest.Username.Trim()) && x.Password.Equals(EncryptString(authenitcationRequest.Password)));

            // var userLogin = _context.Users.SingleOrDefault(x => x.Username.Equals(username.ToLower().Trim()) && x.Password.Equals(password.Trim()));

            if (userLogin == null)
                return string.Empty;

            var token = generateJwtToken(userLogin);
            if (token == null)
                return string.Empty;

            return token;
        }
        private string generateJwtToken(User user)
        {

            // generate token that is valid for 7 days
            var tokenHandler = new JwtSecurityTokenHandler();
            var key = Encoding.ASCII.GetBytes(_configuration["Jwt:Token"]);
            var tokenDescriptor = new SecurityTokenDescriptor
            {
                Subject = new ClaimsIdentity(new[] {
                    new Claim("id", user.UserId.ToString()) ,
                    new Claim("username",user.Username.ToString()) ,
                }),
                Expires = DateTime.UtcNow.AddDays(7),
                SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(key), SecurityAlgorithms.HmacSha256Signature)
            };
            var token = tokenHandler.CreateToken(tokenDescriptor);
            return tokenHandler.WriteToken(token);
        }
        public int? ValidateToken(string token)
        {
            if (token == null)
                return null;

            var tokenHandler = new JwtSecurityTokenHandler();
            var key = Encoding.ASCII.GetBytes(_configuration["Jwt:Token"]);
            try
            {
                tokenHandler.ValidateToken(token, new TokenValidationParameters
                {
                    ValidateIssuerSigningKey = true,
                    IssuerSigningKey = new SymmetricSecurityKey(key),
                    ValidateIssuer = false,
                    ValidateAudience = false,
                    // set clockskew to zero so tokens expire exactly at token expiration time (instead of 5 minutes later)
                    ClockSkew = TimeSpan.Zero
                }, out SecurityToken validatedToken);

                var jwtToken = (JwtSecurityToken)validatedToken;
                var userId = int.Parse(jwtToken.Claims.First(x => x.Type == "id").Value);

                // return user id from JWT token if validation successful
                return userId;
            }
            catch
            {
                // return null if validation fails
                return null;
            }
        }
    }
}