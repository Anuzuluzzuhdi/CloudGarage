namespace CloudGarage{

    //@Serenity.Decorators.registerFormatter([Serenity.ISlickFormatter, Serenity.IInitializeColumn])
    //export class CurrencyFormatter implements Slick.Formatter {
    //    format(ctx: Slick.FormatterContext) {
    //        // var text = Q.htmlEncode(ctx.value);
    //        if (ctx.value == null) ctx.value = 0;
    //        var text = Q.htmlEncode("Rp " + Q.formatNumber(ctx.value, "#,###.00"));

    //        return text;

    //    }

    //    @Serenity.Decorators.option()
    //    public contractAmount: string;

    //    public initializeColumn(column: Slick.Column) {
    //        column.referencedFields = column.referencedFields || [];
    //        if (this.contractAmount)
    //            column.referencedFields.push(this.contractAmount);
    //    }
    //}

    //@Serenity.Decorators.registerFormatter()
    //export class CurrencyFormatter implements Slick.Formatter {

    //    @Serenity.Decorators.option()
    //    public cultureName: string;
    //    @Serenity.Decorators.option()
    //    public currencyName: string;

    //    format(ctx: Slick.FormatterContext) {

    //        //If the input is not a float - just bounce it back
    //        if (isNaN(parseFloat(ctx.value))) {
    //            return ctx.value;
    //        }

    //        //Use standard currency formatting; This can be modified for other styles (% etc).
    //        //If no parameters passed then fallback to en-US , USD formatting.
    //        this.cultureName = this.cultureName ? this.cultureName : 'en-US';
    //        this.currencyName = this.currencyName ? this.currencyName : 'USD';

    //        var formatter = new Intl.NumberFormat(this.cultureName, {
    //            style: 'currency',
    //            currency: this.currencyName,
    //            minimumFractionDigits: 2,
    //        });

    //        //use the above formatter to return the reformatted value
    //        var percentValue = formatter.format(Number(ctx.value));
    //        return "<span>" + percentValue + '</span>';
    //    }



    //}

    @Serenity.Decorators.registerFormatter([Serenity.ISlickFormatter, Serenity.IInitializeColumn])
    export class CurrencyFormatter implements Slick.Formatter {
        format(ctx: Slick.FormatterContext) {
            // var text = Q.htmlEncode(ctx.value);
            if (ctx.value == null) ctx.value = 0.00;
            var text = Q.htmlEncode("RP " + Q.formatNumber(ctx.value, "#,###"));

            return text;

        }

        @Serenity.Decorators.option()
        public contractAmount: string;

        public initializeColumn(column: Slick.Column) {
            column.referencedFields = column.referencedFields || [];
            if (this.contractAmount)
                column.referencedFields.push(this.contractAmount);
        }
    }
}