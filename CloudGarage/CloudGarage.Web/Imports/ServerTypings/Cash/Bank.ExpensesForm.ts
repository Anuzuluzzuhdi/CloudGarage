
namespace CloudGarage.Cash/Bank {
    export interface ExpensesForm {
        ExpenseTypeId: Serenity.IntegerEditor;
        Date: Serenity.DateEditor;
        PaymentAccount: Serenity.IntegerEditor;
        Amount: Serenity.DecimalEditor;
        VNo: Serenity.IntegerEditor;
    }

    export class ExpensesForm extends Serenity.PrefixedContext {
        static formKey = 'Cash/Bank.Expenses';
    }

    [,
        ['ExpenseTypeId', () => Serenity.IntegerEditor],
        ['Date', () => Serenity.DateEditor],
        ['PaymentAccount', () => Serenity.IntegerEditor],
        ['Amount', () => Serenity.DecimalEditor],
        ['VNo', () => Serenity.IntegerEditor]
    ].forEach(x => Object.defineProperty(ExpensesForm.prototype, <string>x[0], {
        get: function () {
            return this.w(x[0], (x[1] as any)());
        },
        enumerable: true,
        configurable: true
    }));
}