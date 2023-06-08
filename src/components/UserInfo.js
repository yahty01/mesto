export default class UserInfo {

    constructor(data) {
        this._nameSelector = data.name;
        this._jobSelector = data.job;
        this._nameProfile = document.querySelector(this._nameSelector);
        this._jobProfile = document.querySelector(this._jobSelector);
    }

    getUserInfo() {
        const userInfo = {
            name: this._nameProfile.textContent,
            job: this._jobProfile.textContent
        }
        return userInfo;
    }

    setUserInfo(name, job) {
        this._nameProfile.textContent = name;
        this._jobProfile.textContent = job;
    }
}