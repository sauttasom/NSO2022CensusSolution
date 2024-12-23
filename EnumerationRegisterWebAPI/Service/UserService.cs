using Microsoft.EntityFrameworkCore;
using EnumerationRegisterWebAPI.Models;
using System.Security.Cryptography;
using System.Text;

namespace EnumerationRegisterWebAPI.Service

{
    public class UsersInfo
    {

        public int? Id { get; set; } = default(int?);
        public string Name { get; set; } = string.Empty;
        public string Username { get; set; } = string.Empty;
        public int? Roleid { get; set; } = default(int?);
    }   
    public interface IUserService
    {
        public Task<List<UsersInfo>> GetUserbyId(int id);
        public string EncryptString(string plainText);
    }
    public class UserService : IUserService
    {
        private readonly string _key = "R2zhan8um8HQWnVr9g85fQ0SQJ7NW8ez";
        private readonly Agrc66Context _context;
        public UserService(Agrc66Context context)
        {

            _context = context;

        }
        public async Task<List<UsersInfo>> GetUserbyId(int id)
        {
            try
            {
                
                return await _context.Users.Where(x => x.UserId.Equals(id))
                                .Select(x => new UsersInfo { Id = x.UserId, Roleid = x.RoleId , Name = x.Name }).ToListAsync(); 
            }
            catch (Exception ex)
            {
                throw ex;
            }
            
      


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
    }
}
