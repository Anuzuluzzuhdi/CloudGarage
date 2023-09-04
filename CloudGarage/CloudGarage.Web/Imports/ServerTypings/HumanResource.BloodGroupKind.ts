namespace CloudGarage.HumanResource {
    export enum BloodGroupKind {
        APositive = 1,
        ANegative = 2,
        BPositive = 3,
        BNegative = 4,
        ABPsitive = 5,
        ABNegative = 6,
        OPositive = 7,
        ONegative = 8
    }
    Serenity.Decorators.registerEnumType(BloodGroupKind, 'CloudGarage.HumanResource.BloodGroupKind', 'CloudGarage.BloodGroupKind');
}
