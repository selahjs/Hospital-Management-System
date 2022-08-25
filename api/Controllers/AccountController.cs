using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using api.DTOs;
using Microsoft.AspNetCore.Mvc;

namespace api.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class AccountController : ControllerBase
    {

        [HttpPost("login")]
        public ActionResult<User> Login(User user){
            
            if (user.Username != "admin" || user.Password != "admin") return Unauthorized("Incorrect Username or Password");
            return Ok("You are Logged in");
        }
    }
}