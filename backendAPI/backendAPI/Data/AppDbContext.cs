﻿using backendAPI.Models;
using Microsoft.EntityFrameworkCore;

namespace backendAPI.Model
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options):base(options) { }
        public DbSet<User> Users { get; set; }
    }
}
