namespace CloudGarage.Inspections {
    export namespace InspectionjobtypesService {
        export const baseUrl = 'Inspections/Inspectionjobtypes';

        export declare function Create(request: Serenity.SaveRequest<InspectionjobtypesRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Update(request: Serenity.SaveRequest<InspectionjobtypesRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<InspectionjobtypesRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<InspectionjobtypesRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;

        export declare const enum Methods {
            Create = "Inspections/Inspectionjobtypes/Create",
            Update = "Inspections/Inspectionjobtypes/Update",
            Delete = "Inspections/Inspectionjobtypes/Delete",
            Retrieve = "Inspections/Inspectionjobtypes/Retrieve",
            List = "Inspections/Inspectionjobtypes/List"
        }

        [
            'Create', 
            'Update', 
            'Delete', 
            'Retrieve', 
            'List'
        ].forEach(x => {
            (<any>InspectionjobtypesService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}
