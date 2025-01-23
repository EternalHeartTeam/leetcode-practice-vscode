import * as vscode from 'vscode';

export class LoggerUtil {
    /**
     * 显示信息提示
     * @param message 要显示的信息
     * @param items 可选的操作项
     */
    static info(message: string, ...items: string[]): Thenable<string | undefined> {
        return vscode.window.showInformationMessage(message, ...items);
    }

    /**
     * 显示警告提示
     * @param message 要显示的警告信息
     * @param items 可选的操作项
     */
    static warn(message: string, ...items: string[]): Thenable<string | undefined> {
        return vscode.window.showWarningMessage(message, ...items);
    }

    /**
     * 显示错误提示
     * @param message 要显示的错误信息
     * @param items 可选的操作项
     */
    static error(message: string, ...items: string[]): Thenable<string | undefined> {
        return vscode.window.showErrorMessage(message, ...items);
    }

    /**
     * 记录到输出面板
     * @param message 要记录的信息
     * @param logType 日志类型 (info | warn | error)
     */
    static log(message: string, logType: 'info' | 'warn' | 'error' = 'info'): void {
        const outputChannel = LoggerUtil.getOutputChannel();
        const timestamp = new Date().toISOString();
        const formattedMessage = `[${logType.toUpperCase()}] [${timestamp}] ${message}`;
        outputChannel.appendLine(formattedMessage);
        if (logType === 'error') {
            outputChannel.show(true); // 错误信息时自动展示输出面板
        }
    }

    /**
     * 清空输出面板
     */
    static clear(): void {
        const outputChannel = LoggerUtil.getOutputChannel();
        outputChannel.clear();
    }

    /**
     * 获取或创建日志输出面板
     * @returns 输出面板实例
     */
    private static getOutputChannel(): vscode.OutputChannel {
        if (!this.outputChannel) {
            this.outputChannel = vscode.window.createOutputChannel('LoggerUtil');
        }
        return this.outputChannel;
    }

    // 输出面板实例（单例模式）
    private static outputChannel: vscode.OutputChannel;
}
