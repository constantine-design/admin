import Toolbar from "@material-ui/core/Toolbar";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import { NavLink } from "react-router-dom";

const Navigation = () => {
    return (
        <AppBar position="static">
            <Toolbar style={{justifyContent: "center"}}>
                <Button color="inherit" component={NavLink} to="/albums">Albums</Button>
                <Button color="inherit" component={NavLink} to="/users">Users</Button>
            </Toolbar>
        </AppBar>
    );
}

export default Navigation;
