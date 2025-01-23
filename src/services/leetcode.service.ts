import {NpmUtil} from "../utils/npm.util";
import {LoggerUtil} from "../utils/logger.util";

export class LeetcodeService{
    /**
     * 初始化
     */
    static init(){
        LeetcodeService.checkDept();
    }

    static checkDept(){
        if(!NpmUtil.isGlobalPackageInstalled('leetcode-practice')){
            LoggerUtil.info('检测到未安装 leetcode-practice, 正在安装...');
            NpmUtil.installGlobalPackage('leetcode-practice');
        }
    }
}