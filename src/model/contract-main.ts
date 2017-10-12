/**
 * 合同主信息
 * Created by jiachao on 2017-10-10.
 */
export class ContractMain{
	contractCode :string;//合同流水号
	
	contractName:string;//合同名称
	
	requireUser:string;//申请人

	checkResult :string;//单据状态
	//合同后端字段解释(括号中代表客户端对应字段)
    //0新增(新增) 
    //1审批通过(已审批)) 
    //2驳回(退回) 
    //3解约 
    //4审批中(待审批) 
    //10待审批(待审批)
}