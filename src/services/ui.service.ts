import {HomeProvider} from "../ui/home/home";
import * as vscode from "vscode";

export class UiService{
    static init(){
        const homeProvider = new HomeProvider();
        vscode.window.registerTreeDataProvider('home', homeProvider);
    }
}