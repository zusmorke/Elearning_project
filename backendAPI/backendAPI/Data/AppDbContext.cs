using backendAPI.Models;
using Microsoft.EntityFrameworkCore;

namespace backendAPI.Model
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options):base(options) { }
        public DbSet<User> Users { get; set; }
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            // Định nghĩa khóa chính cho User
            modelBuilder.Entity<User>()
                .HasKey(u => u.user_id); // Chỉ định user_id là khóa chính

            // Các cấu hình khác nếu có
        }


    }
}
