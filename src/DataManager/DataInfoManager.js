export default class DataInfoManager {
    static DataInfoManagerInstance = null;
    dataInfo = {
        full_name:"Vu Hong KHiem",
        phone_number: "0372588149",
        dob:"20/2/2020",
        gender:2,
        address:"Nam Dinh",
        email:"vukhiem@gmail.com",

    };
    Observers = [];
    addObserver(observer) {
        this.Observers[this.Observers.length] = observer
    }
    removeObserver(o) {
        this.Observers = this.Observers.filter((observer) => observer != o);
    }
    static getDataInfoManagerInstance() {
        if (DataInfoManager.DataInfoManagerInstance == null) {
            DataInfoManager.DataInfoManagerInstance = new DataInfoManager();
            this.DataInfoManagerInstance.loadDataFromLocal();
        }
        return this.DataInfoManagerInstance;
    }
    getDataInfo() {
        return this.dataInfo;
    }
    updateDataInfo(DataInfo) {
        this.dataInfo = DataInfo;
        this.updateDataToLocal();
    }
    
    deleteDataInfo() {
        this.dataInfo = {
            
        }
        this.updateDataToLocal();
    }
    updateDataToLocal() {
        // localStorage.removeItem("DataInfo")
        // localStorage.setItem("DataInfo", JSON.stringify(this.DataInfo))
        // this.listenChange()
    }
    loadDataFromLocal() {
        // this.rand = QuestionJson[(Math.random() * QuestionJson.length) | 0];
        this.listenChange()
    }
    listenChange() {
        this.Observers.map(
            (o, index, arr) => {
                if (o.onDataInfoChanged) {
                    o.onDataInfoChanged(this)
                }
            }
        )
    }
}