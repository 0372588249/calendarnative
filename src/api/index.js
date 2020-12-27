import { SERVER_BASE_URL,ACCESS_TOKEN } from '../common/config'

export function Login(username, password, successAction) {
    fetch(`${SERVER_BASE_URL}/auth/login`, {
        method: "POST",
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            username,
            password,
        })
    })
        .then(respone => respone.json())
        .then(data => {
            console.log('data.access_token', data.data.access_token)
            successAction(data.data.access_token)
        })
        .catch(error => {
            console.log(error)
        });
}
export function GetListNote(successAction) {
    const Url = `${SERVER_BASE_URL}/note`;
    fetch(Url,
        {
            method: "GET",
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                'access_token': `${ACCESS_TOKEN}`
            },
        })
        .then(res => res.json())
        .then(response => {

            successAction(response)

        })
        .catch(error => {
            console.log(error)
        });
}

export function CreateNoteAPI(title, dateTime, content, successAction) {
    const objfetch = {
        note_title: title,
        date_time: dateTime,
        note_content:content,
    }
    fetch(`${SERVER_BASE_URL}/note`,
        {
            method: "POST",
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                'access_token': `${ACCESS_TOKEN}`
            },
            body: JSON.stringify(objfetch)
        })
        .then(res => res.json())
        .then(response => {
            console.log("response",response)

            successAction(response)

        })
        .catch(error => {
            console.log("error",error)
        });
}
export function EditUser(id,phone_number, card, name, email, address, dob, access_token, successAction) {
    const Url = `${SERVER_BASE_URL}/customers/${id}`;
    console.log('url', Url)
    const objfetch = {
       phone_number, card, name, email, address, dob, 
    }
    fetch(Url,
        {
            method: "PUT",
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                'access_token': `${access_token}`
            },
            body: JSON.stringify(objfetch)
        })
        .then(res => res.json())
        .then(response => {

            successAction(response)

        })
        .catch(error => {
            console.log(error)
        });
}
export function EditCustomersUpdateTime(id,update_time, access_token, successAction) {
    const Url = `${SERVER_BASE_URL}/customers/${id}`;
    console.log('url', Url)
    const objfetch = {
        update_time
    }
    fetch(Url,
        {
            method: "PUT",
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                'access_token': `${access_token}`
            },
            body: JSON.stringify(objfetch)
        })
        .then(res => res.json())
        .then(response => {

            successAction(response)

        })
        .catch(error => {
            console.log(error)
        });
}
export function DeleteUser(id,access_token,successAction) {
    const Url = `${SERVER_BASE_URL}/customers/${id}`;
    fetch(Url,
        {
            method: "DELETE",
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                'access_token': `${access_token}`
            },
        })
        .then(res => res.json())
        .then(response => {

            successAction(response)

        })
        .catch(error => {
            console.log(error)
        });
}