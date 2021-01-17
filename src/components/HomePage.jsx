import {createMuiTheme, ThemeProvider} from "@material-ui/core/styles";
import Header from "./Header";
import Form from "./Form";
import Footer from "./Footer";
import '../App.css';

const theme = createMuiTheme({
    backgroundColor: "#000000",
    typography: {
        fontFamily: [
            'Karla',
            'sans-serif',
        ].join(','),
    },});

export default function Home() {
    return (
        <div>
            <ThemeProvider theme={theme}>
                <Header />
                <div className="App">
                    <div className="box">
                        <div><Form></Form></div>
                    </div>
                    <Footer></Footer>
                </div>
            </ThemeProvider>
        </div>
    );
}

