using System.Collections.Generic;

namespace CloudGarage.Common
{
    public class DashboardPageModel
    {
        public double TodaySale { get; set; }
        public int SupplierCount { get; set; }
        public int VehicleCount { get; set; }
        public int CustomerCount { get; set; }
        public int ProductCount { get; set; }
        //public List<CloudGarage.TasksRow> Tasks { get; set; }
        public List<Inventory.ProductsRow> Products { get; set; }
        public List<Sales.SaledetailsRow> Sales { get; set; }
        public int Tahun { get; set; }
        public List<int> Purchase { get; set; }
        public List<int> Sale { get; set; }
        public List<int> Expense { get; set; }
    }
}