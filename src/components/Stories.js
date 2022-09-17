import Story from './Story';

export default function Stories() {
    const storiesUsuarios = ["9gag", "meowed", "barked", "nathanwpylestrangeplanet", "wawawicomics", "respondeai", "filomoderna", "memeriagourmet"];

    return (
        <div className="stories">
            {storiesUsuarios.map((usuario) => <Story nome={usuario} />)}

            <div className="setinha">
                <ion-icon name="chevron-forward-circle"></ion-icon>
            </div>
        </div>
    );
}
