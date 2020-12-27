export default class StateDataManager {
    static StateDataManagerInstance = null;
    stateData = {
        time:"",

    };
    Observers = [];
    addObserver(observer) {
        this.Observers[this.Observers.length] = observer
    }
    removeObserver(o) {
        this.Observers = this.Observers.filter((observer) => observer != o);
    }
    static getStateDataManagerInstance() {
        if (StateDataManager.StateDataManagerInstance == null) {
            StateDataManager.StateDataManagerInstance = new StateDataManager();
            this.StateDataManagerInstance.loadDataFromLocal();
        }
        return this.StateDataManagerInstance;
    }
    getStateData() {
        return this.stateData;
    }
    updateStateData(stateData) {
        this.stateData = stateData;
        console.log("time",stateData);
        this.updateDataToLocal();
    }
    
    deleteStateData() {

        this.updateDataToLocal();
    }
    updateDataToLocal() {
        // localStorage.removeItem("StateData")
        // localStorage.setItem("StateData", JSON.stringify(this.StateData))
        this.listenChange()
    }
    loadDataFromLocal() {
        // this.rand = QuestionJson[(Math.random() * QuestionJson.length) | 0];
        this.listenChange()
    }
    listenChange() {
        this.Observers.map(
            (o, index, arr) => {
                if (o.onStateDataChanged) {
                    o.onStateDataChanged(this)
                }
            }
        )
    }
}