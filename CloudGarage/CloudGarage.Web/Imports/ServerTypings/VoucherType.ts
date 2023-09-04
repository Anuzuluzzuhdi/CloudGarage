namespace CloudGarage {
    export enum VoucherType {
        INV = 1,
        Expense = 2,
        Journal = 3,
        Contra = 4,
        CustomerReceive = 5,
        PM = 6,
        DV = 7,
        BankTransaction = 8,
        CV = 9,
        Purchase = 10
    }
    Serenity.Decorators.registerEnumType(VoucherType, 'CloudGarage.VoucherType');
}
