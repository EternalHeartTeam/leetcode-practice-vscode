import * as vscode from "vscode";

export class HomeProvider implements vscode.TreeDataProvider<any>{
    private _onDidChangeTreeData: vscode.EventEmitter<TreeItem | undefined> = new vscode.EventEmitter<TreeItem | undefined>();
    readonly onDidChangeTreeData: vscode.Event<TreeItem | undefined> = this._onDidChangeTreeData.event;

    getTreeItem(element: TreeItem): vscode.TreeItem {
        return element;
    }

    getChildren(element?: TreeItem): TreeItem[] {
        if (!element) {
            return [new TreeItem('Item 1'), new TreeItem('Item 2')];
        }
        return [];
    }
}
class TreeItem extends vscode.TreeItem {
    constructor(label: string) {
        super(label);
        this.tooltip = `Tooltip for ${label}`;
        this.description = `Description of ${label}`;
    }
}