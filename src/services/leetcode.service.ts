import {NpmUtil} from "../utils/npm.util";
import {LoggerUtil} from "../utils/logger.util";
import { execSync } from "child_process";
import * as vscode from 'vscode';
import { PathUtil } from "../utils/path.util";

export class LeetcodeService{
    /**
     * 初始化
     */
    static init(){
        LoggerUtil.info("开始检查依赖");
        LeetcodeService.checkDept();
        LeetcodeService.registerCommands();
    }

    static checkDept(){
        if(!NpmUtil.isGlobalPackageInstalled('leetcode-practice')){
            LoggerUtil.info('检测到未安装 leetcode-practice, 正在安装...');
            NpmUtil.installGlobalPackage('leetcode-practice');
        }else{
            LoggerUtil.info("leetcode-practice已全局安装!");
        }
    }

    static registerCommands() {
        const commands = ['lc', 'lk', 'lf'];
        commands.forEach(command => {
            vscode.commands.registerCommand(`leetcode.${command}`, () => {
                try {
                    LoggerUtil.warn(JSON.stringify(vscode.workspace.workspaceFolders));
                    const output = execSync(command,{cwd: PathUtil.getCurrentDir(), encoding: "utf-8"});
                    vscode.window.showInformationMessage(output);
                } catch (error: any) {
                    vscode.window.showErrorMessage(`执行 ${command} 指令失败: ${error.message}`);
                }
            });
        });
    }
}