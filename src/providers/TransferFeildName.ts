

//用于获取资产明细 如果是验收单据查询，则需要查询未验收的0，如果是转资单据查询，则需要传验收1，如果是合同查询则不用传参
export const TypeGetAsset = 'TypeGetAsset';
export const TypeGetAsset_AcceptApply = '0';
export const TypeGetAsset_TransferFunds = '1';
export const TypeGetAsset_TransferAdjust = '';

export const Oper = 'Oper';
export const Oper_Look = '查看';
export const Oper_Add = '添加';
export const Oper_Edit = '编辑';
export const Oper_Approval = '审批';

//标题
export const Title = 'Title';
//验收申请单号、转资单号、转资调整单号
export const BillNumberCode = 'BillNumberCode';
//合同号
export const BillContractCode = 'BillContractCode';
//资产键码
export const BillKeyCode = 'BillKeyCode';
//
export const ItemTranfer = 'ItemTranfer';
//项目单元编码
export const BillElementCode = 'BillElementCode';

//页面
//验收申请：查看、审批 BillNumberCode title oper:Oper_Look、Oper_Add、Oper_Edit、Oper_Approval
export const Page_AcceptApplyInfoPage = 'AcceptApplyInfoPage';
//验收申请：添加、编辑、送审 BillNumberCode oper:Oper_Add、Oper_Edit
export const Page_AcceptApplyItemPage = 'AcceptApplyItemPage';

//合同选择
export const Page_ContractChoiceListPage = 'ContractChoiceListPage';
//合同选择确认 BillContractCode
export const Page_ContractChoiceConfirmPage = 'ContractChoiceConfirmPage';

//资产列表查看： BillNumberCode BillContractCode TypeGetAsset:TypeGetAsset_AcceptApply
export const Page_AssetDetailsListInfoPage = 'AssetDetailsListInfoPage';
//资产列表操作： BillNumberCode BillContractCode TypeGetAsset:TypeGetAsset_AcceptApply
export const Page_AssetDetailsListPage = 'AssetDetailsListPage';
//资产详情查看： BillNumberCode BillContractCode BillKeyCode
export const Page_AssetDetailsInfoPage = 'AssetDetailsInfoPage';
//资产详情添加： BillNumberCode BillContractCode TypeGetAsset
//export const Page_AssetDetailsAddPage = 'AssetDetailsAddPage';
//资产详情编辑： BillNumberCode BillContractCode BillKeyCode Oper:Oper_Add、Oper_Edit ItemTranfer
export const Page_AssetDetailsItemPage = 'AssetDetailsItemPage';

//项目单元详情查看： BillElementCode
export const Page_ProjInfoPage = 'ProjInfoPage';

//转资审批：Oper,Oper_Look、Oper_Approval Title BillNumberCode TypeGetAsset:TypeGetAsset_TransferFunds
export const Page_TransferFundsInfoPage = 'TransferFundsInfoPage';

//公告

//进度管理详情 BillElementCode oper:Oper_Add、Oper_Edit、Oper_Look、Oper_Approval Title
export const Page_ScheduleApplyInfoPage = 'ScheduleApplyInfoPage';
//进度管理申请 BillElementCode oper:Oper_Add、Oper_Edit
export const Page_ScheduleApplyItemPage = 'ScheduleApplyItemPage';

//转资调整审批

//选择审批人 BillNumberCode
export const Page_ChoiceApproversPage = 'ChoiceApproversPage';