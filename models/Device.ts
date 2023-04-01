import Room from './Room';

class Device {
    private uuid: string;
    private status: "RUNNNING" | "STOPPED";
    private responseTime: number;
    private room: Room;
    private temperature: number;
    private humidity: number;

    constructor(deviceJson: any) {
        this.uuid = deviceJson.uuid;
        this.status = deviceJson.status;
        this.responseTime = deviceJson.responseTime;
        this.room = deviceJson.room;
        this.temperature = deviceJson.temperature;
        this.humidity = deviceJson.humidity;
    }

    getUuid = () => this.uuid;
    getStatus = () => this.status;
    getResponseTime = () => this.responseTime;
    getRoom = () => this.room;
    getTemperature = () => this.temperature;
    getHumidity = () => this.humidity;
}

export default Device;