namespace CloudGarage.Inventory {
    export enum StockKind {
        IN = 1,
        OUT = 2
    }
    Serenity.Decorators.registerEnumType(StockKind, 'CloudGarage.Inventory.StockKind', 'CloudGarage.StockKind');
}
