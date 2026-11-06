function loginUser(username, password) {
    return new Promise((resolve, reject) => {
        console.log("Logging in user...")

        setTimeout(() => {
            if( username === "admin" && password === "12345" ) {
                resolve({
                    id: 1,
                    username: "admin",
                    message: "Login successful"
                })
            } else {
                reject({
                    message: "Invalid username or password"
                })
            }
        }, 3000)
    })
}

loginUser("admin", "123f45").then((user) => {
    console.log(user)
}).catch((error) => {
    console.log(error.message)
})


async function Login() {
    try {
        const user = await loginUser("admin", "12345")
        console.log(user)
    } catch (error) {
        console.log(error.message)
    } finally {
        console.log("Login attempt finished")
    }
}

Login()