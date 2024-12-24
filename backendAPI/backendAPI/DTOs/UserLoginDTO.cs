using System.ComponentModel.DataAnnotations;

namespace backendAPI.DTOs
{
    public class UserLoginDTO
    {
        [Required(ErrorMessage = "The username field is required.")]
        public string username { get; set; } = string.Empty;

        [Required(ErrorMessage = "The password field is required.")]
        public string password { get; set; } = string.Empty;

    }
}
