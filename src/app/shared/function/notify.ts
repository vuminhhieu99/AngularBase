declare const $: any;
declare const toastr: any;
export class Notify{

    public static notifySuccess(title: string = '',body: string='',icon: string='', autohide: boolean = true, delay: number = 3000): void{
        $(document).Toasts('create', {
            class: 'bg-success',
            title: title,
            autohide: autohide,
            delay: delay,
            body: body,
            icon : icon,
          })
    }

    public static notifyLauchSuccess(message: string= ''){
        toastr.success(message);

    }

    public static notifyInfo(title: string = '',body: string='',icon: string='', autohide: boolean = true, delay: number = 3000): void{
        $(document).Toasts('create', {
            class: 'bg-info',
            title: title,
            autohide: autohide,
            delay: delay,
            body: body,
            icon : icon,
          })
    }
    

    public static notifyLauchInfo(message: string= ''){
        toastr.info(message);
    }

    public static notifyWarning(title: string = '',body: string='',icon: string='', autohide: boolean = true, delay: number = 3000): void{
        $(document).Toasts('create', {
            class: 'bg-warning',
            title: title,
            autohide: autohide,
            delay: delay,
            body: body,
            icon : icon,
          })
    }

    public static notifyLauchWarning(message: string= ''){
        toastr.warning(message);
    }
    
    public static notifyDanger(title: string = '',body: string='',icon: string='', autohide: boolean = true, delay: number = 3000): void{
        $(document).Toasts('create', {
            class: 'bg-danger',
            title: title,
            autohide: autohide,
            delay: delay,
            body: body,
            icon : icon,
          })
    }

    public static notifyLauchDanger(message: string= ''){
        toastr.error(message);
    }
    
    public static notifyImage(title: string = '',body: string='',image: string='', autohide: boolean = true, delay: number = 3000): void{
        $(document).Toasts('create', {           
            title: title,
            autohide: autohide,
            delay: delay,
            body: body,   
            image: image,
            imageAlt: 'User Picture',         
          })
    }
    
    

}