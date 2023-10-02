const API_URL = 'http://localhost:3001/api/v1/user';

export const LoginApi = async (data) => {
    //Connexion à l'API /login
    const response = await fetch(`${API_URL}/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            email: data.email,
            password: data.password
        })
    });
    return response.json();
}

export const getUserDatas = async (token) => {
    //call api /profile en post
    const response = await fetch(`${API_URL}/profile`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    });
    return response.json();
}

export const updateUserDatas = async (token, data) => {
    //call api /profile en post
    const response = await fetch(`${API_URL}/profile`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({
            firstName: data.firstName,
            lastName: data.lastName
        })
    });
    return response.json();
}