namespace CloudGarage.JobCards {
    @Serenity.Decorators.registerFormatter()
    export class JobFormatter implements Slick.Formatter {
        format(ctx: Slick.FormatterContext): string {
            console.log(ctx.item);
            if (ctx.item.Mechanic == "" || ctx.item.Mechanic == null) {
                return "<span class=''>-</span>";
            } else {
                var FirstName = HumanResource.EmployeesRow.getLookup().itemById[parseInt(ctx.item.Mechanic)].FirstName;

                return FirstName;
            }
        }
    }
}