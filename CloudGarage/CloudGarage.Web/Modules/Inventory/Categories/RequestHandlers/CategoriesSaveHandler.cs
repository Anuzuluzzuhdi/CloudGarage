﻿using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.SaveRequest<CloudGarage.Inventory.CategoriesRow>;
using MyResponse = Serenity.Services.SaveResponse;
using MyRow = CloudGarage.Inventory.CategoriesRow;

namespace CloudGarage.Inventory
{
    public interface ICategoriesSaveHandler : ISaveHandler<MyRow, MyRequest, MyResponse> {}

    public class CategoriesSaveHandler : SaveRequestHandler<MyRow, MyRequest, MyResponse>, ICategoriesSaveHandler
    {
        public CategoriesSaveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}