/**
 * Created by jiachao on 2017-09-27.
 */
import {Injectable} from '@angular/core';
import {Storage} from "@ionic/storage";
import {DicComplex} from '../model/dic-complex';
import {DicInDepart} from '../model/dic-in-depart';
import {DicOutDepart} from '../model/dic-out-depart';
import {DicBasicEntity} from '../model/dic-basic-entity';
import {DicAsset} from '../model/dic-asset';
import {PAYMENT_CATEGORY} from '../enums/enums';

/**
 * 字典工具类
 * @description
 */
@Injectable()
export class DictUtil {

  constructor(private storage: Storage) {
  }

  /**
   * 返回字符串长度，汉子计数为2
   * @param str
   * @returns {number}
   */
  /*static getstrLength(str: string): number {
    let len = 0;
    for (let i = 0, length = str.length; i < length; i++) {
      str.charCodeAt(i) > 255 ? len += 2 : len++;
    }
    return len;
  }*/

  //翻译计量单位
  getUnitName(dictInfo:DicComplex[],code:string):string{
    if(dictInfo&&dictInfo.length>0){
    	for(let unit of dictInfo){
    		if(unit.complexCode===code)
    			return unit.complexName;
    	}
    }
  }

  //翻译使用方向
  getUsedAspectName(dictInfo:DicComplex[],code:string):string{
  	if(dictInfo&&dictInfo.length>0){
      for(let usedAspect of dictInfo){
    		if(usedAspect.complexCode===code)
    			return usedAspect.complexName;
    	}
    }
  }

  //翻译取得方式
  getApplyCodeName(dictInfo:DicComplex[],code:string):string{
    if(dictInfo&&dictInfo.length>0){
    	for(let applyCode of dictInfo){
    		if(applyCode.complexCode===code)
    			return applyCode.complexName;
    	}
    }
  }

  //翻译使用状态
  getUsedStateName(dictInfo:DicComplex[],code:string):string{
    if(dictInfo&&dictInfo.length>0){
    	for(let usedState of dictInfo){
    		if(usedState.complexCode===code)
    			return usedState.complexName;
    	}
    }
  }

  //翻译技术部门
  getSpecialLineName(dictInfo:DicComplex[],code:string):string{
    if(dictInfo&&dictInfo.length>0){
    	for(let specialLine of dictInfo){
    		if(specialLine.complexCode===code)
    			return specialLine.complexName;
    	}
    }
  }

  //翻译存放地点
  getDepositaryName(dictInfo:DicComplex[],code:string):string{
    if(dictInfo&&dictInfo.length>0){
      for(let depositary of dictInfo){
        if(depositary.complexCode===code)
          return depositary.complexName;
      }
    }
  }

  //翻译内部单位
  getInDepartName(dictInfo:DicInDepart[],code:string):string{
    if(dictInfo&&dictInfo.length>0){
    	for(let inDepart of dictInfo){
    		if(inDepart.departCode===code)
    			return inDepart.departName;
    	}
    }
  }

  //翻译外部单位
  getOutDepartName(dictInfo:DicOutDepart[],code:string):string{
    if(dictInfo&&dictInfo.length>0){
    	for(let outDepart of dictInfo){
    		if(outDepart.departCode===code)
    			return outDepart.departName;
    	}
    }
  }

  //翻译资产组
  getBasicEntityName(dictInfo:DicBasicEntity[],code:string):string{
    if(dictInfo&&dictInfo.length>0){
    	for(let basicEntity of dictInfo){
    		if(basicEntity.entityCode===code)
    			return basicEntity.entityName;
    	}
    }
  }

  //翻译资产目录
  getAssetsName(dictInfo:DicAsset[],code:string):string{
    if(dictInfo&&dictInfo.length>0){
      for(let basicEntity of dictInfo){
        if(basicEntity.assetsCode===code)
          return basicEntity.assetsName;
      }
    }
  }

  //翻译款项类别
  getClauseTypeName(code:string):string{
    for(let clauseType of PAYMENT_CATEGORY){
      if(clauseType.code===code)
        return clauseType.name;
    }
  }

  //枚举类翻译
  getEnumsName(list:Array<{code: string, name: string}>,code:string):string{
    if(list){
    for(let enu of list){
      if(enu.code===code)
        return enu.name;
    }
    }
    return code;
  }
}
