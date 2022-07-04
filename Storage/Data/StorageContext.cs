using Microsoft.EntityFrameworkCore;
using Storage.Models;

namespace Storage.Data
{
    public class StorageContext : DbContext
    {
        public StorageContext(DbContextOptions<StorageContext> options)
            : base(options)
        {
        }

        public DbSet<Product>? Product { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Product>().HasData(

                new Product
                {
                    Id = 1,
                    Count = 10,
                    Category = "Groceries",
                    Description = "Product in store",
                    Name = "Milk",
                    OrderDate = DateTime.Now.AddDays(-1),
                    Price = 10,
                    Shelf = "4"

                },

                new Product
                {
                    Id = 2,
                    Count = 10,
                    Category = "Groceries",
                    Description = "Product in store",
                    Name = "Bread",
                    OrderDate = DateTime.Now.AddDays(-6),
                    Price = 26,
                    Shelf = "10"

                },

                new Product
                {
                    Id = 3,
                    Count = 10,
                    Category = "Groceries",
                    Description = "Product in store",
                    Name = "Ice Cream",
                    OrderDate = DateTime.Now.AddDays(-1),
                    Price = 10,
                    Shelf = "8"

                },

                new Product
                {
                    Id = 4,
                    Count = 10,
                    Category = "Groceries",
                    Description = "Product in store",
                    Name = "Butter",
                    OrderDate = DateTime.Now.AddDays(-4),
                    Price = 16,
                    Shelf = "5"
                },

                new Product
                {
                    Id = 5,
                    Count = 10,
                    Category = "Groceries",
                    Description = "Product in store",
                    Name = "Ice Cream",
                    OrderDate = DateTime.Now.AddDays(-1),
                    Price = 10,
                    Shelf = "8"

                },

                new Product
                {
                    Id = 6,
                    Count = 10,
                    Category = "Groceries",
                    Description = "Not in store",
                    Name = "Meat balls",
                    OrderDate = DateTime.Now.AddDays(-4),
                    Price = 67,
                    Shelf = "5"
                }
           );
        }

        public DbSet<Storage.Models.ProductViewModel>? ProductViewModel { get; set; }
    }
}
