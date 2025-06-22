import AppIconWithWindow from "../AppIconWithWindow";

export default function Photos(){
    return(
        <AppIconWithWindow
        iconSrc="/"
        label=""
        windowTitle=""
        windowContent={
            <div>
                <h2>Hi!</h2>
            </div>
        }
        />
    );
}