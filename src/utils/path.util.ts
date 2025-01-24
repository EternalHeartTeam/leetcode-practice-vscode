import * as vscode from 'vscode';
export class PathUtil{
    static getCurrentDir(){
        return vscode.workspace.workspaceFolders?.at(0)?.uri.path;
    }
}