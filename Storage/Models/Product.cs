using System.ComponentModel.DataAnnotations;

namespace Storage.Models
{
    public class Product
    {
        public int Id { get; set; }

        [Required]
        [StringLength(100)]
        public string Name { get; set; }

        [Range(1, 1000)]
        public int Price { get; set; }


        [DataType(DataType.Date)]
        public DateTime OrderDate { get; set; } = DateTime.MinValue;

        [Required(ErrorMessage = "Category required")]
        [StringLength(30)]
        public string Category { get; set; }


        [Required(ErrorMessage = "Shelf value must be added")]
        [StringLength(40)]
        public string Shelf { get; set; }
        public int Count { get; set; }


        [StringLength(100)]
        public string Description { get; set; }

    }

}
