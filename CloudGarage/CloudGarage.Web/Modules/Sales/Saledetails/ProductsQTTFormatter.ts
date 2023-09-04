﻿namespace CloudGarage.Sales {
    @Serenity.Decorators.registerFormatter()
    export class ProductsFormatter implements Slick.Formatter {
        format(ctx: Slick.FormatterContext): string {
            console.log(ctx.item,"itemproduct");
            if (ctx.item.UnitId == "" || ctx.item.UnitId == null) {
                return "<span class=''>-</span>";
            } else {
                var Name = Inventory.UnitsRow.getLookup().itemById[ctx.item.UnitId].Name;

                return Name;
            }
        }
    }
}