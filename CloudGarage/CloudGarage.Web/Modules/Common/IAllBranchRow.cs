using Serenity.Data;
using System;
using CloudGarage.Financial;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CloudGarage.Common
{
    public interface IAllBranchRow
    {
        Int64Field BranchIdField { get; }
    }
}
