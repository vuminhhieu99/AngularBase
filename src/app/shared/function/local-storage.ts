export class LocalStorage {

    /**
     * Lấy value từ localStorage
     * @param key 
     * @returns 
     * vmhieu 11.3.2022
     */
    public static get(key: string){
        if(this.chekBrowserSupport()){
            key = this.getKey(key);
            return window.localStorage.getItem(key);
        }
        return null;
    }
    
    /**
     * lưu vào locaStorage 11.3.2022
     * @param key 
     * @returns 
     * vmhieu 11.3.2022
     */
    public static set(key: string, value: any){        
        if(this.chekBrowserSupport() ){
            key = this.getKey(key);
            return window.localStorage.setItem(key, value);
        }
        return null;
    }

    /**
     * Xóa dữ liệu trong locaStorage 11.3.2022
     * @param key 
     * @returns 
     * vmhieu 11.3.2022
     */
     public static remove(key: string){        
        if(this.chekBrowserSupport() ){
            key = this.getKey(key);
            if(window.localStorage.getItem(key)){
                window.localStorage.removeItem(key);
            }
        }
    }

    /**
     * Xóa dữ liệu trong locaStorage 11.3.2022
     * @param key 
     * @returns 
     * vmhieu 11.3.2022
     */
     public static removeAll(){        
        if(this.chekBrowserSupport() ){
            for(const key in window.localStorage)   {
                window.localStorage.removeItem(key);
            } 
        }
    }

    private static getKey(key: string): string{
        return `MTA_${key}`;
    }

    private static chekBrowserSupport(): boolean{
        if(typeof Storage != "undefined"){
            return true;
        }
        console.log("Sorry! No web storage support available");
        return false;
    }
}
