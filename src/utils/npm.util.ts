import { execSync } from 'child_process';

export class NpmUtil {
    /**
     * 获取当前项目的 npm 版本
     * @returns 当前项目的 npm 版本号
     */
    static getNpmVersion(): string {
        return process.env.npm_package_version || 'Unknown';
    }

    /**
     * 获取全局 npm 版本号
     * @returns 全局 npm 的版本号
     */
    static getGlobalNpmVersion(): string {
        try {
            const version = execSync('npm --version', { encoding: 'utf-8' }).trim();
            return version;
        } catch (error) {
            console.error('获取全局 npm 版本失败:', error);
            return 'Unknown';
        }
    }

    /**
     * 检查是否安装了某个依赖
     * @param packageName 要检查的依赖名称
     * @returns 是否安装了该依赖
     */
    static isPackageInstalled(packageName: string): boolean {
        try {
            require.resolve(packageName);
            return true;
        } catch {
            return false;
        }
    }

    /**
     * 安装某个 npm 包（本地）
     * @param packageName 要安装的 npm 包名称
     */
    static installPackage(packageName: string): void {
        try {
            execSync(`npm install ${packageName}`, { stdio: 'inherit' });
            console.log(`成功安装依赖: ${packageName}`);
        } catch (error) {
            console.error(`安装依赖 ${packageName} 失败:`, error);
        }
    }

    /**
     * 卸载某个 npm 包（本地）
     * @param packageName 要卸载的 npm 包名称
     */
    static uninstallPackage(packageName: string): void {
        try {
            execSync(`npm uninstall ${packageName}`, { stdio: 'inherit' });
            console.log(`成功卸载依赖: ${packageName}`);
        } catch (error) {
            console.error(`卸载依赖 ${packageName} 失败:`, error);
        }
    }

    /**
     * 获取当前项目的依赖列表
     * @returns 当前项目的依赖及其版本
     */
    static getDependencies(): Record<string, string> {
        try {
            const packageJson = require(`${process.cwd()}/package.json`);
            return packageJson.dependencies || {};
        } catch (error) {
            console.error('读取 package.json 失败:', error);
            return {};
        }
    }

    /**
     * 检查全局是否安装了某个 npm 包
     * @param packageName 要检查的 npm 包名称
     * @returns 是否安装了该全局包
     */
    static isGlobalPackageInstalled(packageName: string): boolean {
        try {
            const result = execSync(`npm list -g ${packageName}`, { encoding: 'utf-8' });
            return result.includes(packageName);
        } catch {
            return false;
        }
    }

    /**
     * 安装全局 npm 包
     * @param packageName 要安装的 npm 包名称
     */
    static installGlobalPackage(packageName: string): void {
        try {
            execSync(`npm install -g ${packageName}`, { stdio: 'inherit' });
            console.log(`成功安装全局依赖: ${packageName}`);
        } catch (error) {
            console.error(`安装全局依赖 ${packageName} 失败:`, error);
        }
    }

    /**
     * 卸载全局 npm 包
     * @param packageName 要卸载的 npm 包名称
     */
    static uninstallGlobalPackage(packageName: string): void {
        try {
            execSync(`npm uninstall -g ${packageName}`, { stdio: 'inherit' });
            console.log(`成功卸载全局依赖: ${packageName}`);
        } catch (error) {
            console.error(`卸载全局依赖 ${packageName} 失败:`, error);
        }
    }
}