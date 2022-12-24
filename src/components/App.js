import { Container } from "react-bootstrap"
import { AuthProvider } from "../context/AuthContext"
import SignUp from "./SignUp"
import { BrowserRouter } from "react-router-dom"

function App() {
    return (
        <AuthProvider>
            <Container className="d-flex align-item-center justify-content-center" style={{ minHeight: "100vh" }}>
                <div className="w-100" style={{ maxWidth: "400px" }}>
                    <SignUp />
                </div>
            </Container>
        </AuthProvider>
    )
}

export default App
