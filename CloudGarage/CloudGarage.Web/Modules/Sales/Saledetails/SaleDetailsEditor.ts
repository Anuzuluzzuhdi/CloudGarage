//namespace CloudGarage.Sales {

//    @Serenity.Decorators.registerEditor('Sales.SaleDetailsEditor')
//    export class SaleDetailsEditor extends Serenity.Extensions.GridEditorBase<SaledetailsRow> {
//        protected getColumnsKey() { return SaledetailsColumns.columnsKey; }
//        protected getDialogType() { return SaledetailsDialog; }
//        protected getLocalTextPrefix() { return SaledetailsRow.localTextPrefix; }

//        constructor(container: JQuery) {
//            super(container);
//        }

//        validateEntity(row, id) {
//            row.ProductID = Q.toId(row.ProductID);

//            var sameProduct = Q.tryFirst(this.view.getItems(), x => x.ProductId === row.ProductID);
//            if (sameProduct && this.id(sameProduct) !== id) {
//                Q.alert('This product is already in order details!');
//                return false;
//            }

//            row.ProductName = Inventory.ProductsRow.getLookup().itemById[row.ProductID].ProductName;
//            row.Total = (row.Quantity || 0) * (row.UnitPrice || 0) - (row.Discount || 0);
//            return true;
//        }
//    }
//}