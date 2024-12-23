using System.ComponentModel.DataAnnotations;

namespace backendAPI.Models
{
    public class User
    {
        [Key]
        public int user_id { get; set; }

        [Required(ErrorMessage = "Username is required")]
        public string username { get; set; } = string.Empty;

        public string password { get; set; } = string.Empty;
        public string email { get; set; } = string.Empty;
        public string role {  get; set; } = string.Empty;
    }
}
