import * as vscode from "vscode";

export class HomeProvider implements vscode.TreeDataProvider<any>{
    private _onDidChangeTreeData: vscode.EventEmitter<TreeItem | undefined> = new vscode.EventEmitter<TreeItem | undefined>();
    readonly onDidChangeTreeData: vscode.Event<TreeItem | undefined> = this._onDidChangeTreeData.event;

    getTreeItem(element: TreeItem): vscode.TreeItem {
        return element;
    }

    getChildren(element?: TreeItem): TreeItem[] {
        if (!element) {
            return [
                new TreeItem('lc', 'lc'),
                new TreeItem('lk', 'lk'),
                new TreeItem('lf', 'lf'),
                new TreeItem('我的收藏')
            ];
        }
        return [];
    }
}

class TreeItem extends vscode.TreeItem {
    constructor(label: string, private cmd?: string) {
        super(label);
        if(cmd){
            this.command = {
                command: `leetcode.${this.cmd}`,
                title: label,
            };
        }
    }

}