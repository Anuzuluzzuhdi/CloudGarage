namespace CloudGarage.Inspections {
    export namespace InspectionchecklistService {
        export const baseUrl = 'Inspections/Inspectionchecklist';

        export declare function Create(request: Serenity.SaveRequest<InspectionchecklistRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Update(request: Serenity.SaveRequest<InspectionchecklistRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<InspectionchecklistRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<InspectionchecklistRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;

        export declare const enum Methods {
            Create = "Inspections/Inspectionchecklist/Create",
            Update = "Inspections/Inspectionchecklist/Update",
            Delete = "Inspections/Inspectionchecklist/Delete",
            Retrieve = "Inspections/Inspectionchecklist/Retrieve",
            List = "Inspections/Inspectionchecklist/List"
        }

        [
            'Create', 
            'Update', 
            'Delete', 
            'Retrieve', 
            'List'
        ].forEach(x => {
            (<any>InspectionchecklistService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}
