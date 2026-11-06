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