namespace CloudGarage.Inventory {
    @Serenity.Decorators.registerFormatter()
    export class ProductsFormatter implements Slick.Formatter {
        format(ctx: Slick.FormatterContext): string {
            console.log(ctx.item);
            if (ctx.item.ProductId == "" || ctx.item.ProductId == null) {
                return "<span class=''>-</span>";
            } else {
                var ProductName = ProductsRow.getLookup().itemById[parseInt(ctx.item.ProductId)].ProductName;

                return ProductName;
            }
        }
    }
}