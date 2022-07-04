namespace Storage.Models
{
    public class ProductViewModel
    {
        public int Id { get; init; }
        public string? Name { get; init; }
        public int Price { get; init; }

        public int Count { get; init; }

        public int InventoryValue { get; init; }

        public int InventoryTotal { get; init; }

        public DateTime OrderDate { get; init; }

        public string Category { get; init; }
        public string Shelf { get; init; }

        public double Vat { get; private init; } = 0.25;

        public double TotalPrice
        {
            get => ((Price * Vat) + Price);
        }
    }
}
