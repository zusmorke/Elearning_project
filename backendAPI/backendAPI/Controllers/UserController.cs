using backendAPI.Model;
using backendAPI.Models;
using backendAPI.DTOs;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace backendAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : Controller
    {
        private readonly AppDbContext _context;

        public UserController(AppDbContext context)
        {
            _context = context;
        }

        // API endpoint to get all users
        [HttpGet]
        public async Task<ActionResult<IEnumerable<User>>> GetUsers()
        {
            // Lấy tất cả user từ cơ sở dữ liệu
            var users = await _context.Users.ToListAsync();

            if (users == null || users.Count == 0)
            {
                return NotFound("No users found.");
            }

            return Ok(users); // Trả về danh sách người dùng
        }

        // API đăng ký người dùng
        [HttpPost("register")]
        public async Task<IActionResult> Register([FromBody] User user)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest("Invalid data.");
            }

            if (await _context.Users.AnyAsync(u => u.username == user.username))
            {
                return Conflict(new { message = "Tên người dùng đã tồn tại." });
            }

            user.role = string.IsNullOrEmpty(user.role) ? "student" : user.role;

            _context.Users.Add(user);
            await _context.SaveChangesAsync();

            return Ok(new { message = "Đăng ký thành công." });
        }

        // API đăng nhập người dùng
        [HttpPost("login")]
        public async Task<IActionResult> Login([FromBody] UserLoginDTO userLogin)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            // Check if the user exists and credentials match
            var user = await _context.Users.SingleOrDefaultAsync(u => u.username == userLogin.username && u.password == userLogin.password);

            if (user == null)
            {
                return Unauthorized("Invalid username or password.");
            }

            return Ok(new { message = "Đăng nhập thành công." });
        }
        // Đăng xuất
        [HttpPost("logout")]
        public IActionResult Logout()
        {
            return Ok(new { message = "Đăng xuất thành công" });
        }
    }
}
