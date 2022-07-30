export class Alert {
    id: string;
    type: AlertType;
    message: string;
    autoClose: boolean;
    keepAfterRouteChange?: boolean;
    fade: boolean;

    constructor(init?:Partial<Alert>) {
        Object.assign(this, init);

        this.id =  '';
        this.type = AlertType.Info;
        this.message =  '';
        this.autoClose = false;
        this.keepAfterRouteChange = false;
        this.fade = false
    }
}

export enum AlertType {
    Success,
    Error,
    Info,
    Warning
}