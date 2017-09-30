export interface AssetInfo {
  codeAsset: string;//资产编码
  nameAsset: string;//资产名称
  xhAsset: string;//规格型号
  oldValueAsset: string;//原值

  orderAsset;//序号 自动填写 
  typeAsset;//资产类型 自动填写，禁止调整
  categoryAsset;//资产类别 手工选择
  depaetAsset;//所属单位 手工选择
  groupAsset;//所属资产组 手工选择
  carAsset;//车牌井号 手工输入
  unitAsset;//计量单位 手工选择
  venderAsset;//制作厂家 手工输入
  numberAsset;//出厂编号 手工输入
  productDateAsset;//出厂日期 手工选择
  useDateAsset;//投产日期 手工选择
  useDirectionAsset;//使用方向 手工选择
  contractCodeAsset;//合同编号 自动填写
  getModelAsset;//取得方式 手工选择
  repairEndDateAsset;//保修截止日期 手工输入
  perUseLifeAsset;//预计使用年限 自动填写
  stateAsset;//使用状态 手工选择
  storePlaceAsset;//存放地点 手工选择
  custodianAsset;//保管人 手工选择
  technicalDepartAsset;//技术部门 手工选择
  netWorthAsset;//净值 自动填写，禁止调整
  depreciationAsset;//累计折旧 自动填写，禁止调整
  impairmentProvisionAsset;//减值准备 自动填写，禁止调整

}
