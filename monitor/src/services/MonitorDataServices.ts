import http from "@/http-common";

class MonitorDataService {
  get() {
    return http.get("/monitor");
  }

  getAll(): Promise<any> {
    return http.get("/get-all-monitor",);
  }

  create(): Promise<any> {
    return http.get("/get-and-save-monitor");
  }

  CreateById(ip:any, data: any): Promise<any> {
    return http.post(`/create-monitor/${ip}`, data);
  }

}

export default new MonitorDataService();
