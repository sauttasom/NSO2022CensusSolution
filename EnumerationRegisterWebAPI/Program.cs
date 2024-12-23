using EnumerationRegisterWebAPI;
using EnumerationRegisterWebAPI.Models;
using EnumerationRegisterWebAPI.Service;
using Microsoft.EntityFrameworkCore;
using Microsoft.OpenApi.Models;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.IdentityModel.Tokens;
using System.Text;
using Microsoft.AspNetCore.Authorization;
using Microsoft.Extensions.Options;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
//builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen(c =>
{

    c.SwaggerDoc("v1", new OpenApiInfo { Title = "JWTAuth", Version = "v1" });

    c.AddSecurityDefinition(JwtBearerDefaults.AuthenticationScheme, new OpenApiSecurityScheme
    {
        Name = "Authentication",
        Type = SecuritySchemeType.ApiKey,
        Scheme = "Bearer",
        BearerFormat = "JWT",
        In = ParameterLocation.Header,
        Description = "Authentication JWT Pass Token"
    });
    c.AddSecurityRequirement(new OpenApiSecurityRequirement
                {
                    {
                          new OpenApiSecurityScheme
                            {
                                Reference = new OpenApiReference
                                {
                                    Type = ReferenceType.SecurityScheme,
                                    Id = JwtBearerDefaults.AuthenticationScheme
                                }
                            },
                            new string[] {}
                    }
                });
});

builder.Services.AddScoped<IAddFarmerService, AddFarmerService>();

builder.Services.AddScoped<IEnumerateService, EnumerateService>();
builder.Services.AddScoped<IJwtUtils, JwtUtils>();
builder.Services.AddScoped<IUserService, UserService>();

builder.Services.AddAuthentication(x =>
{
    x.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
    x.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
    x.DefaultScheme = JwtBearerDefaults.AuthenticationScheme;

}).AddJwtBearer(x =>
    {
        x.RequireHttpsMetadata = false;
        x.SaveToken = true;
        x.TokenValidationParameters = new TokenValidationParameters
        {
            ValidateIssuerSigningKey = true,
            IssuerSigningKey = new SymmetricSecurityKey(Encoding.ASCII.GetBytes(builder.Configuration["Jwt:Token"])),
            ValidateIssuer = false,
            ValidateAudience = false,
            
        };
    });

builder.Services.AddAuthorization(x =>
{
    var defaultAuthorizationPolicyBuilder = new AuthorizationPolicyBuilder(
               JwtBearerDefaults.AuthenticationScheme);

    defaultAuthorizationPolicyBuilder =
        defaultAuthorizationPolicyBuilder.RequireAuthenticatedUser();

    x.DefaultPolicy = defaultAuthorizationPolicyBuilder.Build();
});

builder.Services.AddDbContext<Agrc66Context>(op =>
{
    op.EnableSensitiveDataLogging(true);
    op.UseSqlServer(builder.Configuration.GetConnectionString("Agrc66") ?? throw new InvalidCastException("builder.ConfigurationConnectStringException")

    );

});
var app = builder.Build();

// Configure the HTTP request pipeline.
//if (app.Environment.IsDevelopment())
//{
//    app.UseSwagger();
//    app.UseSwaggerUI();
//}
app.UseSwagger();
app.UseSwaggerUI();



app.UseCors(x =>
    x.AllowAnyMethod()
    .AllowAnyHeader()
    .SetIsOriginAllowed(origin => true) // allow any origin
    .AllowCredentials()); // allow credentials);

app.UseHttpsRedirection();
app.UseAuthentication();
app.UseAuthorization();
//app.UseMiddleware<JwtMiddleware>();

app.MapControllers();
app.Run();
