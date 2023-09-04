using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using MyRequest = Serenity.Services.SaveRequest<CloudGarage.Financial.AccountsRow>;
using MyResponse = Serenity.Services.SaveResponse;
using MyRow = CloudGarage.Financial.AccountsRow;

namespace CloudGarage.Financial
{
    public interface IAccountsSaveHandler : ISaveHandler<MyRow, MyRequest, MyResponse> {}
    public class AccountsSaveHandler : SaveRequestHandler<MyRow, MyRequest, MyResponse>, IAccountsSaveHandler
    {
        private static MyRow.RowFields fld { get { return MyRow.Fields; } }
        public AccountsSaveHandler(IRequestContext context)
             : base(context)
        {
        }
        protected override void SetInternalFields()
        {
            base.SetInternalFields();

            if (IsCreate)
            {
            }
        }
            protected override void ValidateRequest()
        {
            base.ValidateRequest();

            if (IsUpdate && Old.ParentHead != Row.ParentHead && Row.ParentHead != null)
            {
                if (Row.ParentHead == Row.Id)
                    throw new ValidationError("Can't move an item under itself!");

                if (GetParents(Row.ParentHead.Value).Any(x => x == Row.Id.Value))
                    throw new ValidationError("Can't move an item under one of its children!");
            }
        }

        private System.Collections.Generic.List<Int32> GetParents(Int32 id)
        {
            var parentById = Connection.List<MyRow>(q => q
                .Select(fld.Id)
                .Select(fld.ParentHead))
                .ToDictionary(x => x.Id, x => x.ParentHead);

            var visited = new HashSet<Int32>();
            var result = new List<Int32>();
            Int32? ParentCategoryId;
            while (parentById.TryGetValue(id, out ParentCategoryId) &&
                ParentCategoryId != null &&
                !visited.Contains(ParentCategoryId.Value))
            {
                id = ParentCategoryId.Value;
                result.Add(id);
                visited.Add(id);
            }

            return result;
        }
    }
}