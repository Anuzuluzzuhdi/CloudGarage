namespace CloudGarage.Inspections {
    @Serenity.Decorators.registerFormatter()
    export class InspectionFormatter implements Slick.Formatter {
        format(ctx: Slick.FormatterContext): string {
            if (ctx.item.JobCategory == "" || ctx.item.JobCategory == null) {
                return "<span class=''>-</span>";
            } else {
                var Name = Masters.JobcategoriesRow.getLookup().itemById[parseInt(ctx.item.JobCategory)].Name;

                return Name;
            }
        }
    }
}