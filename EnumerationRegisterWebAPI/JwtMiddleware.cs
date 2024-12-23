using EnumerationRegisterWebAPI.Service;



namespace EnumerationRegisterWebAPI
{
    public class JwtMiddleware
    {
        private readonly RequestDelegate _next;

        public JwtMiddleware(RequestDelegate next)
        {
            _next = next;
        }
        public async Task Invoke(HttpContext context, IJwtUtils jwtUtils, IUserService userService)
        {
            var token = context.Request.Headers["Authorization"].FirstOrDefault()?.Split(" ").Last();
            var userId = jwtUtils.ValidateToken(!string.IsNullOrEmpty(token) ? token : string.Empty);
            if (userId != null)
            {
                // attach user to context on successful jwt validation

                context.Items["Userinfo"] = await userService.GetUserbyId(userId.Value);
            }

            await _next(context);
        }

    }

}
