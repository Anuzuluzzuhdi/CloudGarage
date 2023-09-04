
namespace CloudGarage.Cash/Bank {
    export interface SupplierpaymentForm {
        VNo: Serenity.StringEditor;
        Vtype: Serenity.StringEditor;
        VDate: Serenity.DateEditor;
        CoaId: Serenity.IntegerEditor;
        SupplierId: Serenity.IntegerEditor;
        Coa: Serenity.StringEditor;
        Narration: Serenity.StringEditor;
        Debit: Serenity.DecimalEditor;
        Credit: Serenity.DecimalEditor;
        IsPosted: Serenity.IntegerEditor;
        IsAppove: Serenity.IntegerEditor;
        InsertDate: Serenity.DateEditor;
        InsertUserId: Serenity.IntegerEditor;
        UpdateDate: Serenity.DateEditor;
        UpdateUserId: Serenity.IntegerEditor;
    }

    export class SupplierpaymentForm extends Serenity.PrefixedContext {
        static formKey = 'Cash/Bank.Supplierpayment';
    }

    [,
        ['VNo', () => Serenity.StringEditor],
        ['Vtype', () => Serenity.StringEditor],
        ['VDate', () => Serenity.DateEditor],
        ['CoaId', () => Serenity.IntegerEditor],
        ['SupplierId', () => Serenity.IntegerEditor],
        ['Coa', () => Serenity.StringEditor],
        ['Narration', () => Serenity.StringEditor],
        ['Debit', () => Serenity.DecimalEditor],
        ['Credit', () => Serenity.DecimalEditor],
        ['IsPosted', () => Serenity.IntegerEditor],
        ['IsAppove', () => Serenity.IntegerEditor],
        ['InsertDate', () => Serenity.DateEditor],
        ['InsertUserId', () => Serenity.IntegerEditor],
        ['UpdateDate', () => Serenity.DateEditor],
        ['UpdateUserId', () => Serenity.IntegerEditor]
    ].forEach(x => Object.defineProperty(SupplierpaymentForm.prototype, <string>x[0], {
        get: function () {
            return this.w(x[0], (x[1] as any)());
        },
        enumerable: true,
        configurable: true
    }));
}