import * as vscode from 'vscode';
import {LeetcodeService} from "./services/leetcode.service";
import {UiService} from "./services/ui.service";
export function activate(context: vscode.ExtensionContext) {
	UiService.init();
	LeetcodeService.init();
}

export function deactivate() {}
