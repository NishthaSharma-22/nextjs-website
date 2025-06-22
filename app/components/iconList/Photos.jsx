import AppIconWithWindow from "../AppIconWithWindow";

export default function Photos(){
    return(
        <AppIconWithWindow
        iconSrc="/nspfp.jpeg"
        label="Photos"
        windowTitle="Photos"
        windowContent={
            <div>
                <h2>Hi!</h2>
            </div>
        }
        />
    );
}